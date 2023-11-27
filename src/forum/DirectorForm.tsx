import React, { useState } from 'react';
import "../styles/BaseStyles.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

interface DirectorLogin {
    id?: string,
    userName: string,
    password: string,
}

const DirectorForm = () =>
{
    const [adminLogin, setAdminLogin] = useState<DirectorLogin>(
        {userName: '', password: ''}
    );

    const HandleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setAdminLogin({...adminLogin, [name]: value});
    }

    const LoginFormSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            if(adminLogin.userName === '' || adminLogin.password === '')     // Admin User and password...
            {
                alert("Please fill all the fields correctly !!");
                return;
            }
            const popupSubmit = document.getElementById('popup-submit') as HTMLDivElement;
            const adminResponse = await axios.get('https://management-app-404814.et.r.appspot.com/director/getAll');
            const admins = adminResponse.data;
            console.log(admins);
            let adminFound = false, valueFound = false;
            for(let i = 0; i < admins.length; i++)   // Iterating through all the Admins...
            {
                let user = admins[i].userName;
                let access = admins[i].access;
                if(adminLogin.userName === user)
                {
                    const value = await axios.post(`https://management-app-404814.et.r.appspot.com/director/check`, 
                    {
                        userName: adminLogin.userName,
                        password: adminLogin.password
                    });
                    console.log("Found : "+value.data);
                    if(value.data == true)
                    {
                        valueFound = true;
                        if(access === true)
                        {
                            adminFound = true;
                            break;
                        }
                    }
                }
            }
            if(adminFound)
                RemoveLayer();
            else if(adminFound == false && valueFound == true)
            {
                popupSubmit.innerHTML = "Login Failed !! You have not yet Got Access !! Contact Director !!";
                setTimeout(() => {
                    popupSubmit.innerHTML = "";
                }, 2000);
            }
            else
            {
                popupSubmit.innerHTML = "Login Failed !! Either you are not an Admin or entered wrong credentials !!";
                setTimeout(() => {
                    popupSubmit.innerHTML = "";
                }, 2000);
            }
            setAdminLogin({userName: '', password: ''});
        }
        catch(error)
        {
            console.log(error);
        }
    };

    function RemoveLayer() {
        const layer = document.getElementById('layer') as HTMLDivElement;
        console.log("Button Clicked !!");
        layer.classList.remove('cover-page-1');
        const formPage = document.getElementById('form-page') as HTMLDivElement;
        formPage.classList.add('hide-form');
    }

    const Enlarge = (btn : string) => {
        const btn1 = document.getElementById(`${btn}`);
        btn1?.classList.add('enlarge');
    };

    const Delarge = (btn : string) => {
        const btn1 = document.getElementById(`${btn}`);
        setTimeout(() => {
            btn1?.classList.remove('enlarge');
        }, 1);
    }

    return(
        <div>
        <div id='layer' className='cover-page-1'></div>
        <div className='absolute top-0 w-third left-1/3 topmost-Z background-color-4' id='form-page'>
            <div id='sector' className='topmost-Z relative'>
                <p className='w-full text-center text-2xl font-1 m-2'>
                    Director Login
                </p>
                <p className='m-2 p-4 text-center'>
                    This page is restricted to the use of the <b className='font-1'> Directors</b>. If you are an
                    Director then, please provide your <b className='font-1'> credentials</b> below.
                </p>
            </div>
            <form id='form-popup' className='relative w-full m-2 p-4' onSubmit={LoginFormSubmitted}>
                <label>
                    <p className="word-padding font-1 w-1/2">Username</p>
                        <input className="w-full rounded-md background-color-3 text-xl pl-4" type="text" name="userName"
                        value={adminLogin?.userName ?? ''} onChange={HandleFormChange} />
                </label>
                <label>
                    <p className="word-padding font-1 w-1/2">Password</p>
                        <input className="w-full rounded-md background-color-3 text-xl pl-4" type="text" name="password"
                        value={adminLogin?.password ?? ''} onChange={HandleFormChange} />
                </label>
                <button type='submit' className='background-color-1 relative left-1/3 m-2 p-2 text-xl'>
                    Verify
                </button>
            </form>
            <div className='relative w-full text-center text-xl p-4 m-0' id='popup-submit'>
            </div>
            <div className='relative w-full flex flex-row justify-evenly'>
                <Link to='/director'>
                    <button id='dr-1' className='background-color-2 text-xl p-3 mt-0'
                    onMouseEnter={() => {Enlarge('dr-1')}} onMouseLeave={() => {Delarge('dr-1')}}>Director</button>
                </Link>
                <Link to='/'>
                    <button id='dr-2' className='background-color-2 text-xl p-3 mt-0'
                    onMouseEnter={() => {Enlarge('dr-2')}} onMouseLeave={() => {Delarge('dr-2')}}>Home</button>
                </Link>
            </div>
        </div>
        </div>
    )
};

export default DirectorForm;