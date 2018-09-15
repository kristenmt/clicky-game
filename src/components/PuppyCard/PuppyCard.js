import React from "react";
import PuppyBox from "../PuppyBox";
import "./PuppyCard.css";

const PuppyCard = (props) => (
    
        <div className="img-container">
            {props.list.map((item,i) => {
                return (
                    <PuppyBox
                        key={item.breed}
                        image={item.image}
                        />
                )
            })}
        </div>
    
)
export default PuppyCard;