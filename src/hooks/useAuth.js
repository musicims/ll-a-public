import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    signInWithPopup,
    sendEmailVerification
} from 'firebase/auth';
import config from "../config";


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useLocalStorage("user", null);

  useEffect(() => {
    const listener = onAuthStateChanged(config.auth, async (user) => {
      setUser(user);
    });
    return () => {
      listener();
    };
  }, [setUser]);

  const signUp = async (email, password) => {
      let a =  await createUserWithEmailAndPassword(config.auth, email, password);
      setUser(a)
  }

  const signIn = async (email, password) => {
      let a =  await signInWithEmailAndPassword(config.auth, email, password);
      setUser(a)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithPopup(config.auth, config.provider)
    setUser(user)
  }

  const logOut = async () => {
      await signOut(config.auth);
      setUser(null)
  }

  const verificationEmail = async () => {
    await sendEmailVerification(config.auth.currentUser);
  }

  const value = useMemo(
    () => ({
      user
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={{...value, signIn, signUp, signInWithGoogle, logOut, verificationEmail}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}