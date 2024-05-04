import React from "react";
import CardImage from "./CardImge.jsx";
import CardContent from "./CardContent.jsx";

export const CardName = ({ image, title}) => {
    return (
        <div className="main-card">
            <CardImage image={image} />
            <CardContent title={title} />
        </div>
    );
}
export default CardName;

