import React from 'react'
import styles from './MenuItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MenuItems = () => (
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
);

export default MenuItems;