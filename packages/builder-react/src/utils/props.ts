export const mergeProps = <T extends object, U extends object>(
  defaultValues: T,
  props: U,
): T & U => {
  return { ...defaultValues, ...props };
};
