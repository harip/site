import React, { useState } from 'react';
import './Distractions.css'; 
import { Grid, Dialog, IconButton } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
import ImageComponent from './ImageComponent';
import Image1 from './images/CamScanner 12-04-2023 22.30_1.jpg';
import Image2 from './images/CamScanner 12-04-2023 22.30_2.jpg';
import Image3 from './images/CamScanner 12-04-2023 22.30_3.jpg';
import Image4 from './images/CamScanner 12-04-2023 22.30_4.jpg';
import Image5 from './images/CamScanner 12-04-2023 22.30_5.jpg';
import Image6 from './images/CamScanner 12-04-2023 22.30_6.jpg';
import Image7 from './images/CamScanner 12-04-2023 22.30_7.jpg';
import Image8 from './images/CamScanner 12-04-2023 22.30_8.jpg';
import Image9 from './images/CamScanner 12-04-2023 22.30_9.jpg';
import Image10 from './images/CamScanner 12-04-2023 22.30_10.jpg';
import Image11 from './images/CamScanner 12-04-2023 22.30_11.jpg';
import Image12 from './images/CamScanner 12-04-2023 22.30_12.jpg';
import Image13 from './images/CamScanner 12-04-2023 22.30_13.jpg';
import Image14 from './images/CamScanner 12-04-2023 22.30_14.jpg';
import Image15 from './images/CamScanner 12-04-2023 22.30_15.jpg';
import Image16 from './images/CamScanner 12-04-2023 22.30_16.jpg';
import Image17 from './images/CamScanner 12-04-2023 22.30_17.jpg';
import Image18 from './images/CamScanner 12-04-2023 22.30_18.jpg';
import Image19 from './images/CamScanner 12-04-2023 22.30_19.jpg';
import Image20 from './images/CamScanner 12-04-2023 22.30_20.jpg';
import Image21 from './images/CamScanner 12-04-2023 22.30_21.jpeg';
import Image22 from './images/CamScanner 12-04-2023 22.30_22.jpeg';
import Image23 from './images/CamScanner 12-04-2023 22.30_23.jpeg';
import Image24 from './images/CamScanner 12-04-2023 22.30_24.jpeg';
import Image25 from './images/CamScanner 12-04-2023 22.30_25.jpeg';

const Distractions: React.FC = () => {

  const images = [
    Image25,
    Image24, Image23, Image22,  Image21,
    Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20
    
  ];
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const onImageClose = () => {
    setSelectedImage("");
  }

  return (
    <div className="Distractions">
      {selectedImage ? (
        <ImageComponent image={selectedImage} onClose={onImageClose} />
      ) : (
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <img
                src={image}
                alt=""
                loading="lazy"
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