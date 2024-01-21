import { forwardRef } from 'react';
import { EditorComponentProps, AddressProps } from '@formex/builder-react';
import { TextField } from '@mui/material';

const Address = forwardRef<
  HTMLInputElement,
  EditorComponentProps<AddressProps>
>((props, ref) => {
  return <TextField {...props} ref={ref} />;
});

Address.displayName = 'Address';

export default Address;
