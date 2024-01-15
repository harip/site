import React from 'react';
import './ImageComponent.css';

interface ImageComponentProps {
  image: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ image }) => {
  return (
    <div className="ImageComponent">
      <img src={image} alt="" />
    </div>
  );
};

export default ImageComponent;