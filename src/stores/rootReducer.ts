import { combineReducers } from "@reduxjs/toolkit";
import SearchWordModule from "./modules/SearchWord";
import AuthModule  from "./modules/Auth";

const rootReducer = combineReducers({
  SearchWord: SearchWordModule.reducer,
  Auth: AuthModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
