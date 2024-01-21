import { DRAG_AND_DROP_DATA_TYPE } from '../src/constants.ts';
import {
  AllValue,
  ElementProps,
  Elements,
  InputElements,
  InputGroupElements,
  StaticElements,
} from './index.ts';
import { EditorComponentProps } from './utils.ts';

export interface InputDragAndDropData<TElement extends Elements> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.input;
  element: InputElements;
  nanoId?: string | null;
  props: EditorComponentProps<ElementProps<TElement>>;
}

export interface InputGroupDragAndDropData<TElement extends Elements> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.group;
  element: InputGroupElements;
  nanoId?: string | null;
  props: EditorComponentProps<ElementProps<TElement>>;
}

export interface StaticDragAndDropData<
  T extends object = Record<string, unknown>,
> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.static;
  element: StaticElements;
  nanoId?: string | null;
  props: T;
}

export type DragAndDropData<TElement extends Elements = Elements> =
  | InputDragAndDropData<TElement>
  | InputGroupDragAndDropData<TElement>;

export type FormexFormValues<TElement extends Elements = Elements> = {
  items: DragAndDropData<TElement>[];
  activeIndex: number;
};
