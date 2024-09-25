import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Features = () => {

    const MouseEnterEffect = (val : string[], val1 : string[], val2 : string[], outer : string) => {
        const ele = document.getElementById(outer) as HTMLDivElement;
        ele.classList.add('shade-dark-border');
        ele.style.transitionDuration = '1s';
            for(let i = 0; i < val2.length; i++) {
                const eleS = document.getElementById(val2[i]) as HTMLDivElement;
                eleS.classList.add('shade-dark');
                eleS.style.transitionDuration = '1s';
            }
            for(let i = 0; i < val.length; i++) {
                const element = document.getElementById(val[i]) as HTMLParagraphElement;
                element.classList.add('font-color-4');
                element.style.transitionDuration = '1s';
            }
            for(let i = 0; i < val1.length; i++) {
                const element = document.getElementById(val1[i]) as HTMLParagraphElement;
                element.classList.add('font-color-2');
                element.style.transitionDuration = '1s';
            }
    }

    const MouseLeaveEffect = (val : string[], val1 : string[], val2 : string[], outer: string) => {
        const ele = document.getElementById(outer) as HTMLDivElement;
        ele.classList.remove('shade-dark-border');
        ele.style.transitionDuration = '1s';
            for(let i = 0; i < val2.length; i++) {
                const eleS = document.getElementById(val2[i]) as HTMLDivElement;
                eleS.classList.remove('shade-dark');
                eleS.style.transitionDuration = '1s';
            }
            for(let i = 0; i < val.length; i++) {
                const element = document.getElementById(val[i]) as HTMLParagraphElement;
                element.classList.remove('font-color-4');
                element.style.transitionDuration = '1s';
            }
            for(let i = 0; i < val1.length; i++) {
                const element = document.getElementById(val1[i]) as HTMLParagraphElement;
                element.classList.remove('font-color-2');
                element.style.transitionDuration = '1s';
            }
    }

    return(
        <Fade damping={100} delay={800}>
        <div className='background-color-2 w-full mt-8 mb-8 p-4'>
            <section className='grid grid-row grid-cols-6 gap-8 min-h-max m-6'>
                <div className='item1 font-3 h-32' id='dark-1' onMouseEnter={() => {MouseEnterEffect(
                    ['pe-1', 'pe-2', 'pe-3', 'pe-4', 'pe-5', 'pe-6'], ['ve-1', 've-2', 've-3', 've-4', 've-5', 've-6', 've-7'], 
                    ['dark-1', 'dark-2', 'dark-3', 'dark-4'], 'dark-1');}}
                    onMouseLeave={() => {MouseLeaveEffect(
                        ['pe-1', 'pe-2', 'pe-3', 'pe-4', 'pe-5', 'pe-6'], ['ve-1', 've-2', 've-3', 've-4', 've-5', 've-6', 've-7'], 
                        ['dark-1', 'dark-2', 'dark-3', 'dark-4'], 'dark-1');}}>
                    <div className='relative background-color-3 w-full h-full flex flex-col' id='dark-2'>
                        <div className='relative flex flex-row pl-6 p-3' id='dark-3'>
                            <p className='high font-color-1' id='pe-5'>T</p><p className='low' id='ve-6'>his website provides </p>
                            <p className='high font-color-1' id='pe-1'>F</p><p className='low' id='ve-1'>ast</p>
                            <p className='low' id='ve-5'>, </p> <p className='high font-color-1' id='pe-2'>Q</p>
                            <p className='low' id='ve-2'>uick and</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dark-4'>
                            <p className='high font-color-1' id='pe-3'>D</p><p className='low' id='ve-3'>urable</p> 
                            <p className='high font-color-1' id='pe-4'>I</p><p className='low' id='ve-4'>ntergation</p> 
                            <p className='high font-color-1' id='pe-6'>E</p><p className='low' id='ve-7'>nvironment</p>
                        </div>
                    </div>
                </div>
                <div className='item1 h-32' id='drk-1' onMouseEnter={() => {MouseEnterEffect(
                    ['pr-1', 'pr-2', 'pr-3', 'pr-4', 'pr-5', 'pr-6'], ['vr-1', 'vr-2', 'vr-3', 'vr-4', 'vr-5', 'vr-6'], 
                    ['drk-1', 'drk-2', 'drk-3', 'drk-4'], 'drk-1');}}
                    onMouseLeave={() => {MouseLeaveEffect(
                        ['pr-1', 'pr-2', 'pr-3', 'pr-4', 'pr-5', 'pr-6'], ['vr-1', 'vr-2', 'vr-3', 'vr-4', 'vr-5', 'vr-6'], 
                        ['drk-1', 'drk-2', 'drk-3', 'drk-4'], 'drk-1');}}>
                    <div className='relative background-color-3 w-full h-32 flex flex-col' id='drk-2'>
                        <div className='relative flex flex-row pl-10 p-3' id='drk-3'>
                            <p className='high font-color-1' id='pr-1'>L</p><p className='low' id='vr-1'>arge</p> <p className='high font-color-1' id='pr-2'>D</p>
                            <p className='low' id='vr-2'>atabase </p> <p className='high font-color-1' id='pr-6'>I</p><p className='low' id='vr-3'>ntegration in the </p>
                        </div>
                        <div className='relative flex flex-row pl-10 p-3' id='drk-4'>
                            <p className='high font-color-1' id='pr-3'>F</p><p className='low' id='vr-4'>orm of </p> <p className='high font-color-1' id='pr-4'>C</p>
                            <p className='low' id='vr-5'>oupled </p> <p className='high font-color-1' id='pr-5'> C</p><p className='low' id='vr-6'>lusters</p>
                        </div>
                    </div>
                </div>
                <div className='item2' id='dk-1' onMouseEnter={() => {MouseEnterEffect(
                    ['prr-1', 'prr-2', 'prr-3', 'prr-4', 'prr-5', 'prr-6', 'prr-7', 'prr-8', 'prr-9', 'prr-10', 'prr-11', 'prr-12', 'prr-13', 'prr-14'], 
                    ['vrr-1', 'vrr-2', 'vrr-3', 'vrr-4', 'vrr-5', 'vrr-6', 'vrr-7', 'vrr-8', 'vrr-9', 'vrr-10', 'vrr-11', 'vrr-12', 'vrr-13', 'vrr-14'], 
                    ['dk-1', 'dk-2', 'dk-3', 'dk-4', 'dk-5', 'dk-6'], 'dk-1');}}
                    onMouseLeave={() => {MouseLeaveEffect(
                        ['prr-1', 'prr-2', 'prr-3', 'prr-4', 'prr-5', 'prr-6', 'prr-7', 'prr-8', 'prr-9', 'prr-10', 'prr-11', 'prr-12', 'prr-13', 'prr-14'], 
                        ['vrr-1', 'vrr-2', 'vrr-3', 'vrr-4', 'vrr-5', 'vrr-6', 'vrr-7', 'vrr-8', 'vrr-9', 'vrr-10', 'vrr-11', 'vrr-12', 'vrr-13', 'vrr-14'], 
                        ['dk-1', 'dk-2', 'dk-3', 'dk-4', 'dk-5', 'dk-6'], 'dk-1');}}>
                    <div className='relative background-color-3 w-full h-full flex flex-col' id='dk-2'>
                        <div className='relative flex flex-row pl-6 p-3' id='dk-3'>
                            <p className='high font-color-1' id='prr-1'>T</p><p className='low' id='vrr-1'>hree levels of</p>
                            <p className='high font-color-1' id='prr-2'> S</p>
                            <p className='low' id='vrr-2'>ecurity and</p><p className='high font-color-1' id='prr-3'>M</p>
                            <p className='low' id='vrr-3'>icroservices</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dk-4'>
                            <p className='high font-color-1' id='prr-4'>S</p><p className='low' id='vrr-4'>tudent</p> <p className='high font-color-1' id='prr-5'>C</p>
                            <p className='low' id='vrr-5'>ore having</p> <p className='high font-color-1' id='prr-6'>L</p>
                            <p className='low' id='vrr-6'>east</p><p className='high font-color-1' id='prr-7'> A</p><p className='low' id='vrr-7'>ccess</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dk-5'>
                            <p className='high font-color-1' id='prr-8'>A</p><p className='low' id='vrr-8'>dministrator to </p>
                            <p className='high font-color-1' id='prr-9'>M</p><p className='low' id='vrr-9'>onitor</p>
                            <p className='high font-color-1' id='prr-10'>W</p><p className='low' id='vrr-10'>orkflow</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dk-6'>
                            <p className='high font-color-1' id='prr-11'>D</p><p className='low' id='vrr-11'>irector to </p>
                            <p className='high font-color-1' id='prr-12'>C</p><p className='low' id='vrr-12'>ontrol the</p>
                            <p className='high font-color-1' id='prr-13'>E</p><p className='low' id='vrr-13'>cosystem</p>
                            <p className='high font-color-1' id='prr-14'>S</p><p className='low' id='vrr-14'>ervices</p>
                        </div>
                    </div>
                </div>
                <div className='item3' id='dak-1' onMouseEnter={() => {MouseEnterEffect(['ps-1', 'ps-2', 'ps-3', 'ps-4', 'ps-5', 'ps-6'],
                ['vs-1', 'vs-2', 'vs-3', 'vs-4', 'vs-5', 'vs-6'], ['dak-1', 'dak-2', 'dak-3', 'dak-4', 'dak-5'], 'dak-1')}}
                onMouseLeave={() => {MouseLeaveEffect(['ps-1', 'ps-2', 'ps-3', 'ps-4', 'ps-5', 'ps-6'],
                ['vs-1', 'vs-2', 'vs-3', 'vs-4', 'vs-5', 'vs-6'], ['dak-1', 'dak-2', 'dak-3', 'dak-4', 'dak-5'], 'dak-1')}}>
                    <div className='relative background-color-3 w-full flex flex-col' id='dak-2'>
                        <div className='relative flex flex-row pl-6 p-3' id='dak-3'>
                            <p className='high font-color-1' id='ps-1'>F</p><p className='low' id='vs-1'>ast </p>
                            <p className='high font-color-1' id='ps-2'>T</p><p className='low' id='vs-2'>hroughput</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dak-4'>
                            <p className='high font-color-1' id='ps-3'>S</p><p className='low' id='vs-3'>ecure</p>
                            <p className='high font-color-1' id='ps-4'>B</p><p className='low' id='vs-4'>ackup</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dak-5'>
                            <p className='high font-color-1' id='ps-5'>S</p><p className='low' id='vs-5'>mart</p>
                            <p className='high font-color-1' id='ps-6'>C</p><p className='low' id='vs-6'>oupling</p>
                        </div>
                    </div>
                </div>
                <div className='item1' id='dn-1' onMouseEnter={() => {MouseEnterEffect(['pn-1', 'pn-2', 'pn-3', 'pn-4', 'pn-5', 'pn-6', 'pn-7'],
                    ['vn-1', 'vn-2', 'vn-3', 'vn-4', 'vn-5', 'vn-6', 'vn-7', 'vn-8'], ['dn-1', 'dn-2', 'dn-3', 'dn-4', 'dn-5'], 'dn-1')}}
                    onMouseLeave={() => {MouseLeaveEffect(['pn-1', 'pn-2', 'pn-3', 'pn-4', 'pn-5', 'pn-6', 'pn-7'],
                    ['vn-1', 'vn-2', 'vn-3', 'vn-4', 'vn-5', 'vn-6', 'vn-7', 'vn-8'], ['dn-1', 'dn-2', 'dn-3', 'dn-4', 'dn-5'], 'dn-1')}}>
                    <div className='relative background-color-3 w-full flex flex-col' id='dn-2'>
                        <div className='relative flex flex-row pl-6 p-3' id='dn-3'>
                            <p className='high font-color-1' id='pn-1'>W</p><p className='low' id='vn-1'>e believe in providing the best</p>
                            <p className='high font-color-1' id='pn-2'>S</p><p className='low' id='vn-2'>ervices</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dn-4'>
                            <p className='low' id='vn-3'>within the reach of </p><p className='high font-color-1' id='pn-3'>Y</p>
                            <p className='low' id='vn-4'>our</p>
                            <p className='high font-color-1' id='pn-4'>F</p><p className='low' id='vn-5'>ingertips</p>
                        </div>
                        <div className='relative flex flex-row pl-6 p-3' id='dn-5'>
                            <p className='high font-color-1' id='pn-5'>W</p><p className='low' id='vn-6'>e respect your</p>
                            <p className='high font-color-1' id='pn-6'>T</p><p className='low' id='vn-7'>ime and</p>
                            <p className='high font-color-1' id='pn-7'>T</p><p className='low' id='vn-8'>rust</p>
                        </div>
                    </div>
                </div>
                <div className='item4 h-20' id='dark-00' onMouseEnter={() => {MouseEnterEffect(['pv-01', 'pv-02'],
                ['ve-01', 've-02'], ['dark-00', 'dark-01', 'dark-02'], 'dark-00')}}
                onMouseLeave={() => {MouseLeaveEffect(['pv-01', 'pv-02'], ['ve-01', 've-02'], ['dark-00', 'dark-01', 'dark-02'], 'dark-00')}}>
                    <div className='relative background-color-3 w-full h-20 flex flex-col' id='dark-01'>
                        <div className='relative flex flex-row pl-6 p-3' id='dark-02'>
                            <p className='text-6xl font-color-1' id='pv-01'>S</p><p className='relative text-3xl top-5' id='ve-01'>aves </p>
                            <p className='text-6xl font-color-1' id='pv-02'>T</p><p className='relative text-3xl top-5' id='ve-02'>ime</p>
                        </div>
                    </div>
                </div>
                <div className='item5' id='rk-1' onMouseEnter={() => {MouseEnterEffect(['p-1', 'p-2', 'p-4', 'p-5'],
                ['v-1', 'v-2', 'v-4', 'v-5'], ['rk-1', 'rk-2', 'rk-3'], 'rk-1')}}
                onMouseLeave={() => {MouseLeaveEffect(['p-1', 'p-2', 'p-4', 'p-5'],
                ['v-1', 'v-2', 'v-4', 'v-5'], ['rk-1', 'rk-2', 'rk-3'], 'rk-1')}}>
                    <div className='relative background-color-3 w-full h-20 flex flex-col' id='rk-2'>
                        <div className='relative flex flex-row pl-6 p-3' id='rk-3'>
                            <p className='text-6xl font-color-1' id='p-1'>C</p><p className='relative text-3xl top-5' id='v-1'>onnect with </p>
                            <p className='text-6xl font-color-1' id='p-2'>A</p><p className='relative text-3xl top-5' id='v-2'>nyone</p>
                            <p className='text-6xl font-color-1' id='p-4'>S</p><p className='relative text-3xl top-5' id='v-4'>eamlessly</p>
                            <p className='text-6xl font-color-1' id='p-5'>A</p><p className='relative text-3xl top-5' id='v-5'>nytime</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Fade>
    )
}

export default Features;