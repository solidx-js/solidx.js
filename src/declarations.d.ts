import { IDataType, IDataTypeMap } from './util/Schema';
import type { XRElement } from './core/XRElement';

// 扩展 HTMLElementEventMap
declare global {
  interface HTMLElementEventMap {
    pick: any;
  }
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
    }
  }
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.env' {
  const value: any;
  export default value;
}

declare module '*.dds' {
  const value: any;
  export default value;
}
