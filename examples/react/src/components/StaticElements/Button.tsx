import { forwardRef } from 'react';
import { createBEM } from '../../utils/bem.ts';
import { mergeProps } from '../../utils/props.ts';

const bem = createBEM('button');

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl';
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const DEFAULT_BUTTON_PROPS = {
  size: 'default',
  variant: 'contained',
  startIcon: undefined,
  endIcon: undefined,
  fullWidth: false,
  color: 'primary',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    variant,
    startIcon,
    endIcon,
    children,
    fullWidth,
    color,
    ...buttonProps
  } = mergeProps(DEFAULT_BUTTON_PROPS, props);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={bem([
        `color-${color}`,
        `size-${size}`,
        `variant-${variant}`,
        fullWidth && 'full-width',
      ])}
    >
      {startIcon && <span className={bem('start-icon')}>{startIcon}</span>}
      {children}
      {endIcon && <span className={bem('end-icon')}>{endIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
