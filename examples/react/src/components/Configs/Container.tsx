import { forwardRef, HTMLAttributes } from 'react';
import { List } from '@mui/material';

const ConfigsContainer = forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>(({ children, ...props }, ref) => {
  return (
    <List
      sx={{
        height: '100%',
      }}
      ref={ref}
      {...props}
    >
      {children}
    </List>
  );
});

ConfigsContainer.displayName = 'ConfigsContainer';

export default ConfigsContainer;
