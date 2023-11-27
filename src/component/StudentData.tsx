import React, { useState } from 'react';
import "../styles/BaseStyles.css";
import axios from 'axios';
import Footer from './Core/Footer';
import HeaderStudent from './Core/HeaderStudent';
import Effects from './Core/Effects';

interface StudentDataItem {
    id?: string,
    name: string,
    rollNumber?: string,
    degree: number,
    joiningYear: number,
    branch: string
}

interface RollDataItem {
    id ?: string,
    roll: string,
    name: string
}

/* We have kept the id as optional so that the server generates the id, to ensure the data entries are unique and are not
stacked and replaced when POST anf GET requests are used... */

const StudentData = () => {

    //! Concept when the Data is not replaced in the Database...
    const [studentData, setStudentData] = useState<StudentDataItem>({
        name: '',
        rollNumber: '',
        degree: 0,
        joiningYear: 0,
        branch: ''
    });

    const [rollData, setRollData] = useState<RollDataItem>({
        roll: '',
        name: ''
    });

    //! Concept of Updating data from the Form in the Hook...
    const HandleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setStudentData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    const FormSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try
        {
            if(studentData.joiningYear < 1000)
            {
                alert("The data About Joining Year is inaccurate. Please give it in YYYY format");
                return;
            }
            else if(studentData.degree != 0 && studentData.degree != 1)
            {
                alert("The data About Degree is inaccurate. Please give it in 0 or 1 format");
                return;
            }
            else if(studentData.name === "")
            {
                alert("The Name field cannot be empty !!");
                return;
            }
            const formData = {...studentData};
            delete formData.id;
            const response = await axios.post("https://management-app-404814.et.r.appspot.com/student/add",
            formData);
            let name = formData.name;
            let degree = formData.degree;
            let year = formData.joiningYear;
            const answer = await axios.get(`https://management-app-404814.et.r.appspot.com/student/get/${name}/${degree}/${year}`);
            alert(`Form Submitted successfully !! The Roll Number for the student ${formData.name} is ${answer.data.rollNumber}`);
            console.log("Response submitted Successfully !!", answer.data);
            const handleResponse = async () => {
                try {
                      // Retry request after a delay (2 seconds in this example)
                    await new Promise<void>((resolve) => setTimeout(resolve, 2000));
                    const retryResponse = await axios.post(
                    `https://management-backend-405610.as.r.appspot.com/backend/roll/add/${answer.data.rollNumber}/${answer.data.name}`
                    );
                    console.log("Backend Response", retryResponse.data);
                    } catch (error) {
                    // Handle error or implement further retries if needed
                    console.log("Error in retrying request:", error);
                    // You might want to add additional logic or retries here if needed
                    }
                };
            setRollData({roll: answer.data.rollNumber, name: answer.data.name});
            let retries = 10;
            let backendData = null;
            while(retries > 0)
            {
                if(backendData == null)
                    backendData = await handleResponse();
                if(backendData !== null)
                    break;
                await new Promise<void>((resolve) => setTimeout(resolve, 1000));
                retries--;
            }
            console.log("Roll Data", rollData);
            setStudentData({name:"", id:"", rollNumber:"", degree:0, joiningYear:0, branch:""});
            setRollData({roll:"", name:""});
        }
        catch(error)
        {
            if(studentData.joiningYear < 1000)
                alert("The data About Joining Year is inaccurate. Please give it in YYYY format");
            else if(studentData.degree != 0 && studentData.degree != 1)
                alert("The data About Degree is inaccurate. Please give it in 0 or 1 format");
            else
                alert("Please fill the entire form correctly !!");
            console.log(error);
        }
    };

    const HandleBranchButtonClick = (selectedBranch: string) => {
        setStudentData((prevData) => {
            return {
                ...prevData,
                branch: selectedBranch
            }
        });
    };

    //! Concept of Styling with Functions...
    const ButtonSelected = (selected: string, current: string) => {
        // The function uses two variables to check whether the branch button is selected or not...
        let styles = 'w-2/3 background-color-1 text-xl p-3 m-1';
        if(selected === current)
            styles = 'w-2/3 background-color-2 text-xl p-3 m-1 transition-1';
        return styles;     // It returns styles in the form of string...
    }

    const Wiggle = (val : string) => {
        Effects.WiggleEffect(`${val}`);
    }

    return(
        <div>
            <HeaderStudent />
            <section className="relative background-color-5 p-4 m-2 mb-8">
                <div className="relative text-2xl font-1 p-6 m-2">
                    Details to be Noted While Filling the Form
                </div>
                <div className="relative w-full grid grid-flow-row grid-cols-3 justify-center 
                content-center gap-12 mb-8">
                    <div id='s-1' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('s-1')}}>
                        <p>The Details must be filled <b className="font-1"> correctly</b> without any spelling
                        or grammatical errors. The System does not support <b className='font-1'> auto-correction
                        </b> for now.</p>
                    </div>
                    <div id='s-2' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('s-2')}}>
                        <p>The Name must be entered correctly. You can write your name in any format. The name can 
                        be edited later <b className="font-1"> only Once</b>.
                        </p>
                    </div>
                    <div id='s-3' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('s-3')}}>
                        <p>Your unique Roll Number will be generated once the registration as a new student is 
                            <b className="font-1"> successfully completed.</b> You can use your Roll Number to 
                            access data.
                        </p>
                    </div>
                    <div id='s-4' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('s-4')}}>
                        <p>Enter your other details like <b className='font-1'> branch, year of Joining</b> and
                        <b className='font-1'> degree enrolled for</b> in the form explicitly and carefully.</p>
                    </div>
                    <div id='s-5' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('s-5')}}>
                        <p>The degree enrolled and year of Joining the University will be <b className='font-1'> 
                        numeric</b> in nature. <b className='font-1'> 1</b> represents Masters and <b className=
                        'font-1'> 0</b> represents Bachelors.</p>
                    </div>
                    <div id='s-6' className="background-color-3 w-1/2 p-2 ml-24" onMouseEnter={() => {Wiggle('s-6')}}>
                        <p>Please scroll down to find the <b className='font-1'> Student Entry Form</b> and then 
                        you can access your details and use more features of this System. <b className="font-1"> 
                        Good Luck!!</b></p>
                    </div>
                </div>
            </section>
            <div className="background-color-2 relative p-4 m-2">
                <p className="background-color-1 w-full p-4 m-2 text-2xl text-center">Student Entry Form</p>
                <form id="" onSubmit={FormSubmitted} className="relative background-color-3 w-half-complete m-12 left-1/4">
                    <label>
                        <p className="relative left-1/4 word-padding background-color-3 w-1/2 text-xl p-2 font-1 text-center">Name</p>
                        <input className="rounded-md background-color-3 w-half-complete text-xl mb-6 p-2 text-center"
                        type="text" placeholder='Name (must not be empty)' name="name" value={studentData?.name ?? ''} onChange={HandleFeedbackChange} />
                    </label>
                    <label>
                        <p className="relative left-1/4 word-padding background-color-3 w-1/2 text-xl p-2 font-1 text-center">Joining Year</p>
                        <input className="rounded-md background-color-3 w-half-complete text-xl mb-6 p-2 text-center"
                        type="number" name="joiningYear" value={studentData?.joiningYear ?? ''} onChange={HandleFeedbackChange} />
                    </label>
                    <label>
                        <p className="relative left-1/4 word-padding background-color-3 w-1/2 text-xl p-2 font-1 text-center">Degree</p>
                        <input className="rounded-md background-color-3 w-half-complete text-xl mb-6 p-2 text-center"
                        type="number" name="degree" value={studentData?.degree ?? ''} onChange={HandleFeedbackChange} />
                    </label>
                    <div>
                        <p className="relative left-1/4 word-padding background-color-3 w-1/2 text-xl p-2 font-1 text-center">Branch</p>
                        <div className="grid grid-flow-row grid-cols-2 gap-3 ml-6">
                            <button className={`${ButtonSelected('computerScience', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('computerScience')}>
                                Computer Science
                            </button>
                            <button className={`${ButtonSelected('AI', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('AI')}>
                                Artificial Intelligence
                            </button>
                            <button className={`${ButtonSelected('mechanical', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('mechanical')}>
                                Mechanical
                            </button>
                            <button className={`${ButtonSelected('civil', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('civil')}>
                                Civil
                            </button>
                            <button className={`${ButtonSelected('electrical', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('electrical')}>
                                Electrical
                            </button>
                            <button className={`${ButtonSelected('bioTechnology', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('bioTechnology')}>
                                Biotechnology
                            </button>
                            <button className={`${ButtonSelected('aeronautics', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('aeronautics')}>
                                Aeronautics
                            </button>
                            <button className={`${ButtonSelected('cyber', studentData.branch)}`} onClick={() => 
                                HandleBranchButtonClick('cyber')}>
                                Cyber Security
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default StudentData;