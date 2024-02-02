/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/Firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = () => {
    return signOut(auth);
  };

//   // user profile updated
//   const updateUserProfile = (name) => {
//     return updateProfile(auth.currentUser, {
//       displayName: name,
//     });
//   };

  // observe account
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const info = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    // updateUserProfile,
  };

    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;