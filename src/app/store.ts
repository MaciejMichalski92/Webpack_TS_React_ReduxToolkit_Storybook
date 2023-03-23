import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../components/ExampleComponent/ExampleComponent-slice';

const reducer = { counter: exampleReducer };

const initialStore = {
  initString: 'Example'
};

export const store = configureStore({ reducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
