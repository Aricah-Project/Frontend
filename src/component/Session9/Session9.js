import React from 'react'
import frontarrow from '../Asset/Frontarrow.png'
import backarrow from '../Asset/Back arrow.png'
import Avatar from '../Asset/Avatar.png'
import styles from '../Features/Features.module.css'

function Session9() {
  return (
    <div>
         <div className={styles.session9}>
                <h2>What our customers are saying about us</h2>
                <div className={styles.customers}>
                    <div className={styles.speak}>
                        {/* <img src={speak} alt='speak' className={styles.speaker} /> */}
                        <p>As a child, I always dreamed
                             of studying in Canada, and you
                              helped me accomplish this dream.
                               I was still able to get assistance
                                even after obtaining a visa. You will
                                 be recommended to Ali.</p><br></br><hr></hr><br></br>
                                 <div className = {styles.divider}></div>
                        <div className= {styles.avatar}>
                            <img src={Avatar} alt='man' />
                            <p>Femi Kuti</p>
                        </div>
                    </div >
                    <div className={styles.speak}>
                        {/* <img src={speak} alt='speak' className={styles.speaker}/> */}
                        <p>As a child, I always dreamed
                             of studying in Canada, and you
                              helped me accomplish this dream.
                               I was still able to get assistance
                                even after obtaining a visa. You will
                                 be recommended to Ali.</p><br></br><hr></hr><br></br>
                        <div className = {styles.divider}></div>
                        <div className= {styles.avatar}>
                            <img src={Avatar} alt='man' />
                            <p>Femi Kuti</p>
                        </div>
                    </div >
                    <div className={styles.speak}>
                        {/* <img src={speak} alt='speak' className={styles.speaker}/> */}
                        <p>As a child, I always dreamed
                             of studying in Canada, and you
                              helped me accomplish this dream.
                               I was still able to get assistance
                                even after obtaining a visa. You will
                                 be recommended to Ali.</p><br></br><hr></hr><br></br>
                                 <div className = {styles.divider}></div>
                        <div className= {styles.avatar}>
                            <img src={Avatar} alt='man' />
                            <div className={styles.kind}><p>Femi Kind</p>
                            <p>Student</p></div>
                        </div>
                    </div >
                </div>
            </div>
            <div className={styles.arrow}>
                <img src={frontarrow} alt='frontarrow' className={styles.front} />
                <img src={backarrow} alt='backarrow' className={styles.back} />
            </div>
    </div>
  )
}

export default Session9