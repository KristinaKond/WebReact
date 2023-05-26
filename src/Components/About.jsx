import React from "react";
import logo from '../Photos/icons/arrowRight.svg';
const About = ({onModalOpen}) => {
    return (
        <div class="aboutMusik">
        <div class="aboutContent">
            <div class="aboutContent-2">
                <div class="photo">
                    <div id="photoOne"></div>
                    <div id="photoTwo"></div>
                </div>
                <div className="textAbtn">
                    <p className="textAbout">About Musik</p>
                    <p className="textFurse">Fusce justo mi. vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
                    <button id="btnLearnMore" onClick={onModalOpen}>Learn more <img  className="imageTop" src={logo} alt="Strelka"/></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;