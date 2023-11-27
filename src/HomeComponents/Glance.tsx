import React from 'react';
import { Fade} from 'react-awesome-reveal';

const Glance = () => {
    const FlipPage = (val: string) => {
        const element = document.getElementById(`${val}`) as HTMLDivElement;
        element.classList.add('flip-page');
        element.style.animation = ''; // Reset animation
        element.style.animation = 'page-flip-next 2s linear 1'; // Add the animation class again
        setTimeout(() => {element.style.zIndex = '0';}, 1000);
    };
    
    const FlipPageBack = (val: string, num : number) => {
        const element = document.getElementById(`${val}`) as HTMLDivElement;
        element.classList.remove('flip-page');
        element.classList.add('flip-page-back');
        element.style.animation = ''; // Reset animation
        element.style.zIndex = `${num}`;
        element.style.animation = 'page-flip-previous 2s linear 1'; // Add the animation class again
    };
    

    return(
        <div className='relative mt-28'>
        <Fade>
            <div className='relative background-color-6 left-w-30 top-0 width-40 h-96 mt-24 mb-24 flex flex-row text-xl'>
                    <div className='absolute top-0 left-0 w-full h-full background-color-2 z-50' id='page-1'>
                        <div className='flex flex-col justify-center items-center w-full h-full'>
                            <p className='font-color-4 text-5xl font-4 pb-10'>Features at a Glance</p>
                            <button className="background-color-5 mt-12 btn-type-1" onClick={() => 
                                {FlipPage('page-1')}}>Show</button>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full background-color-2 z-30' id='page-2'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <div className='font-3 text-2xl'><p className='font-color-4 font-4 text-3xl p-4'>Student Access</p>
                                <ul className='font-3 text-xl p-2'>
                                    <li className='p-1'>Own Data and Private Logs</li>
                                    <li className='p-1'>Generic Chat Section</li>
                                    <li className='p-1'>Student Database</li>
                                    <li className='p-1'>Feedback Submission</li>
                                    <li className='p-1'>Student Dashboard</li>
                                </ul>
                            </div>
                            <div className='flex flex-row w-full justify-evenly mt-3'>
                                <button className='background-color-5 mt-12 btn-type-back' onClick={() => {FlipPageBack('page-1', 50)}}>Back</button>
                                <button className='background-color-5 mt-12 btn-type-next' onClick={() => {FlipPage('page-2')}}>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full background-color-2 z-20' id='page-3'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <div className='font-3 text-2xl'>
                                <p className='font-color-4 font-4 text-3xl p-4'>Admin Access</p>
                                <ul className='font-3 text-xl p-2'>
                                    <li className='p-1'>Own Data, Private and Generic Logs</li>
                                    <li className='p-1'>Generic Chat Section</li>
                                    <li className='p-1'>Student and Admin Database</li>
                                    <li className='p-1'>Feedback Check and Banning</li>
                                    <li className='p-1'>Admin Dashboard</li>
                                </ul>
                            </div>
                            <div className='flex flex-row w-full justify-evenly mt-3'>
                                <button className='background-color-5 mt-12 btn-type-back' onClick={() => {FlipPageBack('page-2', 30)}}>Back</button>
                                <button className='background-color-5 mt-12 btn-type-next' onClick={() => {FlipPage('page-3')}}>Next</button>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full background-color-2 z-10'>
                        <div className='flex flex-col w-full h-full justify-center items-center'>
                            <div className='font-3 text-2xl'>
                                <p className='font-color-4 font-4 text-3xl p-4'>Director Access</p>
                                <ul className='font-3 text-xl p-2'>
                                    <li className='p-1'>Complete Data Server</li>
                                    <li className='p-1'>Services Maintenance</li>
                                    <li className='p-1'>Backend Cluster Databases</li>
                                    <li className='p-1'>Private and Group Logs</li>
                                    <li className='p-1'>Director Dashboard</li>
                                </ul>
                            </div>
                            <div className='flex flex-row w-full justify-evenly mt-3'>
                                <button className="background-color-5 mt-12 btn-type-1" onClick={() => {FlipPageBack('page-3', 20)}}>Back</button>
                            </div>
                        </div>
                    </div>
            </div>
        </Fade>
        </div>
    )
};

export default Glance;