import React from "react";
import { Link } from "react-router-dom";
import styles from '../Footer/Footer.module.css'
// import playstore from '../Asset/play.png'
// import appstore from '../Asset/apple.png'
import apple from '../Asset/Apple.png'
import player from '../Asset/player.png'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.place}>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Logo</h3>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>
                        Aricah is a place where blah blah or
                        it gives a place where blah blah, and
                        also is a place where blah blah</p></Link>
                    {/* <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>Interview Preparation</p></Link>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>CV Review</p></Link>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>Job Opportunities</p></Link> */}
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Aricah</h3>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>FAQs</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Terms and Condition</p></Link>
                    <p style={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</p>      
                    <div>
                        <i className>T</i>
                        <i className>L</i>
                        <i className>I</i>
                        <i className>e</i>
                    </div>
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Support</h3>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Customer Care</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Quick Chat</p></Link>
                    {/* <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Security</p></Link> */}
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Download Aricah</h3>
                    <p style={{ textDecoration: 'none', color: 'white' }}>
                        Download Aricah mobile app for
                        IOS and Andriod devices, it helps
                        you secure a future.
                    </p>
                    <p style={{ textDecoration: 'none', color: 'white' }}>Make that life changing decision</p>
                    <div className={styles.store}>
                    <button>
                        <img src={apple} alt='apple' />
                        <div>Download on
                              AppStore</div>
                    </button>
                    <button>
                        <img src={player} alt='player' />
                        <div>Download on
                             PlayStore</div>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
