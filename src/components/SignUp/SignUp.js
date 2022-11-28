import React from "react";

const SignUp = () => {
  const handleSignup = (event) => {
    event.preventDefault();
  };
  return (
    <div className=" flex justify-center mb-4">
      <div className="card bg-base-100 shadow-xl w-2/6 mb-1">
        <div className="card-body">
          <h2 className="  text-4xl font-bold pb-4 text-center">
            Please! Register
          </h2>
          <form onSubmit={handleSignup}>
            <div className="form-control mb-4">
              <label className="input-group input-group-vertical">
                <span className="py-1 font-bold">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  name="name"
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="input-group input-group-vertical">
                <span className="py-1 font-bold">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  name="email"
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="input-group input-group-vertical">
                <span className="py-1 font-bold">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  name="password"
                />
              </label>
            </div>

            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
