type Modifier =
  | (string | false | undefined)[]
  | Record<string, boolean | undefined>;

export const createBEM = (namespace: string) => {
  const NAME = `formex-${namespace}`;

  return (elOrMod?: string | Modifier, mod?: Modifier) => {
    if (!elOrMod) return NAME;
    if (typeof elOrMod === 'string' && !mod) return `${NAME}__${elOrMod}`;
    if (typeof elOrMod === 'string' && Array.isArray(mod) && mod.length > 0) {
      return (
        `${NAME}__${elOrMod}` +
        mod.reduce((acc, curr) => {
          if (curr) {
            acc += ` ${NAME}__${elOrMod}--${curr}`;
          }
          return acc;
        }, '')
      );
    }
    if (
      typeof elOrMod === 'string' &&
      typeof mod === 'object' &&
      !Array.isArray(mod)
    ) {
      return (
        `${NAME}__${elOrMod}` +
        Object.keys(mod).reduce((acc, key) => {
          if (mod[key]) {
            acc += ` ${NAME}__${elOrMod}--${key}`;
          }
          return acc;
        }, '')
      );
    }
    if (Array.isArray(elOrMod) && elOrMod.length > 0) {
      return (
        NAME +
        elOrMod.reduce((acc, curr) => {
          if (curr) {
            acc += ` ${NAME}--${curr}`;
          }
          return acc;
        }, '')
      );
    }
    if (typeof elOrMod === 'object' && !Array.isArray(elOrMod)) {
      return (
        NAME +
        Object.keys(elOrMod).reduce((acc, key) => {
          if (elOrMod[key]) {
            acc += ` ${NAME}--${key}`;
          }
          return acc;
        }, '')
      );
    }
  };
};
