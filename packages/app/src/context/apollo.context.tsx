import { ApolloProvider as A } from "@apollo/client";
import { PropsWithChildren } from "react";
import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { getToken } from "src/utils/token";

export default function ApolloProvider({ children }: PropsWithChildren<{}>) {
  const client = useApollo();
  
  return <A client={client}>{children}</A>;
}


let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
const apolloPath: string = process.env.REACT_APP_GRAPHQL_API || "http://localhost:4000/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createApolloClient() {
  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  
  const link = ApolloLink.from([ errorLink, authLink, createUploadLink({ uri: apolloPath}) ]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
