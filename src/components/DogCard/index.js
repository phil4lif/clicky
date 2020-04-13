import React from "react";
import "./style.css";

function DogCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                {props.dogs.map(item => (
                    <div>
                <img alt={item.name} src={item.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogCard;