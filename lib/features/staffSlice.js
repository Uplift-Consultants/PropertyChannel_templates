import { createSlice } from '@reduxjs/toolkit';

const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setStaff: (state, action) => {
      // Immer (inside Redux Toolkit) lets you "mutate" this safely
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearStaff: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setStaff, clearStaff } = staffSlice.actions; 
export default staffSlice.reducer;