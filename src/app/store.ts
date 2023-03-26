import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import exampleReducer from '../components/ExampleComponent/ExampleComponent-slice';

export const reducer = { counter: exampleReducer };

const initialStore = {
  initString: 'Example'
};

export const setupStore = (
  preloadedState?: PreloadedState<RootState>
) =>
  configureStore({
    reducer,
    preloadedState
  });

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
