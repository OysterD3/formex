import { forwardRef, HTMLAttributes } from 'react';
import { ListItem } from '@mui/material';

const ElementPickerWrapper = forwardRef<
  HTMLLIElement,
  HTMLAttributes<HTMLLIElement>
>(({ children, ...props }, ref) => {
  return (
    <ListItem ref={ref} {...props}>
      {children}
    </ListItem>
  );
});

ElementPickerWrapper.displayName = 'ElementPickerWrapper';

export default ElementPickerWrapper;
