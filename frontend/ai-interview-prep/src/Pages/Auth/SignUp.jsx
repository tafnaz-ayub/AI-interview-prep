import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle Sign Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";
    if(!fullName){
      setError("Please enter your full name.");
      return;
    }
    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    if(!password){
      setError("Please enter a password.");
      return;
    }
    setError("");
    //SignUp API call
    try{
      
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
      {/* Title */}
      <h3 className="text-lg font-semibold text-white">Create an Account</h3>
      <p className="text-xs text-gray-300 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>

      {/* Form */}
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="john@example.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />

        {error && <p className="text-red-400 text-xs">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 mt-2 text-white font-medium 
                     rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 
                     hover:opacity-90 transition"
        >
          Sign Up
        </button>

        {/* Switch to Login */}
        <p className="text-[13px] text-gray-300 mt-3 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setCurrentPage("login")}
            className="font-medium text-[#06B6D4] underline cursor-pointer"
          >
            Log in
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;