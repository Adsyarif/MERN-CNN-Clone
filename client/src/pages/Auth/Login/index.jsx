import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { Footer, FooterFeatures } from "../../../components/common/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState("");
  const [currentAccount, setCurrentAccout] = useState({
    email: "",
    password: "",
    isRegister: false,
  });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: currentAccount.email,
        password: currentAccount.password,
      });
      const data = response.data;
      console.log("Response data: ", data);
      alert(data.status.message);
      setCurrentAccout((prev) => ({
        ...prev,
        isRegister: true,
      }));
      if (currentAccount.isRegister) {
        navigate("/");
      }
      console.log(currentAccount);
    } catch (error) {
      if (error.status && error.response.data.status.code === 400) {
        setValidationErrors(error.response.data.status.message);
        console.log("error: ", error.response.data);
      }
    }
  };

  const handleRegisterInputChange = (event) => {
    if (event.target.id === "password") {
      setCurrentAccout((prev) => ({
        ...prev,
        password: event.target.value,
      }));
    } else if (event.target.id === "email-address") {
      setCurrentAccout((prev) => ({
        ...prev,
        email: event.target.value,
      }));
    }
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col gap-10 items-center pt-20 pb-20 justify-center bg-red-100">
        <div className="max-w-lg w-full p-10 bg-white rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <img src="/images/Header/logo.png" className="w-auto h-12 " />
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Log in to your CNN account
            </h2>
            <div className="text-sm mt-2">
              <Link
                to="/register"
                className="font-medium text-black hover:text-gray-700"
              >
                Don't have an account? <span>Sign up</span>
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
                  onChange={(e) => handleRegisterInputChange(e)}
                  value={currentAccount.email}
                  onKeyDown={() => {
                    setValidationErrors("");
                  }}
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="password"
                  required
                  placeholder="Password"
                  className="text-gray-900 border border-gray-800 rounded block w-full p-3 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={(e) => handleRegisterInputChange(e)}
                  onKeyDown={() => {
                    setValidationErrors("");
                  }}
                  value={currentAccount.password}
                />
                <span
                  className="absolute right-3 top-1/4 transform-y-1/2 cursor-pointer z-20"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </span>
              </div>
            </div>
            <div className="flex item-center justify-between my-2">
              <div className="flex text-sm items-center">
                <Link
                  to="/forgot-password"
                  className="text-xs text-black-600 hover:text-gray-400"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            {validationErrors && (
              <div className="text-red-600 mt-8">
                {typeof validationErrors === "object" ? (
                  Object.keys(validationErrors).map((key) => {
                    if (typeof validationErrors[key] === "object") {
                      return Object.values(validationErrors[key]).map(
                        (error, index) => (
                          <p key={index} className="mb-2 text-sm">
                            {error}
                          </p>
                        )
                      );
                    }
                    return (
                      <p key={key} className="mb-2 text-sm">
                        {validationErrors[key]}
                      </p>
                    );
                  })
                ) : (
                  <p className="mb-2 text-sm">{validationErrors}</p>
                )}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-md font-bold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-black pb-8 px-8">
        <FooterFeatures />
        <Footer />
      </footer>
    </div>
  );
};

export default Login;
