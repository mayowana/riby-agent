import React from 'react';
import styles from './Navbar.module.scss'
import logo from './assets/logo.svg';
import header from './assets/header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetStarted from '../GetStarted/GetStarted';
import Mobilemenu from './Mobilemenu'


const Navbar = () => {

    return (
        <>
            <header>
                <div className={styles.navbox}>
                    <nav className={styles.navbar}>
                        <div>
                            <img src={logo} alt=""></img>
                        </div>

                        <Mobilemenu /> 
                        
                        <div className={styles.navmenu}>
                            <FontAwesomeIcon className={styles.fahome} icon="home"></FontAwesomeIcon>
                            <p>Products</p>
                            <p>Benefits</p>
                            <p>Requirements</p>
                            <p>How It Works</p>
                            <p>FAQ</p>
                            <p className={styles.login}>Login</p>
                            <p className={styles.signup}>Sign Up</p>
                        </div>
                    </nav>
                </div>

                <div className={styles.hero}>
                    <div className={styles.maintext}>
                        <h1>
                        Using People and Technology to take Your Business to the Next Level.
                        </h1>
                        <p>
                        The Riby Agent Network is a Riby’s on-the-ground network of trained agents, skilled at offering value and support to customers all across Nigeria, far beyond the reaches of technology.
                        </p>
                        <GetStarted />
                    </div>
                    <div>
                        <img src={header} className={styles.mainpic}></img>
                    </div>
                </div>
            </header>
        </> 
    )
};

export default Navbar;