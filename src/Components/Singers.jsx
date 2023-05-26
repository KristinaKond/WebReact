import React from "react";
import logo_1 from '../Photos/singers_1.png';
import logo_2 from '../Photos/singers_2.png';
import logo_3 from '../Photos/singers_3.png';
import logo_4 from '../Photos/singers_4.png';

const Singers = ({onModalOpen}) => {
    return (
        <section class="singers_section">
        <div class="container">
            <div class="singers">
                <div class="singers_content"><h2> Singers</h2>
                    <p class="singers_text text">
                        Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt
                        nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut
                        lectus
                        non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa
                        mattis iaculis. In quis massa risus
                    </p>
                    <button class="white_btn_2" onClick={onModalOpen}>View All Singers</button>
                </div>
                <div class="singers_imgs">
                    <div class="singers_imgs_top">
                        <img id="singers_1" src={logo_1} alt=""/>
                        <img id="singers_2" src={logo_2} alt=""/>
                    </div>
                    <div class="singers_imgs_bot">
                        <img id="singers_3" src={logo_3} alt=""/>
                        <img id="singers_4" src={logo_4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    )
}

export default Singers;