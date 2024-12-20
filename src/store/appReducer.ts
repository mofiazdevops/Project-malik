import { AppActions, AppTypes, TState } from "./types";

export const initialState: TState = {
  connected: false,
  modals: {
    alert: {
      visible: false,
      body: "",
      title: "",
    },
    switchnetworkmodal: {
      visible: false,
      body: "",
      title: "",
      network: "",
    },
  },
};

export const appReducer = (state: TState, action: AppActions) => {
  switch (action.type) {
    case AppTypes.Connect:
      return { ...state, connected: action.payload };
    case AppTypes.AlertModal:
      return {
        ...state,
        modals: {
          ...state.modals,
          alert: {
            visible: action.payload.show,
            body: action.payload.body,
            title: action.payload.title,
          },
        },
      };
    case AppTypes.SwitchNetworkModal:
      return {
        ...state,
        modals: {
          ...state.modals,
          switchnetworkmodal: {
            visible: action.payload.show,
            body: action.payload.body,
            title: action.payload.title,
            network: action.payload.network,
          },
        },
      };
    default:
      return state;
  }
};
