import React, {useState} from "react";
import { Navigate, useLocation } from "react-router-dom";

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
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





