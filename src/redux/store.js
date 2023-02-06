import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/cotactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
