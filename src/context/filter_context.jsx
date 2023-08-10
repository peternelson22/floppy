import { useContext, createContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => useContext(FilterContext);
