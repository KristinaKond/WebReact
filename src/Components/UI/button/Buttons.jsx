import React, { useEffect, useRef } from "react";
import classes from './Buttons.module.css';

const Buttons = ({children, ...props}) => {
const buttonRef = useRef();

useEffect(() => {
    const applyContainerProperties = () => {
        buttonRef.current.classList.add("effect-container");
    };

const appStyles = (e) => {
    const { offsetX, offsetY } = e;
    const { style } = buttonRef.current;
    const sizeOffset = 50;

    style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
    style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
}

const onClick = (e) => {
    buttonRef.current.classList.remove("active");
    appStyles(e);
    buttonRef.current.classList.add("active");
};

    applyContainerProperties();
    buttonRef.current.addEventListener("mouseup", onClick);

    const cleanupRef = buttonRef.current;
});

    return (
        <div className="button_container">
            <button className={classes.myBtn} {...props} ref={buttonRef}>
                {children}
            </button>
        </div>
    )
}

export default Buttons;