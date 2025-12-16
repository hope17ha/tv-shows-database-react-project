# TV Shows Database React Project

A React application to browse and explore popular TV shows. Users can register, login, view show details, create shows and comment.

## Features

- User authentication (register, login, logout)
- Browse TV shows catalog
- Create your own post
- Comment on TV Shows and edit/delete your own posts and comments
- View detailed information for each show
- Form validation (email, password, username)
- Persistent login using localStorage
- Error notifications via `react-toastify`

## Tech Stack

- React
- React Router
- Context API for state management
- Custom hooks for API calls and forms
- Fetch API for backend communication
- CSS for styling

## Project Structure

client/
├─ src/
│ ├─ api/ # API hooks
│ ├─ components/ # React components
│ ├─ contexts/ # Context providers
│ ├─ hooks/ # Custom hooks
│ ├─ pages/ # App pages (Home, Login, Register, TV Shows)
│ ├─ utils/ # Utilities (validators, requester)
│ └─ App.jsx
server/
├─ index.js # Backend entry point
├─ routes/ # API routes

bash
Copy code

## Installation

```bash
git clone https://github.com/hope17ha/tv-shows-database-react-project.git
cd tv-shows-database-react-project
Install dependencies for client:

bash
Copy code
cd client
npm install
Install dependencies for server:

bash
Copy code
cd ../server
node server.js
Running the Project
Start the backend server:

bash
Copy code
npm run dev
Start the frontend client:

bash
Copy code
cd client
npm start
Visit http://localhost:5173 in your browser.