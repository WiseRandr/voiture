import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import ApolloProvider from "./context/apollo.context";
import Home from "./page";
import VoiturePageSingle from "./page/voiture";
import { GlobalStyle } from "./utils/style";

export default function App() {
  return (
    <ApolloProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/voitures/:voitureid" component={VoiturePageSingle} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
