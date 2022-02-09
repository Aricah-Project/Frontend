import React from "react"
import styles from './ContactUs.module.css'
import contact from '../Asset/contactUs.png'
import connect from '../Asset/connect.png'
import location from '../Asset/Location.png'
import message from '../Asset/Message.png'
import call from '../Asset/Call.png'
import framework from '../Asset/Frame 29.png'
import iphone1 from '../Asset/iphone1.png'
import iphone2 from '../Asset/iphone2.png'
import Apple from '../Asset/blackApple.png'
import Play from '../Asset/blackPlay.png'

function ContactUs () {
    return (
        <div>
            <div className={styles.us}>
                <div className={styles.contact}>
                    <img src={connect} alt="contact" className={styles.contacts} />
                </div>
                <div className={styles.help}><p className={styles.con}>Contact us</p>
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
                <div className={styles.session8}>
                <div className={styles.downloadApp}>
                    <h2>Download our App!</h2>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit.
                         Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque 
                        penatibus et magnis dis parturien</p>
                    <div className={styles.store}>
                        <img src={Apple} alt='Apple' className={styles.apple} />
                        <img src={Play} alt='Play' className={styles.playPlay} />
                    </div>
                </div>
                <div className={styles.iphone3}>
                    <img src={iphone1} alt='phone'  className={styles.phone1}/>
                    <img src={iphone2} alt='phone' className={styles.phone2} />
                </div>
             </div>
            </div>
        </div>
    )
}

export default ContactUs