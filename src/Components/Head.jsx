import React, { useEffect, useRef, useState } from "react";
import logo from '../Photos/icons/arrowDown.svg';
import Dropdown from '../Style/Dropdown.css';



function Head({onModalOpen}) {

   const[open, setOpen] = useState(false);

   let menuRef = useRef();

   useEffect(() => {
      let handler = (e) => {
         if (!menuRef.current.contains(e.target)){
            setOpen(false);
         }
         
      };

      document.addEventListener("mousedown", handler);

      return() => {
         document.removeEventListener("mousedown", handler);
      }
   });

    return (
        <div className="header">
           <div className="header-top">
           <div className="btns" id="top-left"><p>MUSIC</p></div>
           <div className="top-right"> 
              <div className="btns btns_b" id="home"><a id="home" href="#" onClick={onModalOpen}>HOME</a></div>
              <div className="btns btns_b" id="speakers"><a id="speakers" href="#" onClick={onModalOpen}>SPEAKERS</a></div>

              <div className="dropdown_shedule" ref={menuRef}>
               <div className="btns btns_b" id="schedule" onClick={() => {setOpen(!open)}}>
                     <a id="schedule" href="#">SCHEDULE</a><img className="imageTops" src={logo} alt="Strelka"/>
               </div>

               <div className={`dropdown_menu ${open? 'active' : 'inactive'}`}>
                  <h3>Shedules info</h3>
                  <ul>
                     <DropdownItem text={"My Shedule"}/>
                     <DropdownItem text={"Create Shedule"}/>
                     <DropdownItem text={"Delete Shedule"}/>
                  </ul>
               </div>
              </div>
              <div className="btns btns_b" id="contact-us"><a id="contact-us" href="#"  onClick={onModalOpen}>CONTACT US</a></div>
              <div className="btns"><button class="butons butonsgt" id="get-tickets" onClick={onModalOpen}>GET TICKETS</button> </div>
           </div>
        </div>
        <div className="b-content">
          <div className="t-content">
             <p id="Big-text">The Best Experience Of Music In 2023</p>
             <div className="text_Small"><p id="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.</p></div>
          </div>
          <form action="#">
          <div className="btn-content">
             <div id="get-started"><button className="butons butonsgs" id="get-started-btn"  onClick={onModalOpen}>Get Started</button></div>
             <div id="watch-video"><button className="butons butonswv" id="watch-video-btn"  onClick={onModalOpen}> Watch Video</button></div>
          </div>
          </form>
         </div>
         
      </div>
    )
}



function DropdownItem(props){
   return (
      <li className="dropdownItem">
         <a>{props.text}</a>
      </li>
   )
}

export default Head;