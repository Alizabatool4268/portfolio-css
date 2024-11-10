import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';

function Herosection() {
  return (
    <div className={styles.mainImage}>
      <div className={`${styles.mainHeading}`}>Iam <big className={styles.name}>Aliza Batool</big><br /> <big className={styles.name}>Tech Enthusiastic</big></div>
      <p className={styles.homeheading}> get to know more about My Tech journey,skills and my projects in this portfolio.</p>
      <br />
      <Link 
      href={"/about"}
      className={styles.mainbutton}>Know More
      </Link>
   </div>
  )
}
export default Herosection;