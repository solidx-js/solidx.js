declare module 'cypress-image-snapshot/command' {
  export function addMatchImageSnapshotCommand(maybeName?: any, maybeOptions?: any): void;
}

declare module 'cypress-image-snapshot/plugin' {
  export function addMatchImageSnapshotPlugin(on: any, config: any): void;
}
