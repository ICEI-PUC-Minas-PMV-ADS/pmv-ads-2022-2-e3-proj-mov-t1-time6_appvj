import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {

  // Guarda se o usuário está logado
  const [signed, setSigned] = useState(false);
  // Guarda o nome do usuário logado
  const [name, setName] = useState('');

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
      }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook
export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName } = context;
  return { signed, setSigned, name, setName };
}