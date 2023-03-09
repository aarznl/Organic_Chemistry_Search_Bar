import React, {useState} from "react";
import { Navigate, useLocation } from "react-router-dom";
import alkyne from '../images/alkyne.png';
import alkene1 from '../images/alkene1.png';

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    if (GoToReactions) {
        return <Navigate to= "/" />
    }


    return (
        <div>
            <h1>SIKE! THAT'S A {location.state} !</h1>
            <img src={alkene1} />
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





