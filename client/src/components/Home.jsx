import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-8">MERN Auth App</h1>
      <a href="/auth/google" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-4 mt-4 rounded">Login with Google</a>
    </div>
  );
};

export default Home;
