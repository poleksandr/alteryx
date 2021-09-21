import React, { createContext, useEffect, useState } from "react";

export const logIn = (firstName: string, lastName: string) => {
    localStorage.setItem('authenticated', 'true')
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
}

export const logOut = () => {
    localStorage.setItem('authenticated', 'false')
    localStorage.setItem('firstName', '')
    localStorage.setItem('lastName', '')
}