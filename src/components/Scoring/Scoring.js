import React from "react";
import "./Scoring.css";

const Scoring = props => (
    <div className="scoretitle">
        <ul className="scorelist">
            <li>Current Score: {props.curScore}</li>
            <li>Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Scoring;