import React, { useState } from 'react';
import DirectorForm from '../../forum/DirectorForm';
import Effects from '../Core/Effects';
import axios from 'axios';
import Footer from '../Core/Footer';
import HeaderDirector from '../Core/HeaderDirector';

interface DirectorItem {
    id ?: string,
    userName : string,
    access: boolean,
}

const DirectorPage = () =>
{
    const [show, setShow] = useState(false);
    const [director, setDirector] = useState<DirectorItem[]>([]);

    const ShowData = async () => {
        setShow(true);
        const response = await axios.get('https://management-app-404814.et.r.appspot.com/director/getAll');
        const output = response.data;
        console.log(show);
        setDirector(output);
        console.log(director);
    }

    const HideData = () => {
        setShow(false);
        console.log(show);
    };

    const ShowNavbar = () => {
        const nav = document.getElementById("navbar") as HTMLDivElement;
        nav.style.zIndex = "10";
        nav.style.transitionDuration = "1s"
        nav.style.top = "0px";
    };

    const AccessDifferentiate = (access : boolean) => {
        let styles = 'background-color-4 text-center word-padding font-1 text-xl color-1';
        if(access)
            styles = 'background-color-4 text-center word-padding font-1 text-xl color-2';
        return styles;
    };

    const Wiggle = (val : string) => {
        Effects.WiggleEffect(`${val}`);
    }

    return(
        <div>
            <DirectorForm />
            <HeaderDirector />
            <section className="relative background-color-5 p-4 m-2">
                <div className="relative p-2 m-2 text-2xl mb-4 font-1">Rights to Directors</div>
                <div className="relative w-full grid grid-flow-row grid-cols-3 justify-center 
                content-center gap-12 mb-16">
                    <div id='d-1' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('d-1')}}>
                        <p>
                            The Director can view, update and delete the details of the <b className="font-1"> 
                            Users</b> and <b className='font-1'> Administrators</b>. The Director holds 
                            <b className="font-1"> maximum rights</b>.
                        </p>
                    </div>
                    <div id='d-2' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('d-2')}}>
                        <p>
                            The Director gets a <b className="font-1"> unique Password</b> for oneself. The
                            password will be used to <b className="font-1"> access </b> the Director's rights.
                        </p>
                    </div>
                    <div id='d-3' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('d-3')}}>
                        <p>
                            The Director can take <b className="font-1"> necessary actions</b> to <b className='font-1'> allow</b> or
                            <b className='font-1'> deny anyone</b> of their rights and privileges if found necessary.
                        </p>
                    </div>
                    <div id='d-4' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('d-4')}}>
                        <p>
                            The Director can administer and track the <b className='font-1'> backend changes</b> and monitor
                            the working of the <b className='font-1'> University System</b>.
                        </p>
                    </div>
                    <div id='d-5' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('d-5')}}>
                        <p>
                            Each Director can provide <b className='font-1'> suggestions and feedbacks</b> to either an Admin 
                            or a User regarding new features and accesses to the System.
                        </p>
                    </div>
                    <div id='d-6' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('d-6')}}>
                        <p>
                            The Director can update their password frequently <b className='font-1'> any number of times.</b> This 
                            will ensure that the rights of each Director are <b className='font-1'> preserved</b>.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative background-color-5 p-4 m-2 mt-8">
                <div className="relative p-2 m-2 text-2xl text-right pr-8 mb-4 font-1">What We Expect From Directors</div>
                <div className="relative w-full grid grid-flow-row grid-cols-4 justify-center 
                content-center gap-6 mb-12">
                    <div id='bd-1' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bd-1')}}>
                        <p>
                            The Directors must maintain the proper <b className='font-1'> workflow</b> and 
                            <b className='font-1'> orderly requests</b> of the System.
                        </p>
                    </div>
                    <div id='bd-2' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bd-2')}}>
                        <p>
                            Directors must <b className='font-1'> approve</b> or <b className='font-1'> disapprove</b> requests
                            from both Users and Admins.
                        </p>
                    </div>
                    <div id="bd-3" className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bd-3')}}>
                        <p>
                            The Directors are in charge of <b className='font-1'> updating the curriculum</b> 
                            for a specific branch or year.
                        </p>
                    </div>
                    <div id='bd-4' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bd-4')}}>
                        <p>
                            The Directors should post necessary <b className='font-1'> update notices</b> to ensure 
                            a reliable system.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative background-color-2 p-4 m-2 mt-8">
                <div className='flex flex-row justify-evenly'>
                    <button className='background-color-1 p-4 m-2 text-xl font-bold' onClick={ShowData}>
                        Show Directors
                    </button>
                    <button className='background-color-1 p-4 m-2 text-xl font-bold' onClick={HideData}>
                        Hide Directors
                    </button>
                </div>
            </section>
            <table className="relative left-1/4 w-1/2 background-color-2 mt-12 mb-12">
                <thead className="background-color-2">
                    <tr>
                        <th className="background-color-2 p-2 word-padding text-xl m-2">Name</th>
                        <th className="background-color-2 p-2 word-padding text-xl m-2">Access</th>
                    </tr>
                </thead>
                <tbody>
                    {director.map((item) => (show && (
                        <tr key={item.id}>
                            <td className="background-color-4 text-center word-padding font-1 text-xl">{item.userName}</td>
                            <td className={`${AccessDifferentiate(item.access)}`}>{item.access == true ? 
                            "Allowed" : "Denied"}</td>
                        </tr>)
                    ))}
                </tbody>
            </table>
            <Footer />
        </div>
    )
};

export default DirectorPage;