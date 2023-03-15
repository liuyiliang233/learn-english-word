import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core';
import { app } from './app';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
}
export const rootModels: RootModel = { app };

export const store = init({
  models: rootModels,
});

export type Store = typeof store;
export type IDispatch = RematchDispatch<RootModel>;
export type IRootState = RematchRootState<RootModel>;

export const { dispatch } = store;
