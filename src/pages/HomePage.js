import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import compounds from '../compounds.json'


function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [GoToReactions, setGoToReactions] = useState(false);
    const navigate = useNavigate();

    if (GoToReactions) {
        return navigate("/reactions", {state: searchTerm}
        );
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
                    if (searchTerm != "")
                        setGoToReactions(true) }}>search</button>
            </div>
            {compounds.filter((val) => { 
                if (searchTerm == "") {
                    return val
                }
                else if (val.Molecule.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val //only return val in the search if searchTerm is "" or if the specific value is included in the searchTerm
                }
            }).map((val, key) => {
                return (
                    <div className="user" key={key}>
                        <Link to="/reactions" state={val.Molecule}>{val.Molecule}</Link>
                    </div>);
            })}
        </div>
    )
}

export default HomePage;


