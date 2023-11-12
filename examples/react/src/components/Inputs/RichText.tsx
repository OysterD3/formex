import EditorJS, { API } from '@editorjs/editorjs';
import { forwardRef, memo, useEffect, useId, useRef } from 'react';
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
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_RICH_TEXT_PROPS = {
  label: 'Rich text',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  readOnly: false,
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
    disabled,
    readOnly,
  } = mergeProps(DEFAULT_RICH_TEXT_PROPS, props);

  const editorRef = useRef<EditorJS>();
  const _id = useId();
  const inputId = id || _id;

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: inputId,
        placeholder,
        readOnly,
        minHeight: 100,
        async onChange(api: API) {
          try {
            const output = await api.saver.save();
            onChange?.(JSON.stringify(output));
          } catch (error) {
            console.error('Saving failed: ', error);
          }
        },
      });
      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!editorRef.current) return;
    if (value) {
      editorRef.current.isReady.then(() => {
        editorRef.current!.render(JSON.parse(value));
      });
    } else if (defaultValue) {
      editorRef.current.isReady.then(() => {
        editorRef.current!.render(JSON.parse(defaultValue));
      });
    }
  }, [editorRef.current]);

  return (
    <InputLayout label={label} id={inputId} helperText={helperText}>
      <div className={bem('editor', { disabled })} id={inputId} ref={ref} />
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

export default memo(RichText);
