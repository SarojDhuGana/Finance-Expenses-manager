import { Link } from "react-router-dom";
import authBg from "../assets/img/bg.jpg";
import icon from "../assets/img/icon.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Forget() {
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
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
                stiffness: 100,
                damping: 15,
                mass: 1,
              }}
              className="
              border bg-transparent text-white  shadow-orange-300 border-orange-300 shadow-lg/30
              w-full sm:w-10/12 md:w-7/12 lg:w-4/12
              lg:ml-28 md:ml-20
              px-6 py-6 rounded-xl
            "
            >
              <div className="flex flex-col items-center mb-4">
                <img src={icon} alt="logo" className="h-24 sm:h-28" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-medium mb-1">
                Reset your Password
              </h1>
              <p className="mb-4 text-sm sm:text-base">
                Please enter your email and new password to reset
              </p>

              <form>
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
                />

                <label>Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
                />
                <div className="flex gap-1 mt-2 mb-3 text-white">
                  Don't want to reset?
                  <Link to="/login" className="underline text-orange-400">
                    Login
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 py-2 rounded hover:bg-orange-600"
                >
                  Reset Password
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
