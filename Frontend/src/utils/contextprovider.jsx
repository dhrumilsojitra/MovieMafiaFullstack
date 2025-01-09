import { createContext } from "react";

export const UserContext = createContext();
const Contextprovider = ({ children }) => {
  return (
    <UserContext.Provider value={"Rahul"}>{children}</UserContext.Provider>
  );
};

export default Contextprovider;
