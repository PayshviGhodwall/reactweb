       import React from "react";
       import CancelIcon from '@material-ui/icons/Cancel';
const Second = () => {
    return (

    <>
        <div className="container">
        <div className="d-flex justify-content-between align-items-left mt-5 profile-item ">
        <h1>Verbessere dein Profil <img src="/images/down-arrow.png" alt=""/></h1>
        <h6>Mehr Tipps anzeigen</h6>
        </div>

        <div class="row">
        <div class="col-sm-3 col-lg-3 col-md-3col-12">
        <div class="card mt-5 ">
        <div class="card-body">
        <h5 class="card-title mb-4 d-flex justify-content-between align-items-left">Lade hochwertige Bilder deiner <CancelIcon /></h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp<br/>
         or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <a href="#" class="button3">Kollegen</a>
        </div>
        </div>
        </div>

    <div class="col-sm-3  col-lg-3 col-md-3col-12" >
    <div class="card mt-5" >
    <div class="card-body">
    <h5 class="card-title mb-4 d-flex justify-content-between align-items-left">Lade deiner Kollegen zu  <CancelIcon /></h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp<br/>
         or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
    <a href="#" class="button3">Neue Pakete</a>
    </div>
    </div>
    </div>

    <div class="col-sm-6 col-lg-6 col-md-6 col-12">
    <div class="card mt-5">
    <div class="card-body">
    <h5 class="card-title mb-5 d-flex justify-content-between align-items-left">Erstelle FUhrerscheinpakete mit Preisersparnis <CancelIcon /></h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp<br/>
         or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp<br/>
         or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
    <a href="#" class="button3">Bilder hinuzufugen</a>
     </div>
     </div>
    
    </div>
   </div>
    </div>

    </>

    );
};
export default Second;