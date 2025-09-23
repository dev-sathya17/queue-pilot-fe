"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChevronLeft } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="max-w-md w-full mx-auto px-4 py-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-lg border border-zinc-700 space-y-6 backdrop-blur-sm">
        {/* Title */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-200">
            Forgot your password? 🔒
          </h2>
          <p className="text-sm md:text-md text-center text-gray-400 mt-2">
            No worries — we&apos;ll help you reset it
          </p>
        </section>

        {/* Email */}
        <Input<ForgotPasswordSchema>
          label="Email"
          id="email"
          type="email"
          register={register}
          error={errors.email}
        />

        {/* Submit Button */}
        <Button
          onClick={handleSubmit(onSubmit)}
          className="bg-pink-600 font-semibold hover:bg-pink-700 text-white"
        >
          <p>Reset Password</p>
        </Button>

        {/* Navigation Section */}
        <div>
          <NavLink
            to="/login"
            className="flex items-center justify-center w-full font-semibold text-pink-500 hover:underline"
          >
            <ChevronLeft />
            <p className="text-center text-sm">Back to Sign In</p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
