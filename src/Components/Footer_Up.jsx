import React from "react";

import phone from '../Photos/footer_up/phone.svg';
import email from '../Photos/footer_up/Email.svg';
import geo from '../Photos/footer_up/geo.svg';
import shape from '../Photos/footer_up/Shape.svg';

const Footer_Up = () => {
    return (
        
     <section>
     <div className="footer_up" >
         <div className="left">
                 <h1 className="contactUs">Contact Us</h1>
                 <h3 className="inquiry">Have an inquiry? We’ll be happy to assist you</h3>
                 <div>
                     <div className="imgDiv">
                         <img src={phone}/><p className="phone">+7999123987</p>
                     </div>    
                     <div className="imgDiv">
                         <img src={email}/><p className="email">abuzer@greelogix.com</p>
                     </div>
                     <div  className="imgDiv">
                         <img src={geo}/><p className="address">Plot 252, Block L Phase 2 Johar Town, Lahore, PK</p>
                     </div>
                 </div>
         </div>
         <div className="right">
             <div className="rightForm">
                 <form className="forms_" action="#" method="post">
                     <h1 className="h1_text">Fill in your details</h1>
                     
                     <label className="lbl_" for="name">Name</label>
                     <input  id="submit" type="text" className="inp" name="_name"/>
                     
                     <label className="lbl_" for="email">Email</label>
                     <input  id="submit" type="email" className="inp" name="_email"/>
                     
                     <label className="lbl_" for="massage">Message</label>
                     <textarea  id="submit2" className="inp" name="message"></textarea>

                     <button className="btnSubmit" type="submit">Submit</button>
                 </form>
             </div>
             <div className="imgShape">
                 <img className="imgShape_" src={shape}/>
             </div>
         </div>
     </div>
 </section> 
    )
}

export default Footer_Up;