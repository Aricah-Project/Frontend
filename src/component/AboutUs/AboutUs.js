import React from "react";
import phoneX1 from '../Asset/PhoneX1.png'
import phoneX2 from '../Asset/PhoneX2.png'
import AppleWhite from '../Asset/AppleWhite.png'
import player from '../Asset/playStore.png'
import styles from "./AboutUs.module.css"

function AboutUs () {
    return (
        <div className={styles.oney}>
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


export default AboutUs