import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

interface LaunchPageProps {
  loggedIn: boolean;
  currUser: any;
}

export default function LaunchPage({ loggedIn, currUser }: LaunchPageProps ) {
  const router = useRouter();

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
          <h2 className='text-3xl font-bold text-black mb-8'>Welcome to my website</h2>
        </div>
      </Layout>
    );
  }
}
