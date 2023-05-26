import React from "react";
import ss from './Modals.module.css';

const Modals = ({children,visible,setVisible}) => {

    const rootClass = [ss.modal]
    if (visible){
        rootClass.push(ss.active);
    }
    return (
    <section>
        <div className={rootClass.join(' ')}>
            <div className={ss.modal_main} >
                 {children}
               <button className={ss.modal_close} onClick={()=>setVisible(false)}>&#10006;</button>
            </div> 
          </div>
    </section>
    )
}

export default Modals;