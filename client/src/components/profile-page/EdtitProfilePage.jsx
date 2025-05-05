import { useNavigate } from "react-router";
import { useEditProfileDetails, useProfileDetails } from "../../api/authApi";

export default function EditProfilePage() {

    const { profile } = useProfileDetails();
    const { edit } = useEditProfileDetails();
    const navigate = useNavigate();
   

    
  
    const formAction = async (formData) => {
        const profileData = Object.fromEntries(formData);
        console.log(profileData);

        awaitedit(profileData);

        navigate('/profile');
    }

    return (

        <form action={formAction} className="profile-form">
        <div className="profile-info">
          <label htmlFor="username">Username:</label>
          
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={profile.username}
            />
        </div>
        
        <div className="profile-info">
          <label htmlFor="email">Email:</label>
        
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={profile.email}
            />
        </div>
  
        <div className="profile-actions">
          <button className="edit-button">Save Changes
          </button>
          <button className="delete-button">Cancel</button>
        </div>
      </form>
    )

}