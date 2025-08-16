import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label className="text-sm text-gray-200">{label}</label>

      {/* Input Box */}
      <div
        className="flex items-center w-full px-3 py-2 rounded-lg
                   bg-slate-800 border border-slate-600
                   focus-within:border-[#06B6D4] transition"
      >
        <input
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-100
                     placeholder-gray-400 text-sm"
          value={value}
          onChange={(e) => onChange(e)}
        />

        {/* Password Toggle */}
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-[#06B6D4] cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-gray-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;