import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Audio } from "react-loader-spinner";

const Login = () => {
  const { login, loading, setLoading, loginGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return (
      <div className="flex justify-center text-center py-60">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        console.log(result);

        // get jwt token
        fetch(`https://service-review-server-assignment-11.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("review-assignment-11", data.token);
            setLoading(false);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleIN = () => {
    loginGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" flex justify-center mb-4">
      <div className="card bg-base-100 shadow-xl w-2/6 mb-1">
        <div className="card-body">
          <h2 className="  text-4xl font-bold pb-4 text-center">Log In</h2>
          <form onSubmit={handleLogin}>
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
          <div className="mt-2 border-t">
            <p className="mt-3">
              New here? Please{" "}
              <Link to="/signup" className=" text-blue-700">
                Sign Up
              </Link>
            </p>
            <button className="btn w-full mt-4" onClick={handleGoogleIN}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
