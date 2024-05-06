import React from 'react';

const CardCompetencies = ({title, children }) => {
    return (
        <div className="comp-card">
            <h2>{title}</h2>
            <div className="card-container">
                {children} {/* Вставляем дочерние элементы здесь */}
            </div>
        </div>
    );
}

export default  CardCompetencies;