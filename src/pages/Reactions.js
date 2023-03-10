import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import alkyne from '../images/alkyne1.png';
import alkene1 from '../images/alkene1.png';
import alkene2 from '../images/alkene2.png';

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
                        <p><b>Cis Alkene</b></p>
                        <img src={alkene2} />
                        <p><i>Requires alkyne</i></p>
                        <p>H<sub>2</sub> is added on the same side across the pi bond. The alkyne turns into a cis alkene and the addition of Lindlar<span>&#39;</span>s catalyst prevents further reduction into an alkane.</p>
                        <p><b></b></p>
                    </div>
                )
            // case 'alkynes':
            //     return(
            //         <div>
            //             <img src={} />
            //             <p></p>
            //         </div>
            //     )
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





