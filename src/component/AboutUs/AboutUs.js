import React from "react";
import iphone1 from '../Asset/iphone1.png'
import iphone2 from '../Asset/iphone2.png'
import Apple from '../Asset/blackApple.png'
import Play from '../Asset/blackPlay.png'
import styles from "./AboutUs.module.css"

function AboutUs () {
    return (
        <div>
            <div className={styles.one}>
                <h2 >We help build Careers</h2>
                <div className={styles.aboutUs}></div>
                <div className={styles.good}>
                    <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                 eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                 montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                  venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer 
                  tincidunt. Cras dapibus.  Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
                  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                   nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 
                    imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                    Integer tincidunt. Cras dapibus.</p> 
<p>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
 Aenean massa.
 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec 
 quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
 Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
  imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer 
  tincidunt. Cras dapibus.</p>
                </div>
                <h4 className={styles.history}>Some History</h4>
                <p className={styles.some}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo 
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                     parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                     pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                      pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                       rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                     mollis pretium. Integer tincidunt. Cras dapibus.  Lorem ipsum dolor sit amet,
                      consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                       Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                       ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium 
                       quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                        venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                         tincidunt. Cras dapibus. 

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean 
massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
 Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa 
 quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
  rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
  Integer tincidunt. Cras dapibus. 
                </p>
                <div className={styles.our}>
                <h4 className={styles.peop}>Meet our People</h4>
                <div className={styles.design}>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
                <div className={styles.meet}>
                    <div className={styles.people}></div>
                    <h5>John Doe</h5>
                    <p>Product Designer</p>
                </div>
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
    )
}


export default AboutUs