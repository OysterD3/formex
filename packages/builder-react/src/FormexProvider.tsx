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
import {
  createContext,
  ForwardedRef,
  HTMLAttributes,
  useContext,
  useState,
} from 'react';
import { nanoid } from 'nanoid';
import {
  DragAndDropData,
  ElementPickerComponent,
  ElementProps,
  Elements,
  FormexFormValues,
} from '../types';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from '../types/guard';
import { EditorComponentProps } from '../types/utils.ts';
import {
  ConfigurationPanelAttributeInputElement,
  ELEMENT_PICKER_ELEMENTS,
  ElementAttributeConfiguration,
  INPUT_ATTRIBUTES_INPUT_MAP,
  InputAttributeConfiguration,
  InputAttributeConfigurationProps,
  INPUTS_ATTRIBUTES_MAP,
} from './constants';

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

type ConfigurationPanelConfig = {
  inputAttributesEditorConfig?: InputAttributeConfiguration;
  elementAttributesConfig?: ElementAttributeConfiguration;
  elementComponents:
    | {
        [key in ConfigurationPanelAttributeInputElement]: React.ForwardRefExoticComponent<InputAttributeConfigurationProps>;
      }
    | null;
  ElementWrapper?: React.ForwardRefExoticComponent<
    HTMLAttributes<HTMLElement>
  > | null;
  ElementContainer?: React.FC<HTMLAttributes<HTMLElement>> | null;
};

type Configs<TAvailable extends Elements = Elements> = {
  configurationPanel: ConfigurationPanelConfig;
  elementPicker: {
    config:
      | TAvailable[]
      | {
          wrapper: (props: { children: React.ReactNode }) => React.ReactNode;
          elements: TAvailable[];
        }[];
    elementComponents: ElementPickerComponent<TAvailable> | null;
    ElementWrapper?: React.ForwardRefExoticComponent<
      HTMLAttributes<HTMLElement>
    > | null;
    ElementContainer?: React.FC<HTMLAttributes<HTMLElement>> | null;
  };
  editor: {
    elementComponents:
      | {
          [key in TAvailable]: (
            props: EditorComponentProps<ElementProps<key>>,
          ) => React.ReactNode;
        }
      | null;
    DragHandler: React.ForwardRefExoticComponent<
      HTMLAttributes<HTMLElement>
    > | null;
    ElementWrapper?: React.FC<HTMLAttributes<HTMLElement>> | null;
    ElementContainer?: React.FC<HTMLAttributes<HTMLElement>> | null;
  };
};

const FormexConfigurationContext = createContext<Configs>({
  configurationPanel: {
    inputAttributesEditorConfig: INPUT_ATTRIBUTES_INPUT_MAP,
    elementAttributesConfig: INPUTS_ATTRIBUTES_MAP,
    elementComponents: null,
    ElementContainer: null,
    ElementWrapper: null,
  },
  elementPicker: {
    elementComponents: null,
    config: [],
    ElementContainer: null,
    ElementWrapper: null,
  },
  editor: {
    elementComponents: null,
    DragHandler: null,
    ElementWrapper: null,
    ElementContainer: null,
  },
});
export const useFormexConfig = () => useContext(FormexConfigurationContext);

export const createFormexConfig = <TAvailable extends Elements = Elements>(
  configs: Configs<TAvailable>,
) => configs;

const FormexProvider = <TAvailable extends Elements = Elements>({
  children,
  reactHookFormProps,
  configs,
}: {
  children: React.ReactNode;
  reactHookFormProps?: Omit<UseFormProps<FormexFormValues>, 'defaultValues'>;
  configs: Configs<TAvailable>;
}) => {
  if (
    !configs.configurationPanel.elementComponents ||
    !configs.elementPicker.elementComponents ||
    !configs.editor.elementComponents
  ) {
    throw new Error('Formex: must provide element components');
  }

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
        insert(overIndex, {
          ...data,
          nanoId: activeId,
          props: ELEMENT_PICKER_ELEMENTS[data.element].defaultComponentProps,
        });
      } else if (isInputGroupDragAndDropData(data)) {
        insert(overIndex, {
          ...data,
          nanoId: activeId,
          props: ELEMENT_PICKER_ELEMENTS[data.element].defaultComponentProps,
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
        {/*@ts-expect-error Configs can't accept generic*/}
        <FormexConfigurationContext.Provider value={configs}>
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
        </FormexConfigurationContext.Provider>
      </FormexEditorContext.Provider>
    </FormexFieldsContext.Provider>
  );
};

export { FormexProvider, useFormexEditor, useFormexFields };
