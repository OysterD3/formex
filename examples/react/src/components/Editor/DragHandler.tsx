import { DragIndicator } from '@mui/icons-material';
import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '@mui/material';

const DragHandler = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <DragIndicator component="svg" />
      </Box>
    );
  },
);

DragHandler.displayName = 'DragHandler';

export default DragHandler;
