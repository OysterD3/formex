export type ValuesOf<T extends object> = T[keyof T];
export type EditorComponentProps<T extends object> = Omit<
  T,
  'value' | 'onChange'
>;
