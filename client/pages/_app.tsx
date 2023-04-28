import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [currUser, setCurrUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // ++++ BOILER FOR USER CHECK, SETS THE LOGGED IN USER /check is backend ++++
  useEffect(() => {
    fetch('/check')
      .then((r) => r.json())
      .then((data) => {
        setLoggedIn(data.loggedIn);
      });
  }, []);

  // ++++ BOILER FOR MAKING LOGGED IN USER THE CURRENT USER THAT WILL BE PASSED /logged_user is backend ++++
  useEffect(() => {
    fetch('/logged_user')
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        if (!data.error) {
          setCurrUser(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching logged_user:', error);
      });
  }, []);

 

  return (
      <Component {...pageProps} currUser={currUser} loggedIn={loggedIn}/>
  )
}

export default MyApp;


// ++++ Pass ****<Component {...pageProps} currUser={currUser} loggedIn={loggedIn}/>**** 
// ++++ when you want login + current logged in user info ++++