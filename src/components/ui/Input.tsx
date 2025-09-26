"use client";

import { useState } from "react";
import type {
  UseFormRegister,
  FieldError,
  Path,
  FieldValues,
} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

type InputFieldProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
};

export default function Input<T extends FieldValues>({
  label,
  id,
  type = "text",
  register,
  error,
  className,
}: InputFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isCheckBox = type === "checkbox";
  return (
    <div
      className={`${
        isCheckBox ? "flex items-center flex-row-reverse gap-2" : ""
      }`}
    >
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          {...register(id)}
          className={`w-full px-4 py-2 rounded pr-10 text-white placeholder:text-gray-500 
            border border-zinc-700 focus:outline-none bg-zinc-900
            focus:ring-2 focus:ring-pink-500 focus:border-pink-500 
            transition duration-200 ${className} ${
            error ? "border-red-400 focus:ring-red-400" : "focus:ring-gray-200"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2.5 right-3 text-gray-500 hover:text-pink-500"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm mt-1 font-semibold">
          {error.message}
        </p>
      )}
    </div>
  );
}
