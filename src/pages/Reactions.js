import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs} from 'react-tabs-scrollable';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {
    acetal1, addbenring1, addbenring2, addbenring3, addbenring4, addbenring5, 
    addbenring6, addhalo1, addhalo2, addhalo3, addhalo4, addhalo5, addhalo6,
    addhalo7, addhalo8, addhalo9, addhalo10, alcohol1, alcohol2, alcohol3, 
    alcohol4, alcohol6, alcohol7, alcohol8, alcohol9, alcohol10,
    alcohol11, alcohol12, alcohol13, alcohol14, aldehyde1, aldehyde2, aldehyde3, aldehyde4, 
    aldehyde5, alkane1, alkane2, alkene1, alkene2, alkene3, alkene4, alkyne1, amide1, 
    amide2, amide3, carboxy1, carboxy2, carboxy3, carboxy4, carboxy5, carboxy6, ccbond1, ccbond2, ccbond3, ccbond4, ccbond5, ccbond6, 
    ccbond7, ccbond8, deoxy1, deoxy2, deoxy3, deoxy4, epoxide1, epoxide2, epoxide3, ether1, ether2, ether3, 
    ester1, ester2, ester3, imine1, ketone1, ketone2, ketone3, ketone4, ketone5, ketone6, ketone7, ring1, benzene
  } from '../images';
import styles from '../my-style.module.css';
import info from '../information.json';
import 'animate.css';
import "../tabstyling.css";

const pics = {
    "acetal": [acetal1],
    "addhalo": [addhalo1, addhalo2, addhalo3, addhalo4, addhalo5, addhalo6, addhalo7, addhalo10, addhalo8, addhalo9],
    "addbenring":[addbenring1, addbenring2, addbenring3, addbenring4, addbenring5, addbenring6],
    "alcohol":[alcohol1, alcohol2, alcohol10, alcohol4, alcohol6, alcohol7, alcohol8, alcohol9, alcohol3, alcohol11, alcohol12, alcohol13, alcohol14],
    "aldehyde":[aldehyde2, aldehyde4, aldehyde5, aldehyde3, aldehyde1],
    "alkane":[alkane1, alkane2],
    "alkene":[alkene1, alkene2, alkene3, alkene4],
    "alkyne":[alkyne1],
    "amide":[amide1, amide3, amide2],
    "ccbond":[ccbond1, ccbond4, ccbond3, ccbond2, ccbond5, ccbond6, ccbond7, ccbond8],
    "carboxy":[carboxy1, carboxy2, carboxy3, carboxy4, carboxy5, carboxy6],
    "deoxy":[deoxy1, deoxy2, deoxy3, deoxy4],
    "epoxide":[epoxide1, epoxide2, epoxide3],
    "ether":[ether1, ether2, ether3],
    "ester":[ester1, ester2, ester3],
    "imine":[imine1],
    "ketone":[ketone5, ketone6, ketone7, ketone2, ketone3, ketone4, ketone1],
    "ring":[ring1]
}

