import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
    acetal1, addbenring1, addbenring2, addbenring3, addbenring4, addbenring5, 
    addbenring6, addhalo1, addhalo2, addhalo3, addhalo4, addhalo5, addhalo6,
    addhalo7, addhalo8, addhalo9, addhalo10, alcohol1, alcohol2, alcohol3, 
    alcohol4, alcohol5, alcohol6, alcohol7, alcohol8, alcohol9, alcohol10,
    alcohol11, alcohol12, aldehyde1, aldehyde2, aldehyde3, aldehyde4, 
    alkane1, alkane2, alkene1, alkene2, alkene3, alkene4, alkyne1, amide1, 
    carboxy1, carboxy2, ccbond1, ccbond2, ccbond3, ccbond4, ccbond5, ccbond6, 
    ccbond7, deoxy1, epoxide1, epoxide2, epoxide3, ether1, ether2, ether3, 
    ester1, imine1, ketone1, ketone2, ketone3, ketone4, ketone5, ring1, 
    taut1, taut2
  } from '../images';

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const location = useLocation();
    console.log(location);

    const image = () => {
        switch (location.state.toLowerCase()) {
            case 'acetal':
                return(
                    <div>
                        <p><b>Acetal Formation</b></p>
                        <p><i>Addition of Alcohol to Aldehydes and Ketones</i></p>
                        <img src={acetal1} />
                        <p>Add an alcohol with acid to a ketone to form the acetal. Note that the hemiacetal is an intermediary step but will naturally turn to an acetal in acidic conditions <span>&#40;</span>which is why we have H<sub>2</sub>SO<sub>4</sub><span>&#41;</span>.</p>
                    </div>
                )
            case 'addition of halogen':
                return(
                    <div>
                        <p><b>Addition of Two Halogens</b></p>
                        <p><i>Requires alkene</i></p>
                        <img src={addhalo1} />
                        <p>When a halogen, such as bromine, is in a slightly polar protic solvent it first reacts to form an epoxide. The pi electrons from the alkene grab the bromine, creating a bromine ion as a byproduct. This ion acts as a nucleophile, attacking the ring to release the steric hindrance. While there is no regioselectivity because both groups being added are the same, it is a nucleophilic backside attack on a tetrahedral carbon. This inverts the stereochemistry resulting in an anti addition.</p>
                        <p><b>Addition of Halohydrin</b></p>
                        <p><i>Requires alkene in protonating conditions</i></p>
                        <img src={addhalo2} />
                        <p>The pi electrons from the alkene grab the bromine. Water then acts as the nucleophile, attacking the epoxide ring to relieve the steric hindrance. The nucleophile back attacks the more substituted carbon. This results in an inversion of stereochem and an anti addition of the alcohol and halide groups.</p>
                        <p><b>Dihalide Addition</b></p>
                        <img src={addhalo3} />
                        <p>The pi bond attacks the proton in H-Br, which gets added in a Markovnikov fashion. Then Br<sup>-</sup> attacks the carbon cation, which leads to the formation of the alkene. This happens again with the alkene, causing H-Br to be added twice in a Markovnikov fashion. There are no more chiral centers at the end due to bromine and hydrogen being added twice to the same side.</p>
                        <p><b>Hydrogen Halide Addition</b></p>
                        <img src={addhalo4} />
                        <p>When in the presence of a strong acid, think protonation. The pi electrons from the alkene attack the electrophilic HBr, creating a carbocation intermediate. Because the more stable carbocation is favored, this reaction follows Markovnikov<span>&#39;</span>s rule. Additionally, because the carbon is planar, the Bromine ion can attack from either the front or back creating a mixture of stereochem.</p>
                        <p><b>Alcohol Reactions</b></p>
                        <p><i>Using Inorganic Acids</i></p>
                        <img src={addhalo5} />
                        <p>Because this mechanism is Sn1 or Sn2, using inorganic acids is preferential to primary or secondary alcohols. Potential reagents include PBr<sub>3</sub>, PI<sub>3</sub>, PCl<sub>3</sub>, and SOCl<sub>2</sub>.</p>
                        <p><b>Alcohol Reactions</b></p>
                        <p><i>Using Organic Compounds and Acids</i></p>
                        <img src={addhalo8} />
                        <img src={addhalo9} />
                        <p>Starting with alcohol in an acidic environment, protonation of the OH group occurs, turning it into a good leaving group. A Sn1 mechanism follows.</p>
                        <p><b>Alpha-Halogenation</b></p>
                        <p><i>Enols and Enolates</i></p>
                        <img src={addhalo6} />
                        <p>Use acetic acid and Br<sub>2</sub> to form a Br at the alpha position to the carbonyl. Note that we are using an acid here instead of a strong base because the product is more acidic than the reactant <span>&#40;</span>Br is an electron-withdrawing group, which means when there is a negative charge Br will inductively help to hold the negative charge if there is deprotonation<span>&#41;</span>. That is why you have the reaction in acid, which means the reactant will now act as a base. </p>
                        <p><b>EAS Halogenation</b></p>
                        <p><i>Adding to a Benzene Ring</i></p>
                        <img src={addhalo7} />
                        <p>One Br<sub>2</sub> with a catalyst like AlX<sub>3</sub> or FeX<sub>3</sub>. Reminder that Br<sub>2</sub> itself is not strong enough to disrupt an aromatic ring. You need a catalyst! </p>
                        <p><b>Making Acyl Chloride</b></p>
                        <p><i>Alcohol to Cl</i></p>
                        <img src={addhalo10} />
                        <p>Add SOCl<sub>2</sub> to a carboxylic acid to replace an alcohol with Cl.</p>
                    </div>
                )
            case 'addition to benzene ring':
                return(
                    <div>
                        <p><b>Adding Nitrite</b></p>
                        <p><i>EAS</i></p>
                        <img src={addbenring1} />
                        <p>When adding HNO<sub>3</sub> with an aromatic ring, H<sub>2</sub>SO<sub>4</sub> is necessary because HNO3 by itself cannot disrupt the aromatic ring. Note that NO<sub>2</sub> has a negative and positive charge.</p>
                        <p><b>Sulfonation</b></p>
                        <p><i>EAS</i></p>
                        <img src={addbenring2} />
                        <p>One SO<sub>3</sub> in H<sub>2</sub>SO<sub>4</sub> <span>&#40;</span>or just SO<sub>3</sub><span>&#41;</span>. SO<sub>3</sub> can actually disrupt the aromatic ring by itself and H<sub>2</sub>SO<sub>4</sub> is not needed. That being said, adding H<sub>2</sub>SO<sub>4</sub> will make the reaction more efficient! </p>
                        <p><b>Making Carboxylic Acids</b></p>
                        <p><i>Organometallic Reagents</i></p>
                        <img src={addbenring3} />
                        <p> Remember to number your steps for this one! Also, H<sub>3</sub>O+ is used because once you add CO<sub>2</sub>, you actually form a pretty stable base that isn<span>&#39;</span>t that reactive. </p>
                        <p><b>Making an Alkene on a Ring</b></p>
                        <p><i>E2 Reaction</i></p>
                        <img src={addbenring4} />
                        <p>Potassium tert-butoxide is a strong base, which pushes towards an E2 mechanism, enabling the creation of an alkene.</p>
                        <p><b>EAS Halogenation</b></p>
                        <img src={addbenring5} />
                        <p>One Br<sub>2</sub> with a catalyst like AlX<sub>3</sub> or FeX<sub>3</sub>. Reminder that Br<sub>2</sub> itself is not strong enough to disrupt an aromatic ring. You need a catalyst!</p>
                        <p><b>New C-C Bond</b></p>
                        <p><i>EAS</i></p>
                        <img src={addbenring6} />
                        <p>When forming a Friedel-crafts alkylation, you can form a new C-C bond. That being said, the benzene ring product becomes more nucleophilic than the reactant <span>&#40;</span>because Methyl groups are electron-donating, so the aromatic ring will want to get rid of its extra electrons more, making it nucleophilic<span>&#41;</span>. Therefore, it is not super useful in synthesis due to polyalkylation! </p>
                    </div>
                )
            case 'alkanes':
                return(
                    <div>
                        <p><b>Full Reduction from Alkyne</b></p>
                        <p><i>Requires alkyne</i></p>
                        <img src={alkane1} />
                        <p>H<sub>2</sub> is added on the same side across the pi bond. The alkyne turns into a cis alkene that reacts again with H<sub>2</sub>, causing a further reduction. However, the reduction can be stopped at the alkene if Lindlar<span>&#39;</span>s catalyst is added.</p>
                        <p><b>Catalytic Hydrogenation</b></p>
                        <p><i>Syn addition of hydrogens</i></p>
                        <img src={alkane2} />
                        <p>Here you are reducing an alkene into an alkane by a syn addition of hydrogens. In order for this reaction to proceed, a catalyst such as Pd/C, Pt/C, or Ni/C is required. The catalyst consists of transition metals, which hold onto their electrons loosely, enabling this reaction to occur.</p>
                    </div>
                )
            case 'alkenes':
                return(
                    <div>
                        <p><b> Trans Alkene <span>&#40;</span>Birch Reduction<span>&#41;</span></b></p>
                        <img src={alkene1} />
                        <p>Birch Reduction, or also called dissolving metal reduction, is used to turn alkyne into a trans alkene.</p>
                        <p><b>Cis Alkene </b></p>
                        <p><i>Requires alkyne</i></p>
                        <img src={alkene2} />
                        <p>H<sub>2</sub> is added on the same side across the pi bond. The alkyne turns into a cis alkene and the addition of Lindlar<span>&#39;</span>s catalyst prevents further reduction into an alkane.</p>
                        <p><b>Aldol Condensation</b></p>
                        <img src={alkene3} />
                        <p>Adding heat helps to pop off an -OH group.</p>
                        <p><b>Generally Making Alkenes</b></p>
                        <p><i>E2 Reaction</i></p>
                        <img src={alkene4} />
                        <p>Potassium tert-butoxide is a strong base, which pushes towards an E2 mechanism, enabling the creation of an alkene.</p>
                    </div>
                )
            case 'alkynes':
                return(
                    <div>
                        <p><b>Double Elimination</b></p>
                        <img src={alkyne1} />
                        <p>Br<sub>2</sub> is added across the pi bond, which creates two leaving groups. The strong base in step two will pull off protons and then kick off bromines, creating an alkyne. Two equivalents of a strong base are necessary because there are more than two hydrogens that could be reacted with.</p>
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





// <p> This is known as Jone<span>&#39;</span>s Reagent, which includes chromate which is a very good oxidizing agent. Jone<span>&#39;</span>s Reagent can also be seen as H<sub>2</sub>CrO<sub>4</sub> or Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>.</p>