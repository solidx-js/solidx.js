declare module 'cypress-image-snapshot/command' {
  export function addMatchImageSnapshotCommand(maybeName?: any, maybeOptions?: any): void;
}

declare module 'cypress-image-snapshot/plugin' {
  export function addMatchImageSnapshotPlugin(on: any, config: any): void;
}

declare module '*.glb' {
  const value: any;
  export default value;
}

declare module '*.gltf' {
  const value: any;
  export default value;
}
