import { forwardRef } from 'react';
import { createBEM } from '../../utils/bem.ts';
import { mergeProps } from '../../utils/props.ts';

const bem = createBEM('icon-button');

export interface IconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl';
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const DEFAULT_ICON_BUTTON_PROPS = {
  size: 'default',
  variant: 'contained',
  color: 'primary',
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { variant, color, size, children, ...buttonProps } = mergeProps(
      DEFAULT_ICON_BUTTON_PROPS,
      props,
    );

    return (
      <button
        {...buttonProps}
        ref={ref}
        className={bem([
          `color-${color}`,
          `size-${size}`,
          `variant-${variant}`,
        ])}
      >
        <span className={bem('icon')}>{children}</span>
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
