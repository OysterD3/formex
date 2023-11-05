import EditorJS, { API } from '@editorjs/editorjs';
import { useEffect, useId } from 'react';
import InputLayout from '../InputLayout';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input-rich-text');

export interface RichTextProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const RichText = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  value,
  defaultValue,
}: RichTextProps) => {
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
    <InputLayout label={label} id={inputId}>
      <div className={bem('editor')} id={inputId} />
      <input
        aria-hidden={true}
        name={name || inputId}
        className={bem('input')}
        tabIndex={-1}
      />
    </InputLayout>
  );
};

export default RichText;