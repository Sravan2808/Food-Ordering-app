import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {

      // Vanialla(older) Redux => DON'T MUTATE STATE,returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      //return newState;

      // Redux Toolkit
      // We HAVE to mutate the state
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      //no need of action
      state.items.pop();
    },
    clearCart: (state) => {
      //no need of action
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
