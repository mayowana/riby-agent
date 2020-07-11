import React from 'react';
import styles from './Body.module.scss'
import boss from './assets/boss.svg'
import investment from './assets/investment.svg'
import wallet from './assets/wallet.svg'
import require from './assets/require.png'
import GetStarted from '../GetStarted/GetStarted';
import arrow from './assets/arrow.svg'
import app from './assets/app.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Body = () => (
    <>
        <div className={styles.benefits}>
            <h2>Benefits of being a Riby Agent</h2>

            <div className={styles.allbenefits}>
                <div className={styles.benefit}>
                    <img src={wallet} className={styles.wallet}></img>
                    <p><strong>Build a Stable Income</strong></p>
                    <p>As a Riby agent, you receive attractive commissions on all transactions performed through you.</p>
                </div>

                <div className={styles.benefit}>
                    <img src={boss} className={styles.boss}></img>
                    <p><strong>Be Your Own Boss</strong></p>
                    <p>It is your work, your time and your schedule. Combine it with other sources of income or not, all from the location of your choice.</p>
                </div>

                <div className={styles.benefit}>
                    <img src={investment} className={styles.investment}></img>
                    <p><strong>No Investment Required</strong></p>
                    <p>All you need is a working capital (minimum of #5,000) no form of payment or hidden charges.</p>
                </div>
            </div>
        </div>

        <div className={styles.reqcont}>
        <div className={styles.requirements}>
            <div>
                <img src={require}></img>
            </div>

            <div className={styles.reqlist}>
                <h3>Requirements</h3>
                <ul>
                    <li>Must be literate <br></br>(with a minimum of senior school leaving certificate).</li>
                    <li>Own a smartphone</li>
                    <li>Must have a valid identification card <br></br> (National ID card, Voter’s card, Driver’s License etc).</li>
                    <li>Business registration documents (For SMES).</li>
                    <li>Have at least #5,000 for a working capital in a valid bank account.</li>
                </ul>
                <GetStarted />
            </div>
        </div>
        </div>

        <div className={styles.works}>
            <div className={styles.worksdesc}>
                <h3>How it works</h3>
                <p>The Riby Agent Network is a Riby’s on-the-ground network of trained agents, skilled at offering value and support to customers all across Nigeria, far beyond the reaches of technology.</p>
            </div>
            
            <div className={styles.steps}>
                <div className={styles.step}>
                    <p className={styles.numbers}>1</p>
                    <p><strong>Registration</strong></p>
                    <ul>
                        <li>Register via link</li>
                        <li>Submit copy of ID card</li>
                        <li>Submit utility bill and other required documents</li>
                    </ul>
                </div>
                <img src={arrow} className={styles.barrows1}></img>
                <div className={styles.step}>
                    <p className={styles.numbers}>2</p>
                    <p><strong>Verification and activation</strong></p>
                    <ul>
                        <li>Verification of details</li>
                        <li>Agent activation</li>
                    </ul>
                </div>
                <img src={arrow} className={styles.barrows2}></img>
                <div className={styles.step}>
                    <p className={styles.numbers}>3</p>
                    <p><strong>Funding</strong></p>
                    <ul>
                        <li>Have a minimum of #5,000 in a valid account</li>
                        <li>Confirmation of funds</li>
                    </ul>
                </div>
                <img src={arrow} className={styles.barrows3}></img>
                <div className={styles.step}>
                    <p className={styles.numbers}>4</p>
                    <p><strong>Training and branding</strong></p>
                    <ul>
                        <li>Training</li>
                        <li>Get starter pack</li>
                        <li>Market support</li>
                        <li>Starts earning</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className={styles.banner}>
            <h3>Make more money working as a Riby Agent?</h3>
            <GetStarted/>
        </div>
        
        <div className={styles.downcont}>
        <div className={styles.download}>
            <img src={app}></img>
            <div className={styles.downclass}>
                <h3>Download our mobile app for Free</h3>
                <p>This application Monitors all of your income in details. This app does everything you could possibly want it to do and not only that, beautifully carefully designed and extremely intuitive to use.</p>
                <p className={styles.downbutton}>
                    <FontAwesomeIcon icon={['fab', 'google-play']} className={styles.google}></FontAwesomeIcon>
                    &nbsp; Google Play
                </p>
            </div>
        </div>
        </div>

        <footer>
            <div className={styles.links}>
                <div className={styles.hello}>
                    <p><strong>SAY HELLO</strong></p>
                    <ul>
                        <li>G4, Moore Road, Yaba, Lagos</li>
                        <li>0809 222 2109, 01 291 4247</li>
                        <li>info@riby.me</li>
                    </ul>
                </div>

                <div className={styles.linkcont}>
                <div className={styles.quicklinks}>
                    <p><strong>QUICK LINKS</strong></p>
                    <ul>
                        <li>About Us</li>
                        <li>Partners & Programs</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div className={styles.quicklinks2}>
                <p><strong>&nbsp;</strong></p>
                    <ul>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Why Riby?</li>
                    </ul>
                </div>
                </div>
            

                <div className={styles.newsletter}>
                    <p><strong>NEWSLETTER</strong></p>   
                    <ul>
                        <li>Be the first to know</li>
                    </ul> 
                    <input placeholder="What's your email address" type='text'></input><button>Subscribe</button>
                </div>
            </div>

            <div className={styles.footer}>
                <div>
                    <p> ©2016-2019 Riby. RC: 1214343. </p>
                </div>

                <div className={styles.social}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} className={styles.social}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={['fab', 'twitter']} className={styles.social}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={['fab', 'facebook']} className={styles.social}></FontAwesomeIcon>
                </div>
            </div>            
        </footer>
    </>
);



export default Body;