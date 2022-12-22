import React, { createContext, useState, useContext } from 'react';

export const ProductContext = createContext();

export default function ProductProvider({ children }) {

  // Guarda se o usuário está logado
  const [idProduto, setIdProduto] = useState('');
  
  return (
    <ProductContext.Provider
      value={{
        idProduto,
        setIdProduto
      }}>
      {children}
    </ProductContext.Provider>
  );
}

// Hook
export function useProduct() {
  const context = useContext(ProductContext);
  const { idProduto, setIdProduto } = context;
  return { idProduto, setIdProduto };
}