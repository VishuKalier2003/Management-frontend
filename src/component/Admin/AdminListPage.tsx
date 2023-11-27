import React, { useState } from "react";
import DirectorForm from "../../forum/DirectorForm";
import Footer from '../Core/Footer';
import axios from "axios";
import { Link } from "react-router-dom";
import HeaderDirector from "../Core/HeaderDirector";

interface AdminItem {
    id ?: string,
    userName? : string,
    adminName : string,
    access : boolean
}

const AdminListPage = () => {
    const [show, setShow] = useState(false);
    const [AdminData, setAdminData] = useState<AdminItem[]>([]);
    const [singleAdmin, setSingleAdmin] = useState<AdminItem>({userName : '', adminName : '', access : false});
    const [option, setOption] = useState<number>(2);            // State to store the option selected by the Director...

    const ShowData = async () => {
        const response = await axios.get('https://management-app-404814.et.r.appspot.com/admin/getAll');
        console.log(response.data);
        setAdminData(response.data);
        setShow(true);
    };

    const HideData = () => {
        setShow(false);
    };

    const AccessDifferentiate = (access : boolean) => {
        let styles = 'background-color-4 text-center word-padding font-1 text-xl color-1';
        if(access)
            styles = 'background-color-4 text-center word-padding font-1 text-xl color-2';
        return styles;
    };

    const HandleFeedbackChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSingleAdmin((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const Allow = () => {
        setOption(1);
        console.log("Allowed "+option);
        setSingleAdmin((prev) => {
            return {
                ...prev,
                access : true,
            };
        });
    };

    const Deny = () => {
        setOption(0);
        console.log("Denied "+option);
        setSingleAdmin((prev) => {
            return {
                ...prev,
                access : false,
            };
        });
    }

    const FormSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            console.log(option);
            if(singleAdmin.adminName == '')
            {
                alert("Username must not be empty !!");
                HideData();
                return;
            }
            if(option == 1)
            {
                const response = await axios.post(`https://management-app-404814.et.r.appspot.com/director/grantAccess/${singleAdmin.adminName}`,
                singleAdmin.adminName);
                console.log(response.data);
                setSingleAdmin((prev) => ({
                    ...prev,
                    access: true,
                }));
                alert(`The admin ${singleAdmin.userName} has been granted access !!`);
            }
            else if(option == 0)
            {
                const response = await axios.post(`https://management-app-404814.et.r.appspot.com/director/denyAccess/${singleAdmin.adminName}`,
                singleAdmin.adminName);
                console.log(response.data);
                setSingleAdmin((prev) => ({
                    ...prev,
                    access: false,
                }));
                alert(`The admin ${singleAdmin.userName} has been denied access !!`);
            }
            HideData();
        }
        catch(error)
        {
            console.log(error);
        }
    };

    const ShowNavbar = () => {
        const nav = document.getElementById("navbar") as HTMLDivElement;
        nav.style.zIndex = "10";
        nav.style.transitionDuration = "1s"
        nav.style.top = "0px";
    };

    return(
        <div>
            <DirectorForm />
            <HeaderDirector />
            <section className="relative background-color-2 p-4 m-2 mt-8">
                <div className='flex flex-row justify-evenly'>
                    <button className='background-color-1 p-4 m-2 text-xl font-bold' onClick={ShowData}>
                        Show Admins List
                    </button>
                    <button className='background-color-1 p-4 m-2 text-xl font-bold' onClick={HideData}>
                        Hide Admins List
                    </button>
                </div>
            </section>
            <table className="relative left-1/3 w-1/3 background-color-2 mt-16 mb-16">
                <thead className="background-color-2">
                    <tr>
                        <th className="background-color-2 p-2 word-padding text-xl m-2">Name</th>
                        <th className="background-color-2 p-2 word-padding text-xl m-2">Admin Name</th>
                        <th className="background-color-2 p-2 word-padding text-xl m-2">Access</th>
                    </tr>
                </thead>
                <tbody>
                    {show && (
                    AdminData.map((item) => (
                    <tr key={item.id}>
                        <td className="background-color-4 text-center word-padding font-1 text-xl">{item.userName}</td>
                        <td className="background-color-4 text-center word-padding font-1 text-xl">{item.adminName}</td>
                        <td className={`${AccessDifferentiate(item.access)}`}>{item.access ? "Allowed" : "Denied"}</td>
                    </tr>)))}
                </tbody>
            </table>
            <div className="background-color-2 relative p-12 m-2">
                <p className='background-color-1 w-full text-center p-4 m-2 text-2xl font-4'>Access Allowance Form</p>
                <form id="" onSubmit={FormSubmitted} className="relative background-color-3 w-half-complete p-6">
                    <label>
                        <p className="word-padding background-color-3 w-1/3 text-xl p-2 font-1 text-center">Name</p>
                        <input className="rounded-md background-color-3 w-full text-xl mb-6 p-2 text-center"
                        type="text" placeholder='Name (must not be empty)' name="adminName" value={singleAdmin?.adminName ?? ''} 
                        onChange={HandleFeedbackChange} />
                    </label>
                    <div>
                        <p className="word-padding background-color-3 w-1/3 text-xl p-2 font-1 text-center">Access</p>
                        <div className="grid grid-flow-row grid-cols-2 gap-3 ml-6">
                            <button className={`background-color-1 text-xl m-4 p-3 w-1/3`} onClick={Allow}>Allow</button>
                            <button className={`background-color-1 text-xl m-4 p-3 w-1/3`} onClick={Deny}>Deny</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default AdminListPage;