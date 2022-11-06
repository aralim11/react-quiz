import React, { useContext, useEffect, useState } from "react";
import './../firebase';
import {getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    async function signUpSubmit(username, email, password){
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {displayName: username});
        const user = auth.currentUser;
        setCurrentUser({...user});
    }

    function login(email, password){
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signUpSubmit,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}