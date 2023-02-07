import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = state => state.contacts;
export const selectorFilter = state => state.filter




export const filterContactsByName = createSelector([selectorContacts, selectorFilter], (contacts, filter) => {
    return contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  });