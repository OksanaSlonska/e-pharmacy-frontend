"use client";

import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavigationContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
