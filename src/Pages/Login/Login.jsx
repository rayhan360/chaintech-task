import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successful");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("User not found. Please check your email.");
        } else if (error.code === "auth/invalid-login-credentials") {
          toast.error(
            "Invalid email or password. Please double-check your email and password."
          );
        } else {
          toast.error("please provide valid password and email");
        }
      });
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Please Registration
              </h2>
              <form onSubmit={handleLogin}>
                {/* Email Field */}
                <div className="form-group mb-2">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="form-group mb-2">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {/* Register Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-2"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
