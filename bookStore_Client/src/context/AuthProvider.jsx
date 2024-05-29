
import app from '@/firebase/firebase.config';
import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Handle successful creation
            //     setLoading(false);
            //     setUser(userCredential.user);
            //     return userCredential.user;
            // })
            // .catch((error) => {
            //     // Handle errors
            //     setLoading(false);
            //     console.error("Error creating user:", error);
            //     throw error; // You might want to handle this error more gracefully
            // });
    }

    const authInfo = {
        createUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
