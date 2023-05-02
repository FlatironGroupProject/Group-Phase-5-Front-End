import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About Us | WorkWell</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">About WorkWell</h1>
          <p className="text-lg mb-6 leading-7">
            WorkWell is a cutting-edge project management and collaboration platform designed to revolutionize team productivity.
            By seamlessly integrating AI-powered features such as meeting notes interpretation, video and call transcripts analysis,
            WorkWell goes beyond traditional communication tools like Teams to provide a more intelligent and intuitive workspace.
          </p>
          <p className="text-lg mb-6 leading-7">
            Our platform offers a comprehensive suite of features, including chat, file sharing, and task management, to enable businesses
            of all sizes to work more effectively and achieve their goals. Experience the future of teamwork with WorkWell, where
            innovation and efficiency come together to empower your team's success.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-6 leading-7">
            We'd love to hear from you! If you have any questions or would like to learn more about WorkWell, please don't hesitate to
            contact us at{' '}
            <a href="mailto:support@workwell.com" className="text-blue-500 hover:text-blue-700">
              support@workwell.com
            </a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
