import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider,
    updateProfile,
    getIdToken,
    signOut
} from "firebase/auth";


//initialize Firebase
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // spinner loader
    const [isLoading, setIsLoading] = useState(true);
    //error set
    const [authError, setAuthError] = useState('');
    //for admin
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        //for loading
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setAuthError('');
                //== create user
                const newUser = { email, displayName: name }
                setUser(newUser);

                //save user to database
                saveUser(email, name, 'POST');

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // setUser(result?.user)
                    })
                    .catch((error) => {
                        // console.log(error.message);
                    });
                history.replace('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false))
    }
    const loginInUser = (email, password, location, history) => {
        //for loading
        setIsLoading(true);
        //
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)

                //== redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

                //==
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //GOOGLE login
    const signInUsingGoogle = (location, history) => {
        //for loading
        setIsLoading(true);
        //=====
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user)
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                //===
                setAuthError('');
                //== redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    //Observed user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            }
            else {
                setUser({})
            }
            //for loading
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    //========
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    //user logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                // An error happened.
            })
            //for loading
            .finally(() => setIsLoading(false));
    }
    //saved user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginInUser,
        signInUsingGoogle,
        admin,
        token,
        logOut
    }

}
export default useFirebase;