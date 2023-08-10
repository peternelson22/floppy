import { createContext, useContext } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
};

export const useProductsContext = () => useContext(ProductsContext);
