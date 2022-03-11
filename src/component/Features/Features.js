import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './Features.module.css'
import iphone1 from '../Asset/iphone1.png'
import iphone2 from '../Asset/iphone2.png'
import aboutus from '../Asset/imageAboutUs.png'
import user from '../Asset/User.png' 
import search from '../Asset/Search.png'
import send from '../Asset/Send.png'
import Apple from '../Asset/blackApple.png'
import clients from '../Asset/clients.png'
import Play from '../Asset/blackPlay.png'
import Avatar from '../Asset/Avatar.png'

import DP from '../Asset/DP.png'
import frontarrow from '../Asset/Frontarrow.png'
import backarrow from '../Asset/Back arrow.png'


function Features() {
    return(
        <div className={styles.features}>
            <div className={styles.session1}>
                <div className={styles.perfect}>
                    <h4 className='styles.role'>Get matched to your
                    perfect role whether you are a job seeker or a job giver.</h4>
                    <p>Save time and reduce stress.
                       Get prepared and ready to kickstart your career journey. Find that perfect
                        candidate for your company. Save time and stress of candidate search.
                    </p>
                    <div className={styles.btnGet}>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className={styles.iphone}>
                    <img src={iphone1} alt='iphone1' className={styles.iphone1} />
                    <img src={iphone2} alt='iphone2' className={styles.iphone2} />
                </div>
            </div>
            <div className={styles.session2}>
                <div className={styles.around}>Join most companies around the world</div>
                <div className={styles.brand}>
                    <p>Brand Logo</p>
                    <p>Brand Logo</p>
                    <p>Brand Logo</p>
                    <p>Brand Logo</p>
                    <p>Brand Logo</p>
                </div>
            </div>

            <div className={styles.session3}>
                <div className={styles.usAbout}>
                    <img src={aboutus} alt='aboutus'  className={styles.imgAbout}/>
                </div>
                <div className={styles.aboutTell}>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                        natoque penatibus et magnis dis parturient montes, nascetur 
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                         eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
                         pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                          In enim justo,
                         rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum 
                         felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                    </p>
                    <div className={styles.btnLearn}><button>Learn More</button></div>
                </div>
            </div>
            <div className={styles.session4}>
                <h1>Aricah works in three easy steps</h1>
                <div className={styles.realsteps}>
                <div className={styles.steps}>
                    <img src={user} alt='user' />
                    <h4>Create your account</h4>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit.
                         Aenean commodo ligula eget dolor.
                          Aenean massa. Cum sociis natoque 
                          penatibus et 
                    </p>
                </div>
                <div className={styles.steps}>
                    <img src={search} alt='search' />
                    <h4>Create your account</h4>
                    <p>Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit.
                          Aenean commodo ligula eget dolor.
                           Aenean massa. Cum sociis natoque
                            penatibus et 
                    </p>
                </div>
                <div className={styles.steps}>
                    <img src={send} alt='send' />
                    <h4>Create your account</h4>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit.
                         Aenean commodo ligula eget dolor.
                          Aenean massa. Cum sociis natoque
                           penatibus et 
                    </p>
                </div>
                </div>
            </div>
            <div className={styles.session5}>
                <div className={styles.session5a}>
                    <h2>What makes us better</h2>
                    <p>Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor.
                     Aenean massa. Cum sociis natoque
                  penatibus et magnis dis parturient montes</p>
                </div>
                <div className={styles.session5b}>
                    <div className={styles.securer}>
                        <h2>Safe and Secure jobs</h2>
                        <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque
                         penatibus et magnis dis parturient montes</p>
                    </div>
                    <div className={styles.secure}>
                        <h2>Safe and Secure jobs</h2>
                        <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor.
                         Aenean massa. Cum sociis natoque
                          penatibus et magnis dis parturient
                           montes</p>
                    </div>
                    <div className={styles.secured}>
                        <h2>Safe and Secure jobs</h2>
                        <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque 
                        penatibus et magnis dis parturient montes</p>
                    </div>
                </div>
            </div>
            <div className={styles.session6}>
                    <h1 className={styles.by}>Explore Jobs by category</h1>
                 <div className={styles.explore}>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>Customer support</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>HR Manager</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>   
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>Operations</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>Management</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>Content Writing</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>Design</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients'  className={styles.clients}></img>
                        </div>
                        <h4>Developer</h4>
                        <p>125 Jobs Available</p>
                    </div>
                    <div className={styles.support}>
                        <div>
                            <img src={clients} alt='clients' className={styles.clients}></img>
                        </div>
                        <h4>Education</h4>
                        <p>125 Jobs Available</p>
                    </div>
                 </div>
            </div>
            <div className={styles.session7}>
                <h1>Recommended Jobs</h1>
              <div className={styles.recommend}>
                <div className={styles.commend}>
                    <div className={styles.plum}>
                        <div className={styles.dp}>
                            <img src={DP} alt='DP' className={styles.villemage}/>
                        </div>
                        <div className={styles.ville}>
                            <p>Plumville Int Ltd</p>
                            <h6>Lagos, Nigeria.</h6>
                        </div>
                    </div>
                    <h4>UI/UX Designer</h4>
                    <p>Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.</p>
                    <p>$222222</p>
                </div>
                <div className={styles.commend}>
                <div className={styles.plum}>
                        <div className={styles.dp}>
                            <img src={DP} alt='DP' className={styles.villemage}/>
                        </div>
                        <div className={styles.ville}>
                            <p>Plumville Int Ltd</p>
                            <h6>Lagos, Nigeria.</h6>
                        </div>
                    </div>
                    <h4>Developer</h4>
                    <p>Lorem ipsum dolor 
                        sit amet, consectetuer
                         adipiscing elit. Aenean 
                         commodo ligula eget dolor.
                          Aenean massa.</p>
                    <p>$222222</p>
                </div>
                <div className={styles.commend}>
                <div className={styles.plum}>
                        <div className={styles.dp}>
                            <img src={DP} alt='DP' className={styles.villemage}/>
                        </div>
                        <div className={styles.ville}>
                            <p>Plumville Int Ltd</p>
                            <h6>Lagos, Nigeria.</h6>
                        </div>
                    </div>
                    <h4>UI/UX Designer</h4>
                    <p>Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit.
                          Aenean commodo ligula eget dolor. 
                          Aenean massa.</p>
                    <p>$222222</p>
                </div>
                <div className={styles.commend}>
                <div className={styles.plum}>
                        <div className={styles.dp}>
                            <img src={DP} alt='DP' className={styles.villemage}/>
                        </div>
                        <div className={styles.ville}>
                            <p>Plumville Int Ltd</p>
                            <h6>Lagos, Nigeria.</h6>
                        </div>
                    </div>
                    <h4>Developer</h4>
                    <p>Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit.
                          Aenean commodo ligula eget dolor. 
                          Aenean massa.</p>
                    <p>$222222</p>
                </div>
                <div className={styles.commend}>
                <div className={styles.plum}>
                        <div className={styles.dp}>
                            <img src={DP} alt='DP' className={styles.villemage}/>
                        </div>
                        <div className={styles.ville}>
                            <p>Plumville Int Ltd</p>
                            <h6>Lagos, Nigeria.</h6>
                        </div>
                    </div>
                    <h4>UI/UX Designer</h4>
                    <p>Lorem ipsum dolor sit amet,
                         consectetuer adipiscing elit.
                          Aenean commodo ligula eget dolor. 
                          Aenean massa.</p>
                    <p>$222222</p>
                </div>
                <div className={styles.commend}>
                    <div className={styles.plum}>
                        <div className={styles.dp}>
                            <img src={DP} alt='DP' className={styles.villemage}/>
                        </div>
                        <div className={styles.ville}>
                            <p>Plumville Int Ltd</p>
                            <h6>Lagos, Nigeria.</h6>
                        </div>
                    </div>
                    <h4>UI/UX Designer</h4>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit.
                         Aenean commodo ligula eget dolor. 
                         Aenean massa.</p>
                    <p>$222222</p>
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
                            <p>Femi Kuti</p>
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

export default Features