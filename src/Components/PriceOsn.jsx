import React from "react";
import Price from "./Price";

const PriceOsn = ({prices, title, onModalOpen}) => {
    return (
        <section class="choose_section">
        <div class="container">
            <h1 class="title choose_title">{title}</h1>
            <div className="choose_items">
                { prices.map((price) =>
                <Price onModalOpen={onModalOpen} price = {price}/>
                )}
            </div>
        </div>
    </section> 
    )
} 

export default PriceOsn;