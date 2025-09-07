import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    card: [],
  },
  reducers: {
    addCar: (state, action) => {
      state.card.push({
        id: crypto.randomUUID(),
        name: action.payload.name,
        value: action.payload.value,
      });
    },
    removeCar: (state, action) => {
      state.card = state.card.filter(car => car.id !== action.payload)
    },
  },
});

export const { addCar, removeCar } = counterSlice.actions;

export default counterSlice.reducer;
