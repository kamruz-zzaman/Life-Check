import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Component/Firebase/firebase.init";
firebaseInitialize()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    // User Login With Google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => setUser(result))
            .catch((err) => console.log(err))

    };
    // User Login with Email
    const signUpWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => { setUser(result.user) })
            .catch((err) => alert(err.message))

    };

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => { setUser(result.user) })
            .catch((error) => {
                let errorMessage = error.message.split("(")[1].split(")")[0];
                alert(errorMessage);
            })
    };

    // User Logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => { alert(error.message) })
    };

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    return {
        user,
        signinWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        logOut,
        isLoading
    };
};

export default useFirebase;