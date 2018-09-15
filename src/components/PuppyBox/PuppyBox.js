import React from "react";
import "./PuppyBox.css";

const PuppyBox = (props) => (
    <div className="card">
    <img className="imgPups" alt="puppy"
    src={props.puppies}
    />
    </div>
);

export default PuppyBox;