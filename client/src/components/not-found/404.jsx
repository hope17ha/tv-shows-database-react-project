
import React from 'react';
import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#B5838D', fontWeight: 'bold' }}>
        Go back to Home
      </Link>
    </div>
  );
}
