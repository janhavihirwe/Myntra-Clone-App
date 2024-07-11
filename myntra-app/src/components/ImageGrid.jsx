import React, { useEffect, useState } from 'react'
import './ImageFrid.css'
import axios from 'axios';

function ImageGrid() {
    const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null);     // State for error handling

  useEffect(() => {
    axios.get('/db.json') // Adjust the path according to your project structure
        .then(response => {
            setImages(response.data.images); // Ensure this matches the structure of your db.json
            setLoading(false); // Set loading to false once images are fetched
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            setError('Failed to fetch images');
            setLoading(false); // Set loading to false on error
        });
}, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
  }

  return (
    <div className="image-grid">
      {images.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid