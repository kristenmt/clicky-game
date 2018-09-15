import React from "react";
import "./Title.css";

const Title = props => (
    <div className="gametitle">
        <h1>Puppy Click Game!</h1>
        <p>Click on an image to get a point. Remember which one you clicked, because if you click it again, you lose the game!</p>
    </div>
);

export default Title;