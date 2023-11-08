import {  useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
    // const { signIn, googleProvider } = useContext();
    const [show, setShow] = useState(false);
    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
    //   signIn(email, password)
    //     .then((result) => {
    //       console.log(result.user);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    };
    const handleGoogleLogin = () => {
    //   googleProvider()
    //     .then((result) => {
    //       console.log(result.user);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    };
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid grid-flow-row">
            <h1 className="text-3xl font-bold text-center mt-10">
              Login Account
            </h1>
            <div className="card flex-shrink-0 lg:w-[400px] shadow-2xl  bg-gradient-to-r from-[#3873b6] to-[#5d9ee2] border-none">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered text-white  bg-transparent border-2 border-white rounded-[100px]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-bold">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered text-white w-full bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="absolute top-4 right-3"
                    >
                      {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn rounded-[100px] bg-[#000000] border-none text-white">
                    Login
                  </button>
                </div>
                <div className="form-control mt-3">
                  <button
                    onClick={handleGoogleLogin}
                    className="btn rounded-[100px] bg-[#000000] border-none text-white"
                  >
                    Login with google
                  </button>
                </div>
                <p className="text-white">
                  Do not have account, Please{" "}
                  <Link to="/register">
                    <span className="text-blue-700 font-bold">Register</span>
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;