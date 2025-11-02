import { Client, Project, Payment } from "../types/models";

export interface AppState {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}

export type AppAction =
  | { type: "ADD_CLIENT"; payload: Client }
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "ADD_PAYMENT"; payload: Payment }
  | { type: "MARK_PROJECT_PAID"; payload: { projectId: string } };

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "ADD_PAYMENT":
      return { ...state, payments: [...state.payments, action.payload] };
    case "MARK_PROJECT_PAID":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId
            ? { ...p, paymentstatus: "paid" }
            : p
        ),
      };
    default:
      return state;
  }
}
