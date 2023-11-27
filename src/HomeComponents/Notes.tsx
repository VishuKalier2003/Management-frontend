import React from 'react';
import { Fade, Rotate, Slide } from 'react-awesome-reveal';
import Effects from '../component/Core/Effects';

const Notes = () => {
    function Wiggle(val : string) {
        Effects.WiggleEffect(`${val}`);
    }

    return(
        <Fade delay={1000} direction="up">
            <div className='relative background-color-2 text-2xl w-full mt-10 p-6 font-4'>What we Envision</div>
            <div className='relative w-full h-72 bottom-margin-max'>
                <div className='w-full relative text-4xl font-color-4 font-4 text-center p-4'>
                    Unique Capabilities
                </div>
                <Rotate delay={1500} triggerOnce><div className='absolute vertical-line -top-60 left-1/2'></div></Rotate>
                <Slide delay={1700} direction="left">
                <div className='relative background-color-2 w-1/4 left-w-15 top-20 flex justify-center items-center text-xl p-6 font-3'
                id='wig-1' onMouseEnter={() => {Wiggle('wig-1')}}>
                    <p>We have maintained a specific Cluster for administering logs and updates 
                        from various committee of an Organization whether students, faculty or Director
                    </p>
                </div>
                </Slide>
                <Slide cascade delay={1000} direction="right">
                <div className='absolute horizontal-line-right -top-80 left-1/2'></div>
                <div className='relative w-1/4 flex justify-center items-center left-w-60 -top-6'>
                    <p className='text-5xl font-color-4 font-4'>Clustered Log Availability</p>
                </div>
                </Slide>
                <Slide delay={1700} direction="right">
                <div className='relative background-color-2 w-1/4 left-w-60 top-20 flex justify-center items-center text-xl p-6 font-3'
                id='wig-2' onMouseEnter={() => {Wiggle('wig-2')}}>
                    <p>We have developed an Extensive Magma Coins Exchange System specifically 
                        designed to reward the User based on the feedback and other parameters
                    </p>
                </div>
                </Slide>
                <Slide><div className='absolute horizontal-line-left -top-h-1 left-1/2'></div></Slide>
                <Slide delay={1000} direction="left">
                <div className='relative w-1/4 flex justify-end items-center left-w-15 -top-24'>
                    <p className='text-5xl font-color-4 font-4'>Unique Magma Coin Exchanges</p>
                </div>
                S</Slide>
            </div>
        </Fade>
    )
};

export default Notes;