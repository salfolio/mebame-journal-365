'use client';

import React from "react";
import styles from './home.module.css'



export default function Footer() {

    const openLink = () => {
        window.open('https://mebame.co/', '_blank');
    }


  return (
    <div className={styles['footer']}>
      <div className={styles['footer-description']}>
        {/* <p>{"New journal topic for every day of the year"}</p> */}
        <p>{"Designed & developed by"}</p>
      </div>
      <div className={styles['logo']} onClick={openLink}>
        <p>
            {"mebamé"}
        </p>
      </div>
    </div>
  );
}
