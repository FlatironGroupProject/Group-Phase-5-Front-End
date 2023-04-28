import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';


        //  ++++ TS TYPES FOR PROPS BEING PASSED TO THIS PAGE ++++
interface LaunchPageProps {
  loggedIn: boolean;
  currUser: any;
}

export default function LaunchPage({ loggedIn, currUser }: LaunchPageProps ) {

        // ++++ STATES - PROBABLY REPLACED WITH REDUX BY DADDY SETH ++++
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false);


          // ++++ DECLARE ROUTER FOR NEXT ROUTING ++++
  const router = useRouter();


            // ++++ LOGIN SUBMIT ++++
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const currUser = await response.json();
      router.push('/Home');
    } else {
      alert('Invalid username or password');
    }
  }

         //  +++++++ SIGN UP SUBMIT +++++++
  async function handleSignup(e) {
    e.preventDefault();
    const data = {
      username: signupUsername,
      password: signupPassword,
      email: signupEmail,
    };
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      alert('User created successfully. You can now log in.');
    } else {
      alert('Error creating user. Please try again.');
    }
  }


          // +++++ OPENS THE SIGN UP FORM INSTEAD OF LOGIN FORM +++++++

  function toggleSignupForm() {
    setShowSignupForm(!showSignupForm);
  }  

  useEffect(() => {
    if (loggedIn) {
      router.push('/Home');
    }
  }, [loggedIn]);

  if (loggedIn) {
    return <div>Redirecting...</div>;
  } else {

  return (
  <Layout>
    <div className='p-20 rounded-lg shadow-2xl'>

      {/* ++++++ LOGIN FORM SHOWS FIRST EVEN THOUGH SIGNUP IS FIRST IN CODE, STATE WILL CHANGE TO SIGN UP FORM ON CLICK OF SIGN UP BUTTON ++++++ */}
      {showSignupForm ? (
        <>
          <h2 className='text-3xl font-bold text-goblue mb-8'>Sign up</h2>
          <div className='flex flex-col space-y-4'>

            {/* ++++ SIGNUPFORM ++++  */}
          <form onSubmit={handleSignup}>
            <div className='mb-4'>

              {/* ++++ USERNAME INPUT ++++ */}
              <label className='block text-goblue font-bold mb-2' htmlFor='signupUsername'>
                New Username:
              </label>
              <input
                className='border rounded w-full py-1 px-3 text-gray-700 leading-tight'
                type="text"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
                placeholder="New Username"
              />
            </div>

            {/* ++++ PASSWORD INPUT ++++ */}
            <div className='mb-4'>
              <label className='block text-goblue font-bold mb-2' htmlFor='signupPassword'>
                New Password:
              </label>
              <input
                className='border rounded w-full py-1 px-3 text-gray-700 leading-tight'
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="New Password"
              />
            </div>

            {/* ++++ EMAIL INPUT ++++ */}
            <div className='mb-4'>
              <label className='block text-goblue font-bold mb-2 mt-4' htmlFor='signupEmail'>
                Email:
              </label>
              <input
                className='border rounded w-full py-1 px-3 text-gray-700 leading-tight'
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <input
              className='bg-goblue text-white font-bold py-1 px-4 rounded cursor-pointer'
              id='signup-btn'
              type='submit'
              value='Sign up'
            />
          </form>

          {/* ++++ BACK TO LOGIN FROM BUTTON ++++ */}
          <button
            className='bg-goblue text-white font-bold py-1 px-4 rounded cursor-pointer mt-4'
            onClick={toggleSignupForm}
          >
            Back to Login
          </button>
          </div>
        </>
      ) : (
        <>
          <h2 className='text-3xl font-bold text-black mb-8'>Log in</h2>
          <div className='flex flex-col space-y-4'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-black font-bold mb-2' htmlFor='email'>
                Username:
              </label>
              <input
                className='border rounded w-full py-1 px-3 text-gray-700 leading-tight'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className='mb-4'>
              <label className='block text-black font-bold mb-2' htmlFor='password'>
                Password:
              </label>
              <input
                className='border rounded w-full py-1 px-3 text-gray-700 leading-tight'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input
              className='bg-goblue text-white font-bold py-1 px-4 rounded-lg border shadow-2xl cursor-pointer'
              id='submit-btn'
              type='submit'
              value='Enter'
            />
          </form>
          <button
            className='bg-goblue text-white font-bold py-1 px-4 rounded-lg shadow-2xl cursor-pointer'
            onClick={toggleSignupForm}
          >
            Sign up
          </button>
          </div>
        </>
      )}
    </div>
    </Layout>
  )}}
