import React, { createContext } from 'react'
import useFirebase from '../../Hooks/useFirebase';
// creat auth provider
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext };