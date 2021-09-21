import React, { createContext, useEffect, useState } from "react";
import { findAll } from "../api";

export interface UserContent {
    _id: string
    firstName: string
    lastName: string
    email: string
    password: string
  }

export const UserContext = createContext<any>({users: [], updateUsers: null });

interface UserContextProps {
    children: React.ReactNode
 }

const UserContextProvider: React.FC<UserContextProps> = ({ children }) => {
    const [users, setUsers] = useState<UserContent[]>([])
  
    useEffect(() =>{
        findAll().then(res => setUsers(res))
    },[])

    console.log(users)

    const updateUsers = () => {
        findAll().then(res => setUsers(res))
    }
   
   return(
       <UserContext.Provider value={{users, updateUsers}}>
           {children}
       </UserContext.Provider>
   )
}

export default UserContextProvider