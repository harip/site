import React, { useState } from 'react';
import './Distractions.css'; 
import { Grid, Dialog, IconButton } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import ImageComponent from './ImageComponent';
import Image1 from './images/logo512.png'; 

const Distractions: React.FC = () => {

  const images = [Image1];
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => {
    setSelectedImage("");
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="Distractions">
      {selectedImage ? (
        <Dialog open onClose={handleClose}>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <ImageComponent image={selectedImage} />
        </Dialog>
      ) : (
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={3} key={index}>
              <img
                src={image}
                alt=""
                onClick={() => handleImageClick(image)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Distractions;