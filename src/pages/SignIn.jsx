import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [form, setform] = useState({ email: "", password: "" });
  const successnotify = () =>
    toast("Login Successfull", {
      
      className: "bg-green-600 text-white font-semibold",
      progressClassName: "bg-white",
    });
  const failednotify = () =>
    toast("Login failed", {
    
      className: "bg-red-600 text-white font-semibold",
      progressClassName: "bg-white",
    });

  const navigate = useNavigate();
  const navpage = (e) => {
    e.preventDefault();
    if (
      form.email === "thirumalaiselvam4085@gmail.com" &&
      form.password === "1234"
    ) {
      successnotify();
      setTimeout(() => navigate("/"), 1500);
    } else {
      failednotify();
    }
  };

  return (
    <div className=" bg-[#14213d] h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={navpage}>
              <ToastContainer position="top-center" autoClose={2000} />
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setform({ ...form, email: e.target.value })}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  value={form.password}
                  onChange={(e) =>
                    setform({ ...form, password: e.target.value })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                // onClick={navpage}
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Dont have an account yet?{" "}
                <NavLink
                  to="/signup"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Sign up
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
