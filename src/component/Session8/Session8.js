import styles from '../Features/Features.module.css'
import iphone1 from '../Asset/iphone1.png'
import iphone2 from '../Asset/iphone2.png'
import Apple from '../Asset/blackApple.png'
import Play from '../Asset/blackPlay.png'


function Session8() {
    return(
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

 )
}

export default Session8