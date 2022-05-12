import React, { createContext, useState } from "react";
export const Cartctx = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <Cartctx.Provider value={{ cart, setCart }}>{children}</Cartctx.Provider>
  );
};

export default Context;
