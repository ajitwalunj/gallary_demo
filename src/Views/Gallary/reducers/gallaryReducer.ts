import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GallaryState {
  data: any;
  category: string;
  filter: string;
}

const initialState: GallaryState = {
  data: [],
  category: '',
  filter: ''
}

export const GallarySlice = createSlice({
  name: 'gallary',
  initialState,
  reducers: {
    getImageData: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    }
  }
});

export const { getImageData, setCategory, setFilter } = GallarySlice.actions;

export default GallarySlice.reducer;