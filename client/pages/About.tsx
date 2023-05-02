import React from 'react';
import Head from 'next/head';
const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-32">
      <Head>
        <title>About Us | WorkWell</title>
      </Head>
      <div className="bg-maize text-goblue shadow-lg rounded-lg p-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">About WorkWell</h1>
        <p className="mb-4">
        WorkWell is a cutting-edge project management and collaboration platform designed to revolutionize team productivity. 
        By seamlessly integrating AI-powered features such as meeting notes interpretation, video and call transcripts analysis, 
        WorkWell goes beyond traditional communication tools like Teams to provide a more intelligent and intuitive workspace. 
        Our platform offers a comprehensive suite of features, including chat, file sharing, and task management, to enable businesses 
        of all sizes to work more effectively and achieve their goals. Experience the future of teamwork with WorkWell, where 
        innovation and efficiency come together to empower your team's success.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          We'd love to hear from you! If you have any questions or would like to
          learn more about LunarBreeze, please don't hesitate to contact us at
          {' '}
          <a href="mailto:support@Ultima.com" className="text-goblue hover:text-blue-200">
            support@WorkWell.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default About;
