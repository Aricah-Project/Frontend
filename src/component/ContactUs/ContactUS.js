import React from "react"
import styles from './ContactUs.module.css'
// import contact from '../Asset/contactUs.png'
import connect from '../Asset/connect.png'
import location from '../Asset/Location.png'
import message from '../Asset/Message.png'
import call from '../Asset/Call.png'
import framework from '../Asset/Frame 29.png'
import phoneX1 from '../Asset/PhoneX1.png'
import phoneX2 from '../Asset/PhoneX2.png'
import AppleWhite from '../Asset/AppleWhite.png'
import player from '../Asset/playStore.png'



function ContactUs () {
    return (
        <div className={styles.mus}>
            <div>
            <div className={styles.us}>
                <div className={styles.contact}>
                    <img src={connect} alt="contact" className={styles.contacts} />
                </div>
                <div className={styles.help}>
                <p className={styles.con}>Contact us</p>
                <p className={styles.you}>Let us guide you and match-make you to the mentors,
                     tutors and excellent materials</p></div>
                <h4 className={styles.intouch}>Get in Touch</h4>
                <div className={styles.locale}>
                    <div className={styles.location}>
                        <img src={location} alt="location" />
                        <p>
                        552 W48th Street, New York, NY 10036
                        </p>
                    </div>
                    <div className={`${styles.location} ${styles.locate}`}>
                        <img src={message} alt="message" />
                        <p>
                        hello@chillingdesin.com
                        </p>
                    </div>
                    <div className={`${styles.location} ${styles.locate}`}>
                        <img src={call} alt="call" />
                        <p>
                        +2347012345678
                        </p>
                    </div>
                </div>
                <div className={styles.connect}>
                    <div className={styles.usreach}>
                        <img src={framework} alt="reachUs" />
                    </div>
                    <div className={styles.add}><div className={styles.mail}>Email Address</div>
                    <div className={styles.message}>Type a message</div>
                    <div className={styles.send}>Send a message</div></div>
                </div>
               
            </div>
            </div>
            <div className={styles.session8}>
     <div className={styles.downloadApp}>
    <h2>Download our App!</h2>
    <p>Lorem ipsum dolor sit amet, 
        consectetuer adipiscing elit.
         Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque 
        penatibus et magnis dis parturien</p>
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
 <div className={styles.iphone3}>
    <img src={phoneX1} alt='phone'  className={styles.phone1}/>
    <img src={phoneX2} alt='phone' className={styles.phone2} />
  </div>
  </div>

        </div>
    )
}

export default ContactUs