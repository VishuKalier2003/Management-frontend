import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Core/Footer';
import HeaderAdmin from '../Core/HeaderAdmin';
import Effects from '../Core/Effects';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

interface AdminItem {
    id ?: string,
    userName : string,
    password : string,
    adminName ?: string,
    access ?: boolean
}

const AdminPage = () => {
    const [admin, setAdmin] = useState<AdminItem>({
        userName: '', password: ''
    });

    const [checkAdmin, setCheckAdmin] = useState<AdminItem>(
        {userName: '', password: ''}
    );

    const HandleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCheckAdmin({...checkAdmin, [name]: value});
    };

    const FocusAdmin = () => {
        const form = document.getElementById("form1") as HTMLFormElement;
        form.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    };

    const FormSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const form = document.getElementById("form1") as HTMLFormElement;
            const userName = admin.userName;
            const password = admin.password;
            if (userName === '' || password === '') {
                alert("Please fill all the details");
                return;
            }
            const adminItem = {
                userName: userName, password: password
            };
    
            // Make the asynchronous call to add a new admin
            const add = await axios.post('https://management-app-404814.et.r.appspot.com/admin/add', adminItem);
    
            // After the admin is added successfully, fetch the updated data
            const response = await axios.get(`https://management-app-404814.et.r.appspot.com/admin/getAll`);
            let unique = "";
            const adminData = response.data.find((adminData: { userName: string; }) => adminData.userName === userName);
            unique = adminData.adminName;           //! Sometimes use Variables rather than Hooks...
            let nameData = adminData.userName;
            // Update the state and perform other actions if needed
            alert(`Form Submitted Successfully !! Your Admin Name is ${unique}`);
            setTimeout(async () => {        // setTimeout to make sure that the API call works...
                const response1 = await axios.post(`https://management-backend-405610.as.r.appspot.com/backend/admin/add`, {
                name: nameData,
                admin: unique,
                accessKey: false
                });
                console.log("Form Submitted Successfully at Backend !!");
            }, 1000);
            setAdmin({
                userName: '',
                password: ''
            });
            form.reset();
        } catch (e) {
            console.log(e);
        }
    };

    const FormChecked = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try
        {
            const form2 = document.getElementById("form2") as HTMLFormElement;
            const userName = checkAdmin.userName;
            const password = checkAdmin.password;
            if(userName === '' || password === '')
            {
                alert('Please fill all the details and submit the form');
                return;
            }
            const item = {
                userName: userName, password: password
            }
            const found = await axios.post(`https://management-app-404814.et.r.appspot.com/admin/check/${userName}/${password}`,
            item);
            if(found)
            {
                let admin = await axios.get(`https://management-app-404814.et.r.appspot.com/admin/get/${userName}`);
                if(admin.data.access)
                    alert(`Welcome ${userName}!! You are an Administrator.`);
                else
                    alert(`Sorry ${userName}!! Your form is not yet approved by the Director !!`);
            }
            else
                alert(`Sorry ${userName}!! You are not an Administrator.`);
            form2.reset();
            setCheckAdmin({userName: '', password: ''});
        }
        catch(error)
        {console.log(error);}
    };

    const HandleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setAdmin((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    const Wiggle = (val : string) => {
        Effects.WiggleEffect(`${val}`);
    }

    return (
        <div>
            <HeaderAdmin />
            <Slide cascade damping={10} delay={600} direction="right">
            <section className="relative background-color-5 p-4 m-2">
                <div className="relative p-2 m-1 text-2xl mb-4 font-1">Rights to Administrators</div>
                <div className="relative w-full grid grid-flow-row grid-cols-3 justify-center 
                content-center gap-12 mb-8">
                    <div id='bar-1' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('bar-1')}}>
                        <p>
                            The Administrator can view, update and delete the details of the <b className="font-1"> 
                            Users</b>. The Administrator holds <b className="font-1"> more rights</b> than a User.
                        </p>
                    </div>
                    <div id='bar-2' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('bar-2')}}>
                        <p>
                            The Administrator get a <b className="font-1"> unique Password</b> for oneself. The
                            password will be used to <b className="font-1"> access </b> the Administrator rights.
                        </p>
                    </div>
                    <div id='bar-3' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('bar-3')}}>
                        <p>
                            The Administrator can <b className="font-1"> check</b> the feedbacks and <b className=
                            "font-1"> respond</b> to the feedbacks of the Users appropriately.
                        </p>
                    </div>
                    <div id='bar-4' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('bar-4')}}>
                        <p>
                            Each administrator can <b className="font-1"> ban a User</b> on violating the rules of
                            the System. Banning requires <b className="font-1"> two or more</b> votes of the Admins.
                        </p>
                    </div>
                    <div id='bar-5' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('bar-5')}}>
                        <p>
                            The Admins have the privilege to change passwords <b className="font-1"> only once.</b> After 
                            that, they can change the password by the consent and <b className="font-1"> 
                            approval </b> of the<b className="font-1"> Director.</b>
                        </p>
                    </div>
                    <div id='bar-6' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('bar-6')}}>
                        <p>
                            The Admin can <b className="font-1"> access</b> the details of either <b className=
                            "font-1"> student</b> or <b className="font-1"> faculty.</b> This allows admininstrators to 
                            monitor the changes from both sides of the <b className="font-1"> University System.</b>.
                        </p>
                    </div>
                </div>
            </section>
            </Slide>
            <Slide cascade damping={10} delay={1200} direction="left">
            <section className="relative background-color-5 p-4 m-2 mt-8 mb-8">
                <div className="relative p-2 m-1 text-2xl text-right pr-8 mb-4 font-1">What We Expect From Administrators</div>
                <div className="relative w-full grid grid-flow-row grid-cols-4 justify-center 
                content-center gap-6 mb-8">
                    <div id='bn-1' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bn-1')}}>
                        <p>
                            The Administrators must maintain a <b className="font-1"> seamless Integration</b> of the 
                            environment for the Users.
                        </p>
                    </div>
                    <div id='bn-2' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bn-2')}}>
                        <p>
                            The Administrators should keep <b className='font-1'> track of feedbacks</b> submitted by 
                            the <b className='font-1'> students</b> and <b className='font-1'>faculty.</b>
                        </p>
                    </div>
                    <div id='bn-3' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bn-3')}}>
                        <p>
                            They are the <b className='font-1'> key factors</b> to find the bugs and glitches 
                            <b className='font-1'> before-hand</b> a feedback is submitted.
                        </p>
                    </div>
                    <div id='bn-4' className="background-color-3 w-2/3 p-2 ml-24" onMouseEnter={() => {Wiggle('bn-4')}}>
                        <p>
                            The Admins should post necessary <b className='font-1'> update notices</b> to ensure 
                            a reliable system.
                        </p>
                    </div>
                </div>
            </section>
            </Slide>
            <Zoom delay={500}>
            <section className="relative background-color-2 w-full p-4">
                <div className='text-3xl text-center p-4 m-2 font-bold relative font-3'>
                    <button className='relative background-color-1 p-4' onClick={FocusAdmin}>
                        Become an Admin
                    </button>
                </div>
            </section>
            </Zoom>
            <section className='background-color-1 w-full text-2xl grid grid-flow-row grid-cols-4 gap-12 p-4'>
                <Fade delay={2000} direction="left">
                <form id='form1' onSubmit={FormSubmitted}>
                    <div className='font-1 w-80 background-color-2 p-3 m-2 ml-6 text-center'>
                        Admin Registration Form
                    </div>
                    <label>
                    <p className="word-padding background-color-3 w-full text-xl p-2 font-1 text-center">User Name</p>
                        <input className="rounded-md background-color-3 w-full text-xl mb-6 p-2 text-center"
                        type="text" placeholder='Name (must not be empty)' name="userName" 
                        value={admin?.userName ?? ''} onChange={HandleFeedbackChange} />
                    </label>
                    <label>
                    <p className="word-padding background-color-3 w-full text-xl p-2 font-1 text-center">Password</p>
                        <input className="rounded-md background-color-3 w-full text-xl mb-6 p-2 text-center"
                        type="text" placeholder='Password (must not be empty)' name="password" 
                        value={admin?.password ?? ''} onChange={HandleFeedbackChange} />
                    </label>
                    <div className="text-left ml-36">
                        <button className="background-color-3 p-2 m-2 text-xl font-1 w-28" type="submit">
                            Register
                        </button>
                    </div>
                </form>
                </Fade>
                <Zoom delay={500}>
                <div className='mt-24'>
                    <p className='background-color-3 text-xl p-4'>
                        Please fill the form completely and submit it. The Admins will be notified soon.
                        The <b className='font-1'> Admin Approval Form</b> can be used to check your credentials.
                    </p>
                </div>
                </Zoom>
                <Fade delay={2000} direction="right">
                <form id='form2' onSubmit={FormChecked}>
                    <div className='font-1 w-80 background-color-2 p-3 m-2 ml-6 text-center'>
                        Admin Approval Form
                    </div>
                    <label>
                    <p className="word-padding background-color-3 w-full text-xl p-2 font-1 text-center">User Name</p>
                        <input className="rounded-md background-color-3 w-full text-xl mb-6 p-2 text-center"
                        type="text" placeholder='Name (must not be empty)' name="userName" 
                        value={checkAdmin?.userName ?? ''} onChange={HandleCheckChange} />
                    </label>
                    <label>
                    <p className="word-padding background-color-3 w-full text-xl p-2 font-1 text-center">Password</p>
                        <input className="rounded-md background-color-3 w-full text-xl mb-6 p-2 text-center"
                        type="text" placeholder='Password (must not be empty)' name="password" 
                        value={checkAdmin?.password ?? ''} onChange={HandleCheckChange} />
                    </label>
                    <div className="text-left ml-36">
                        <button className="background-color-3 p-2 m-2 text-xl font-1 w-28" type="submit">
                            Check
                        </button>
                    </div>
                </form>
                </Fade>
                <Zoom delay={500}>
                <div className='mt-24'>
                    <p className='background-color-3 text-xl p-4'>
                        After filling the form completely, submit it. One of the <b className='font-1'> Directors</b> will 
                        look into your application and notify you soon.
                    </p>
                </div>
                </Zoom>
            </section>
            <Footer />
        </div>
    );
};

export default AdminPage;