import React from "react";
import Slider from "../../Componets/Slider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
  file: Yup.mixed().test("required", "File is required", (value) => value && value.length > 0),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert("Form submitted: " + JSON.stringify(data));
  };
  return (
    <div className="grid grid-cols-2   gap-[200px]  w-screen mx-10 p-1 py-5 items-center">
      {/* Left Side - Slider (Unchanged Size) */}
      <div className="w-[900px] h-[520px]">
        <Slider />
      </div>

      {/* Right Side - Form (Compact & Centered) */}
      <div className="flex flex-col items-center justify-self-end w-[400px] h-[650px] bg-blue-100 shadow-2xl shadow-gray-200 border-2 border-gray-400 rounded-3xl p-6 mx-auto">
        <h2 className="text-4xl font-bold text-gray-500 mb-4 font-serif">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-3">
          {/* Username */}
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
            className="input input-bordered w-full bg-gray-100 text-gray-600"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          {/* Email */}
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full bg-gray-100 text-gray-600"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-gray-100 text-gray-600"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {/* Phone Number */}
          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number"
            className="input input-bordered w-full bg-gray-100 text-gray-600"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}

          {/* File Upload */}
          <input
            {...register("file")}
            type="file"
            className="file-input file-input-bordered w-full bg-gray-100 text-gray-400"
          />
          {errors.file && <p className="text-red-500">{errors.file.message}</p>}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-md">
          Already have an account?
          <Link to="/login" className="text-blue-600 hover:underline">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
