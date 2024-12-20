import { BigNumber } from "ethers";
import { IToken } from "types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum AppTypes {
  Connect = "CONNECT",
  AlertModal = "ALERT_MODAL",
  SwitchNetworkModal = "SWITCH_NETWORK_MODAL",
}

type AppPayload = {
  [AppTypes.Connect]: boolean;
  [AppTypes.AlertModal]: {
    show: boolean;
    body?: string;
    title?: string;
    // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClose?: () => void;
  };
  [AppTypes.SwitchNetworkModal]: {
    show: boolean;
    body?: string;
    title?: string;
    network: string;
    // onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClose?: () => void;
  };
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];

export type TState = {
  // for demo purpose only
  connected: boolean;
  modals: IModals;
};

export interface IAlertModalState {
  visible: boolean;
  title?: string;
  body?: string;
}

export interface ISwitchNetworkModalState {
  visible: boolean;
  title?: string;
  body?: string;
  network: string;
}

// TODO: update structure, put props into separated object
// action - approve
// withdraw - none, should contain poolId, address, tokens, etc
export interface IModals {
  alert: IAlertModalState;
  switchnetworkmodal: ISwitchNetworkModalState;
}

export interface IState {
  modals: IModals;
}

export interface IMetaData {
  icon?: string;
  category?: string;
  projectName?: string;
  description?: string;
  twitter?: string;
  medium?: string;
  website?: string;
}

export interface IPool {
  id: string;

  address?: string;
  totalMembers?: number;
  tokenTarget?: BigNumber;
  totalOwed?: BigNumber;
  weiRaised?: BigNumber;
  minWei?: BigNumber;
  maxWei?: BigNumber;
  startTime?: number;
  endTime?: number;
  meta?: string;
  poolType?: number;
  token?: string;
  ratio?: BigNumber;

  metaData?: IMetaData;
  tokenData?: IToken;
}
