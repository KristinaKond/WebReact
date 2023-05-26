import React from "react";
import Buttons from '../Components/UI/button/Buttons';
import all from '../Photos/anonim.jpg';
import '../Style/view.css'

const Spisok = (props) => {

    return (
        <div className="view">
           <img src={all} className="photokrug" onClick={props.onModalOpen}></img>
            <div className="view_content">
                <strong className="names">{props.view.title}</strong>
                <div>
                    {props.view.text}
                </div>
            </div>
           
        </div>
    )
}

export default Spisok;