import { Elements } from '@formex/core';

export type ElementPickerComponent<TAvailable extends Elements = Elements> = {
  [key in TAvailable]: () => React.ReactNode;
};

export * from './formex.ts';
