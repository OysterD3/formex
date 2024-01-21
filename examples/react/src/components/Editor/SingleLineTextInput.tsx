import {
  SingleLineTextProps,
  EditorComponentProps,
} from '@formex/builder-react';
import { TextField } from '@mui/material';

const SingleLineTextInput = ({
  label,
  defaultValue,
  description,
  placeholder,
  id,
  required,
  autoFocus,
  name,
  readOnly,
  suffix,
  prefix,
}: EditorComponentProps<SingleLineTextProps>) => {
  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      inputProps={{
        id,
        name,
      }}
      placeholder={placeholder}
      disabled
      aria-readonly={readOnly}
      required={required}
      helperText={description}
      autoFocus={autoFocus}
      InputProps={{
        startAdornment: prefix,
        endAdornment: suffix,
      }}
    />
  );
};

export default SingleLineTextInput;
