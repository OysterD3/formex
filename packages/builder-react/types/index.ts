import {
  INPUT_ELEMENTS,
  INPUT_GROUP_ELEMENTS,
  INPUT_GROUPS,
  INPUTS,
  STATIC_ELEMENTS,
} from '../src/constants.ts';
import { ValuesOf } from './utils.ts';

export type InputElements = ValuesOf<typeof INPUTS>;
export type InputElementProps<T extends InputElements> = Omit<
  (typeof INPUT_ELEMENTS)[T]['defaultComponentProps'],
  'children'
>;
export type InputGroupElements = ValuesOf<typeof INPUT_GROUPS>;
export type InputGroupElementProps<T extends InputGroupElements> = Omit<
  (typeof INPUT_GROUP_ELEMENTS)[T]['defaultComponentProps'],
  'children'
>;

export type StaticElements = ValuesOf<typeof STATIC_ELEMENTS>;

export type Elements = InputElements | InputGroupElements;
export type ElementProps<T extends Elements> = T extends InputElements
  ? InputElementProps<T>
  : T extends InputGroupElements
  ? InputGroupElementProps<T>
  : never;

export * from './editor.ts';
