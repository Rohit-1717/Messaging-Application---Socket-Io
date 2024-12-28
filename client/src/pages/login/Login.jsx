import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mix-w-96 mx-auto">
      <div className="p-6 w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Login <span className="text-blue-500">Messaging App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div className="flex flex-col  ">
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Forgot Password
            </a>
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Don't have an account ?
            </a>
          </div>

          <div>
            <button className="btn btn-block btn-sm mt-2 hover:btn-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
