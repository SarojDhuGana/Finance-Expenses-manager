import authBg from "../assets/img/bg.jpg";
import icon from "../assets/img/icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log({ name, email, password });
    }, 2000);
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
          <div
            className="
              border border-blue-200 bg-transparent text-white
              w-full sm:w-10/12 md:w-7/12 lg:w-4/12
              lg:ml-28
              px-4 py-4 rounded-xl flex flex-col
            "
          >
            <div className="flex items-center flex-col mb-2">
              <img src={icon} alt="img" className="h-24 sm:h-28" />
            </div>

            <div className="flex flex-col mb-2">
              <h1 className="text-2xl sm:text-3xl font-medium">Sign up</h1>
              <p className="text-base sm:text-xl font-medium">
                Please fill your details.
              </p>
            </div>

            <form className="p-2" onSubmit={handleSubmit}>
              <b className="font-medium">UserName</b>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
              />

              <b className="font-medium text-[18px]">Email</b>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
              />

              <b className="font-medium text-[18px]">Password</b>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-3 rounded text-black outline-blue-500 hover:outline-indigo-500 bg-amber-50"
              />

              <p className="mt-2 text-sm sm:text-base">
                Already have your account in Finance Manager?
                <Link to="/login" className="underline text-blue-300 ml-2">
                  Login
                </Link>
              </p>

              <div className="flex justify-center mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full bg-orange-500 py-2 rounded hover:bg-orange-600
                    flex items-center justify-center
                    disabled:opacity-70 disabled:cursor-not-allowed
                  "
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Loading...
                    </span>
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
