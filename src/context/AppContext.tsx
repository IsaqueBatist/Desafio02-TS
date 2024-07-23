import React, { createContext, useState } from 'react';
import { IAppContext } from './type';


export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {

  const [islogedIn, setlsLogedIn] = useState<boolean>(false)

  const user = 'Isaque'

  return (
    <AppContext.Provider value={{ user, islogedIn, setlsLogedIn }}>
      {children}
    </AppContext.Provider>
  )
}
