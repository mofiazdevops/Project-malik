import { Web3Provider } from "@ethersproject/providers";
import { ThemeProvider } from "@material-ui/styles";
import { Web3ReactProvider } from "@web3-react/core";
import { AppProvider, ConnectedWeb3, GlobalProvider } from "contexts";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes, { renderRoutes } from "routes";
import { createTheme } from "theme";
import ReactGA from "react-ga";
import { SUBGRAPH_URL } from "config/constants";
import OfferDialog from "components/Modal/OfferModal";
import { SnackbarProvider } from "notistack";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

import "./App.css";
import { ScrollProvider } from "contexts/scrollContext";

ReactGA.initialize("UA-155131109-1");

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const theme = createTheme();

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <ConnectedWeb3>
              <GlobalProvider>
                <ScrollProvider>
                  <AppProvider>
                    <BrowserRouter>{renderRoutes(routes as any)}</BrowserRouter>
                  </AppProvider>
                </ScrollProvider>
                <OfferDialog />
              </GlobalProvider>
            </ConnectedWeb3>
          </Web3ReactProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
