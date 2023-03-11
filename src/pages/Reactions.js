import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
    acetal1, addbenring1, addbenring2, addbenring3, addbenring4, addbenring5, 
    addbenring6, addhalo1, addhalo2, addhalo3, addhalo4, addhalo5, addhalo6,
    addhalo7, addhalo8, addhalo9, addhalo10, alcohol1, alcohol2, alcohol3, 
    alcohol4, alcohol5, alcohol6, alcohol7, alcohol8, alcohol9, alcohol10,
    alcohol11, alcohol12, alcohol13, alcohol14, aldehyde1, aldehyde2, aldehyde3, aldehyde4, 
    aldehyde5, alkane1, alkane2, alkene1, alkene2, alkene3, alkene4, alkyne1, amide1, 
    amide2, amide3, carboxy1, carboxy2, carboxy3, carboxy4, carboxy5, carboxy6, ccbond1, ccbond2, ccbond3, ccbond4, ccbond5, ccbond6, 
    ccbond7, ccbond8, deoxy1, deoxy2, deoxy3, deoxy4, epoxide1, epoxide2, epoxide3, ether1, ether2, ether3, 
    ester1, ester2, ester3, imine1, ketone1, ketone2, ketone3, ketone4, ketone5, ketone6, ketone7, ring1, 
    taut1, taut2
  } from '../images';
