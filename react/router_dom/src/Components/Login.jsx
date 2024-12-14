import React, { useState } from "react";

const Login = () => {

  // Controlled Component
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
    })
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md bg-white mx-auto mt-16 p-6 shadow-lg rounded-lg border border-gray-200">
  <h1 className="text-4xl font-bold text-gray-800 p-4">Login</h1>
  <form onSubmit={handleSubmit} className="w-full space-y-4">
    <label className="block">
      <span className="text-gray-600 font-medium">Email:</span>
      <input
        value={formData.email}
        onChange={handleChange}
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </label>
    <label className="block">
      <span className="text-gray-600 font-medium">Password:</span>
      <input
        value={formData.password}
        onChange={handleChange}
        name="password"
        type="password"
        required
        placeholder="Enter your password"
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </label>
    <input
      type="submit"
      value={"Login"}
      className="w-full bg-blue-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
    />
  </form>
</div>

  );
};

export default Login;
