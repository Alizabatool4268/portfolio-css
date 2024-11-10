import React from 'react';
import styles from "@/app/page.module.css";

function Page() {
  return (
    <div className={styles.contactformstructure}>
     <div className={styles.contactFormBg}>
            <form className={styles.contactformcontent}>
                <input type="text" placeholder='Your Name'className={styles.nameemailtextarea} />
                <input type="email" placeholder='your Email'className={styles.nameemailtextarea} />
                <textarea name="text" id="textareaContact" placeholder='Your qurey' className={styles.nameemailtextarea}></textarea>
                <button className={styles.contactbutton}>Submit</button>
            </form>
     </div>
    </div>
  )
}

export default Page;