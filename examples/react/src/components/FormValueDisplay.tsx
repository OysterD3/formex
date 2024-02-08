import { useFormContext, useWatch } from 'react-hook-form';
import { Typography } from '@mui/material';

const FormValueDisplay = () => {
  const { control } = useFormContext();
  const values = useWatch({ control });

  return (
    <Typography component="pre" variant="body1" whiteSpace="pre-wrap">
      {JSON.stringify(values, null, 2)}
    </Typography>
  );
};

export default FormValueDisplay;
