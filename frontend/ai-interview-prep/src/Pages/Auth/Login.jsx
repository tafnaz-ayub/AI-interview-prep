import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axioInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../context/userContext'
const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {updateUser} = useContext(UserContext);
  const navigate = useNavigate()

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault()
    // TODO: connect API
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password");
      return;
    }
    setError("")
    //Login API call
    try{
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
  email,
  password,
});

const { token } = response.data;

if (token) {
  localStorage.setItem("token", token);
  updateUser(response.data); // Update user context with the response data
  navigate("/dashboard");
}
    }catch(error){
      if (error.response && error.response.data.message){
        setError(error.response.data.message);
      } else{
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center bg-[#0F172A] rounded-2xl shadow-xl">
      <h3 className="text-xl font-semibold text-white">Welcome Back</h3>
      <p className="text-sm text-gray-300 mt-2 mb-6">
        Please enter your details to log in
      </p>

      {error && (
        <div className="mb-4 text-sm text-red-400 bg-red-900/30 p-2 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          text="Email Address"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
        {error && <p className=''>{error}</p>}
        <button
          type="submit"
          className="w-full mt-4 py-2 rounded-lg text-white font-medium
                     bg-gradient-to-r from-[#7C3AED] to-[#2563EB]
                     hover:from-[#6D28D9] hover:to-[#1D4ED8] 
                     transition-all duration-300 shadow-lg"
        >
          Log In
        </button>
      </form>

      <p className="text-xs text-gray-400 mt-6 text-center">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={() => setCurrentPage("signup")}
          className="text-[#06B6D4] hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  )
}

export default Login