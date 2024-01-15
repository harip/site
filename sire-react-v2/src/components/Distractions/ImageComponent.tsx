import React from 'react';
import './ImageComponent.css';
import CloseIcon from '@mui/icons-material/Close';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

interface ImageComponentProps {
  image: string;
  onClose: () => void; // Add this line
}

const ImageComponent: React.FC<ImageComponentProps> = ({ image, onClose }) => { 
  return (
    <div 
      className="ImageComponent relative"
    >
      <button 
        onClick={onClose}
        style={{ position: 'absolute', top: '0', right: '0' , lineHeight: 0}}
      >
        <DisabledByDefaultIcon />
      </button>
      <img src={image} alt="" className="image" />
    </div>
  );
};

export default ImageComponent;