import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MagmaDesk from './MagmaDesk';
import { Fade, Slide } from 'react-awesome-reveal';

const Header = () => {

    const Enlarge = (btn : string) => {
        const btn1 = document.getElementById(`${btn}`) as HTMLButtonElement;
        btn1.classList.add('enlarge');
    };

    const Delarge = (btn : string) => {
        const btn1 = document.getElementById(`${btn}`) as HTMLButtonElement;
        setTimeout(() => {
            btn1.classList.remove('enlarge');
        }, 1);
    }

    function Call() {
        window.location.reload();
    }

    return(
        <Fade cascade damping={10} delay={500}>
        <h2 className="background-color-1 text-4xl p-4 m-2 font-bold relative font-3 flex flex-row justify-between">
            <MagmaDesk />
                <div className="w-1/2 flex justify-around">
                    <Slide delay={800} direction='down'>
                    <Link to='/'>
                        <button id='bh-1' className='background-color-2 w-36 text-xl m-1 p-3 pl-8 pr-8 font-4'
                        onMouseOver={() => {Enlarge('bh-1')}} onMouseLeave={() => {Delarge('bh-1')}}
                        onClick={() => {Call()}}>Home</button>
                    </Link>
                    </Slide>
                    <Slide delay={1100} direction='down'>
                    <Link to='/admin'>
                        <button id='bh-2' className='background-color-2 w-36 text-xl m-1 p-3 pl-8 pr-8 font-4'
                        onMouseOver={() => {Enlarge('bh-2')}} onMouseLeave={() => {Delarge('bh-2')}}>Admin</button>
                    </Link>
                    </Slide>
                    <Slide delay={1400} direction='down'>
                    <Link to='/director'>
                        <button id='bh-3' className='background-color-2 w-36 text-xl m-1 p-3 pl-8 pr-8 font-4'
                        onMouseOver={() => {Enlarge('bh-3')}} onMouseLeave={() => {Delarge('bh-3')}}>Director</button>
                    </Link>
                    </Slide>
                    <Slide delay={1700} direction='down'>
                    <Link to='/student/add/studentData'>
                        <button id='bh-4' className='background-color-2 w-36 text-xl m-1 p-3 pl-8 pr-8 font-4'
                        onMouseOver={() => {Enlarge('bh-4')}} onMouseLeave={() => {Delarge('bh-4')}}>Student</button>
                    </Link>
                    </Slide>
                </div>
            </h2>
        </Fade>
    )
};

export default Header;