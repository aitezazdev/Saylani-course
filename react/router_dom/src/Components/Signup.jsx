import React, { useRef } from 'react'

const Signup = () => {

  const searchRef = useRef();

  const handleSearch = () => {
    console.log(searchRef.current);
    searchRef.current.focus();
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md bg-white mx-auto mt-16 p-6 shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 p-4">Signup</h1>
      <input
        type='text' placeholder='Search ...' ref={searchRef}
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      {/* <div className='flex gap-4'> */}
      <button onClick={handleSearch} className=" bg-blue-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">Signup</button>
      {/* <button onClick={() => console.log("clicked")} className=" bg-blue-600 text-white font-semibold px-2 py-2 mt-4 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">Change State</button> */}
      {/* </div> */}
    </div>

  )
}

export default Signup;