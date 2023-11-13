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
import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { DragAndDropData, FormexFormValues } from '../types';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from '../types/guard.ts';
import { INPUT_ELEMENTS, INPUT_GROUP_ELEMENTS, INPUTS } from '../constants.ts';

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

export const useFormexFields = () => useContext(FormexFieldsContext);
export const useFormexEditor = () => useContext(FormexEditorContext);

const FormexProvider = ({
  children,
  reactHookFormProps,
}: {
  children: React.ReactNode;
  reactHookFormProps?: Omit<UseFormProps<FormexFormValues>, 'defaultValues'>;
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
        <FormProvider {...form}>
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={pointerWithin}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
          >
            {children}
          </DndContext>
        </FormProvider>
      </FormexEditorContext.Provider>
    </FormexFieldsContext.Provider>
  );
};

export default FormexProvider;
