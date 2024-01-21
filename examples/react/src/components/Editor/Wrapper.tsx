import { forwardRef, HTMLAttributes } from 'react';
import { ListItem } from '@mui/material';

const EditorWrapper = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ children, ...props }, ref) => {
    return (
      <ListItem ref={ref} {...props}>
        {children}
      </ListItem>
    );
  },
);

EditorWrapper.displayName = 'EditorWrapper';

export default EditorWrapper;
