import React, { useState } from 'react';

function Login() {
  let [userData, setUserData] = useState({ email: '', password: '' });
  let [error, setError] = useState('');
  let [isSubmitted, setIsSubmitted] = useState();

  const handleData = () => {
    if (userData.email.trim() === '' || userData.password.trim() === '') {
      setError('Input fields cannot be empty');
      setIsSubmitted(false);
      return;
    }
    setError('');
    setIsSubmitted(true);
    console.log(userData);
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto p-5 rounded-md mt-20 gap-4 border border-black">
      <div className="w-full">
        <p>Email: </p>
        <input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Your Email"
          className="border w-[90%] block mx-auto my-1 border-blue-500 outline-none focus:border-blue-900 rounded px-2 py-1.5"
          type="email"
        />
      </div>
      <div className="w-full">
        <p>Password: </p>
        <input
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Your Password"
          className="border w-[90%] block mx-auto my-1 border-blue-500 outline-none focus:border-blue-900 rounded px-2 py-1.5"
          type="password"
        />
      </div>
      <button
        onClick={handleData}
        className="bg-blue-500 hover:bg-blue-700 text-white w-32 font-bold py-2 px-4 rounded"
      >
        Login
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {!error && isSubmitted && (
        <div>
          <div>
            <span>Email is : </span>
            <p className="text-lg text-orange-500">{userData.email}</p>
          </div>
          <div>
            <span>Password is : </span>
            <p className="text-lg text-orange-500">{userData.password}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
