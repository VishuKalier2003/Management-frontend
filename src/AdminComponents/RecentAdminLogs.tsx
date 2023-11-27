import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDirectorLogs from './AdminDirectorLogs';

interface LogsItem {
    id ?: string,
    admin : string,
    message : string,
    messageList : {id: string,data : string, dateTime : string}[]
}

const RecentAdminLogs = () =>
{
    const [stateLogs, setStateLogs] = useState<LogsItem[]>([]);

    const  [count, setCount] = useState(4);
    const  [check, setCheck] = useState(0);

    const GetData = async () => {
        const response = await axios.get('https://management-backend-405610.as.r.appspot.com/backend/message/getAll');
        setStateLogs(response.data);
    }

    const Increase = () => {
        if(count != 20)
        {
            setCount(count + 1);
            setCheck(count);
        }
        else
            alert('You can access only 20 logs here !!');
    }

    const Decrease = () => {
        if(count != 0)
        {
            setCount(count - 1);
            setCheck(count);
        }
        else
            alert('There are no logs to show !!');
    }

    //! Use Effect is used to display the changes whenever the count is altered...
    useEffect(() => {
        GetData();            // Whenever the entries value change, useEffect is called...
    }, [count]);

    return(
        <div>
        <div className='relative p-4 background-color-2 text-2xl font-3 w-full mt-6'>
            <div className='flex flex-row justify-between'>
                <div className='font-3 m-2 ml-12 p-2 text-3xl'>Recent Logs</div>
                <div className='font-3 m-2 mr-12 p-2'>
                    <div className='flex flex-col p-4'>
                        <p>Entries</p>
                        <div className='flex flex-row p-3 text-xl w-full'>
                            <button className='pl-3 pr-3 mr-3 color-green' onClick={Increase}>+</button>
                            <p className='background-color-3 w-8 pl-2'>{count}</p>
                            <button className='pr-3 pl-3 ml-3 color-red' onClick={Decrease}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <table className='relative w-full'>
            <thead>
                <tr>
                    <th className='p-2'>Log Entry</th>
                </tr>
            </thead>
            <tbody>
            {stateLogs.map((item, index) => ((
                <tr key={item.id}>
                    {/* Index used to check store the number and item to store the item... */}
                    <td className='relative w-full font-3 m-4 p-4 background-color-2'>
                        <div className='w-full'>
                            <div className='pl-20 font-4 m-2'>{item.admin}</div>
                        <div>
                            {/* Index used to check store the number and item to store the item... */}
                            {item.messageList.map((message, messageIndex) => ( messageIndex < count &&
                            <div key={message.id} className='background-color-3 font-3 m-2 p-4'>
                            <div>
                            <div className='flex flex-row justify-evenly font-bold'>
                            <p>Date and Time</p>
                            <p>{message.dateTime}</p>
                        </div>
                    </div>
                    <div>
                        <p className='pl-12 pr-12 p-2 font-1'>Message</p>
                        <p className='p-2 font-3'>{message.data}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </td>
        </tr>)))}
            </tbody>
            </table>
            </div>
        </div>
        <AdminDirectorLogs />
        </div>
    )
};

export default RecentAdminLogs;