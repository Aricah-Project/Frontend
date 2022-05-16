import React from 'react'
// import { Link } from 'react-router-dom'
import styles from './Features.module.css'
import user from '../Asset/User.png' 
import search from '../Asset/Search.png'
import about from '../Asset/about.png'
import send from '../Asset/Send.png'
import clients from '../Asset/clients.png'
import Avatar from '../Asset/Avatar.png'
import ph1 from '../Asset/X - 2.png'
import ph2 from '../Asset/X - 3.png'
import phoneX1 from '../Asset/PhoneX1.png'
import phoneX2 from '../Asset/PhoneX2.png'
import Apple from '../Asset/blackApple.png'
import Play from '../Asset/blackPlay.png'
import DP from '../Asset/DP.png'
import frontarrow from '../Asset/Frontarrow.png'
import backarrow from '../Asset/Back arrow.png'
// import apple from '../Asset/Apple.png'
import player from '../Asset/player.png'


function Features() {
    return(
        <div className={styles.featr}>
        <div className={styles.features}>
            <div className={styles.session1}>
                <div className={styles.perfect}>
                    <h4 className='styles.role'>
                        Find your dream job on <span className={styles.span}>Aricah</span> with ease!</h4>
                    <p>Get the most exciting jobs from all around the 
                       world and grow your career fast with others..</p>
                    <div className={styles.btnGet}>
                        <button>Create Free Account</button>
                    </div>
                    <div className={styles.change}>
                    {/* <button>
                        <img src={apple} alt='apple' />
                        <div className={styles.names}>Download on
                              AppStore</div>
                    </button> */}
                    <button>
                        <img src={player} alt='player' />
                        <div className={styles.names}>Download on
                             PlayStore</div>
                    </button>
                </div>
                </div>
                <div className={styles.iphone}>
                    <div className={styles.ph}>
                        <img src={ph1} alt='phone' className={styles.phImg} />
                    </div>
                    <div className={styles.phh}>
                        <img src={ph2} alt='phone2' className={styles.phhImg} />
                    </div>                   
                </div>
            </div>

            <div className={styles.session3}>
                <div className={styles.usAbout}>
                    <img src={about} alt='aboutus'  className={styles.imgAbout}/>
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
    <img src={phoneX1} alt='phone'  className={styles.phone1}/>
    <img src={phoneX2} alt='phone' className={styles.phone2} />
  </div>
  </div>
           <div className={styles.features}>
            <div className={styles.session9}>
                <h2>What our customers are saying about us</h2>
                <div className={styles.customers}>
                    <div className={styles.speak}>
                        {/* <img src={speak} alt='speak' className={styles.speaker} /> */}
                        <p className={styles.child}>As a child, I always dreamed
                             of studying in Canada, and you
                              helped me accomplish this dream.
                               I was still able to get assistance
                                even after obtaining a visa. You will
                                 be recommended to Ali.</p><br></br><hr></hr><br></br>
                                 <div className = {styles.divider}></div>
                        <div className= {styles.avatar}>
                            <img className={styles.avat} src={Avatar} alt='man' />
                            <div className={styles.kind}>
                                <p>Femi Kind</p>
                            <p>Student</p></div>
                        </div>
                    </div >
                    <div className={styles.speak}>
                        {/* <img src={speak} alt='speak' className={styles.speaker}/> */}
                        <p className={styles.child}>As a child, I always dreamed
                             of studying in Canada, and you
                              helped me accomplish this dream.
                               I was still able to get assistance
                                even after obtaining a visa. You will
                                 be recommended to Ali.</p><br></br><hr></hr><br></br>
                        <div className = {styles.divider}></div>
                        <div className= {styles.avatar}>
                            <img className={styles.avat} src={Avatar} alt='man' />
                            <div className={styles.kind}>
                                <p>Femi Kind</p>
                            <p>Student</p></div>
                        </div>
                    </div >
                    <div className={styles.speak}>
                        {/* <img src={speak} alt='speak' className={styles.speaker}/> */}
                        <p className={styles.child}>As a child, I always dreamed
                             of studying in Canada, and you
                              helped me accomplish this dream.
                               I was still able to get assistance
                                even after obtaining a visa. You will
                                 be recommended to Ali.</p><br></br><hr></hr><br></br>
                                 <div className = {styles.divider}></div>
                        <div className= {styles.avatar}>
                            <img className={styles.avat} src={Avatar} alt='man' />
                            <div className={styles.kind}>
                                <p>Femi Kind</p>
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
        </div>
    )
}

export default Features