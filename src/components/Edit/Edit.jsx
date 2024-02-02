

const Edit = () => {
    return (
        <div className="container mt-5">
      <h2>Update a Profile</h2>
      <form>
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        {/* Photo Input */}
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input type="text" className="form-control" id="photo" placeholder="Enter Photo URL" />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
        </div>

        {/* LinkedIn URL Input */}
        <div className="form-group">
          <label htmlFor="linkedinUrl">LinkedIn URL:</label>
          <input type="text" className="form-control" id="linkedinUrl" placeholder="Enter your LinkedIn URL" />
        </div>

        {/* Address Input */}
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" />
        </div>

        {/* Title Input */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" id="title" placeholder="Enter your title" />
        </div>

        {/* Skill Input */}
        <div className="form-group">
          <label htmlFor="skill">Skill:</label>
          <input type="text" className="form-control" id="skill" placeholder="Enter your skill" />
        </div>

        {/* Bio Input */}
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea className="form-control" id="bio" rows="4" placeholder="Enter your bio"></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
    );
};

export default Edit;