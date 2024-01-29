import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";






const provider = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // social login
    const googleLogin = () => {
            setLoading(true)
           return signInWithPopup(auth , provider)
    }


    // signup
    const signup = (email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // signin
    const login = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const logout = ()=>{
       return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleLogin,
        signup,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;