import type { Elements, InputElements, InputGroupElements } from './elements';
import type { ElementProps, Option, EditorComponentProps } from './props';
import { DRAG_AND_DROP_DATA_TYPE } from '../elements';

/**
 * Configuration for `<ElementPicker />`
 */
export type ElementPickerConfig<TValue extends Elements> = {
  label: string;
  icon: string;
  description: string;
  value: TValue;
  defaultComponentProps: EditorComponentProps<ElementProps<TValue>>;
};

export type CommonInputAttributeConfigurationProps = {
  label: string;
  placeholder: string;
  tooltip?: string;
  description?: string;
  options?: readonly Option[];
};

/**
 * Input value that will be used to render the input in the `<Editor />` as well as returning in `onSave`
 */
export interface InputDragAndDropData<TElement extends Elements> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.input;
  element: InputElements;
  nanoId?: string | null;
  props: EditorComponentProps<ElementProps<TElement>>;
}

/**
 * Input group value that will be used to render the input in the `<Editor />` as well as returning in `onSave`
 */
export interface InputGroupDragAndDropData<TElement extends Elements> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.group;
  element: InputGroupElements;
  nanoId?: string | null;
  props: EditorComponentProps<ElementProps<TElement>>;
}

/**
 * Concatenation of `InputDragAndDropData` and `InputGroupDragAndDropData`
 */
export type DragAndDropData<TElement extends Elements = Elements> =
  | InputDragAndDropData<TElement>
  | InputGroupDragAndDropData<TElement>;

/**
 * Formex form values
 */
export type FormexFormValues<TElement extends Elements = Elements> = {
  items: DragAndDropData<TElement>[];
  activeIndex: number;
};
