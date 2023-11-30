import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  auth: boolean;
  setAuth: (state: boolean) => void;
};

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
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function authMe() {
      const response = await fetch("http://localhost/api/auth/me", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setAuth(true);
      }

      setLoading(false);
    }

    authMe();
  }, []);

  const contextValue: AuthContextType = { auth, setAuth };

  return !loading ? (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  ) : (
    <div className="h-screen w-full bg-fb-gray-700"></div>
  );
}
