import EditorJS, { API } from '@editorjs/editorjs';
import { useEffect, useId } from 'react';
import InputLayout from '../InputLayout';

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
      <div
        className="w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        id={inputId}
      />
      <input
        aria-hidden={true}
        name={name || inputId}
        className="sr-only"
        tabIndex={-1}
      />
    </InputLayout>
  );
};

export default RichText;
