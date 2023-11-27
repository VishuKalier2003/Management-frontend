import axios from 'axios';
import React, { useState } from 'react';

interface DirectorAdminLog {
    id ?: string,
    admin : string,
    directorName : string,
    message : string,
    dateTime? : string
}

const AdminDirectorLogs = () => {
    const [propAdminDirector, setPropAdminDirector] = useState<DirectorAdminLog>({
        id : '',
        admin : '',
        directorName : '',
        message : '',
    });

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setPropAdminDirector((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const HandleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setPropAdminDirector((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const LogFormCompleted = async (event: React.FormEvent) => {
        event.preventDefault();
        try{
            const forum = document.getElementById('form-data') as HTMLFormElement;
            const response = await axios.post(`https://management-backend-405610.as.r.appspot.com/backend/message/addDirector`, {
                admin : propAdminDirector.admin,
                directorName : propAdminDirector.directorName,
                message : propAdminDirector.message
            });
            alert(`Log from ${propAdminDirector.admin} to ${propAdminDirector.directorName} has been added successfully!!`);
            setPropAdminDirector({admin : '', directorName : '', message : ''});
            forum.reset();
        }
        catch(error)
        {
            console.log(error);
        }
    };

    return(
        <div id='director-admin-form' className='relative background-color-2 w-full mt-12'>
            <div className='relative w-full word-padding text-center font-3 background-color-1 text-3xl'>
                <p className='pt-4 pb-4 font-semibold'>Admin Director Logs Form</p>
            </div>
            <form id='form-data' onSubmit={LogFormCompleted}>
            <div className='flex flex-col w-full'>
                <div className='relative w-full flex flex-row justify-between'>
                    <div className='p-4 m-4 ml-12'>
                        <label>
                            <p className='font-3 text-2xl pb-4'>Admin Name</p>
                            <input className='background-color-5 font-3 text-xl' name='admin' value={propAdminDirector?.admin} 
                            onChange={HandleChange} />
                        </label>
                    </div>
                    <div className='p-4 m-4 mr-14'>
                        <label>
                            <p className='font-3 text-2xl pb-4'>Director Name</p>
                            <input className='background-color-3 font-3 text-xl' name='directorName' value=
                            {propAdminDirector?.directorName} onChange={HandleChange} />
                        </label>
                    </div>
                </div>
                <div className='p-4 m-4 ml-12 mr-14'>
                    <label>
                        <p className='font-3 text-2xl pb-4'>Private Message</p>
                        <textarea className='background-color-5 font-3 w-full' name='message' value={propAdminDirector?.message} 
                        onChange={HandleTextAreaChange} />
                    </label>
                </div>
            </div>
            <div className='relative w-full flex flex-row mb-12 pb-12 -left-20'>
                <button className='relative background-color-1 font-3 p-4 pl-8 pr-8 text-xl left-1/2 font-semibold' type='submit'>
                    Submit
                </button>
            </div>
            </form>
        </div>
    )
};

export default AdminDirectorLogs;