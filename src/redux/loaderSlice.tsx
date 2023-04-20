import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loaderInitialState = {
  status: false
};
const loaderSlice = createSlice({
  name: 'loader',
  initialState: loaderInitialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    }
  }
});

export const { setIsLoading } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
