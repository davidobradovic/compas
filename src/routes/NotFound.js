import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  return (
    <div style={{ width: '100vw', height: '100vh' }} className='flex items-center justify-center flex-col gap-5'>
      <h1 className='text-2xl font-bold'>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate(-1)} className='text-white bg-black p-3'>Go Back</button>
    </div>
  );
}

export default NotFound;
 