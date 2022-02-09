import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css'


function Navbar() {

    return (
        
    
        <>
          <nav className={`${styles.header} ${styles.active}`}>
                <div className={`${styles.row} ${styles.justifyContent}`}>
                    <div className={styles.logo}>
                        <Link to='/' className={styles.guider}>ARICAH</Link>
                        <Link to='/' className={styles.guide}>Home</Link>
                        <Link to='/about' className={styles.guide}>About</Link>
                        <Link to='/contact' className={styles.guide}>Talk to us</Link>
                    </div>
                    <div className={styles.ham}>
                        <div className={styles.in}><Link to='/' className={styles.guiding}>Sign in</Link></div>
                        <div className={styles.out}><Link to='/' className={styles.guidin}>Create free account</Link></div>
                        {/* <button type={'submit'} className={`${styles.guide} ${styles.free}`}>Download for free</button> */}
                        <span></span>
                    </div>
                </div>
          </nav>
        </>
          
    );
}

export default Navbar