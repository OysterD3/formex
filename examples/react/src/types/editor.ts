import { DRAG_AND_DROP_DATA_TYPE } from '../constants.ts';
import { InputElements, InputGroupElements, StaticElements } from './index.ts';

export interface InputDragAndDropData<
  T extends object = Record<string, unknown>,
> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.input;
  element: InputElements;
  props: T;
}

export interface InputGroupDragAndDropData<
  T extends object = Record<string, unknown>,
> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.group;
  element: InputGroupElements;
  props: T;
}

export interface StaticDragAndDropData<
  T extends object = Record<string, unknown>,
> {
  type: typeof DRAG_AND_DROP_DATA_TYPE.static;
  element: StaticElements;
  props: T;
}

export type DragAndDropData<T extends object = Record<string, unknown>> =
  | InputDragAndDropData<T>
  | InputGroupDragAndDropData<T>
  | StaticDragAndDropData<T>;

export type FormexFormValues<T extends object = Record<string, unknown>> = {
  items: DragAndDropData<T>[];
  activeIndex: number;
};
