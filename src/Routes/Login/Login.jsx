import React from "react";
import Slider from "../../Componets/Slider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted: " + JSON.stringify(data));
  };

  return (
    <div className="grid grid-cols-2  mx-10 p-1 py-5">
      <div className="w-[900px]">
        <Slider />
      </div>
      <div className="justify-self-end">
        <div className="w-[350px] h-[480px] bg-blue-100 rounded-4xl content-center justify-self-end mx-10 shadow-2xl shadow-gray-200 border-2 border-gray-400">
          <div className="text-5xl p-2 text-gray-600 font-bold font-serif text-center">
            Login
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-4 mt-5  space-y-3">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email",
                },
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-gray-100 text-gray-900 hover:border-2 hover:border-black "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full my-3 bg-gray-100 text-gray-900 hover:border-2 hover:border-black "
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
            <p className="mt-4 text-gray-600 text-md text-center">
              Create Acount
              <Link to="/register" className="text-blue-600 hover:underline">
                {" "}
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
