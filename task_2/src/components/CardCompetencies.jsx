import React from 'react';

const CardCompetencies = ({ title, children }) => {
    const chunkedChildren = [];
    const chunkSize =  4;

    for (let i = 0; i < children.length; i += chunkSize) {
        chunkedChildren.push(children.slice(i, i + chunkSize));
    }

    return (
        <div className="comp-card">
            <h2>{title}</h2>
            <div className="card-container">
                {chunkedChildren.map((group, index) => (
                    <div key={index} className="card-row">
                        {group}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default  CardCompetencies;