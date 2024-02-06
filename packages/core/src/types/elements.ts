import { INPUT_GROUPS, INPUTS } from '../elements';
import { ValuesOf } from './_common';

export type InputElements = ValuesOf<typeof INPUTS>;
export type InputGroupElements = ValuesOf<typeof INPUT_GROUPS>;

export type Elements = InputElements | InputGroupElements;
