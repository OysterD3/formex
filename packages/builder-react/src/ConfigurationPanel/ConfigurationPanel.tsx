import { useFormContext, useWatch } from 'react-hook-form';
import { type HTMLAttributes } from 'react';
import type { FormexFormValues } from '@formex/core';
import { getElementAttribute } from '../utils/dom';
import { useFormexFields } from '../FormexProvider';
import InputAttributeConfigureInput from './InputAttributeConfigureInput';

const ConfigurationPanel = ({
  onRemove,
  container,
  wrapper,
}: {
  onRemove?: (index: number) => void;
  container?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
  wrapper?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
}) => {
  const { control } = useFormContext<FormexFormValues>();
  const [activeIndex] = useWatch({
    name: ['activeIndex'],
    control,
  });
  const { remove, fields } = useFormexFields();

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    const data = getElementAttribute(e, 'data-delete-index');
    if (data !== null) {
      remove(parseInt(data));
      onRemove?.(parseInt(data));
    }
  };

  const Container = container || 'div';

  return (
    <Container onClick={handleDelete}>
      {fields.map((item, index) => {
        if (activeIndex !== index) return null;

        return (
          <InputAttributeConfigureInput
            key={index}
            element={item.element}
            wrapper={wrapper}
          />
        );
      })}
    </Container>
  );
};

export default ConfigurationPanel;
