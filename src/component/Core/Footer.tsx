import React from 'react';
import '../../styles/BaseStyles.css';
import { Rotate } from 'react-awesome-reveal';

const Footer = () => {
    return(
        <Rotate delay={100} triggerOnce>
        <div className="relative w-full background-color-2 pt-4 pb-6 mt-20">
            <div className='relative text-xl left-8 font-3 pt-6'>Copyrights Reserved</div>
            <div className='relative w-full font-3 flex flex-row justify-around'>
                <div className='relative w-1/3 font-3 grid grid-flow-row grid-cols-2 gap-20 left-8 mt-4'>
                    <section className='w-64 relative flex flex-col gap-2'>
                        <div>Contact Us</div>
                        <div>Email vishukalier123@gmail.com</div>
                        <div>Email vishu.kalier2021@vitbhopal.ac.in</div>
                        <div>Phone +91 73007 64957</div>
                    </section>
                    <section className='w-64 relative flex flex-col gap-2'>
                        <div className=''>Connect With Us</div>
                        <div>
                            <u><a href='https://www.linkedin.com/in/vishu-kalier-74132822a/' target='blank'>Linkedin</a></u>
                        </div>
                        <div>
                            <u><a href='https://github.com/VishuKalier2003' target='blank'>Github</a></u>
                        </div>
                        <div>
                            <u><a href='https://www.facebook.com/profile.php?id=61551733637476' target='blank'>Facebook</a></u>
                        </div>
                        <div>
                            <u><a href='https://web.whatsapp.com/' target='blank'>Whatsapp</a></u>
                        </div>
                    </section>
                </div>
                <div className='w-1/4 text-md grid grid-flow-col grid-rows-2 gap-8'>
                    <p>
                    This application must not be used for commercial purposes. This application is developed by Vishu Kalier.
                    The application is in its development phase so the users might encounter some bugs.
                    </p>
                    <p>
                        In case of severe quality issues please feel free to submit feedbacks. Your feedbacks are valuable as 
                        they help us to develop our application better.
                    </p>
                </div>
                <div className='w-1/4 text-md grid grid-flow-col grid-rows-2 gap-8'>
                    <div>
                    It is requested that all users must use this application for educational purposes only. And violation of 
                    rights will lead to severe consequences like banning.
                    </div>
                    <div>
                        <p>Other Alternate Numbers</p>
                        <p>+91 88598 17913</p>
                        <p>+91 73007 64158</p>
                    </div>
                </div>
            </div>
        </div>
        </Rotate>
    )
};

export default Footer;