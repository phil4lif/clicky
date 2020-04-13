import React from "react";
import "./style.css";

function DogCard(props) {
    return (
        <div className="container">
            <div className="img-container row">
                {props.dogs.map(item => (
                    <div className="col">
                <img className="dogpic" alt={item.name} src={item.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogCard;