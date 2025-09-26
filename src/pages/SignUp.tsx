import { useForm } from "react-hook-form";
import { z } from "zod";

import GoogleIcon from "../assets/icons/google.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

// Updated schema: replace dob with username
const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .regex(/^[0-9]{10,15}$/, "Enter a valid mobile number"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be no more than 20 characters")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[0-9]/, "Must include a number")
    .regex(/[^a-zA-Z0-9]/, "Must include a special character"),
});

type SignUpSchema = z.infer<typeof signupSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
  });

  useEffect(() => {
    document.title = "Queue Pilot - Sign Up";
  }, []);

  const onSubmit = (data: SignUpSchema) => {
    console.log("Sign Up Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:py-12 md:py-9">
      <form className="max-w-xl w-screen mx-auto px-4 py-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-lg border border-zinc-800 space-y-5 backdrop-blur-sm">
        {/* Title */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-200">
            Get started with Queue Pilot 🚀
          </h2>
          <p className="text-sm md:text-md text-center text-gray-400 mt-2">
            Create your free account and start running jobs today!
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

        <div className="flex flex-col md:flex-row gap-4">
          {/* First Name */}
          <div className="w-full md:w-1/2">
            <Input<SignUpSchema>
              label="First Name"
              id="firstName"
              type="text"
              register={register}
              error={errors.firstName}
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-1/2">
            <Input<SignUpSchema>
              label="Last Name"
              id="lastName"
              type="text"
              register={register}
              error={errors.lastName}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Username */}
          <div className="w-full md:w-1/2">
            <Input<SignUpSchema>
              label="Username"
              id="username"
              type="text"
              register={register}
              error={errors.username}
            />
          </div>

          {/* Mobile */}
          <div className="w-full md:w-1/2">
            <Input<SignUpSchema>
              label="Mobile"
              id="mobile"
              type="tel"
              register={register}
              error={errors.mobile}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Email */}
          <div className="w-full md:w-1/2">
            <Input<SignUpSchema>
              label="Email"
              id="email"
              type="email"
              register={register}
              error={errors.email}
            />
          </div>

          {/* Password with toggle */}
          <div className="w-full md:w-1/2">
            <Input<SignUpSchema>
              label="Password"
              id="password"
              type="password"
              register={register}
              error={errors.password}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit(onSubmit)}
          className="bg-pink-600 font-semibold hover:bg-pink-700 text-white w-full"
        >
          <p>Sign Up</p>
        </Button>

        {/* Navigation Section */}
        <div>
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className=" font-semibold text-pink-500 hover:underline"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
