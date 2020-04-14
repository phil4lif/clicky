import React from "react";
import "./style.css";

function DogCard(props) {
    return (
        <div className="container">
            <div className="img-container row">
                {props.dogs.map(item => (
                    <div className="col-3">
                <img data-clicked={item.clicked} className="dogpic img-fluid" alt={item.name} src={item.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogCard;