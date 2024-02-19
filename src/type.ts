export type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type PickStringKey<T> = {
  [K in keyof T]: K extends string ? T[K] : never;
};

export type OnlyStrings<T> = Extract<T, string>;
