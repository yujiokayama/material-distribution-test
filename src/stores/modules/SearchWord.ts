import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type State = {
  searchWord: string | null | undefined;
};

const initialState: State = {
  searchWord: '',
};

const searchWordModule = createSlice({
  name: "searchWord",
  initialState,
  reducers: {
    setSearchWord: (state: State, action: PayloadAction<string>) => {
      state.searchWord = action.payload;
    }
  },
});

export const { setSearchWord } = searchWordModule.actions;

export default searchWordModule;


