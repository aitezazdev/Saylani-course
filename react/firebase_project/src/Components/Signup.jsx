import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { app } from '../firebaseConfig';
import { toast } from'react-toastify';
import { Link } from 'react-router-dom';

const Signup = () => {
    const auth = getAuth(app);
    const [formData, setFormData] = useState({email: "", password: ""});
    
    const handleChange = (e) => {
        // const {name, value} = e.target;
        setFormData({...formData, [e.target.name]: e.target.value});
        // console.log(formData); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        console.log(response);
        console.log(formData);
        setFormData({email: "", password: ""});
        toast.success("User registered successfully!");
    }

  return (
    <div className='w-[380px] bg-zinc-200 p-5 rounded mx-auto mt-20'>
        <h1 className='text-4xl text-center my-3'>Signup</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <span className='mb-1'>Email:</span>
            <input onChange={handleChange} value={formData.email} required className='px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-300 mb-6' autoComplete='off' type="email" name="email" placeholder="example@email.com" />
            <span className='mb-1'>Password:</span>
            <input onChange={handleChange} value={formData.password} required className='px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-300 mb-6' autoComplete='off' type="password" name="password" placeholder="Password" />
            <button className='bg-blue-500 hover:bg-blue-600 text-lg text-white py-2 px-3 mb-6 rounded' type="submit">Signup</button>
        </form>
        <p>already have an account? <Link to="/signin" className='text-blue-600 mx-2 underline'>Signin</Link></p>
    </div>
  )
}

export default Signup