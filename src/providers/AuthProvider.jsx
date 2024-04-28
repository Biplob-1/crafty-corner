import { createContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, updateProfile, fetchSignInMethodsForEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = async (email, password, name, photoURL) => {
        try {
            // check if email already exists
            // const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            // if (signInMethods && signInMethods.length > 0) {
            //     throw new Error('Email already exists. Please use a different email.');
            // }

            // register user if email does not exist
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Update users display name and photo URL
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL
            });
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signInWithGithub = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });
        return () => {
            unSubscribe();
        };
    }, []);
    

    const authInfo = { user, createUser, signInUser, signInWithGoogle, signInWithGithub, logout };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
