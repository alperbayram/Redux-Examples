import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
  return res.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const quotesSelector = (state) => state.quotes.items;
export const statusSelector = (state) => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;

export default quotesSlice.reducer;
