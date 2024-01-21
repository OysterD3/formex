import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { isValidElement, useMemo } from 'react';
import { Elements, FormexFormValues } from '../../types';
import { useFormexConfig } from '../FormexProvider.tsx';
import { InputAttribute } from '../constants.ts';

const InputAttributeConfigureInput = <TElement extends Elements>({
  element,
}: {
  element: TElement;
}) => {
  const { control } = useFormContext<FormexFormValues<TElement>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

  const {
    configurationPanel: {
      inputAttributesEditorConfig,
      elementAttributesConfig,
      elementComponents,
    },
  } = useFormexConfig();

  const {
    configurationPanel: { ElementWrapper },
  } = useFormexConfig();

  const fields = useMemo(() => {
    return elementAttributesConfig![element].map((v) => ({
      ...inputAttributesEditorConfig![v as InputAttribute],
      key: v as InputAttribute,
      component:
        elementComponents![
          inputAttributesEditorConfig![v as InputAttribute].inputType
        ],
    }));
  }, [
    element,
    elementAttributesConfig,
    elementComponents,
    inputAttributesEditorConfig,
  ]);

  const Wrapper = ElementWrapper || 'div';

  return (
    <>
      {fields.map((f) => {
        const InputComponent = f.component;

        const { inputType: _it, component: _c, key: _k, ...props } = f;

        return (
          <Wrapper key={f.key}>
            <Controller
              key={f.key}
              render={({ field, fieldState }) => (
                <InputComponent {...field} {...fieldState} {...props} />
              )}
              // @ts-expect-error TODO: fix this
              name={`items.${index}.props.${f.key}`}
              control={control}
            />
          </Wrapper>
        );
      })}
    </>
  );
};

export default InputAttributeConfigureInput;
