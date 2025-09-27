"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be no more than 20 characters")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(/[^a-zA-Z0-9]/, "Password must include a special character"),
  confirmPassword: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be no more than 20 characters")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(/[^a-zA-Z0-9]/, "Password must include a special character"),
});

type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  useEffect(() => {
    document.title = "Queue Pilot - Reset Password";
  }, []);

  const onSubmit = (data: ResetPasswordSchema) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="max-w-md w-full mx-auto px-4 py-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-lg border border-zinc-800 space-y-6 backdrop-blur-sm">
        {/* Title */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-200">
            Reset your password 🔑
          </h2>
          <p className="text-sm md:text-md text-center text-gray-400 mt-2">
            Choose a new password to secure your account
          </p>
        </section>

        {/* Password */}
        <Input<ResetPasswordSchema>
          label="Password"
          id="password"
          type="password"
          register={register}
          error={errors.password}
        />

        {/* Confirm Password */}
        <Input<ResetPasswordSchema>
          label="Confirm Password"
          id="password"
          type="password"
          register={register}
          error={errors.password}
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
          <p className="text-center text-sm text-gray-400">
            Know your password?{" "}
            <NavLink
              to="/login"
              className="font-semibold text-pink-500 hover:underline"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
