/* eslint-disable no-useless-escape */
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  // context
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phoneNumber.value;
    const linkedin = e.target.linkedinProfile.value;
    const address = e.target.address.value;
    const title = e.target.title.value;
    const skill = e.target.skill.value;
    const bio = e.target.bio.value;

    const userInfo = { name, photo, email, password, phone, linkedin, address, title, skill, bio };
    // validation
    if (password.length < 6) {
      toast.error("password should at least 6 character or longer").return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("your password at least one uppercase character");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      console.log(
        "Your password should contain at least one special character"
      );
      toast.error(
        "Your password should contain at least one special character"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("user log in successful");
        e.target.reset;

        axios.post("https://chain-tech-backend.vercel.app/users", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            console.log("user added");
            toast.success("user created successfully");
          }
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/email-already-in-use") {
          toast.error("email already in use");
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
              <form onSubmit={handleRegister}>
                {/* Name Field */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Photo URL Field */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="photoUrl"
                    name="photo"
                    placeholder="Enter your photo URL"
                    required
                  />
                </div>

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

                 {/* Phone Number Field */}
                 <div className="form-group mb-2">
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Facebook Profile Link Field */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="linkedinProfile"
                    name="linkedinProfile"
                    placeholder="Enter your LinkedIn profile link"
                    required
                  />
                </div>

                {/* Address Field */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    required
                  />
                </div>

                {/* Title Fields */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter Your Title"
                  />
                </div>
                {/* Skill Fields */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="skill"
                    name="skill"
                    placeholder="Enter Your Skill"
                  />
                </div>
                {/* Bio Fields */}
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="bio"
                    name="bio"
                    placeholder="Enter your Bio"
                  />
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-2"
                >
                  Register
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

export default Registration;
