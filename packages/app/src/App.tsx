import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloProvider from "./context/apollo.context";
import Home from "./page";

export default function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}
