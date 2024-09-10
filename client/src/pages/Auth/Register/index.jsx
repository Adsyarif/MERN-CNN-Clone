import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    console.log(event.target);
  };
  const handleEmailChange = (event) => {
    console.log(event.target.id);
  };

  return (
    <div className="flex item-start pt-8 pb-10 justify-center bg-red-100">
      <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <img src="/images/Header/logo.png" className="w-auto h-12 " />
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Create your CNN account
          </h2>
          <div className="text-sm mt-2">
            <Link
              to="/login"
              className="font-medium text-black hover:text-gray-700"
            >
              Already have account <span>Sign In</span>
            </Link>
          </div>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email-address"
                name="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
                placeholder="Password"
                className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleEmailChange}
              />
              <span className="absolute right-3 top-1/4 transform-y-1/2 cursor-pointer z-20">
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </span>
            </div>
          </div>
          <div className="flex item-center justify-between my-2">
            <div className="flex text-sm items-center">
              <p className="text-xs text-black-600 hover:text-gray-400">
                By clicking 'Create account' you agree to the Terms of Use and
                you acknowledge that you have read our Privacy and Policy. You
                further acknowledge that CNN and WarnerMedia affiliates mau use
                your email address for marketing, ads and other offers.
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
            >
              Create account
            </button>
          </div>
          <div className="flex item-center justify-between my-2">
            <div className="flex text-sm items-center">
              <p className="text-xs text-black-600 hover:text-gray-400">
                To opt-out at any time, see options available here.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
