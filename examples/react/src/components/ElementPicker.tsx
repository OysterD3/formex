import { Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { INPUTS, type Elements } from '@formex/builder-react';
import {
  Pin,
  type SvgIconComponent,
  TextFields,
  ToggleOn,
} from '@mui/icons-material';

const ELEMENTS: Partial<
  Record<Elements, { label: string; icon: SvgIconComponent }>
> = {
  [INPUTS.singleLineText]: {
    label: 'Single Line Text',
    icon: TextFields,
  },
  [INPUTS.switch]: {
    label: 'Switch',
    icon: ToggleOn,
  },
  [INPUTS.number]: {
    label: 'Number',
    icon: Pin,
  },
} as const;

const ElementPicker = forwardRef<HTMLParagraphElement, { element: Elements }>(
  ({ element }, ref) => {
    if (!ELEMENTS[element]) {
      return <Typography ref={ref}>{element}</Typography>;
    }

    const { icon: Icon, label } = ELEMENTS[element]!;

    return (
      <Stack
        ref={ref}
        direction="row"
        alignItems="center"
        spacing={2}
        px={2}
        py={2}
        sx={{ cursor: 'grab', '&:hover': { backgroundColor: 'grey.800' } }}
      >
        <Icon />
        <Typography>{label}</Typography>
      </Stack>
    );
  },
);

ElementPicker.displayName = 'ElementPicker';

export default ElementPicker;
