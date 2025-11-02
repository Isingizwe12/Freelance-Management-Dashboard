import{ useReducer, ReactNode } from "react";
import { appReducer, AppState } from "./appReducer";
import { AppContext } from "./AppContext";
import { clients, projects, payments } from '../data/SampleData'

const initialState: AppState = {
  clients,
  projects,
  payments,
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
