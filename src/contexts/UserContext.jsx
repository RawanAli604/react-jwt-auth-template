import { createContext, useState } from "react";

const UserContext = createContext();

const getUserFromToken = () => {
    const token = localStorage.getItem('token');
    if(!token) return null;

    return JSON.parse(atob(token.split('.')[1]));
}

function UserProvider({ children }) {
const [user, setUser] = useState(getUserFromToken());

 const value = {
    user, 
    setUser
 };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// since the context is located outside of the function of user provider then the context need to be sent alone on the other hand with the function
// When components need to use the value of the user context, they will need
// access to the UserContext object to know which context to access.
// Therefore, we export it here.
export { UserProvider, UserContext};