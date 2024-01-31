import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../types/person.type";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: uuidv4(),
        name: action.payload.name,
      });
    },
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
