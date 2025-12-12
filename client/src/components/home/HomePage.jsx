import React from 'react';
import { Link } from 'react-router';
import { useUserContext } from '../../contexts/UserContext';

const HomePage = () => {

  const {email} = useUserContext();

  return (
    <div className="home-page">
      
      <h1>Welcome to the TV Shows Database</h1>
      {!email ? (   <div className="auth-links">
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div> ) : ''}
    
      <p>This is a simple site to explore popular TV shows!</p>
      <p>Here, you can browse through a collection of TV shows and discover new ones to watch.</p>
      <Link to={'/tv-shows'} className="details">Browse through the Catalog</Link>
    </div>
  );
};

export default HomePage;