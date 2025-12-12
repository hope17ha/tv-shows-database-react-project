import React from 'react';
import { useProfileDetails } from '../../api/authApi';
import { Link } from 'react-router'


export default function ProfilePage() {

    

    const { profile } = useProfileDetails();

  return (
    <div className="profile-container">

  <div className="profile-card">
    <h1>My Profile</h1>
    <div className="profile-info">
      <span>Username: {profile.username}</span>
    </div>

    <div className="profile-info">
      <span>Email: {profile.email}</span>
    </div>

  
    <div className="profile-actions">
    <Link to="/logout">
      <button>Logout</button>
    </Link>
    </div>
  </div>
</div>
  );
};

