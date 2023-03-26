import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increaseByOne(state) {
      state.value++;
    },
    increaseByMany: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByOne(state) {
      state.value--;
    }
  }
});

export const { increaseByOne, increaseByMany, decrementByOne } =
  exampleSlice.actions;

export default exampleSlice.reducer;
