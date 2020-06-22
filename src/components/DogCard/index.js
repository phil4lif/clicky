import React from "react";
import "./style.css";

function DogCard(props) {

    return (
        <div className="container">
            <div  className="img-container row">
                {props.dogs.map(item => (
                    <div key={item.id} className="col-3">
                        <img onClick={() => {
                            props.onClick(item.id)
                        }
                        } className="dogpic img-fluid" alt={item.name} src={item.image} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogCard;