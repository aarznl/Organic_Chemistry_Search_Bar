import React, {useState} from "react";
import { Navigate, useLocation } from "react-router-dom";
import image53 from '../assets/image53.png';
import image52 from '../assets/alkyne.png';

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    if (GoToReactions) {
        return <Navigate to= "/" />
    }

    let isAlkene = false;

    if (location.state.search('alkene') !== -1) {
    isAlkene = true;
    }

    return (
        <div>
            <h1>SIKE! THAT'S A {location.state} !</h1>
            <img src={(isAlkene) ? image53 : image52} />
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





