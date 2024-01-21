import { forwardRef } from 'react';
import type { MultiLineTextProps } from '@formex/builder-react';
import { FormControl, TextField } from '@mui/material';

const MultilineText = forwardRef<HTMLInputElement, MultiLineTextProps>(
  (props, ref) => (
    <FormControl>
      <TextField {...props} ref={ref} multiline minRows={5} />
    </FormControl>
  ),
);

MultilineText.displayName = 'MultilineText';

export default MultilineText;
