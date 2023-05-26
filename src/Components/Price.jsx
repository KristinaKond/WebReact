import React from "react";

const Price = (props) => {
    return (
                <div className="choose_item" id = {props.price.id}>
                    <h3>{props.price.state}</h3>
                    <h1>${props.price.dollars}</h1>
                    <p>{props.price.text}</p>
                    <p className="">{props.price.access}</p>
                    <p className="">{props.price.free}</p>
                    <button className="white_btn_2" onClick={props.onModalOpen}>Get Tickets</button>
                </div>
    )
} 

export default Price;