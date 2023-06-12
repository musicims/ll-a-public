import { createContext, useContext, useState } from 'react';
import db from '../config/firebase';
import { collection, addDoc, onSnapshot, query, getDocs } from "firebase/firestore";
import { loadStripe } from '@stripe/stripe-js';
import config from '../config';


const PaymentsContext = createContext()

export const PaymentsContextProvider = ({children}) => {
  const [subscription, setSubscription] = useState(null)

  const checkout = async (priceId, userId) => {
    const docRef = await addDoc(collection(db, "customers", userId, "checkout_sessions"), {
        price: priceId,
        success_url: 'http://localhost:3000/thankyou',
        cancel_url: 'http://localhost:3000/signup'
    });
    console.log(docRef);
    onSnapshot(docRef, async (snap) => {
        const {error, sessionId} = snap.data()
        if(error) {
            alert(`An error occured: ${error.message}`)
        } 
        if(sessionId) {
            const stripe = await loadStripe(config.REACT_APP_STRIPE_PUBLIC_KEY);
            await stripe.redirectToCheckout({ sessionId });
        }
    })
  }

  const getCurrentPlan = async (userId) => {
    const q = query(collection(db, "customers", userId, "subscriptions"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async sub => {
      console.log(sub.data());
    })
  }


  return (
    <PaymentsContext.Provider value={{checkout, getCurrentPlan}}>
      {children}
    </PaymentsContext.Provider>
  )
}

export const usePayments = () => {
  return useContext(PaymentsContext)
}