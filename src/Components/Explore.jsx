import React from "react";

const Explore = (props) => {
    return (
        <div className="divStrok">
                <div className="picture" id={props.explore.title}></div>
                    <div>
                        <div><p id="Lable">{props.explore.title}</p></div>
                        <div><p id="textLable">{props.explore.text}</p></div>
                    </div>
            </div>
    )
}

export default Explore;
