import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { Footer, FooterFeatures } from "../../../components/common/Footer";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordFocus, setIsPasswordFocus] = useState(false);
  const [validationErrors, setValidationErrors] = useState("");
  const [currentAccount, setCurrentAccout] = useState({
    email: "",
    password: "",
  });

  const [passwordValidation, setPasswordValidation] = useState({
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSymbol: false,
    isLengthValid: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPasswordFocus(false);
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        email: currentAccount.email,
        password: currentAccount.password,
      });
      alert(response.data.status.message);
    } catch (error) {
      if (error.status && error.response.data.status.code === 400) {
        setValidationErrors(error.response.data.status.message);
        console.log("error.response.data is: ", error.response.data);
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

  useEffect(() => {
    const validatePassword = () => {
      const hasLowerCase = /[a-z]/.test(currentAccount.password);
      const hasUpperCase = /[A-Z]/.test(currentAccount.password);
      const hasNumber = /[\d]/.test(currentAccount.password);
      const hasSymbol = /[!@#$%^&*]/.test(currentAccount.password);
      const isLengthValid = currentAccount.password.length >= 8;

      setPasswordValidation({
        hasLowerCase,
        hasUpperCase,
        hasNumber,
        hasSymbol,
        isLengthValid,
      });
    };

    validatePassword(currentAccount.password);
  }, [currentAccount.password]);

  console.log(validationErrors);

  return (
    <div className="h-screen">
      <div className="flex flex-col gap-10 items-center pt-20 pb-20 justify-center bg-red-100">
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
                  onChange={(e) => handleRegisterInputChange(e)}
                  value={currentAccount.email}
                  onKeyDown={() => {
                    setValidationErrors("");
                    setIsPasswordFocus(false);
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
                    setIsPasswordFocus(true);
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
                {passwordFocus && (
                  <div
                    className={`absolute top-full left-0 ${
                      currentAccount.password ? "block" : "hidden"
                    } z-[999] bg-white text-xs p-2 border rounded drop-shadow-md border-gray-500 z-100`}
                  >
                    <div
                      className={`${
                        passwordValidation.hasLowerCase
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {passwordValidation.hasLowerCase ? "✓" : "✗"} At least one
                      lowercase character.
                    </div>
                    <div
                      className={`${
                        passwordValidation.hasUpperCase
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {passwordValidation.hasUpperCase ? "✓" : "✗"} At least one
                      upperCase character.
                    </div>
                    <div
                      className={`${
                        passwordValidation.hasNumber
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {passwordValidation.hasNumber ? "✓" : "✗"} At least one
                      number character.
                    </div>
                    <div
                      className={`${
                        passwordValidation.hasSymbol
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {passwordValidation.hasSymbol ? "✓" : "✗"} At least one
                      symbol character.
                    </div>
                    <div
                      className={`${
                        passwordValidation.isLengthValid
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {passwordValidation.isLengthValid ? "✓" : "✗"} At least
                      have 8 length of characters.
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex item-center justify-between my-2">
              <div className="flex text-sm items-center">
                <p className="text-xs text-black-600 hover:text-gray-400">
                  By clicking 'Create account' you agree to the Terms of Use and
                  you acknowledge that you have read our Privacy and Policy. You
                  further acknowledge that CNN and WarnerMedia affiliates mau
                  use your email address for marketing, ads and other offers.
                </p>
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
                    // Jika validationErrors[key] bukan object, tampilkan langsung
                    return (
                      <p key={key} className="mb-2 text-sm">
                        {validationErrors[key]}
                      </p>
                    );
                  })
                ) : (
                  // Jika validationErrors bukan object, tampilkan langsung
                  <p className="mb-2 text-sm">{validationErrors}</p>
                )}
              </div>
            )}

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
      <footer className="bg-black pb-8 px-8">
        <FooterFeatures />
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
