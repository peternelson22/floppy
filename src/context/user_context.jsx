import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, user, logout, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(false);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, myUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
