import React, { Dispatch, useReducer } from "react";

import { AppActions, AppTypes, TState } from "store/types";
import { appReducer, initialState } from "store/appReducer";
import { AlertModal, SwitchNetworkModal } from "components";

export type TContext = {
  state: TState;
  dispatch: Dispatch<AppActions>;
};

const AppContext = React.createContext<TContext>({
  state: initialState,
  dispatch: () => null,
});

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("Component rendered outside the provider tree");
  }

  return context;
};

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export const AppProvider = (props: IProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const closeAlertModal = () => {
    dispatch({ type: AppTypes.AlertModal, payload: { show: false } });
  };

  const closeSwitchNetworkModal = () => {
    dispatch({
      type: AppTypes.SwitchNetworkModal,
      payload: { show: false, network: "" },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
      {state.modals.alert && (
        <AlertModal
          body={state.modals.alert.body}
          onClose={closeAlertModal}
          title={state.modals.alert.title}
          visible={state.modals.alert.visible}
        />
      )}
      {state.modals.switchnetworkmodal && (
        <SwitchNetworkModal
          body={state.modals.switchnetworkmodal.body}
          network={state.modals.switchnetworkmodal.network}
          onClose={closeSwitchNetworkModal}
          title={state.modals.switchnetworkmodal.title}
          visible={state.modals.switchnetworkmodal.visible}
        />
      )}
    </AppContext.Provider>
  );
};
