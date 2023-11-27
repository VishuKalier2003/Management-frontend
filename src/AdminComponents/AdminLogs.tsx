import React from 'react';
import "../styles/BaseStyles.css";
import Effects from '../component/Core/Effects';
import axios from 'axios';
import AdminDirectorLogs from './AdminDirectorLogs';

interface AdminList {
    id ?: string,
    admin : string,
    message : string
    messageList ?: {id: string, data: string, dateTime: string}[]
}

const AdminLogs = () => {

    const [viewed, setViewed] = React.useState(false);

    const [propAdmin, setPropAdmin] = React.useState<AdminList>({
        id : '',
        admin : '',
        message : ''
    });

    const View = (event: React.MouseEvent) => {
        setViewed(true);
        setTimeout(() => {
            Slide("c-1");
        }, 1);
    }

    const Slide = (comp: string) => {
        const ele = document.getElementById(`${comp}`) as HTMLDivElement;
        Effects.SlideFromLeft(`${comp}`);
        ele.style.left = '0px';
    }

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setPropAdmin((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const HandleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setPropAdmin((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const FormSubmitted = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post(`https://management-backend-405610.as.r.appspot.com/backend/message/add`, {
                admin: propAdmin.admin,
                message: propAdmin.message
            });
            console.log("Response Sent "+response.data);
            alert(`Message Dispatched publicly by ${propAdmin.admin} to the Admins Successfully`);
            setPropAdmin({admin:"", message:""});
        }
        catch (error) {
            console.log(error);
        }
    }

    const FocusAbout = (comp: string) => {
        const element = document.getElementById(`${comp}`) as HTMLDivElement;
        element.scrollIntoView({behavior: 'smooth'});
        element.focus();
    }

    return(
        <div className='background-color-5 font-4 w-full m-2' onMouseMove={!viewed ? (event) => View(event) : undefined}>
            <div className='background-color-2 w-1/6 p-4 text-2xl font-4 text-center'>Admin Logs</div>
            <div className='relative flex flex-row justify-evenly mb-12 left-slide' id='c-1'>
                <div className='relative w-1/4 text-xl background-color-3 word-padding m-6'>
                    <p className='font-3 pb-4'>
                        You can provide <b className='font-1'> public logs</b> which can be accessed directly 
                        by the <b className='font-1'> Admins</b>. This is a fast, feasible method to talk with the Admins. 
                        The public logs are truncated after every <b className='font-1'> 24 hours</b>.
                    </p>
                    <button className='absolute background-color-2 text-2xl p-4 pl-8 pr-8 left-16 top-40'
                    onClick={() => {FocusAbout('publicly')}}>
                        Interact Publicly
                    </button>
                </div>
                <div className='relative w-1/4 text-xl background-color-3 word-padding m-6'>
                    <p className='font-3 pb-4'>
                        You can provide <b className='font-1'> private logs</b> which can be sent directly 
                        to the <b className='font-1'> Director</b>. This is a quick prompt way to address the Director. 
                        The private logs are <b className='font-1'> never truncated from logs.</b>.
                    </p>
                    <button className='absolute background-color-2 text-2xl p-4 pl-8 pr-8 left-16 top-40'
                    onClick={() => FocusAbout('director-admin-form')}>
                        Converse Privately
                    </button>
                </div>
            </div>
            <div className='relative background-color-2 w-full mt-8' id='publicly'>
                <div>
                    <p className='text-center background-color-1 text-2xl font-3 p-4 m-2 font-semibold'>Admin Logs Form</p>
                    <form id='form-1' className='flex flex-col gap-6' onSubmit={FormSubmitted}>
                        <label>
                            <p className='relative w-48 m-2 text-xl left-20'>Admin Name</p>
                            <input className='relative left-20 background-color-3 text-xl font-3' name='admin' 
                            value={propAdmin?.admin} onChange={HandleChange}/>
                        </label>
                        <label>
                            <p className='relative w-48 m-2 text-xl left-20'>Message</p>
                            <textarea className='relative left-20 background-color-3 text-xl font-3 w-2/3' name='message' 
                            value={propAdmin?.message} onChange={HandleChangeText}/>
                        </label>
                        <div className='flex flex-row justify-center'>
                            <button className='relative background-color-1 mb-6 text-xl p-4 pl-8 pr-8 w-1/6' type='submit'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AdminLogs;