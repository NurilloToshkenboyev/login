import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { Link, useNavigate } from "react-router-dom";
import { saveState } from "../../config/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request.post("/login", data)
      .then((res) => {
        saveState("user", { ...res.data.user, token: res.data.accessToken });
        navigate("/", { replace: true });
      })
      .catch(() => {
        toast.error("Password or email is incorrect");
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link className="text-purple-600 hover:underline" to="/register">
              Register
            </Link>
          </p>
          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                type="email"
                className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                {...register("password", { required: true })}
                placeholder="Password"
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <button
                className="w-full px-3 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};