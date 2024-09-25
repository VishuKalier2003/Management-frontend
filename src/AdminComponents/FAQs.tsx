import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const FAQs = () => {
    const [question, setQuestion] = useState<number>(0);

    const ChangeStateAndColor = (val : string, num : number) => {
        const element = document.getElementById(`${val}`) as HTMLDivElement;
        element.classList.add("background-color-6");
        element.style.transitionDuration = "1s";
        const node = document.getElementById("answer-node") as HTMLDivElement;
        setQuestion(num);
        if(num === 0) {
            node.textContent = "Answer to the Queries will be Displayed Here !!";
        }
        else if(num === 1) {
            node.textContent = "Please Fill the Admin Registration Form provided Above !! Keep Track"+
            " of Your Admin Name and Password !!"
        }
        else if(num === 2) {
            node.textContent = "It takes about 12 to 24 hours for the Director to update the Application Status for the Admin Position !!"
        }
        else if(num === 3) {
            node.textContent = "One can access the Student Details, Feedback System, Apply for a Higher Post and can view Admin Logs !!";
        }
        else if(num === 4) {
            node.textContent = "You can Access the Admin Panel and Dashboard from the Navbar as the Admin Application Form is approved";
        }
        else if(num === 5) {
            node.textContent = "When you have more than 1000 Magma Coins at your hand, you will be recommended by the System as a Director !!";
        }
        else if(num === 6) {
            node.textContent = "There are many privileges of becoming an Admin, as Student and Admin Rights, Admin Public and Private Logs, Feedback Checking and much more !!";
        }
    };

    onpageshow = () => {
        const node = document.getElementById("answer-node") as HTMLDivElement;
        if(question == 0)
            node.textContent = "Answer to the Queries will be Displayed Here !!"
    }

    const RevertStateAndColor = (val : string) => {
        const element = document.getElementById(`${val}`) as HTMLDivElement;
        element.classList.remove('background-color-6');
        element.style.transitionDuration = '1s';
        setQuestion(0);
        const node = document.getElementById('answer-node') as HTMLDivElement;
        node.textContent = "Answer to the Queries will be Displayed Here !!";
    }

    return(
        <div className='relative margin-bottom-max-1'>
        <Slide cascade damping={0.1} delay={1000}>
            <div className='background-color-2 text-2xl font-4 pl-8 p-3 w-full mt-6'>
                FAQ Panel
            </div>
            <div id='line-1' className='absolute vertical-line-1 -top-72 left-24'></div>
            <section className='absolute flex flex-col left-32 top-8 w-1/2 gap-10 text-xl font-3'>
                <Slide delay={200}>
                <div className='p-4 pl-8 background-color-1' id='q-1'
                onMouseEnter={() => {ChangeStateAndColor('q-1', 1);}} onMouseLeave={() => {RevertStateAndColor('q-1');}}>
                    How can I apply as an Admin ?
                </div>
                </Slide>
                <Slide delay={400}>
                <div className='p-4 pl-8 background-color-1' id='q-2'
                onMouseEnter={() => {ChangeStateAndColor('q-2', 2);}} onMouseLeave={() => {RevertStateAndColor('q-2');}}>
                    How much time will it take for my Application to be approved ?
                </div>
                </Slide>
                <Slide delay={600}>
                <div className='p-4 pl-8 background-color-1' id='q-3'
                onMouseEnter={() => {ChangeStateAndColor('q-3', 3);}} onMouseLeave={() => {RevertStateAndColor('q-3');}}>
                    What all I can access when my application gets approved ?
                </div>
                </Slide>
                <Slide delay={800}>
                <div className='p-4 pl-8 background-color-1' id='q-4'
                onMouseEnter={() => {ChangeStateAndColor('q-4', 4);}} onMouseLeave={() => {RevertStateAndColor('q-4');}}>
                    Where I can Access my Admin Dashboard ?
                </div>
                </Slide>
                <Slide delay={1000}>
                <div className='p-4 pl-8 background-color-1' id='q-5'
                onMouseEnter={() => {ChangeStateAndColor('q-5', 5);}} onMouseLeave={() => {RevertStateAndColor('q-5');}}>
                    Can I be promoted, if yes, then how ?
                </div>
                </Slide>
                <Slide delay={1200}>
                <div className='p-4 pl-8 background-color-1' id='q-6'
                onMouseEnter={() => {ChangeStateAndColor('q-6', 6);}} onMouseLeave={() => {RevertStateAndColor('q-6');}}>
                    What are the List of Admin Rights which I have ?
                </div>
                </Slide>
            </section>
            <Fade delay={500} direction="up">
            <div className='absolute w-1/4 h-72 background-color-6 flex flex-row top-48 left-w-70 justify-center items-center
            font-3 text-2xl rounded-2xl'>
                <div id='answer-node' className='relative text-xl w-2/3 text-center'></div>
            </div>
            </Fade>
        </Slide>
        </div>
    )
};

export default FAQs;