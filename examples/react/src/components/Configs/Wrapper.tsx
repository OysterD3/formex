import { forwardRef, HTMLAttributes } from 'react';
import { ListItem } from '@mui/material';

const ConfigsWrapper = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ children, ...props }, ref) => {
    return (
      <ListItem ref={ref} {...props}>
        {children}
      </ListItem>
    );
  },
);

ConfigsWrapper.displayName = 'ConfigsWrapper';

export default ConfigsWrapper;
