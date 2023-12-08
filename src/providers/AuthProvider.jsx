import { createContext, useEffect, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext({})

export default function AuthProvider ({children}){
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    
    const loadTokenAsync = async () => {
        const token = await SecureStore.getItemAsync('token');
        if(token) {
            setToken(token);
        }
    }

    const setTokenAsync = async (token) => {
        await SecureStore.setItemAsync('token', token);
        setToken(token);
    }

    return (
        <AuthContext.Provider value={{
            token, setToken,
            user, setUser,
            loadTokenAsync,
            setTokenAsync
        }}> 
            {children} 
        </AuthContext.Provider>
    )
}