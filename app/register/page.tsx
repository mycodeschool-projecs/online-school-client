"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import ButtonFull from "@/components/ButtonFull";
import Link from "next/link";
import UserService from "@/modules/user/services/UserService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { LoginContext } from "@/modules/context/LoginProvider";
import LoginContextType from "@/modules/context/LoginContextType";
import RegisterResponse from "@/modules/user/dto/RegisterResponse";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUserCookie } = useContext(LoginContext) as LoginContextType;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const registerRequest = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    if (registerRequest.password !== registerRequest.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      const userService = new UserService();
      const registerResponse = await userService.register({
        firstName: registerRequest.firstName,
        lastName: registerRequest.lastName,
        phoneNumber: registerRequest.phoneNumber,
        email: registerRequest.email,
        password: registerRequest.password,
      });
      toast.success("Registration successful!", {
        position: "top-center",
        autoClose: 3000,
      });

      setUserCookie(registerResponse as RegisterResponse);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      toast.error("Registration failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="flex items-center justify-center md:py-4 mt-20 mx-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-4 text-start font-jakarta bg-secondary p-10 max-w-screen-lg w-full relative z-10 rounded-xl mx-auto shadow-md flex flex-col items-center mt-8 md:mt-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl xl:text-3xl font-extrabold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Înregistrare
        </motion.h1>

        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col items-center">
            <button
              className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 border border-primary text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow-lg"
              onClick={() =>
                window.open("https://accounts.google.com/signin", "_blank")
              }
            >
              <div className="bg-white p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              <span className="ml-4">Înregistrare cu Google</span>
            </button>
          </div>

          <div className="my-8 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Sau loghează-te cu email
            </div>
          </div>

          <motion.form
            onSubmit={handleRegister}
            className="mx-auto max-w-xs flex flex-col gap-3 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white"
              type="text"
              placeholder="Prenume"
              name="firstName"
              required
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white mt-5"
              type="text"
              placeholder="Nume"
              name="lastName"
              required
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white mt-5"
              type="text"
              placeholder="Număr de telefon"
              name="phoneNumber"
              pattern="^[0-9]{10}$"
              title="Phone number must be 10 digits"
              required
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white mt-5"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white mt-5"
              type="password"
              placeholder="Parolă"
              name="password"
              required
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white mt-5"
              type="password"
              placeholder="Confirmă Parola"
              name="confirmPassword"
              required
            />

            <ButtonFull text={loading ? "Înregistrare..." : "Înregistrare"} />

            <p className="mt-6 text-xs text-gray-600 text-center">
              Sunt de acord cu
              <Link
                href="/terms"
                className="border-b border-gray-500 hover:text-primary hover:border-primary border-dotted"
              >
                {" "}
                Termenii și condițiile{" "}
              </Link>
              și cu
              <Link
                href="#"
                className="border-b border-gray-500 hover:text-primary hover:border-primary border-dotted"
              >
                {" "}
                Politica de confidențialitate{" "}
              </Link>
            </p>

            <p className="mt-6 text-xs text-gray-600 text-center">
              Ai deja un cont?
              <Link
                href="/login"
                className="border-b border-gray-500 hover:text-primary hover:border-primary border-dotted"
              >
                {" "}
                Loghează-te!
              </Link>
            </p>
          </motion.form>
        </div>
      </motion.div>

      <ToastContainer />
    </motion.section>
  );
};

export default RegisterPage;
