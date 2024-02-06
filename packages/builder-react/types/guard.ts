import { DRAG_AND_DROP_DATA_TYPE } from '../src/constants.ts';
import {
  DragAndDropData,
  InputDragAndDropData,
  InputGroupDragAndDropData,
} from './editor.ts';
import { Elements } from './index.ts';

export const isInputDragAndDropData = <TElement extends Elements = Elements>(
  data: DragAndDropData<TElement>,
): data is InputDragAndDropData<TElement> => {
  return data.type === DRAG_AND_DROP_DATA_TYPE.input;
};

export const isInputGroupDragAndDropData = <
  TElement extends Elements = Elements,
>(
  data: DragAndDropData<TElement>,
): data is InputGroupDragAndDropData<TElement> => {
  return data.type === DRAG_AND_DROP_DATA_TYPE.group;
};
