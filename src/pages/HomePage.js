import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import compounds from '../compounds.json';
import benzene from '../images/benzene_ring.png';
import styles from '../my-style.module.css';



function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [GoToReactions, setGoToReactions] = useState(false);
    const navigate = useNavigate();
    const [GoToAboutus, setGoToAboutus] = useState(false);

    if (GoToReactions) {
        return navigate("/reactions", {state: searchTerm}
        );
    };

    if (GoToAboutus) {
        return navigate("/aboutus");
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate("/reactions", {state: searchTerm}
        );
        };
      };
    

    return (
        <div className="App">
            <h1> Organic Chemistry Synthesizer </h1>
            <div>
                <input type="text" placeholder="Search..."
                    onChange={(event) => { // Code for search filter
                        setSearchTerm(event.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <button style={{ marginLeft: 6 }} onClick={() => { 
                    if (searchTerm !== "")
                        setGoToReactions(true) }}>search</button>
            </div>
            <p><i>A Phamily of Reactions!</i></p>
            {compounds.filter((val) => { 
                if (searchTerm === "") {
                    return val
                }
                else if (val.Molecule.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val //only return val in the search if searchTerm is "" or if the specific value is included in the searchTerm
                }
                return null;
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <Link to="/reactions" state={val.Molecule} >{val.Molecule}</Link>
                    </div>);
            })}
            <div>
                <button onClick={() => {
                    setGoToAboutus(true)}
                } className={styles.benzene}> <img src={benzene} width="75"/></button>
            </div>
        </div>
    )
}

export default HomePage;


