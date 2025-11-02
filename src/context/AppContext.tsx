import React from "react";
import { AppState, AppAction } from "./appReducer";

export interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export const AppContext = React.createContext<AppContextProps | undefined>(
  undefined
);
