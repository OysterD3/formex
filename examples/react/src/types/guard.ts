import { DRAG_AND_DROP_DATA_TYPE } from '../constants.ts';
import {
  DragAndDropData,
  InputDragAndDropData,
  InputGroupDragAndDropData,
  StaticDragAndDropData,
} from './editor.ts';

export const isInputDragAndDropData = (
  data: DragAndDropData,
): data is InputDragAndDropData => {
  return data.type === DRAG_AND_DROP_DATA_TYPE.input;
};

export const isInputGroupDragAndDropData = (
  data: DragAndDropData,
): data is InputGroupDragAndDropData => {
  return data.type === DRAG_AND_DROP_DATA_TYPE.group;
};

export const isStaticDragAndDropData = (
  data: DragAndDropData,
): data is StaticDragAndDropData => {
  return data.type === DRAG_AND_DROP_DATA_TYPE.static;
};
