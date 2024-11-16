import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useReducer,
  } from "react";
import { HostAction, HostContext, HostState, HostStateAction } from "./hostState.model"
  
  const initialState: HostState = {
    hostName: '',
    isHireHost: false,
  };
  
  const HostStateReducer = (
    state: HostState,
    action: HostStateAction
  ) => {
    switch (action.type) {
      case HostAction.SET_HOST_NAME:
        return {
          ...state,
          hostName: action.payload.hostName || '',
        };
        case HostAction.SET_HIRE_HOST:
            return {
              ...state,
              isHireHost: action.payload.isHireHost || false,
            };
      default:
        return state;
    }
  };
  
  const HostStateContext = createContext<HostContext | undefined>(
    undefined
  );
  
  export const HostStateProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [state, dispatch] = useReducer(HostStateReducer, initialState);
  
    return (
      <HostStateContext.Provider value={{ state, dispatch }}>
        {children}
      </HostStateContext.Provider>
    );
  };
  
  export const useHostContext = () => useContext(HostStateContext);
  