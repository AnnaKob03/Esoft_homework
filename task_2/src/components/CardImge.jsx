import React from 'react';

const CardImage = ({ image }) => {
    return (
        <img src={image} alt="Main" className="main-photo" />
    );
}

export default CardImage;