import * as React from "react";

export interface ToggleCartProviderProps {
  isOpen: boolean;
  toggleCart: () => void;
}

export const ToggleCartContext = React.createContext({
  isOpen: true,
  toggleCart: () => {},
});

export const ToggleCartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleCart = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({
      isOpen,
      toggleCart,
    }),
    [isOpen, toggleCart]
  );

  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};
