
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Profile = () => {     
  const [users] = useUser();
  const userProfile = users[0];
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Profile</h2>
              <div className="text-center">
                <img
                  src={userProfile?.photo || "default-profile-image.jpg"}
                  alt="User Profile"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <h3 className="mb-3">{userProfile?.name}</h3>
                <p className="text-muted mb-2">{userProfile?.title}</p>
                <p className="text-muted mb-4">{userProfile?.bio}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Email:</strong> {userProfile?.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone Number:</strong> {userProfile?.phone}
                </li>
                <li className="list-group-item">
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={userProfile?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {userProfile?.linkedin}
                  </a>
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {userProfile?.address}
                </li>
                <li className="list-group-item">
                  <strong>Skills:</strong> {userProfile?.skill}
                </li>
              </ul>
              <Link to="/edit-profile" className="btn btn-primary mt-3">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
