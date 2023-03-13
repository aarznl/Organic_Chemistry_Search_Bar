import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import pic from "../images/aboutus.jpg";
import pic2 from "../images/aboutus2.jpg";
import styles from "../my-style.module.css";
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';


function Aboutus() {
    const [GoToHome, setGoToHome] = useState(false);

    if (GoToHome) {
        return <Navigate to="/" />
    }

    return(
        <div className="App">
            <h1>About Us!</h1>
            <div className={styles.container}>
            <img className={styles.imga} src={pic} alt=""></img>
            </div>
            <div>
            <img className={styles.hover_img} src={pic2} alt=""></img>
            </div>
            <p className={styles.texta}> This is the team! From left to right we have Aaron Li, Hannah Jin, Kaitlyn Shimohara, Phillip Ma, and Mario Marmolejo. Aaron and Phillip worked on the functionality and styling of the website, Hannah worked on grouping the 60+ reactions, importing the images on the site, and worked with Kaitlyn to handdraw the logos, and Mario and Kaitlyn worked on the descriptions and images. We were going to make a God’s Plan remix video of chemical reactions (we already made some rhymes too), but we thought that this would be more useful for Chem 14D students. Enjoy! </p>
            <div className={styles.samel}>
                <img className={styles.logo} width="300" src={logo2} alt=""></img>
                <img width="300" src={logo3} alt=""></img>
            </div>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToHome(true) }}>return</button>
        </div>
    )
}


export default Aboutus;