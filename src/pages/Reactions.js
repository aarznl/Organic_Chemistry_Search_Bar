import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
    acetal1, addbenring1, addbenring2, addbenring3, addbenring4, addbenring5, 
    addbenring6, addhalo1, addhalo2, addhalo3, addhalo4, addhalo5, addhalo6,
    addhalo7, addhalo8, addhalo9, addhalo10, alcohol1, alcohol2, alcohol3, 
    alcohol4, alcohol5, alcohol6, alcohol7, alcohol8, alcohol9, alcohol10,
    alcohol11, alcohol12, aldehyde1, aldehyde2, aldehyde3, aldehyde4, 
    alkane1, alkane2, alkene1, alkene2, alkene3, alkene4, alkyne1, amide1, 
    carboxy1, carboxy2, ccbond1, ccbond2, ccbond3, ccbond4, ccbond5, ccbond6, 
    ccbond7, deoxy1, epoxide1, epoxide2, epoxide3, ether1, ether2, ether3, 
    ether4, imine1, ketone1, ketone2, ketone3, ketone4, ketone5, ring1, 
    taut1, taut2
  } from '../images';

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    const image = () => {
        switch (location.state.toLowerCase()) {
            case 'alkenes':
                return(
                    <div>
                        <p><b> Trans Alkene <span>&#40;</span>Birch Reduction<span>&#41;</span></b></p>
                        <img src={alkene1} />
                        <p>Birch Reduction, or also called dissolving metal reduction, is used to turn alkyne into a trans alkene.</p>
                        <p><b>Cis Alkene </b></p>
                        <p><i>Requires alkyne</i></p>
                        <img src={alkene2} />
                        <p>H<sub>2</sub> is added on the same side across the pi bond. The alkyne turns into a cis alkene and the addition of Lindlar<span>&#39;</span>s catalyst prevents further reduction into an alkane.</p>
                        <p><b>Aldol Condensation</b></p>
                        <img src={alkene3} />
                        <p>Adding heat helps to pop off an -OH group.</p>
                        <p><b>Generally Making Alkenes</b></p>
                        <p><i>E2 Reaction</i></p>
                        <img src={alkene4} />
                        <p>Potassium tert-butoxide is a strong base, which pushes towards an E2 mechanism, enabling the creation of an alkene.</p>
                    </div>
                )
            case 'alkanes':
                return(
                    <div>
                        <p><b>Full Reduction from Alkyne</b></p>
                        <p><i>Requires alkyne</i></p>
                        <img src={alkane1} />
                        <p>H<sub>2</sub> is added on the same side across the pi bond. The alkyne turns into a cis alkene that reacts again with H<sub>2</sub>, causing a further reduction. However, the reduction can be stopped at the alkene if Lindlar<span>&#39;</span>s catalyst is added.</p>
                        <p><b>Catalytic Hydrogenation</b></p>
                        <p><i>Syn addition of hydrogens</i></p>
                        <img src={alkane2} />
                        <p>Here you are reducing an alkene into an alkane by a syn addition of hydrogens. In order for this reaction to proceed, a catalyst such as Pd/C, Pt/C, or Ni/C is required. The catalyst consists of transition metals, which hold onto their electrons loosely, enabling this reaction to occur.</p>
                    </div>
                )
            default:
            return null
        }
    }
    


    if (GoToReactions) {
        return <Navigate to="/" />
    }


    return (
        <div>
            <h1>SIKE! THAT'S A {location.state} !</h1>
            <div>
                {image()}
            </div>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





