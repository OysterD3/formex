import { INPUT_GROUPS, INPUTS } from '../elements';
import { ValuesOf } from './_common';

/**
 * Available input types
 */
export type InputElements = ValuesOf<typeof INPUTS>;

/**
 * Available input group types
 */
export type InputGroupElements = ValuesOf<typeof INPUT_GROUPS>;

/**
 * A concatenation of the above types
 */
export type Elements = InputElements | InputGroupElements;
