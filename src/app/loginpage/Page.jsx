import React from 'react';

const LoginPage = () => {
  return (
    <div className=' container mx-auto min-h[80vh] flex justify-center items-center'>
      <div className='p-4 rounded bg-white'>
        <h2 className='text-3xl font-bole text-center'>Login your account</h2>
        <form>
          <fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" />
 
</fieldset>
        </form>

      </div>
     
    </div>
  );
};

export default LoginPage;
