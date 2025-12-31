export interface userAuth {
  id: string;
  name: string;
  email: string;
  password: string;
}

const USER_KEY = "user";
const TOKEN_KEY = "token";

export const UserSession = {
  // to save user data
  setUser: (user: userAuth, token: string): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(TOKEN_KEY, token);
  },

  // get user data
  getUser: (): userAuth | null => {
    const user = localStorage.getItem(USER_KEY);
    return user ? (JSON.parse(user) as userAuth) : null;
  },

  // for new token
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  // is login logic
  isLogging: (): boolean => {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  logout: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};