import styles from '../my-style.module.css';
import info from '../information.json'

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    function format(compound, title, pic1, pic2, descrip){
        return(
        <div>
            <p><b>{compound}</b></p>
            <p><i>{title}</i></p>
            <img className={styles.imgsize} src = {pic1}/>
            <img className={styles.imgsize} src = {pic2}/>
            <p>{descrip}</p>
        </div>)
    }

    const image = () => {
        switch (location.state.toLowerCase()) {
            case 'acetal':
                return(
                    format(info.acetal1[0].reaction, info.acetal1[0].title, acetal1, null, info.acetal1[0].description)   
                )     
            case 'addition of halogen':
                return(
                    <div>
                        <div>{format(info.addhalo1[0].reaction, info.addhalo1[0].title, addhalo1, null, info.addhalo1[0].description)}
                        </div>
                        <div>{format(info.addhalo2[0].reaction, info.addhalo2[0].title, addhalo2, null, info.addhalo2[0].description)}
                        </div>
                        <div>{format(info.addhalo3[0].reaction, info.addhalo3[0].title, addhalo3, null, info.addhalo3[0].description)}
                        </div>
                        <div>{format(info.addhalo4[0].reaction, info.addhalo4[0].title, addhalo4, null, info.addhalo4[0].description)}
                        </div>
                        <div>{format(info.addhalo5[0].reaction, info.addhalo5[0].title, addhalo5, null, info.addhalo5[0].description)}
                        </div>
                        <div>{format(info.addhalo89[0].reaction, info.addhalo89[0].title, addhalo8, addhalo9, info.addhalo89[0].description)}
                        </div>
                        <div>{format(info.addhalo6[0].reaction, info.addhalo6[0].title, addhalo6, null, info.addhalo6[0].description)}
                        </div>
                        <div>{format(info.addhalo7[0].reaction, info.addhalo7[0].title, addhalo7, null, info.addhalo7[0].description)}
                        </div>
                        <div>{format(info.addhalo10[0].reaction, info.addhalo10[0].title, addhalo10, null, info.addhalo10[0].description)}
                        </div>
                    </div>
                )
            case 'addition to benzene ring':
                return(
                    <div>
                        <div>{format(info.addbenring1[0].reaction, info.addbenring1[0].title, addbenring1, null, info.addbenring1[0].description)}
                        </div>
                        <div>{format(info.addbenring2[0].reaction, info.addbenring2[0].title, addbenring2, null, info.addbenring2[0].description)}
                        </div>
                        <div>{format(info.addbenring3[0].reaction, info.addbenring3[0].title, addbenring3, null, info.addbenring3[0].description)}
                        </div>
                        <div>{format(info.addbenring4[0].reaction, info.addbenring4[0].title, addbenring4, null, info.addbenring4[0].description)}
                        </div>
                        <div>{format(info.addbenring5[0].reaction, info.addbenring5[0].title, addbenring5, null, info.addbenring5[0].description)}
                        </div>
                        <div>{format(info.addbenring6[0].reaction, info.addbenring6[0].title, addbenring6, null, info.addbenring6[0].description)}
                        </div>
                    </div>
                )
            case 'alcohols':
                return(
                    <div>
                        <div>{format(info.alcohol1[0].reaction, info.alcohol1[0].title, alcohol1, null, info.alcohol1[0].description)}
                        </div>
                        <div>{format(info.alcohol2[0].reaction, info.alcohol2[0].title, alcohol2, null, info.alcohol2[0].description)}
                        </div>
                        <div>{format(info.alcohol10[0].reaction, info.alcohol10[0].title, alcohol10, null, info.alcohol10[0].description)}
                        </div>
                        <div>{format(info.alcohol4[0].reaction, info.alcohol4[0].title, alcohol4, null, info.alcohol4[0].description)}
                        </div>
                        <div>{format(info.alcohol6[0].reaction, info.alcohol6[0].title, alcohol6, null, info.alcohol6[0].description)}
                        </div>
                        <div>{format(info.alcohol7[0].reaction, info.alcohol7[0].title, alcohol7, null, info.alcohol7[0].description)}
                        </div>
                        <div>{format(info.alcohol8[0].reaction, info.alcohol8[0].title, alcohol8, null, info.alcohol8[0].description)}
                        </div>
                        <div>{format(info.alcohol9[0].reaction, info.alcohol9[0].title, alcohol9, null, info.alcohol9[0].description)}
                        </div>
                        <div>{format(info.alcohol3[0].reaction, info.alcohol3[0].title, alcohol3, null, info.alcohol3[0].description)}
                        </div>
                        <div>{format(info.alcohol11[0].reaction, info.alcohol11[0].title, alcohol11, null, info.alcohol11[0].description)}
                        </div>
                        <div>{format(info.alcohol12[0].reaction, info.alcohol12[0].title, alcohol12, null, info.alcohol12[0].description)}
                        </div>
                        <div>{format(info.alcohol13[0].reaction, info.alcohol13[0].title, alcohol13, null, info.alcohol13[0].description)}
                        </div>
                        <div>{format(info.alcohol14[0].reaction, info.alcohol14[0].title, alcohol14, null, info.alcohol14[0].description)}
                        </div>
                    </div>
                )
            case 'aldehydes':
                return(
                    <div>
                        <div>{format(info.aldehyde1[0].reaction, info.aldehyde1[0].title, aldehyde3, aldehyde1, info.aldehyde1[0].description)}
                        </div>
                        <div>{format(info.aldehyde2[0].reaction, info.aldehyde2[0].title, aldehyde2, null, info.aldehyde2[0].description)}
                        </div>
                        <div>{format(info.aldehyde4[0].reaction, info.aldehyde4[0].title, aldehyde4, null, info.aldehyde4[0].description)}
                        </div>
                        <div>{format(info.aldehyde5[0].reaction, info.aldehyde5[0].title, aldehyde5, null, info.aldehyde5[0].description)}
                        </div>
                    </div>
                )
            case 'alkanes':
                return(
                    <div>
                        <div>{format(info.alkane1[0].reaction, info.alkane1[0].title, alkane1, null, info.alkane1[0].description)}
                        </div>
                        <div>{format(info.alkane2[0].reaction, info.alkane2[0].title, alkane2, null, info.alkane2[0].description)}
                        </div>
                    </div>
                )
            case 'alkenes':
                return(
                    <div>
                        <div>{format(info.alkene1[0].reaction, info.alkene1[0].title, alkene1, null, info.alkene1[0].description)}
                        </div>
                        <div>{format(info.alkene2[0].reaction, info.alkene2[0].title, alkene2, null, info.alkene2[0].description)}
                        </div>
                        <div>{format(info.alkene3[0].reaction, info.alkene3[0].title, alkene3, null, info.alkene3[0].description)}
                        </div>
                        <div>{format(info.alkene4[0].reaction, info.alkene4[0].title, alkene4, null, info.alkene4[0].description)}
                        </div>
                    </div>
                )
            case 'alkynes':
                return(
                    <div>
                        <div>{format(info.alkyne1[0].reaction, info.alkyne1[0].title, alkyne1, null, info.alkyne1[0].description)}
                        </div>
                    </div>
                )
            case 'amides':
                return(
                    <div>
                        <div>{format(info.amide1[0].reaction, info.amide1[0].title, amide1, null, info.amide1[0].description)}
                        </div>
                        <div>{format(info.amide2[0].reaction, info.amide2[0].title, amide2, null, info.amide2[0].description)}
                        </div>
                        <div>{format(info.amide3[0].reaction, info.amide3[0].title, amide3, null, info.amide3[0].description)}
                        </div>
                    </div>
                )
            case 'c-c bonds':
                return(
                    <div>
                        <div>{format(info.ccbond1[0].reaction, info.ccbond1[0].title, ccbond1, null, info.ccbond1[0].description)}
                        </div>
                        <div>{format(info.ccbond4[0].reaction, info.ccbond4[0].title, ccbond4, null, info.ccbond4[0].description)}
                        </div>
                        <div>{format(info.ccbond3[0].reaction, info.ccbond3[0].title, ccbond3, null, info.ccbond3[0].description)}
                        </div>
                        <div>{format(info.ccbond2[0].reaction, info.ccbond2[0].title, ccbond2, null, info.ccbond2[0].description)}
                        </div>
                        <div>{format(info.ccbond5[0].reaction, info.ccbond5[0].title, ccbond5, null, info.ccbond5[0].description)}
                        </div>
                        <div>{format(info.ccbond6[0].reaction, info.ccbond6[0].title, ccbond6, null, info.ccbond6[0].description)}
                        </div>
                        <div>{format(info.ccbond7[0].reaction, info.ccbond7[0].title, ccbond7, null, info.ccbond7[0].description)}
                        </div>
                        <div>{format(info.ccbond8[0].reaction, info.ccbond8[0].title, ccbond8, null, info.ccbond8[0].description)}
                        </div>
                    </div>
                )
            case 'carboxylic acids':
                return(
                    <div>
                        <div>{format(info.carboxy1[0].reaction, info.carboxy1[0].title, carboxy1, null, info.carboxy1[0].description)}
                        </div>
                        <div>{format(info.carboxy2[0].reaction, info.carboxy2[0].title, carboxy2, null, info.carboxy2[0].description)}
                        </div>
                        <div>{format(info.carboxy3[0].reaction, info.carboxy3[0].title, carboxy3, null, info.carboxy3[0].description)}
                        </div>
                        <div>{format(info.carboxy4[0].reaction, info.carboxy4[0].title, carboxy4, null, info.carboxy4[0].description)}
                        </div>
                        <div>{format(info.carboxy5[0].reaction, info.carboxy5[0].title, carboxy5, null, info.carboxy5[0].description)}
                        </div>
                        <div>{format(info.carboxy6[0].reaction, info.carboxy6[0].title, carboxy6, null, info.carboxy6[0].description)}
                        </div>
                    </div>
                )
            case 'deoxygenation':
                return(
                    <div>
                        <div>{format(info.deoxy1[0].reaction, info.deoxy1[0].title, deoxy1, null, info.deoxy1[0].description)}
                        </div>
                        <div>{format(info.deoxy2[0].reaction, info.deoxy2[0].title, deoxy2, null, info.deoxy2[0].description)}
                        </div>
                        <div>{format(info.deoxy3[0].reaction, info.deoxy3[0].title, deoxy3, null, info.deoxy3[0].description)}
                        </div>
                        <div>{format(info.deoxy4[0].reaction, info.deoxy4[0].title, deoxy4, null, info.deoxy4[0].description)}
                        </div>
                    </div>
                )
            case 'epoxides':
                return(
                    <div>
                        <div>{format(info.epoxide1[0].reaction, info.epoxide1[0].title, epoxide1, null, info.epoxide1[0].description)}
                        </div>
                        <div>{format(info.epoxide2[0].reaction, info.epoxide2[0].title, epoxide3, epoxide2, info.epoxide2[0].description)}
                        </div>
                    </div>
                )
            case 'esters':
                return(
                    <div>
                        <div>{format(info.ester1[0].reaction, info.ester1[0].title, ester1, null, info.ester1[0].description)}
                        </div>
                        <div>{format(info.ester2[0].reaction, info.ester2[0].title, ester2, null, info.ester2[0].description)}
                        </div>
                        <div>{format(info.ester3[0].reaction, info.ester3[0].title, ester3, null, info.ester3[0].description)}
                        </div>
                    </div>
                )
            case 'ethers':
                return(
                    <div>
                        <div>{format(info.ether1[0].reaction, info.ether1[0].title, ether1, null, info.ether1[0].description)}
                        </div>
                        <div>{format(info.ether2[0].reaction, info.ether2[0].title, ether2, null, info.ether2[0].description)}
                        </div>
                        <div>{format(info.ether3[0].reaction, info.ether3[0].title, ether3, null, info.ether3[0].description)}
                        </div>
                    </div>
                )
            case 'imines':
                return(
                    <div>
                        <div>{format(info.imine1[0].reaction, info.imine1[0].title, imine1, null, info.imine1[0].description)}
                        </div>
                    </div>
                )
            case 'ketones':
                return(
                    <div>
                        <div>{format(info.ketone1[0].reaction, info.ketone1[0].title, ketone4, ketone1, info.ketone1[0].description)}
                        </div>
                        <div>{format(info.ketone5[0].reaction, info.ketone5[0].title, ketone5, null, info.ketone5[0].description)}
                        </div>
                        <div>{format(info.ketone6[0].reaction, info.ketone6[0].title, ketone6, null, info.ketone6[0].description)}
                        </div>
                        <div>{format(info.ketone7[0].reaction, info.ketone7[0].title, ketone7, null, info.ketone7[0].description)}
                        </div>
                        <div>{format(info.ketone2[0].reaction, info.ketone2[0].title, ketone2, null, info.ketone2[0].description)}
                        </div>
                        <div>{format(info.ketone3[0].reaction, info.ketone3[0].title, ketone3, null, info.ketone3[0].description)}
                        </div>
                    </div>
                )
            case 'rings':
                return(
                    <div>
                        <div>{format(info.ring1[0].reaction, info.ring1[0].title, ring1, null, info.ring1[0].description)}
                        </div>
                    </div>
                )

            default: // ADD SOMETHING LATER??
                return(
                    <div>
                    <p><b>Sorry, you did not input a valid molecule!</b></p>
                    <p><i>Please return to the home page and input one of the listed molecules.</i></p>
                    </div>
                )
            };
    };
    


    if (GoToReactions) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>{location.state}! My favorite...</h1>
            <div>
                {image()}
            </div>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
        </div>
    )
}

export default Reactions;





