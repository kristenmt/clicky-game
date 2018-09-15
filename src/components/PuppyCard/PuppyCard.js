import React from "react";
//import PuppyBox from "../PuppyBox";
import "./PuppyCard.css";

const PuppyCard = (props) => (
    <div className="card">
        <div className="img-container">
        {/* need to add onclick for scoring */}
            {/* {props.list.map((item,i) => { */}
                {/* return ( */}
                    {/* // <PuppyBox */}
                    {/* //     key={item.breed} */}
                    {/* //     image={item.image} */}
                    {/* //     /> */}
                {/* // ) */}
            {/* // } */}
        {/* ) */}
    {/* } */}
<a onClick={() => props.selectPuppy(props.breed)}
    className={props.curScore === 0 }
    >
            <img alt={props.breed} src={props.image} />
            </a>
        </div>
        </div>
)
export default PuppyCard;