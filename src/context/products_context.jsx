import { createContext, useContext, useReducer, useEffect } from 'react';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';
import reducer from '../reducers/products_reducer';

const initialState = {
  isSidebarOpen: false,
};
const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
