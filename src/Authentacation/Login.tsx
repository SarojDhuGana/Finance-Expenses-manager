import authBg from "../assets/img/bg.jpg";
import icon from "../assets/img/icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email == "saroj.dhungana1031@gmail.com" && password == "pass123") {
      toast.success("Login successfull");
      navigate("/");
    } else {
      toast.error("Password and Email you have provided incorrect");
    }
  };
  return (
    <section>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full min-h-screen flex justify-center lg:justify-start items-center px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 18,
              mass: 0.96,
            }}
            className="
              border bg-transparent text-white  shadow-orange-300 border-orange-300   shadow-lg/30
              w-full sm:w-10/12 md:w-7/12 lg:w-4/12
              lg:ml-28 md:ml-20
              px-6 py-6 rounded-xl
            "
          >
            <div className="flex flex-col items-center mb-4">
              <img src={icon} alt="logo" className="h-24 sm:h-28" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-medium mb-1 text-orange-400">
              Welcome Back
            </h1>

            <p className="mb-4 text-sm sm:text-base">
              Login to your Finance management Account
            </p>

            <form method="">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
                required
              />

              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
                required
              />
              <div className="flex mt-2 mb-2 text-white text-sm sm:text-base">
                <Link to="/forgot" className="text-orange-400">
                  Forgot password?
                </Link>
              </div>
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="w-full bg-orange-500 py-2 rounded hover:bg-orange-600"
              >
                Login
              </button>

              <div className="flex gap-1 mt-2 text-white text-sm sm:text-base">
                Don't have an account?
                <Link to="/signup" className="text-orange-400">
                  Signup
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
