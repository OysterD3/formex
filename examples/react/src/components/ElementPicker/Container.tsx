import { forwardRef, HTMLAttributes } from 'react';
import { List } from '@mui/material';

const ElementPickerContainer = forwardRef<
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

ElementPickerContainer.displayName = 'ElementPickerContainer';

export default ElementPickerContainer;
