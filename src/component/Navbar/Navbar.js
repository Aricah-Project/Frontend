import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css'
import List from '../Asset/Hamburger.png'


function Navbar() {

    // const [isOpener, setIsOpener] = useState(false);
// const toggle = () => setIsOpener(!isOpener);

//   const [isOpen, setIsOpen] = useState(false);

//   const toggling = () => setIsOpen(!isOpen);

//   const [selectedOption, 
//     // setSelectedOption
//   ] = useState(null);


const [open, setOpen] = useState(false);

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

                    <div onClick={() => setOpen(!open)} className={styles.hamburger}>
                        <img src={List} alt='list' />
                        {open ?
                        <ul className={styles.type} onClick={() => setOpen(false)}>
                            <li onClick={() => setOpen(false)}>temp1</li>
                            <li onClick={() => setOpen(false)}>temp2</li>
                            <li onClick={() => setOpen(false)}>temp3</li>
                            <li onClick={() => setOpen(false)}>temp4</li>
                        </ul> : ' '}
                    </div>
                </div>
          </nav>
        </>
          
    );
}

export default Navbar