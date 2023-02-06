import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
  contacts: [],
  filter: ""
},
    reducers: {
        addContact(state, { payload }) {
            return { ...state, contacts: [...state.contacts, payload] }
        },
        removeContact(state, { payload }) {
            return { ...state, contacts: state.contacts.filter(el => el.id !== payload) }
        },
       changeFilter(state, { payload }) {
            return { ...state, filter: payload }
        },
    }
    
});



export const { addContact, removeContact, changeFilter} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

