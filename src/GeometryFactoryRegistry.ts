import { DefaultBizLogger } from './BizLogger';
import { Geometry } from './core/Geometry';
import { StringKeys } from './type';

export type IGeometryFactory<T> = (opt: T) => Geometry;

// 用于 GeometryFactory 的声明合并
export interface IGeometryFactoryParameters {
  [key: string]: any;
}
export type IGeometryFactoryNames = StringKeys<IGeometryFactoryParameters>;

export class GeometryFactoryRegistry {
  static Instance = new GeometryFactoryRegistry();

  private _factories: any = {};

  register<K extends IGeometryFactoryNames>(name: K, factory: IGeometryFactory<IGeometryFactoryParameters[K]>) {
    if (this._factories[name]) throw new Error(`GeometryFactory "${name}" already registered`);

    DefaultBizLogger.debug('register GeometryFactory: %s', name);
    this._factories[name] = factory;
  }

  get<K extends IGeometryFactoryNames>(name: K): IGeometryFactory<K> {
    if (!this._factories[name]) throw new Error(`GeometryFactory "${name}" not registered`);
    return this._factories[name];
  }

  keys(): IGeometryFactoryNames[] {
    return Object.keys(this._factories).sort((a, b) => a.localeCompare(b));
  }
}
