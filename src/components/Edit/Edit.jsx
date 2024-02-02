import axios from "axios";
import useUser from "../../hooks/useUser";
import toast, { Toaster } from "react-hot-toast";

const Edit = () => {
  const [users] = useUser();
  const userProfile = users[0];
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const phone = e.target.phone.value;
    const linkedin = e.target.linkedin.value;
    const address = e.target.address.value;
    const title = e.target.title.value;
    const skill = e.target.skill.value;
    const bio = e.target.bio.value;

    const userInfo = {
      name,
      photo,
      phone,
      linkedin,
      address,
      title,
      skill,
      bio,
    };
    
    // update information
    axios.patch(`https://chain-tech-backend.vercel.app/users/${userProfile._id}`, userInfo)
    .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            toast.success("profile updated successfully")
        }
    })
  };

  return (
    <div className="container mt-5">
      <h2>Update a Profile</h2>
      <form onSubmit={handleUpdate}>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            defaultValue={userProfile?.name}
          />
        </div>

        {/* Photo Input */}
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            className="form-control"
            id="photo"
            placeholder="Enter Photo URL"
            defaultValue={userProfile?.photo}
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            defaultValue={userProfile?.email}
            disabled
          />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            defaultValue={userProfile?.phone}
          />
        </div>

        {/* LinkedIn URL Input */}
        <div className="form-group">
          <label htmlFor="linkedinUrl">LinkedIn URL:</label>
          <input
            type="text"
            className="form-control"
            id="linkedinUrl"
            name="linkedin"
            placeholder="Enter your LinkedIn URL"
            defaultValue={userProfile?.linkedin}
          />
        </div>

        {/* Address Input */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter your address"
            defaultValue={userProfile?.address}
          />
        </div>

        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter your title"
            defaultValue={userProfile?.title}
          />
        </div>

        {/* Skill Input */}
        <div className="form-group">
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            className="form-control"
            id="skill"
            name="skill"
            placeholder="Enter your skill"
            defaultValue={userProfile?.skill}
          />
        </div>

        {/* Bio Input */}
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            rows="4"
            placeholder="Enter your bio"
            defaultValue={userProfile?.bio}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Update
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default Edit;