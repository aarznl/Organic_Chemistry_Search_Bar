import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import alkyne from '../images/alkyne1.png';
import alkene1 from '../images/alkene1.png';

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    const image = () => {
        switch (location.state) {
            case 'Alkenes':
                return(
                    <div>
                        <img src={alkene1} />
                        <p>Birch reduction, or also called dissolving metal reduction, used to turn alkyne into trans alkene.</p>
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





