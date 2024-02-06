import {
  FormProvider,
  type SubmitHandler,
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
} from 'react-hook-form';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  pointerWithin,
} from '@dnd-kit/core';
import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import type { Configs } from './types';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from './types/guard';
import type {
  EditorComponentProps,
  ElementProps,
  Elements,
  DragAndDropData,
  FormexFormValues,
} from '@formex/core';
import { ELEMENT_PICKER_ELEMENTS } from '@formex/core';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

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

const FormexConfigurationContext = createContext<Configs | null>(null);

const useFormexFields = () => useContext(FormexFieldsContext);

export const useFormexConfig = <
  TElements extends Elements = Elements,
>(): Configs<TElements> =>
  useContext(FormexConfigurationContext) as unknown as Configs<TElements>;
const FormexProvider = <TElements extends Elements = Elements>({
  children,
  configs,
  zodSchema,
  defaultValues,
  onSave,
}: {
  children: React.ReactNode;
  onSave?: SubmitHandler<FormexFormValues<TElements>>;
  configs: Configs<TElements>;
  zodSchema?: ZodSchema;
  defaultValues?: FormexFormValues<TElements>;
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const form = useForm<FormexFormValues<TElements>>({
    defaultValues: defaultValues
      ? (defaultValues as FormexFormValues<TElements>)
      : undefined,
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });

  const fields = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const { move, insert } = fields;

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
      const data = activeEvent.data.current as DragAndDropData<TElements>;
      if (isInputDragAndDropData(data)) {
        insert(overIndex, {
          ...data,
          nanoId: activeId,
          props: ELEMENT_PICKER_ELEMENTS[data.element]
            .defaultComponentProps as EditorComponentProps<
            ElementProps<TElements>
          >,
        });
      } else if (isInputGroupDragAndDropData(data)) {
        insert(overIndex, {
          ...data,
          nanoId: activeId,
          props: ELEMENT_PICKER_ELEMENTS[data.element]
            .defaultComponentProps as EditorComponentProps<
            ElementProps<TElements>
          >,
        });
      }
    }
  };

  const handleDragStart = () => {
    setActiveId(nanoid());
  };

  const handleSubmit: SubmitHandler<FormexFormValues<TElements>> = (
    onValid,
    onInvalid,
  ) => {
    onSave?.(onValid, onInvalid);
  };

  return (
    <FormexFieldsContext.Provider value={{ ...fields }}>
      {/*@ts-expect-error Configs can't accept generic*/}
      <FormexConfigurationContext.Provider value={configs}>
        <FormProvider {...form}>
          <DndContext
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            collisionDetection={pointerWithin}
          >
            <form onSubmit={form.handleSubmit(handleSubmit)}>{children}</form>
          </DndContext>
        </FormProvider>
      </FormexConfigurationContext.Provider>
    </FormexFieldsContext.Provider>
  );
};

export { FormexProvider, useFormexFields };
