import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react'
import { app } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({email: "", password: ""});
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            toast.success("User logged in successfully!");
            setFormData({email: "", password: ""});
        } catch (error) {
            toast.error(`Login failed: ${error.message}`);
        }
    }

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            toast.success("Google Sign-In Successful!");
        } catch (error) {
            toast.error(`Google Sign-In Error: ${error.message}`);
        }
    }

    return (
        <div className='w-[380px] bg-zinc-200 p-5 rounded mx-auto mt-20'>
            <h1 className='text-4xl text-center my-3'>Signin</h1>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <span className='mb-1'>Email:</span>
                <input 
                    onChange={handleChange} 
                    value={formData.email} 
                    required 
                    className='px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-300 mb-6' 
                    autoComplete='off' 
                    type="email" 
                    name="email" 
                    placeholder="example@email.com" 
                />
                <span className='mb-1'>Password:</span>
                <input 
                    onChange={handleChange} 
                    value={formData.password} 
                    required 
                    className='px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-300 mb-6' 
                    autoComplete='off' 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                />
                <button 
                    className='bg-green-500 hover:bg-green-600 text-lg text-white py-2 px-3 mb-2 rounded' 
                    type="submit"
                >
                    Signin
                </button>
                <p className='text-center mb-2'>or</p>
                <button 
                    type="button"
                    onClick={signInWithGoogle} 
                    className='bg-blue-500 hover:bg-blue-600 text-lg text-white py-2 px-3 mb-6 rounded'
                >
                    Signin with Google
                </button>
            </form>
            <p>do not have an account? <Link to="/" className='text-blue-600 mx-2 underline'>Signup</Link></p>
        </div>
    )
}

export default Signin;