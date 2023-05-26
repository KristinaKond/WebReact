import React from "react";
import Explore from "./Explore";

const ExploreOsn = ({explores, title}) => {
    return ( 
        <div>
            <h1 className='titleExplore'>{title}</h1>
            <div className="strok">
            { explores.map((explore) =>
            <Explore explore = {explore}/>
            )}
            </div>
        </div>
        )
}

export default ExploreOsn;