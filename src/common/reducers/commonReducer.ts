import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  loading: boolean;
  alert: any
}

const initialState: CommonState = {
  loading: false,
  alert: {
    hidden: true,
    type: '',
    message: ''
  }
}

export const CommonSlice = createSlice({
  name: 'gallary',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAlert: (state, action: PayloadAction<any>) => {
      state.alert = action.payload;
    },
    clearAlert: (state) => {
      state.alert = {
        hidden: true,
        type: 'sucess',
        message: ''
      };
    }
  }
});

export const { setAlert, clearAlert, setLoading } = CommonSlice.actions;

export default CommonSlice.reducer;