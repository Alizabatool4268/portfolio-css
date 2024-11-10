import React from 'react';
import styles from "@/app/page.module.css";
import Link from 'next/link';

function Page() {
  return (
    <div className={styles.projectsmaindiv}>
      <h1 className={styles.projectsmainheading}>My projects</h1>
      <h2>Next.js based projects</h2>

    <div className={styles.countdownTimer}>
        <div className={styles.contentDiv}>
        <p className={styles.projectparagraph}>This is a countdown timer made by Next.js which provides basic features like pause, start and reset.</p>
        <Link 
        href={"https://github.com/Alizabatool4268/countdown-timer.git"}
        target='_blank'
        className={styles.button}
        >source code
        </Link>
        <Link
         className={styles.button}
         href={"https://countdown-timer-nu-nine.vercel.app/"}
         target="_blank"
        > Live demo</Link>
      </div>
    </div>
      <div className={styles.ShoppingWeb}>
        <div className={styles.contentDiv}>
         <p className={styles.projectparagraph}>This is a static Ecommerce website made by Next.js and a utilizes component library.</p>
         <Link
         className={styles.button}
         href={"https://github.com/Alizabatool4268/selling-istruments.git"}
         target='_blank'
         >Source Code
         </Link>
         <Link
         className={styles.button}
         href={"https://selling-istruments.vercel.app/"}
         target='_blank'>Live Demo
         </Link>
        </div>
      </div>
      <h2>Command line based projects</h2>
      <div className={styles.guessingGame}>
        <div className={styles.contentDiv}>
         <p className={styles.projectparagraph}>This is a command line-based number guessing game in which you will
          have to guess a random number between 0 to 15 It is extremly fun to play and this game gives you
          five attempts to guess the random number.
          </p>
         <Link
         className={styles.button}
         href={"https://github.com/Alizabatool4268/cli-number-guessing-game.git"}
         target='_blank'
         >Source Code
         </Link>
        </div>
      </div>

      
      <div className={styles.calculator}>
      <div className={styles.contentDiv}>
        <p className={styles.projectparagraph}>It is a simple calculater created by me . It is created by using TypeScript , Node.js and inquirer. It can be used to to do
           simple Addition ,subtraction,multiplication,division.</p>
        <Link
        className={styles.button}
        href={"https://github.com/Alizabatool4268/simple-calculator.git"}
        target='_blank'
        >Source Code</Link>
      </div>
      </div>

      <h2>Core HTML and CSS based projects</h2>
      <div className={styles.resumebuilder}>
      <div className={styles.contentDiv}>
        <p className={styles.projectparagraph}>This is a resume builder created by 
          using html css and javascript and typescript.</p>
        <Link
        className={styles.button}
        href={"https://github.com/Alizabatool4268/resume-builder.git"}
        target='_blank'
        >Source Code</Link>
        <Link
        className={styles.button}
        href={"https://resume-builder-lilac-eight.vercel.app/"}
        target='_blank'>Live Demo
        </Link>
      </div>
      </div>
      <div className={styles.glowupweb}>
       <div className={styles.contentDiv}>
         <p className={styles.projectparagraph}>This is an E-commerce website made with simple HTML CSS and JavaScript</p>
        <Link
         className={styles.button}
         href={"https://github.com/Alizabatool4268/Glowup-E-commerce-website.git"}
         target='_blank'
         >Source Code</Link>
         <Link
         className={styles.button}
         href={"https://glowupnow.netlify.app/"}
         target='_blank'>Live Demo
        </Link>
       </div>

      </div>
    </div>
  )
}

export default Page;