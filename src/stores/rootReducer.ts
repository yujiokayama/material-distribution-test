import { combineReducers } from "@reduxjs/toolkit";
import SearchWordModule from "./modules/SearchWord";

const rootReducer = combineReducers({
  SearchWord: SearchWordModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
