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
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Services</h3>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>Job Match</p></Link>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>Interview Preparation</p></Link>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>CV Review</p></Link>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}><p>Job Opportunities</p></Link>
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Company</h3>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>About</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>FAQs</p></Link>
                    <p style={{ textDecoration: 'none', color: 'white' }}>Connect with us</p>      
                    <div>
                        <i className>T</i>
                        <i className>L</i>
                        <i className>I</i>
                        <i className>e</i>
                    </div>
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Legal</h3>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Terms</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Privacy</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Security</p></Link>
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Download Aricah</h3>
                    <p style={{ textDecoration: 'none', color: 'white' }}>On your phone, tablet or PC</p>
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
