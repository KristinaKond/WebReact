import React from "react";
import Spisok from "./Spisok";


const SpisokOsn = ({views, title, onModalOpen}) => {
    return ( 
    <div>
        <h1 className='titleSpisok'>{title}</h1>
       <div className='spisokOne'> { views.map((view, index) =>
        <Spisok onModalOpen={onModalOpen} number={index+1} view = {view} key={view.id}/>
        )}
        </div>
    </div>
    )
}

export default SpisokOsn;