import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value:  JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    setUser: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    removeuser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.value));
    },      
    editUser: (state, action) => {
      const editedUserIndex = state.value.findIndex(
        (user) => user.id === action.payload.id
      );
      if (editedUserIndex !== -1) {
        state.value[editedUserIndex] = action.payload.updatedUser;
        localStorage.setItem("users", JSON.stringify(state.value));
      }
    },
  },
});

export const { setUser, removeuser, editUser } = userSlice.actions;
export default userSlice.reducer;
