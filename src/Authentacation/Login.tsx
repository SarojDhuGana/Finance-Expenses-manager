import React from "react";
import { useState } from "react";
import authBg from "../assets/img/auth_bg.jpg";
import icon from "../assets/img/icon.png";

export default function Login() {
  // const [user, setUser] = useState({
  //   name: "",
  //   password: "",
  // });
  return (
    <>
      <section>
        <div>
          <div
            className="h-screen bg-black"
            style={{
              backgroundImage: `url(${authBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-screen bg-black opacity-50 flex justify-center">
              <div className="border-2 border-blue-300 w-4/12 h-8/12 mt-25 bg-gray-800 px-4 py-4 rounded-xl flex flex-col text-white">
                <div className="flex items-center flex-col">
                  <img src={`${icon}`} alt="img" className="h-30" />
                </div>
                <div className="flex flex-col mb-2">
                  <h1 className="text-3xl font-medium">Login</h1>
                  <p className="text-xl font-medium">
                    Welcome back! Please enter your details
                  </p>
                </div>
                <form action="" method="GET" className="p-2">
                  <b className="font-medium">UserName</b>
                  <br />
                  <input
                    type="text"
                    name="userName"
                    className="p-2 w-sm rounded-sm border-2 border-blue-200 outline-none "
                  />{" "}
                  <br />
                  <b className="font-medium text-[18px]">Password </b>
                  <br />
                  <input
                    type="password"
                    name="password"
                    className="p-2 w-sm text-[18px] rounded-sm border-2 border-blue-200 outline-none"
                  />
                  <br />
                  <div className="flex justify-center ">
                    <button
                      type="submit"
                      className="mt-4 px-2 py-2 w-50 bg-[#3B82F6] rounded-xl text-[18px] font-medium hover:bg-white hover:text-[#0D9488]"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