function Reactions() {
    const [GoToReactions, setGoToReactions] = useState(false);
    const [GoToAboutus, setGoToAboutus] = useState(false);
    const location = useLocation();
    console.log(location);

    const [activeTab, setActiveTab] = React.useState(0);

  // define a onClick function to bind the value on tab click
    const onTabClick = (e, index) => {
        setActiveTab(index);
    };

    const TabScreen = ({ activeTab, idx, content, ...props}) => {
        return (
          <div
            className="animate__animated animate__fadeIn"
            role="tabpanel"
            {...props}
          >
            {activeTab === idx && <div className="mx-4">{content}</div>}
          </div>
        );
    };

    function format(compound, title, pic1, pic2, descrip){
        return(
        <div>
            <p><b>{compound}</b></p>
            <p><i>{title}</i></p>
            <img className={styles.imgsize} src = {pic1} alt=""/>
            <img className={styles.imgsize} src = {pic2} alt=""/>
            <p>{descrip}</p>
        </div>)
    }

    function cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const image = () => {
        switch (location.state.toLowerCase()) {
            case 'acetal':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p>My favorite...</p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        <Tab> {info.acetal1[0].reaction} </Tab>
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        <TabScreen activeTab={activeTab} idx={0} key={0} 
                        content={format(info.acetal1[0].reaction, info.acetal1[0].title, pics.acetal[0], null, info.acetal1[0].description)}>
                        </TabScreen>
                    </div>
                )     
            case 'addition of halogen':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>What did the chemist say when he caught his brother stealing halogens? </span>
                                <span className={styles.joke}> Bro, mine</span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(9).keys()].map((item) => (
                            <Tab key={item}>{info.addhalo[item].reaction}</Tab>
                        ))}
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(8).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.addhalo[item].reaction, info.addhalo[item].title, pics.addhalo[item], null, info.addhalo[item].description)}>
                        </TabScreen>
                        ))}
                        <TabScreen activeTab={activeTab} idx={8} key={8} 
                        content={format(info.addhalo[8].reaction, info.addhalo[8].title, pics.addhalo[8], pics.addhalo[9], info.addhalo[8].description)}>
                        </TabScreen>
                    </div>
                    );                        
            case 'addition to benzene ring':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>What do chemists call a benzene ring with iron atoms replacing the carbon atoms? </span>
                                <span className={styles.joke}> A ferrous wheel</span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(6).keys()].map((item) => (
                            <Tab key={item}>{info.addbenring[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(6).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.addbenring[item].reaction, info.addbenring[item].title, pics.addbenring[item], null, info.addbenring[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'alcohols':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p>Chemists and alcoholics have one thing in common, and that is they both view alcohol as part of the solution.</p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(13).keys()].map((item) => (
                            <Tab key={item}>{info.alcohol[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(13).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.alcohol[item].reaction, info.alcohol[item].title, pics.alcohol[item], null, info.alcohol[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'aldehydes':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>What's the fanciest aldehyde? </span>
                                <span className={styles.joke}> Formaldehyde</span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(4).keys()].map((item) => (
                            <Tab key={item}>{info.aldehyde[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(3).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.aldehyde[item].reaction, info.aldehyde[item].title, pics.aldehyde[item], null, info.aldehyde[item].description)}>
                        </TabScreen>
                        ))}
                        <TabScreen activeTab={activeTab} idx={3} key={3} 
                        content={format(info.aldehyde[3].reaction, info.aldehyde[3].title, pics.aldehyde[3], pics.aldehyde[4], info.aldehyde[3].description)}>
                        </TabScreen>
                    </div>
                )
            case 'alkanes':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(2).keys()].map((item) => (
                            <Tab key={item}>{info.alkane[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(2).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.alkane[item].reaction, info.alkane[item].title, pics.alkane[item], null, info.alkane[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'alkenes':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>What did the alkene say to the alkane? </span>
                                <span className={styles.joke}> The name's Bond. Double bond.</span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(4).keys()].map((item) => (
                            <Tab key={item}>{info.alkene[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(4).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.alkene[item].reaction, info.alkene[item].title, pics.alkene[item], null, info.alkene[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'alkynes':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p>Organic chemistry is difficult. Those who study it have alkynes of trouble.</p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(1).keys()].map((item) => (
                            <Tab key={item}>{info.alkyne[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(1).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.alkyne[item].reaction, info.alkyne[item].title, pics.alkyne[item], null, info.alkyne[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'amides':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p>{"These jokes are pretty (a)mide"}</p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(3).keys()].map((item) => (
                            <Tab key={item}>{info.amide[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(3).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.amide[item].reaction, info.amide[item].title, pics.amide[item], null, info.amide[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'c-c bonds':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p>I wish my life was as stable as a c-c bond</p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(8).keys()].map((item) => (
                            <Tab key={item}>{info.ccbond[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(8).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.ccbond[item].reaction, info.ccbond[item].title, pics.ccbond[item], null, info.ccbond[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'carboxylic acids':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p></p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(6).keys()].map((item) => (
                            <Tab key={item}>{info.carboxy[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(6).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.carboxy[item].reaction, info.carboxy[item].title, pics.carboxy[item], null, info.carboxy[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'deoxygenation':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>What do you call a chemistry student who is too stupid to learn about Oxygen? </span>
                                <span className={styles.joke}> An oxymoron </span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(4).keys()].map((item) => (
                            <Tab key={item}>{info.deoxy[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(4).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.deoxy[item].reaction, info.deoxy[item].title, pics.deoxy[item], null, info.deoxy[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'epoxides':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(2).keys()].map((item) => (
                            <Tab key={item}>{info.epoxide[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(2).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.epoxide[item].reaction, info.epoxide[item].title, pics.epoxide[item], null, info.epoxide[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'esters':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>Why did the jury decide Ester was not guilty? </span>
                                <span className={styles.joke}> Because Ester was in a scent. </span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(3).keys()].map((item) => (
                            <Tab key={item}>{info.ester[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(3).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.ester[item].reaction, info.ester[item].title, pics.ester[item], null, info.ester[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'ethers':
                return(
                    <div>
                        <h1>{cap(location.state)}! My favorite...</h1>
                        <div>
                            <p className={styles.samel}>
                                <span>You </span>
                                <span className={styles.joke}> ether </span>
                                <span>get organic chemsitry or you don't.</span>
                            </p>
                        </div>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(3).keys()].map((item) => (
                            <Tab key={item}>{info.ether[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(3).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.ether[item].reaction, info.ether[item].title, pics.ether[item], null, info.ether[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'imines':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(1).keys()].map((item) => (
                            <Tab key={item}>{info.imine[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(1).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.imine[item].reaction, info.imine[item].title, pics.imine[item], null, info.imine[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            case 'ketones':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(6).keys()].map((item) => (
                            <Tab key={item}>{info.ketone[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(5).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.ketone[item].reaction, info.ketone[item].title, pics.ketone[item], null, info.ketone[item].description)}>
                        </TabScreen>
                        ))}
                        <TabScreen activeTab={activeTab} idx={5} key={5} 
                        content={format(info.ketone[5].reaction, info.ketone[5].title, pics.ketone[5], pics.ketone[6], info.ketone[5].description)}>
                        </TabScreen>
                    </div>
                )
            case 'rings':
                return(
                    <div>
                        <h1>{cap(location.state)}!</h1>
                        <p>All the single ladies, all the single ladies</p>
                        <hr style={{background: "#65656573",height: "3px",border: "none"}}/>
                        <Tabs activeTab={activeTab}
                        onTabClick={onTabClick}
                        hideNavBtnsOnMobile={false}
                        leftBtnIcon={<FiChevronLeft size={"1.5em"} />}
                        rightBtnIcon={<FiChevronRight size={"1.5em"} />}>                         
                        {[...Array(1).keys()].map((item) => (
                            <Tab key={item}>{info.ring[item].reaction}</Tab>
                        ))}                        
                        </Tabs>
                        <p className={styles.textsize} padding-bottom={1000}>Click the tabs above to see the reactions!</p>
                        {[...Array(1).keys()].map((item) => (
                        <TabScreen activeTab={activeTab} idx={item} key={item} 
                        content={format(info.ring[item].reaction, info.ring[item].title, pics.ring[item], null, info.ring[item].description)}>
                        </TabScreen>
                        ))}
                    </div>
                )
            default: 
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

    if (GoToAboutus) {
        return <Navigate to="/aboutus"/>;
    };

    return (
        <div>
            <div>
                {image()}
            </div>
            <button style={{ marginLeft: 6 }} onClick={() => { setGoToReactions(true) }}>return</button>
            <div className={styles.benimg}>
                <button onClick={() => {
                    setGoToAboutus(true)}
                }
                className={styles.benzene}> 
                    <img src={benzene} width="75" className="animate__animated animate__rotateIn"/>
                </button>
            </div>
        </div>
    )
    
}

export default Reactions;





