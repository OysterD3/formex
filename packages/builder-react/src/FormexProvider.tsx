import {
  FormProvider,
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  pointerWithin,
} from '@dnd-kit/core';
import { createContext, ForwardedRef, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  DragAndDropData,
  ElementProps,
  Elements,
  FormexFormValues,
  InputElementProps,
  InputElements,
  InputGroupElementProps,
  InputGroupElements,
} from '../types';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from '../types/guard';
import {
  INPUT_ELEMENTS,
  INPUT_GROUP_ELEMENTS,
  INPUT_GROUPS,
  INPUTS,
  MISCELLANEOUS,
} from './constants';
import {
  Checkbox,
  CheckboxGroup,
  DatePicker,
  FileUpload,
  RadioGroup,
  RichText,
  Select,
  Switch,
  TextArea,
  TextField,
  TimePicker,
  Option,
} from './Inputs';
import RadioButton from './Inputs/Radio/RadioButton.tsx';

const FormexFieldsContext = createContext<
  UseFieldArrayReturn<FormexFormValues, 'items', 'id'>
>({
  fields: [],
  append: () => {},
  prepend: () => {},
  remove: () => {},
  insert: () => {},
  swap: () => {},
  move: () => {},
  update: () => {},
  replace: () => {},
});

const FormexEditorContext = createContext<{
  onSave: (
    cb: (
      values: FormexFormValues['items'],
      errors: React.BaseSyntheticEvent<object> | undefined,
    ) => void,
  ) => void;
}>({
  onSave: async (cb) => {
    return cb([], undefined);
  },
});

const useFormexFields = () => useContext(FormexFieldsContext);
const useFormexEditor = () => useContext(FormexEditorContext);

const DEFAULT_CONFIGS: Configs = {
  [MISCELLANEOUS.selectOption]: Option,
  [INPUTS.text]: TextField,
  [INPUTS.textArea]: TextArea,
  [INPUTS.number]: TextField,
  [INPUTS.select]: Select,
  [INPUTS.checkbox]: Checkbox,
  [INPUTS.radio]: RadioButton,
  [INPUTS.date]: DatePicker,
  [INPUTS.time]: TimePicker,
  [INPUTS.file]: FileUpload,
  [INPUTS.richText]: RichText,
  [INPUTS.switch]: Switch,
  [INPUT_GROUPS.checkbox]: CheckboxGroup,
  [INPUT_GROUPS.radio]: RadioGroup,
};

type Configs = {
  [key in Elements]:
    | ((
        props: ElementProps<key> & { ref?: ForwardedRef<HTMLElement> },
      ) => React.ReactNode)
    | React.ForwardRefExoticComponent<ElementProps<key>>;
};

const FormexComponentsContext = createContext<Configs>(DEFAULT_CONFIGS);
export const useFormexComponents = () => useContext(FormexComponentsContext);

const FormexProvider = ({
  children,
  reactHookFormProps,
  configs,
}: {
  children: React.ReactNode;
  reactHookFormProps?: Omit<UseFormProps<FormexFormValues>, 'defaultValues'>;
  configs?: Configs;
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const form = useForm<FormexFormValues>({
    ...reactHookFormProps,
    defaultValues: {
      items: [],
    },
  });

  const fields = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const { insert, move } = fields;

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const activeEvent = e.active;
    const overEvent = e.over;
    if (!overEvent) return;
    const overIndex = fields.fields.findIndex(
      (field) => field.id === overEvent.id,
    );
    const activeIndex = fields.fields.findIndex(
      (field) => field.id === activeEvent.id,
    );
    if (activeIndex === -1 || overIndex === -1) return;
    move(activeIndex, overIndex);
    if (form.getValues('activeIndex') !== overIndex) {
      form.setValue('activeIndex', overIndex);
    }
  };

  const handleDragOver = (e: DragOverEvent) => {
    const overEvent = e.over;
    const activeEvent = e.active;
    if (!overEvent) return;
    const overIndex = fields.fields.findIndex(
      (field) => field.id === overEvent.id,
    );
    const activeIndex = fields.fields.findIndex(
      (field) => field.nanoId && field.nanoId === activeId,
    );
    if (activeIndex !== -1) {
      move(overIndex, activeIndex);
    } else if (
      activeEvent.data.current &&
      'type' in activeEvent.data.current &&
      'element' in activeEvent.data.current
    ) {
      const data = activeEvent.data.current as DragAndDropData;
      if (isInputDragAndDropData(data)) {
        if (activeEvent.data.current.element === INPUTS.select) {
          insert(overIndex, {
            ...data,
            nanoId: activeId,
            props: {
              ...INPUT_ELEMENTS[data.element].defaultComponentProps,
              options: [{ label: 'Option 1', value: 'option-1' }],
            },
          });
        } else {
          insert(overIndex, {
            ...data,
            nanoId: activeId,
            props: INPUT_ELEMENTS[data.element].defaultComponentProps,
          });
        }
      } else if (isInputGroupDragAndDropData(data)) {
        insert(overIndex, {
          ...data,
          nanoId: activeId,
          props: {
            ...INPUT_GROUP_ELEMENTS[data.element].defaultComponentProps,
            options: [{ label: 'Option 1', value: 'option-1' }],
          },
        });
      }
    }
  };

  const handleDragStart = () => {
    setActiveId(nanoid());
  };

  const handleSave = (
    cb: (
      values: FormexFormValues['items'],
      errors: React.BaseSyntheticEvent<object> | undefined,
    ) => void,
  ) => form.handleSubmit((values, errors) => cb(values.items, errors))();

  return (
    <FormexFieldsContext.Provider value={{ ...fields }}>
      <FormexEditorContext.Provider value={{ onSave: handleSave }}>
        <FormexComponentsContext.Provider
          value={{
            ...DEFAULT_CONFIGS,
            ...configs,
          }}
        >
          <FormProvider {...form}>
            <DndContext
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDragStart={handleDragStart}
              collisionDetection={pointerWithin}
            >
              {children}
            </DndContext>
          </FormProvider>
        </FormexComponentsContext.Provider>
      </FormexEditorContext.Provider>
    </FormexFieldsContext.Provider>
  );
};

export { FormexProvider, useFormexEditor, useFormexFields };
