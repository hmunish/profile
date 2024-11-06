import { Dispatch } from "react";

export enum NavLabel {
  About = "About",
  Resume = "Resume",
  Works = "Works",
  Blog = "Blog",
  Contact = "Contact",
}

export enum NavAction {
  SET_ACTIVE_DIV = "SET_ACTIVE_DIV",
}

export interface NavigationState {
  activePage: NavLabel;
}

export interface NavigationStateAction {
  type: NavAction;
  payload: NavLabel;
}

export interface NavigationContext {
  state: NavigationState;
  dispatch: Dispatch<NavigationStateAction>;
}
