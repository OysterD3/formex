import { forwardRef, HTMLAttributes } from 'react';
import { List } from '@mui/material';

const EditorContainer = forwardRef<
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

EditorContainer.displayName = 'EditorContainer';

export default EditorContainer;
