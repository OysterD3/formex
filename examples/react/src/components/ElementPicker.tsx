import { Typography } from '@mui/material';
import { forwardRef } from 'react';

const ElementPicker = forwardRef<HTMLParagraphElement, { element: string }>(
  ({ element }, ref) => {
    return <Typography ref={ref}>{element}</Typography>;
  },
);

ElementPicker.displayName = 'ElementPicker';

export default ElementPicker;
