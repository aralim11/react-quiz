import React, { useContext, useState } from "react";
import './../firebase';
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    async function signUp(email, password, username){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {displayName: username});
        const user = auth.currentUser;
        setCurrentUser({...user});
    }

    async function login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    async function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signUp,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}