import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import {
  NavAction,
  NavigationContext,
  NavigationState,
  NavigationStateAction,
  NavLabel,
} from "./navigationState.model";

const initialState: NavigationState = {
  activePage: NavLabel.About,
};

const navigationStateReducer = (
  state: NavigationState,
  action: NavigationStateAction
) => {
  switch (action.type) {
    case NavAction.SET_ACTIVE_DIV:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

const NavigationStateContext = createContext<NavigationContext | undefined>(
  undefined
);

export const NavigationStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(navigationStateReducer, initialState);

  return (
    <NavigationStateContext.Provider value={{ state, dispatch }}>
      {children}
    </NavigationStateContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationStateContext);
