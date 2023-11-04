import React, { useState, createContext } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticatedUserContext = createContext({});
export const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider 
        value={{ 
            user, 
            setUser,
            login: async (email, password ) => {
                try {
                        await auth().signInWithEmailAndPassword(email, password)
                } catch(e) {
                    console.log(e);
                }
            },
            register: async (email, password) =>{
                try {
                    await auth().signInWithEmailAndPassword(email, password)
                } catch(e) {
                    console.log(e);
                }
            },
            logout: async (email, password) =>{
                try {
                    await auth().signOut();
                } catch(e) {
                    console.log(e);
                }
            },

         }}>
        {children}
    </AuthenticatedUserContext.Provider>
    );
};