import { createSlice } from '@reduxjs/toolkit';
import {addContact, fetchContacts} from './operation.contacts';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // reducers: {
  //   addContact(state, { payload }) {
  //     return { ...state, items: [...state.items, payload] };
  //   },
  //   removeContact(state, { payload }) {
  //     return {
  //       ...state,
  //       items: state.items.filter(el => el.id !== payload),
  //     };
  //   },
  // },
});

// export const {removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
