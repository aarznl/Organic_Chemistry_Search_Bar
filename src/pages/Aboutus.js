import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import pic from "../images/aboutus.jpg";
import styles from "../my-style.module.css"


function Aboutus() {
    const [GoToHome, setGoToHome] = useState(false);

    if (GoToHome) {
        return <Navigate to="/" />
    }

    return(
        <div className="App">
            <h1>About Us!</h1>
            <img src={pic} width="600" alt=""></img>
            <p className={styles.texta}> This is the team! From left to right we have Aaron Li, Hannah Jin, Kaitlyn Shimohara, Phillip Ma, and Mario Marmolejo. Aaron and Phillip worked on the functionality and styling of the website, Hannah worked on grouping the 60+ reactions, importing the images on the site, and making the logo, and Mario and Kaitlyn worked on the descriptions and images. We were going to make a God’s Plan remix video of chemical reactions (we already made some rhymes too), but we thought that this would be more useful for Chem 14D students. Enjoy! </p>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToHome(true) }}>return</button>
        </div>
    )
}

export default Aboutus;