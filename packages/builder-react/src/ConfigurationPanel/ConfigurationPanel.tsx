import { useFormContext, useWatch } from 'react-hook-form';
import React from 'react';
import { FormexFormValues } from '../../types';
import { getElementAttribute } from '../utils/dom';
import { useFormexConfig, useFormexFields } from '../FormexProvider';
import InputAttributeConfigureInput from './InputAttributeConfigureInput.tsx';

const ConfigurationPanel = ({
  onRemove,
}: {
  onRemove?: (index: number) => void;
}) => {
  const { control } = useFormContext<FormexFormValues>();
  const [activeIndex] = useWatch({
    name: ['activeIndex'],
    control,
  });
  const { remove, fields } = useFormexFields();
  const {
    configurationPanel: { ElementContainer },
  } = useFormexConfig();

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    const data = getElementAttribute(e, 'data-delete-index');
    if (data !== null) {
      remove(parseInt(data));
      onRemove?.(parseInt(data));
    }
  };

  const Container = ElementContainer || 'div';

  return (
    <Container onClick={handleDelete}>
      {fields.map((item, index) => {
        if (activeIndex !== index) return null;

        return (
          <InputAttributeConfigureInput key={index} element={item.element} />
        );
      })}
    </Container>
  );
};

export default ConfigurationPanel;
