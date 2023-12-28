export class ValueWrapper<T> {
  constructor(
    readonly type: Symbol,
    private _value: T
  ) {}

  valueOf() {
    return this._value;
  }
}
