import { DRAG_AND_DROP_DATA_TYPE } from '../constants.ts';
import { InputElements, InputGroupElements, StaticElements } from './index.ts';

export interface InputDragAndDropData {
  type: typeof DRAG_AND_DROP_DATA_TYPE.input;
  element: InputElements;
}

export interface InputGroupDragAndDropData {
  type: typeof DRAG_AND_DROP_DATA_TYPE.group;
  element: InputGroupElements;
}

export interface StaticDragAndDropData {
  type: typeof DRAG_AND_DROP_DATA_TYPE.static;
  element: StaticElements;
}

export type DragAndDropData =
  | InputDragAndDropData
  | InputGroupDragAndDropData
  | StaticDragAndDropData;

export type EditorActiveItem = DragAndDropData & {
  id: string;
};
