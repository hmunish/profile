import { Dispatch } from "react";

export enum HostAction {
  SET_HOST_NAME = "SET_HOST_NAME",
  SET_HIRE_HOST = "SET_HIRE_HOST",
}

export interface HostState {
  hostName: string;
  isHireHost: boolean;
}

export interface HostStateAction {
  type: HostAction;
  payload: {
    hostName?: string;
    isHireHost?: boolean;
  };
}

export interface HostContext {
  state: HostState;
  dispatch: Dispatch<HostStateAction>;
}
