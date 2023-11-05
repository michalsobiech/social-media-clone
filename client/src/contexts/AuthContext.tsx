import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = [boolean, (state: boolean) => void];

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: AuthProviderProps): ReactNode {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function authMe() {
      const response = await fetch("http://localhost/api/auth/me", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setAuthenticated(true);
      }
    }
    authMe();
  }, []);

  const contextValue: AuthContextType = [authenticated, setAuthenticated];

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
