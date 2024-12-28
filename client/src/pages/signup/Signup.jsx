import React from "react";
import GenderOption from "./GenderOption";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center mix-w-96 mx-auto">
      <div className="p-6 w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Signup <span className="text-blue-500">Messaging App</span>
        </h1>
        <form>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-1">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-1">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderOption />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account ?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 hover:btn-success">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
