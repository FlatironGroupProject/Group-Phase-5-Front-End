import Layout from '../components/Layout';


        // ++++ TS TYPES FOR PROPS BEING PASSED TO THIS PAGE ++++
interface HomeProps {
    currUser: any;
  }
 
        // ++++ ({PROP}): PAGETYPE
  export default function Home({ currUser }: HomeProps) { 

        // ++++ CHECKS CURRENT USER INFO AND IF IT EXISTS ++++
    // if (!currUser) {
    //   return <div className="text-dblue">Loading.. </div>;
    // }
  
  return (
    <Layout>
      <div className="p-4 mb-8 rounded-lg">
      {/* {currUser.username} ADD TO THE WELCOME MESSAGE TO PASS USERNAME WHEN CURRUSER IS UNCOMMENTED*/}
          <p className="text-3xl font-bold text-goblue">Welcome </p>
      </div>
    </Layout>
  );
}