import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const successnotify = () =>
    toast("Created Successfully", {
      className: "bg-green-600 text-white font-semibold",
      progressClassName: "bg-white",
    });
  const failednotify = () =>
    toast("Failed", {
      className: "bg-red-600 text-white font-semibold",
      progressClassName: "bg-white",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.username === "thiru" &&
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
    <div className="bg-[#14213d]  h-screen">
      <div className="flex flex-col items-center  justify-center px-6 py-8 mx-auto h-screen ">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <NavLink
                  to="/"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default SignUp;
