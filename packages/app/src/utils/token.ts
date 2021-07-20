const tokenkey = "__voiture_token";

export const getToken = () => window.localStorage.getItem(tokenkey) || "";

export const setToken = (token: string) => localStorage.setItem(tokenkey, token);

export const clearToken = () => window.localStorage.removeItem(tokenkey);
