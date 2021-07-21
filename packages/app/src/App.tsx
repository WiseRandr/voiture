import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloProvider from "./context/apollo.context";
import AuthProvider from "./context/auth.context";
import Header from "./layout/header/header";
import Home from "./page";
import Login from "./page/login";
import Register from "./page/register";
import VoiturePageSingle from "./page/voiture";
import { AppContainer, GlobalStyle } from "./utils/style";
const { NotificationContainer } = require('react-notifications');

export default function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyle />
          <AppContainer className="d-flex">
            <Header />
            <div className="w-100">
              <Switch>
                <Route path="/voitures/:voitureid" component={VoiturePageSingle} />
                <Route path="/se-connecter" component={Login} />
                <Route path="/s-inscrire" component={Register} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </AppContainer>
        </AuthProvider>
        <NotificationContainer />
      </BrowserRouter>
    </ApolloProvider>
  );
}
