import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/BaseStyles.css";
import { Link } from "react-router-dom";
import Footer from "./Core/Footer";
import HeaderStudent from "./Core/HeaderStudent";

interface DataItem      // Interface storing the data of a single student...
{
    id: number;
    name: string;
    rollNumber: string;
    branch: string;
    joiningYear: number;
    degree: number;
}

interface FeedbackItem
{
    roll: string,
    text: string,
    ratings: number
}

const StudentListPage = () =>
{
    const [value, setValue] = useState<DataItem[]>([]);     // UseState Hook to store data of all students...
    const [hide, setHide] = useState<boolean>(true);      // UseState Hook to hide the data of all students...
    const [filterName, setFilterName] = useState<string>("");
    const [filterRollNumber, setFilterRollNumber] = useState<string>("");
    const [filterBranch, setFilterBranch] = useState<string>("");
    const [filterJoiningYear, setFilterJoiningYear] = useState<number | null>(null);
    const [filterDegree, setFilterDegree] = useState<string>("");
    const [feedback, setFeedback] = useState<FeedbackItem>({roll:"", text:"", ratings:0});

    // The below function is asynchronous, so we need to use async/await...
    const functionGetData = async () =>
    {
        try{
            const response = await axios.get("https://management-app-404814.et.r.appspot.com/student/getAll");
            const data = response.data;     // Storing the response of the data...
            console.log(data);
            let filteredData = data;        // Since the filtering will be dynamic, we will store the data in variable...
            if(filterName != "")
                filteredData = filteredData.filter((item: DataItem) => item.name.includes(filterName));     // Filter Function...
            if(filterRollNumber != "")
                filteredData = filteredData.filter((item: DataItem) => item.rollNumber.includes(filterRollNumber));
            if(filterBranch != "")      // item represents a single student...
                filteredData = filteredData.filter((item: DataItem) => item.branch.includes(filterBranch));
            if(filterJoiningYear != null)
                filteredData = filteredData.filter((item: DataItem) => item.joiningYear == filterJoiningYear);
            if(filterDegree != "")
                filteredData = filteredData.filter((item: DataItem) => item.degree == (filterDegree == "MTech" ? 1 : 0));
            setValue(filteredData);             // Setting the value of the data after update (using Hooks)...
            setHide(false);              // Setting the value of hide to true...
        }
        catch(e)        // Exception Handling...
        {
            console.log(e);     // Logging the Error on Console...
        }
    }

    function functionHide()     // Function to hide the data...
    {
        setHide(true);     // Setting the value of hide to false...
    }

    /* These functions are used to Handle the Changes in the Filtering Form... */

    const HandleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(e.target.value);
    };

    const HandleRollNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterRollNumber(e.target.value);
    };

    const HandleBranchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterBranch(e.target.value);
    };

    const HandleJoiningYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterJoiningYear(e.target.valueAsNumber);
    };

    const HandleDegreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterDegree(e.target.value);
    };

    const HandleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFeedback({...feedback, [e.target.name]: e.target.value} as FeedbackItem);
    };

    const FormSubmitted = async (e:React.FormEvent) => {
        e.preventDefault();
        try
        {
            const response = await axios.post("https://management-app-404814.et.r.appspot.com/student/feedback", feedback);
            console.log("Response submitted Successfully !!", response.data);
            setFeedback({roll:"", text:"", ratings:0});
        }
        catch(error)
        {console.log(error);}
    }

    // Focus Function to reach to the Form...
    const FocusEvent = () => {
        const formElement = document.getElementById("form1") as HTMLFormElement;
        formElement.focus();
        formElement.scrollIntoView({behavior: "smooth"});
    };

    const ChangeColorInputI = () => {
        const input = document.getElementById("label1") as HTMLInputElement;
        input.classList.add("background-color-1");
    };

    const ChangeColorInputII = () => {
        const input = document.getElementById("label2") as HTMLInputElement;
        input.classList.add("background-color-1");
    };

    const ChangeColorInputIII = () => {
        const input = document.getElementById("label3") as HTMLInputElement;
        input.classList.add("background-color-1");
    };

    const ChangeColorInputIV = () => {
        const input = document.getElementById("label4") as HTMLInputElement;
        input.classList.add("background-color-1");
    };

    const ChangeColorInputV = () => {
        const input = document.getElementById("label5") as HTMLInputElement;
        input.classList.add("background-color-1");
    };

    const RevertColor = () => {
        let input = document.getElementById("label1") as HTMLInputElement;
        if(input && input.classList.contains("background-color-1"))
            input.classList.remove("background-color-1");
        input = document.getElementById("label2") as HTMLInputElement;
        if(input && input.classList.contains("background-color-1"))
            input.classList.remove("background-color-1");
        input = document.getElementById("label3") as HTMLInputElement;
        if(input && input.classList.contains("background-color-1"))
            input.classList.remove("background-color-1");
        input = document.getElementById("label4") as HTMLInputElement;
        if(input && input.classList.contains("background-color-1"))
            input.classList.remove("background-color-1");
        input = document.getElementById("label5") as HTMLInputElement;
        if(input && input.classList.contains("background-color-1"))
            input.classList.remove("background-color-1");
    }

    return(
        <div>
            <HeaderStudent />
            <div className="flex flex-row relative background-color-1">
                <blockquote className="relative blockquote-custom background-color-3 text-xl">
                    The below table shows the entire list of students enrolled in the University. The names are 
                    provided on the basis of the time of entry in the database system. You can apply filters to get 
                    the desired student list.
                </blockquote>
                <div className="relative button-custom flex items-center justify-center background-color-2">
                    <button className="p-4 background-color-1 text-xl" onClick={FocusEvent} >
                        {/* When button is clicked, the focus is set to the Form element... */}
                        Use filters
                    </button>
                </div>
            H</div>
            <div className="relative background-color-2 m-1 p-4 text-xl w-1/2">
                The Following Details are shown in the Student List
                <ul>
                    <li className="relative background-color-3 pl-4 w-full p-1">Student Name</li>
                    <li className="relative background-color-3 pl-4 w-full p-1">Roll Number of the Student</li>
                    <li className="relative background-color-3 pl-4 w-full p-1">Branch of the Student</li>
                    <li className="relative background-color-3 pl-4 w-full p-1">Joining Year, the year when the student enrolled in the University</li>
                    <li className="relative background-color-3 pl-4 w-full p-1">Degree the student is currently pursuing</li>
                </ul>
            </div>
            <div className="absolute w-1/3 left-112 h-72 top-112 background-color-3">
                <div className="background-color-2 relative">
                    <p className="word-padding background-color-2 w-full">Feedback Form</p>
                    <form id="" onSubmit={FormSubmitted}>
                        <label>
                            <p className="word-padding background-color-3 w-1/2">Roll Number</p>
                            <input className="w-full rounded-md background-color-3" type="text" name="roll" 
                            value={feedback?.roll ?? ''} onChange={HandleFeedbackChange} />
                        </label>
                        <label>
                            <p className="word-padding background-color-3 w-1/2">Feedback</p>
                            <input className="w-full rounded-md h-36 background-color-3" type="text" name="text" 
                            value={feedback?.text ?? ''} onChange={HandleFeedbackChange} />
                        </label>
                        <label>
                            <p className="word-padding background-color-3 w-1/2">Please rate it Out of 7</p>
                            <input className="w-full rounded-md background-color-3" type="number" name="ratings" 
                            value={feedback?.ratings ?? ''} onChange={HandleFeedbackChange} />
                        </label>
                        <div className="w-full">
                            <button type="submit" className="relative background-color-1 p-2 m-1 text-center">
                                Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="relative">
                <div className="relative background-color-2 w-1/2 text-xl p-2">Filters
                <form id="form1" className="background-color-3 relative flex flex-col w-full">
                    <label id="label1" className="relative flex flex-row justify-between p-2 background-color-3">
                        <p className="word-padding">Name</p>
                        <input className="w-1/2 rounded-md" type="text" name="name" value={filterName} 
                        onChange={HandleFilterChange} onMouseEnter={ChangeColorInputI} onMouseLeave={RevertColor} />
                    </label>
                    {/* The name represents the name of the input, value defines the corresponding variable and JS function define 
                        the rendering of the Element and Interactivity... */}
                    <label id="label2" className="relative flex flex-row justify-between p-2 background-color-3">
                        <p className="word-padding">Roll Number</p>
                        <input className="w-1/2 rounded-md" type="text" name="rollNumber" value={filterRollNumber} 
                        onChange={HandleRollNumberChange} onMouseEnter={ChangeColorInputII} onMouseLeave={RevertColor} />
                    </label>
                    <label id="label3" className="relative flex flex-row justify-between p-2 background-color-3">
                        <p className="word-padding">Branch</p>
                        <input className="w-1/2 rounded-md" type="text" name="branch" value={filterBranch} 
                        onChange={HandleBranchChange} onMouseEnter={ChangeColorInputIII} onMouseLeave={RevertColor} />
                    </label>
                    <label id="label4" className="relative flex flex-row justify-between p-2 background-color-3">
                        <p className="word-padding">Joining Year</p>  {/* Here the Input can be a String or a null character... */}
                        <input className="w-1/2 rounded-md" type="number" name="joiningYear" value={filterJoiningYear ?? ''} 
                        onChange={HandleJoiningYearChange} onMouseEnter={ChangeColorInputIV} onMouseLeave={RevertColor} />
                    </label>
                    <label id="label5" className="relative flex flex-row justify-between p-2 background-color-3">
                        <p className="word-padding">Degree</p>
                        <input className="w-1/2 rounded-md" type="text" name="degree" value={filterDegree} 
                        onChange={HandleDegreeChange} onMouseEnter={ChangeColorInputV} onMouseLeave={RevertColor} />
                    </label>
                </form>
                </div>
            </div>
            <div className="background-color-2 w-full">
                <div className="background-color-1 text-center text-2xl p-4">Student List</div>
                <div className="relative flex flex-row justify-evenly background-color-2">
                    <button className="background-color-1 p-2 m-1" onClick={functionGetData}>Show Data</button>
                    <button className="background-color-1 p-2 m-1" onClick={functionHide}>Hide Data</button>
                </div>
            <table className="w-full background-color-2">
                <thead className="background-color-2">
                    <tr>
                        <th className="background-color-2 p-2">Name</th>
                        <th className="background-color-2 p-2">Roll Number</th>
                        <th className="background-color-2 p-2">Branch</th>
                        <th className="background-color-2 p-2">Joining Year</th>
                        <th className="background-color-2 p-2">Degree</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((item) => (!hide && (
                        <tr key={item.id}>
                            <td className="background-color-4">{item.name}</td>
                            <td className="background-color-4">{item.rollNumber}</td>
                            <td className="background-color-4">{item.branch}</td>
                            <td className="background-color-4">{item.joiningYear}</td>
                            <td className="background-color-4">{item.degree == 1 ? "MTech" : "BTech"}</td>
                        </tr>)
                    ))}
                </tbody>
            </table>
            </div>
            <Footer />
        </div>
    )
};

export default StudentListPage;