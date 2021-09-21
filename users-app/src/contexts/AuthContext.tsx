import React, { createContext, useEffect, useState } from "react";
import { findAll } from "../api";

export const AuthContext = createContext<any>({authenticated: false, firstName: '', lastName: '', logIn: () => {}, logOut: () => {}});

interface AuthContextProps {
    children: React.ReactNode
 }

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const logIn = (firstName: string, lastName: string) => {
        localStorage.setItem('authenticated', 'true')
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        setAuthenticated(localStorage.getItem('authenticated') === 'true' ? true : false)    
        setFirstName(String(localStorage.getItem('firstName')))
        setLastName(String(localStorage.getItem('lastName')))
    }

     const logOut = () => {
        localStorage.setItem('authenticated', 'false')
        localStorage.setItem('firstName', '')
        localStorage.setItem('lastName', '')
        setAuthenticated(localStorage.getItem('authenticated') === 'true' ? true : false)    
        setFirstName(String(localStorage.getItem('firstName')))
        setLastName(String(localStorage.getItem('lastName')))
    }
   
   return(
       <AuthContext.Provider value={{authenticated, firstName, lastName, logIn, logOut}}>
           {children}
       </AuthContext.Provider>
   )
}

export default AuthContextProvider