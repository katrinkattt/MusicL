const Context = React.createContext(null);

export const AppContextProvider = ({ children, ...props }) => {
  const context = new UseCreateAppContext(props);
  return <Context.Provider value={context}>{children}</Context.Provider>;
};
