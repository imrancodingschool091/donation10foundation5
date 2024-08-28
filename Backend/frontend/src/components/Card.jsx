import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageUrl,id }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <Link to={`/details/${id}`}>View Details</Link>
       
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '400px',
    margin: '20px auto',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '340px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '.8rem',
    marginBottom: '20px',
    color: '#666',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  '@media (min-width: 768px)': {
    card: {
      flexDirection: 'row',
    },
    image: {
      width: '40%',
      height: '100%',
    },
    content: {
      width: '60%',
    },
  },
};

export default Card;
