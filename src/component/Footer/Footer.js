import React from "react";
import { Link } from "react-router-dom";
import styles from '../Footer/Footer.module.css'
import AppleWhite from '../Asset/AppleWhite.png'
import player from '../Asset/playStore.png'
import facebook from '../Asset/facebook.png'
import Linkedin from '../Asset/Linkedin.png'
import instagram from '../Asset/instagram.png'
import Twitter from '../Asset/Twitter.png'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.place}>
               <div className={styles.col}>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Logo</h3>
                    <Link to='/'style={{ textDecoration: 'none', color: 'white' }}>
                      <p className={styles.mint}>
                        Aricah is a place where blah blah or
                        it gives a place where blah blah, and
                        also is a place where blah blah
                      </p>
                    </Link>

                        <div className={styles.con}>
                        <p>Connect with us</p>
                    <div className={styles.conn}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><img src={facebook} alt='facebook' /></Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><img src={instagram} alt='instagram' /></Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><img src={Twitter} alt='Twitter' /></Link>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><img src={Linkedin} alt='linkedin' /></Link>
                    </div>
                </div>
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Aricah</h3>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>FAQs</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Terms and Condition</p></Link>
                    <p style={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</p>      
                </div>
              </div>
              <div className={styles.coly}>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Support</h3>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Customer Care</p></Link>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Quick Chat</p></Link>
                    {/* <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><p className={styles.link}>Security</p></Link> */}
                </div>
                <div className={styles.menu}>
                    <h3 style={{ textDecoration: 'none', color: 'white' }} className={styles.bold}>Download Aricah</h3>
                    <p className={styles.mint} style={{ textDecoration: 'none', color: 'white' }}>
                        Download Aricah mobile app for
                        IOS and Andriod devices, it helps
                        you secure a future.
                    </p>
                    <p className={styles.mint} style={{ textDecoration: 'none', color: 'white' }}>Make that life changing decision</p>
                  <div className={styles.store}>
                    
                  <button className={styles.players}>
                        <div className={styles.player}>
                            <img src={AppleWhite} alt='Apple'  />
                        </div>
                        <div className={styles.downFlex}>
                            Download on<span><br></br>AppStore</span> 
                        </div>
                    </button>
                    <button className={styles.players}>
                        <div className={styles.player}>
                            <img src={player} alt='player'  />
                        </div>
                        <div className={styles.downFlex}>
                            Download on<span><br></br>PlayStore</span> 
                        </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Footer
