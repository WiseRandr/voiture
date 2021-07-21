import { useApolloClient, useLazyQuery } from "@apollo/client";
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { GET_AUTHORIZED_USER } from "src/graphql/auth/auth.query";
import { clearToken, getToken, setToken } from "src/utils/token";

interface Auth {
  isconnected: boolean;
  loading: boolean;
  user?: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<Auth>({} as any);

export default function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [getAuthorizedUser, { data, loading }] = useLazyQuery(GET_AUTHORIZED_USER);
  const [isconnected, setIsconnected] = useState<boolean>(false);
  const user = useMemo(() => data?.getAuthorizedUser, [data]);
  const client = useApolloClient();

  const login = useCallback((token: string) => {
    setToken(token);
    getAuthorizedUser();
  }, [getAuthorizedUser]);

  const logout = useCallback(() => {
    clearToken();
    setIsconnected(false);
    client.clearStore();
  }, [client]);

  useEffect(() => {
    setIsconnected(Boolean(data?.getAuthorizedUser));
  }, [data]);

  useEffect(() => {
    const token = getToken();
    if(token) login(token);
  }, [login]);
  
  return <AuthContext.Provider value={{ isconnected, loading, login, logout, user }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);