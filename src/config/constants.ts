import { ReactComponent as CoinbaseSVG } from "assets/svgs/wallet/coinbase.svg";
import { ReactComponent as FormaticSVG } from "assets/svgs/wallet/fortmatic.svg";
import { ReactComponent as MetaMaskSVG } from "assets/svgs/wallet/metamask-color.svg";
import { ReactComponent as PortisSVG } from "assets/svgs/wallet/portis.svg";
import { ReactComponent as WalletConnectSVG } from "assets/svgs/wallet/wallet-connect.svg";
import { ConnectorNames } from "utils/enums";

export const STORAGE_KEY_CONNECTOR = "CONNECTOR";
export const LOGGER_ID = "ideapad";

export const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID;

export const TOKEN_PRICE_DECIMALS = 18;
export const WEIGHT_DECIMALS = 18;

export const WALLET_ICONS: { [key in ConnectorNames]: React.ElementType } = {
  [ConnectorNames.Injected]: MetaMaskSVG,
  [ConnectorNames.WalletConnect]: WalletConnectSVG,
  [ConnectorNames.WalletLink]: CoinbaseSVG,
  [ConnectorNames.Fortmatic]: FormaticSVG,
  [ConnectorNames.Portis]: PortisSVG,
};

export const API_URL =
  process.env.REACT_APP_API_URL || "https://ido.ideaology.io/v1";

// export const API_URL = "http://localhost:8080/v1";

export const SUBGRAPH_URL =
  process.env.REACT_APP_SUBGRAPH_URL ||
  "https://api.thegraph.com/subgraphs/name/ace-contributor/ideapad";

export const IDO_URL =
  process.env.REACT_APP_IDO_URL || "https://ido.ideaology.io";

export const SMTP_HOST = process.env.REACT_APP_SMTP_HOST || "smtp.gmail.com";
export const SMTP_FROM =
  process.env.REACT_APP_EMAIL_FROM || "no-reply@ideaology.io";

export const SMTP_PORT = process.env.REACT_APP_SMTP_PORT || 587;
export const SMTP_USERNAME =
  process.env.REACT_APP_SMTP_USERNAME || "no-reply@ideaology.io";
export const SMTP_PASSWORD =
  process.env.REACT_APP_SMTP_PASSWORD || "jedandvatri";
