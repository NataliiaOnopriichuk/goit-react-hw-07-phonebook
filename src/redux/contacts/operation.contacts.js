import { createAsyncThunk } from "@reduxjs/toolkit";
// import { addContactsApi, getContactsApi } from "service/api";
import axios from "axios";

axios.defaults.baseURL = "https://63e1319859bb472a74332ea2.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (search, thunkAPI) => {
    try {
      const response = await axios.get("/contacts",   {params: {search}});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (obj, thunkAPI) => {
    try {
        const response = await axios.post("/contacts",  obj );
        console.log('response.data :>> ', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, {rejectWithValue}) => {
//     try {
//         return await getContactsApi()
//     } catch (error) {
//         // console.error(error.message)
//         return rejectWithValue(error)
//     }
// })

// export const addContact = createAsyncThunk("contacts/addContact", async (obj, {rejectWithValue}) => {
//     try {
//         return await addContactsApi(obj)
//     } catch (error) {
//         return rejectWithValue(error)
//     }
// })