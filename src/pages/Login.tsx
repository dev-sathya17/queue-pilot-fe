import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import Input from "../components/Input";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleIcon from "../assets/icons/google.svg";
import { useEffect } from "react";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be no more than 20 characters")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(/[^a-zA-Z0-9]/, "Password must include a special character"),

  keepMeSignedIn: z.boolean().optional(),
});

type LoginSchema = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    document.title = "Queue Pilot - Login";
  }, []);

  const onSubmit = (data: LoginSchema) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="max-w-md w-full mx-auto px-4 py-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-lg border border-zinc-800 space-y-6 backdrop-blur-sm">
        {/* Title */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-200">
            Welcome back to Queue Pilot👋
          </h2>
          <p className="text-sm md:text-md text-center text-gray-400 mt-2">
            Let&apos;s get you signed in
          </p>
        </section>

        {/* OAuth with Google Section */}
        <section>
          <Button className="space-x-2 font-semibold bg-white/10 hover:bg-white/20 text-gray-200 border border-zinc-700 transition">
            <img src={GoogleIcon} alt="google-logo" className="w-7 h-7" />
            <p>Sign in with Google</p>
          </Button>
        </section>

        {/* Divider */}
        <div className="flex items-center space-x-4">
          <hr className="flex-grow border-zinc-700" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-zinc-700" />
        </div>

        {/* Email */}
        <Input<LoginSchema>
          label="Email"
          id="email"
          type="email"
          register={register}
          error={errors.email}
        />

        {/* Password with toggle */}
        <Input<LoginSchema>
          label="Password"
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
          <p>Sign In</p>
        </Button>

        {/* Reset Password */}
        <div className="flex items-center justify-between w-full">
          <Input<LoginSchema>
            label="Remember Me"
            id="keepMeSignedIn"
            type="checkbox"
            register={register}
            error={errors.keepMeSignedIn}
          />
          <NavLink
            to="/forgot-password"
            className="mb-1 text-pink-500 hover:underline"
          >
            Forgot Password?
          </NavLink>
        </div>

        {/* Navigation Section */}
        <div>
          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <NavLink
              to="/sign-up"
              className=" font-semibold text-pink-500 hover:underline"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
