export const getElementAttribute = <T extends HTMLElement>(
  e: React.MouseEvent<T>,
  attr: string,
): string | null => {
  const { currentTarget = document.body } = e;
  let { target } = e as unknown as { target: T | ParentNode | null };
  while (target != currentTarget) {
    if (target && 'hasAttribute' in target && target.hasAttribute(attr))
      return target.getAttribute(attr);
    if (target && target.parentNode) target = target.parentNode;
    else break;
  }
  return null;
};
