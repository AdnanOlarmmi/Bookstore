import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'Categries',
  initialState: '',
  reducers: {
    category: () => (
      'Under construction ⚠️'),
  },
});

export const { category } = categorySlice.actions;

export default categorySlice.reducer;
