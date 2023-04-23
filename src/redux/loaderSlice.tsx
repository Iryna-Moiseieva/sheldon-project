import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loaderInitialState = {
  loader: false
};
const loaderSlice = createSlice({
  name: 'loader',
  initialState: loaderInitialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.loader = action.payload;
    }
  }
});

export const { setIsLoading } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
