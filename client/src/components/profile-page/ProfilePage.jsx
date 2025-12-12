import React, { useState } from 'react';
import { useProfileDetails } from '../../api/authApi';
// import { Link } from 'react-router';

export default function ProfilePage() {

    

    const { profile } = useProfileDetails();
    // const { edit } = useEditProfileDetails();
  // Set initial profile data
 

  // State to store profile data
  const [isEditing, setIsEditing] = useState(false);


  // // Toggle editing mode
  // const toggleEdit = () => {
  //   setIsEditing(!isEditing);

    
  // };

  return (
    <div className="profile-container">
    <h1>Profile Page</h1>
    
    <form className="profile-form">
      <div className="profile-info">
        
          <span>USERNAME: {profile.username}</span>
  
      </div>
      
      <div className="profile-info">
      
          <span>EMAIL: {profile.email}</span>
    
      </div>
    </form>
  </div>
  );
};

