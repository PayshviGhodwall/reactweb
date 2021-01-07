import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import PersonIcon from '@material-ui/icons/Person';
import DraftsIcon from '@material-ui/icons/Drafts';
import LanguageIcon from '@material-ui/icons/Language';
import { Divider } from "@material-ui/core";
const First = () => {
    return(
        <>
        <div className="container first-item">
        <h2>Dashboard</h2>
        <div className="second-item d-flex justify-content-between align-items-left">
        <h3>Ubersicht Deiner Fortschritt <img src="/images/down-arrow.png" alt=""/> </h3>
        <button class="button">Profile</button>
        </div>
        <div className="d-flex justify-content-between align-items-left">
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp<br/>
         or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</h6>
         <button class="button2">Profile Bear</button>
        </div>
        

        <div className="row">
        <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
            <figure className="  text-item  d-flex justify-content-between align-items-left">
                <img src="/images/b1.jpg" alt=""/>
                <p> <h4>Fortschritt hochwertige</h4> <br />  
                <PinDropIcon />   Seddiner Street 7| 10135 Berlin <br />
               < PhoneEnabledIcon />  (030) 51 65 64 26<br />
                <PersonIcon />  Achsel Peter Senior<br />
                <DraftsIcon />   achsel@peter.net<br />
                <LanguageIcon />    achselpetervollinfahrt.de
                 </p>
             </figure>
          
        </div>
        </div>
        </div>
        </>
    );
};
export default First;