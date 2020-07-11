import React, { useState }from 'react';
import Hamburger from './Hamburger';
import MenuItems from './MenuItems';
import Backdrop from './Backdrop';
import styles from './Mobilemenu.module.scss';

const Mobilemenu = () => {

    let [showMenuStatus, showMenu] = useState(false);
    
   const clicked = () => {
    showMenu(showMenuStatus = !showMenuStatus);
 };

      let menuitems;
      let backdrop;

      if (showMenuStatus) {
          menuitems = <MenuItems />
          backdrop = <Backdrop />
      }     
      
    return (<>
        <div className={styles.mobilenav}>
        <Hamburger onClickValue={clicked}/>
        {menuitems}
        {backdrop}
        </div>
    </>)
};

export default Mobilemenu