import EditorJS, { API } from '@editorjs/editorjs';
import { forwardRef, useEffect, useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';
import { mergeProps } from '../../utils/props.ts';

const bem = createBEM('input-rich-text');

export interface RichTextProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export const DEFAULT_RICH_TEXT_PROPS = {
  label: 'Rich text',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  value: undefined,
  defaultValue: undefined,
};

const RichText = forwardRef<HTMLDivElement, RichTextProps>((props, ref) => {
  const {
    label,
    id,
    name,
    helperText,
    placeholder,
    value,
    onChange,
    defaultValue,
  } = mergeProps(DEFAULT_RICH_TEXT_PROPS, props);

  const _id = useId();
  const inputId = id || _id;

  const editor = new EditorJS({
    holder: inputId,
    placeholder,
    async onChange(api: API) {
      try {
        const output = await api.saver.save();
        onChange?.(JSON.stringify(output));
      } catch (error) {
        console.error('Saving failed: ', error);
      }
    },
  });

  useEffect(() => {
    if (value) {
      editor.isReady.then(() => {
        editor.render(JSON.parse(value));
      });
    } else if (defaultValue) {
      editor.isReady.then(() => {
        editor.render(JSON.parse(defaultValue));
      });
    }
  }, []);

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <div className={bem('editor')} id={inputId} ref={ref} />
      <input
        aria-hidden={true}
        name={name || inputId}
        className={bem('input')}
        tabIndex={-1}
      />
    </InputLayout>
  );
});

RichText.displayName = 'RichText';

export default RichText;
