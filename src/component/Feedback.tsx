import React from 'react';
import { useState } from 'react';
import "../styles/BaseStyles.css"
import axios from 'axios';
import ForumModal from '../forum/ForumModal';
import Footer from './Core/Footer';
import HeaderAdmin from './Core/HeaderAdmin';
import Effects from './Core/Effects';

interface FeedbackItem {
    id: string,
    roll: string,
    text: string,
    ratings: number
}

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
    const [hide, setHide] = useState<boolean>(true);

    const ShowNavbar = () => {
        const nav = document.getElementById("navbar") as HTMLDivElement;
        nav.style.zIndex = "10";
        nav.style.transitionDuration = "1s"
        nav.style.top = "0px";
    }

    const FunctionGetFeedback = async () => {
        const response = await axios.get("https://management-app-404814.et.r.appspot.com/student/getFeedbacks");
        const data = response.data;
        setHide(false);
        console.log(data);
        setFeedbacks(data);
    };

    const FunctionHideFeedback = () => {
        setHide(true);
    };

    const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
        const stars = Array.from({ length: rating }, (_, index) => ((rating < 3 &&
            <span key={index} className={`text-red-500 ${index < rating ? "fill-current" : "fill-transparent"} text-xl`}>
                ★
            </span>)
            ||
            (rating >= 3 && rating < 6 &&
                <span key={index} className={`text-yellow-500 ${index < rating ? "fill-current" : "fill-transparent"} text-xl`}>
                ★
            </span>)
            ||
            (rating >= 6 &&
                <span key={index} className={`text-green-500 ${index < rating ? "fill-current" : "fill-transparent"} text-xl`}>
                ★
            </span>)
        ));
        return <div>{stars}</div>;
    };

    const Wiggle = (val : string) => {
        Effects.WiggleEffect(`${val}`);
    }

    return(
        <div className='z-10'>
            <ForumModal />
            <HeaderAdmin />
            <div className="relative flex flex-col background-color-5 p-6 m-2">
                <p className='relative font-1 text-2xl m-2 p-2'>What to Know about Feedbacks?</p>
                <div>
                    <ul className="relative flex flex-row font-3 justify-around m-2 w-full p-2 mb-12">
                        <li id='id-1' className="p-3 m-3 background-color-4 rounded-md"
                        onMouseEnter={() => {Wiggle('id-1')}}>The feedbacks are the <b className="font-1"> 
                        real-time data</b> which allows the developers to fix bugs and glitches, to ensure the services 
                        provided to the client are seamless. The feedbacks cannot be modified by any person and thus 
                        they depend upon the user's experience.
                        </li>
                        <li id='id-2' className="p-3 m-3 background-color-4 rounded-md" onMouseEnter={() => {Wiggle('id-2')}}>
                            The feedbacks can be taken as a raw data to <b className="font-1">train Machine 
                            Learning Models</b> to predict the responses of an individual or a specific community 
                            using the Service. The Model can also be used to train the chatbot to respond to the 
                            queries of the users.
                        </li>
                        <li id='id-3' className="p-3 m-3 background-color-4 rounded-md" onMouseEnter={() => {Wiggle('id-3')}}>
                            The data provided is always accurate and correct as it is provided by the Users. The
                            interpretation of feedbacks is <b className='font-1'> crucial in developing </b> an
                            application as a <b className="font-1">Microservice System</b>. The feedbacks are meant to 
                            be dealt with urgency.
                        </li>
                    </ul>
                </div>
            </div>
            <section className="relative m-2 p-6 background-color-1 font-4 text-3xl text-center">
                Feedback Dataset
            </section>
            <div className="relative flex flex-row justify-evenly background-color-2">
                    <button className="background-color-1 p-2 m-1" onClick={FunctionGetFeedback}>Show Data</button>
                    <button className="background-color-1 p-2 m-1" onClick={FunctionHideFeedback}>Hide Data</button>
            </div>
            <table className="background-color-2 w-full">
                <thead>
                    <tr>
                        <th className="background-color-2 p-2 w-1/6 pl-6">Roll Number</th>
                        <th className="background-color-2 p-2 w-4/6 pl-6">Feedback</th>
                        <th className="background-color-2 p-2 w-1/6 pl-6">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feedback) => (!hide && (
                        <tr key={feedback.id}>
                            <td className="background-color-4 p-2">{feedback.roll}</td>
                            <td className="background-color-4 p-2">{feedback.text}</td>
                            <td className="background-color-4 p-2">
                                <StarRating rating={feedback.ratings} />
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
            <Footer />
        </div>
    )
};

export default Feedback;