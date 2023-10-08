export type Maybe<T> = T | null | undefined;

export type NonEmptyArray<T> = [T, ...Array<T>];

export type GetParametersAndReturnType<
  T extends (...args: never) => unknown = () => void,
> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

export type ValuesOf<T extends Record<string, unknown>> = T[keyof T];
