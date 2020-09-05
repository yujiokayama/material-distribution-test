import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "firebase";

type State = {
  currentUser: User | null | undefined;
};

const initialState: State = {
  currentUser: undefined,
};

const AuthModule = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state: State, action: PayloadAction<User | null | undefined>) => {
      state.currentUser = action.payload;
    }
  },
});

export const { setCurrentUser } = AuthModule.actions;

export default AuthModule;


