import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BaseStyles.css";
import Footer from "./Core/Footer";
import Header from "./Core/Header";
import Effects from "./Core/Effects";
import BestServices from "../HomeComponents/BestServices";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Notes from "../HomeComponents/Notes";
import Glance from "../HomeComponents/Glance";

const Home = () => {
    const navigate = useNavigate();
    const[entered, setEntered] = useState(false);
    const[entered1, setEntered1] = useState(false);
    const[entered2, setEntered2] = useState(false);

    const HandleScroll = () => {
        Effects.ScrollToRoles('roles');
    };

    const Wiggle = (val : string) => {
        Effects.WiggleEffect(`${val}`);
    }

    const Transition = (val : string, entered : boolean) => {
        if(!entered)
        {
            setEntered(true);
            Effects.TransitioningColor(`${val}`);
        }
    }

    const TransitionI = (val : string, entered : boolean) => {
        if(!entered)
        {
            setEntered1(true);
            Effects.TransitioningColor(`${val}`);
        }
    }

    const TransitionII = (val : string, entered : boolean) => {
        if(!entered)
        {
            setEntered2(true);
            Effects.TransitioningColor(`${val}`);
        }
    }

    onpageshow = (event: PageTransitionEvent) => {
        setTimeout(() => {
            Effects.SlideWaveEffect('Best Data Management Software', 'dx-1', 100);
            Effects.SlideWaveEffect('Magma Desk', 'dx-2', 300);
        }, 1000);
    };

    return(
        <div id='block'>
            <Header />
            <div className='relative w-full h-56 background-color-2 text-md'>
                <Fade cascade delay={500} direction="up">
                <q className="relative font-3 background-color-2 text-md w-1/3 m-4 p-4">
                    <i className='text-md'>Valuing your time, we provide the best seamless services at your fingertips.
                    </i>
                </q>
                </Fade>
                <Slide delay={1000} direction='left'>
                <div className='absolute w-full flex flex-col justify-center item-center left-1/3'>
                    <p className='font-color-2 text-4xl font-4 pt-8 flex flex-row' id='dx-1'></p>
                    <p className='font-color-4 text-6xl font-4 pb-8 p-2 flex flex-row' id='dx-2'></p>
                </div>
                </Slide>
            </div>
            <div>
                <Slide delay={1500} direction='right'>
                <button id='b-1' className='relative -top-12 font-1 text-2xl w-44 p-4 background-color-3 ml-12' onClick={
                    HandleScroll}>
                    Explore
                </button>
                </Slide>
            </div>
            <Slide cascade damping={100} delay={400} direction="left">
            <div className='relative background-color-5 w-full h-72'>
                <div className="text-2xl font-1 m-4">What We Offer</div>
                <ul className="relative text-xl font-1 flex flex-row justify-evenly m-4 p-4">
                    <li id='wiggle-1' className='relative background-color-3 w-72 font-3 p-8'
                    onMouseOver={() => {Wiggle('wiggle-1')}}>
                        Fast Integration of all the Services at your fingertips
                    </li>
                    <li id='wiggle-2' className='relative background-color-3 w-72 font-3 p-8'
                    onMouseOver={() => {Wiggle('wiggle-2')}}>
                        Strong Security and two levels of Administration facility
                    </li>
                    <li id='wiggle-3' className='relative background-color-3 w-72 font-3 p-8'
                    onMouseOver={() => {Wiggle('wiggle-3')}}>
                        Finely grained Microservices to handle large number of Users
                    </li>
                </ul>
            </div>
            </Slide>
            <Slide cascade damping={400} delay={800} direction="right">
            <div className='relative background-color-5 w-full h-72'>
                <div className="text-2xl font-1 m-4 text-right">Unique Facilities</div>
                <ul className="relative text-xl font-1 flex flex-row justify-evenly m-4 p-4">
                    <li id='wiggle-4' className='relative background-color-3 w-72 font-3 p-8'
                    onMouseOver={() => {Wiggle('wiggle-4')}}>
                        Voting System to make and update the Administration facilities
                    </li>
                    <li id='wiggle-5' className='relative background-color-3 w-72 font-3 p-8'
                    onMouseOver={() => {Wiggle('wiggle-5')}}>
                        Highly strong two way Authentication and tracking of Services
                    </li>
                    <li id='wiggle-6' className='relative background-color-3 w-72 font-3 p-8'
                    onMouseOver={() => {Wiggle('wiggle-6')}}>
                        Robust and scalable Backend Microservices to handle data streams
                    </li>
                </ul>
            </div>
            </Slide>
            <BestServices />
            <Notes />
            <Slide damping={100} delay={400} direction="right">
            <div className='font-1 relative background-color-2 text-2xl w-full p-6'>
                <p id='roles' className='left-24'>Roles at Hand</p>
            </div>
            </Slide>
            <Slide damping={800} delay={500} direction="left">
            <div id='eff-1' className='relative background-color-5 w-full h-72 z-50' onMouseEnter={() => {Transition('eff-1', entered)}}
            onMouseLeave={() => {setEntered(!entered);}}>
                <div className='relative background-color-2 w-1/6 p-4 text-2xl font-4 text-center z-50'>Student</div>
                <div className='w-5/6 flex flex-row justify-between m-6 ml-12 z-50'>
                    <ol className='flex flex-col gap-1 z-50'>
                        <li className='font-3 ml-6 text-xl'>
                            * Access the Student rights and store your data privately
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Store your personal, professional and private Information separately
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Easily maintain your work and profile through a single dashboard pane
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Apply for a Higher Administrative post if required
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Gain Desk Points to increase your chances of getting a Higher Administrative post
                        </li>
                    </ol>
                    <span id='student' className="-top-16 background-color-1 flex justify-center items-center z-50">
                        <Link to='/student/add/studentData'>
                            <button className='text-xl font-4 w-36' id='button-1'>
                                Apply as Student
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
            </Slide>
            <Fade damping={800} delay={700} direction="right">
            <div id='eff-2' className='relative background-color-5 w-full h-72' onMouseEnter={() => TransitionI('eff-2', entered1)}
            onMouseLeave={() => {setEntered1(!entered1);}}>
                <div className='relative left-3/4 background-color-2 w-1/6 p-4 text-2xl font-4 text-center z-50'>Administrator</div>
                <div className='w-5/6 flex flex-row justify-between m-6 ml-12 z-50'>
                    <span id='admin' className="-top-14 background-color-1 flex justify-center items-center left-24 z-50">
                        <Link to='/student/admin'>
                            <button className='text-xl font-4 w-36' id='button-2'>
                                Apply as Admins
                            </button>
                        </Link>
                    </span>
                    <ol className='flex flex-col gap-1 z-50'>
                        <li className='font-3 ml-6 text-xl'>
                            * Access the Administrator rights and store your data privately
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Maintain the work and profile of the Students through a single dashboard pane
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Easily approve and disapprove of the Student requests and maintain feedbacks
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Apply for a Higher Administrative post if required, and vote for the same
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Maintain a high score to get recommended as a Director by the system
                        </li>
                    </ol>
                </div>
            </div>
            </Fade>
            <Slide damping={800} delay={900} direction="left">
            <div id='eff-3' className='relative background-color-5 w-full h-72' onMouseEnter={() => {TransitionII('eff-3', entered2)}}
            onMouseLeave={() => {setEntered2(!entered2);}}>
                <div className='relative background-color-2 w-1/6 p-4 text-2xl font-4 text-center z-50'>Director</div>
                <div className='w-5/6 flex flex-row justify-between m-6 ml-12 z-50'>
                    <ol className='flex flex-col gap-1 z-50'>
                        <li className='font-3 ml-6 text-xl'>
                            * Track the working and ban the accounts founded suspicious
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Maintain the subsystem and have access to unique Microservice rights
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Easily maintain and update the system through a single dashboard pane
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Approve and disapprove of the entire Student and Admins Community and collects feedbacks
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Work with the development team to resolve issues and fix bugs
                        </li>
                    </ol>
                    <span id='director' className="-top-12 background-color-1 flex justify-center items-center z-50">
                        <Link to='/director'>
                            <button className='text-xl font-4 w-36' id='button-3'>
                                Apply as Director
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
            </Slide>
        <Glance />
        <Footer />
        </div>
    )
};

export default Home;