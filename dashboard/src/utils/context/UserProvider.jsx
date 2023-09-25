import { createContext } from "react";
import { useFrappeAuth } from "frappe-react-sdk";

export const UserContext = createContext({
  currentUser: "",
  isLoading: false,
  isValidating: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  updateCurrentUser: () => {},
});

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const {
    login,
    logout,
    isValidating,
    currentUser,
    error,
    updateCurrentUser,
    isLoading,
  } = useFrappeAuth();

  const handleLogout = async () => {
    return logout();
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        updateCurrentUser,
        login,
        logout: handleLogout,
        currentUser: currentUser ?? "",
        isValidating,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
