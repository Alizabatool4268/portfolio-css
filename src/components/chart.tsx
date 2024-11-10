import React from 'react';
import styles from "@/app/page.module.css";

function Chart() {
  return (
    <div className={styles.chartdiv}>
            <h2> My skills</h2>
           <br />
           <div className={styles.chart}></div>
           <ul className={styles.ul}>
            <li className={styles.skillone}>HTML 95%</li>
            <li className={styles.skilltwo}>CSS 90%</li>
            <li className={styles.skilltwo}>Tailwind 85%</li>
            <li className={styles.skillthree}>Typescript 80%</li>
            <li className={styles.skillfour}>Javascript 80%</li>
            <li >Next.js 40% (currently learning)</li>
           </ul>

    </div>
  )
}

export default Chart;