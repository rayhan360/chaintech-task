# Account Management
This application includes features for user authentication, registration, and profile management.

## Features

- **Login Page (`Login.js`):**
  - Allows users to log in with their email and password.
  - Provides error handling for incorrect login credentials.

- **Registration Page (`Registration.js`):**
  - Allows users to register by providing personal information.
  - Validates password strength and uniqueness of the email.
  - Automatically logs in the user after successful registration.

- **Profile Page (`Profile.js`):**
  - Displays the user's profile information.
  - Allows users to edit their profile.

- **Custom Hook (`useUser.js`):**
  - Fetches user data based on the authenticated user's email using `react-query`.
  - Provides a refetch function to manually trigger data refetching.

## Technologies Used

- React
- React Router
- Bootstrap
- React Query
- Axios

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/rayhan360/chaintech-task.git
2. cd chaintech-task
3. npm install
4. npm start

This is Backend Code Repository: https://github.com/rayhan360/chaintech-task-backend