import { Link } from 'react-router-dom';
import HeaderAdmin from '../Core/HeaderAdmin';
import '../../styles/BaseStyles.css';
import Effects from '../Core/Effects';
import Footer from '../Core/Footer';
import AdminLogs from '../../AdminComponents/AdminLogs';
import ForumModalLogs from '../../forum/AdminLogsForm';
import RecentAdminLogs from '../../AdminComponents/RecentAdminLogs';
import AdminDirectorLogs from '../../AdminComponents/AdminDirectorLogs';

const AdminDashboard = () => {

    const Wiggle = (folder : string) => {
        Effects.WiggleEffect(`${folder}`)
    };

    const HoverHere = () => {
        const elementPane = document.getElementById('pane') as HTMLDivElement;
        elementPane.style.left = '0px';
        elementPane.style.transitionDuration = '1s';
    }

    const HoverBack = () => {
        const elementPane = document.getElementById('pane') as HTMLDivElement;
        elementPane.style.left = '-25%';
        elementPane.style.transitionDuration = '1s';
    }

    const FocusLogs = () => {
        const elementLogs = document.getElementById('adminLogs') as HTMLDivElement;
        elementLogs.scrollIntoView({behavior: 'smooth'});
        elementLogs.focus();
    };

    return(
        <div>
            <HeaderAdmin />
            <ForumModalLogs />
            <div className='relative w-full font-4 text-2xl text-right flex justify-end'>
                <p className='relative background-color-2 p-3 pl-8 pr-8 w-1/6 mr-4'>Admin Dashboard</p>
            </div>
            <section className='background-color-2 text-xl flex flex-row m-2 gap-4' onMouseLeave={HoverBack}>
                <div id='hvr' className='relative background-color-1 w-1/6 flex flex-row justify-center items-center'
                onMouseEnter={HoverHere}>
                    <p className='font-4 text-3xl'>Come Here</p>
                    </div>
                <div className='relative background-color-3 w-5/6'>
                    <div className='grid grid-flow-row grid-cols-3 mt-12 mb-12'>
                    <div className='word-padding m-6 ml-12 p-12'>
                        <p id='p-1' className='font-3 word-padding background-color-5' onMouseEnter={() => {Wiggle('p-1')}}>
                        This Dashboard can be used to access the details of the Admin in case
                        of the Admin <b className='font-1'> forgot password</b> and wants to retrieve.
                        </p>
                    </div>
                    <div className='word-padding m-6 ml-12'>
                        <p id='p-2' className='font-3 word-padding background-color-5' onMouseEnter={() => {Wiggle('p-2')}}>
                        From here Each Admin can specifically access the details of <b className='font-1'> oneself</b>. 
                        This ensures that the Admin data is <b className='font-1'>confidential</b>.
                        </p>
                    </div>
                    <div className='word-padding m-6 ml-12'>
                        <p id='p-3' className='font-3 word-padding background-color-5' onMouseEnter={() => {Wiggle('p-3')}}>
                        The Admins can globally communicate here and organize <b className='font-1'> meetings</b> and 
                        decide the <b className='font-1'> workflow</b> of the tasks at hand.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <div id='pane' className='absolute z-30 top-40 -left-1/4 background-color-2 w-1/6 p-4 flex flex-col justify-evenly items-center gap-4'
            onMouseEnter={HoverHere}>
                <button className='background-color-5 font-4 p-6 pl-4 w-1/2 text-md'>
                    Student List
                </button>
                <button className='background-color-5 font-4 p-6 pl-4 w-1/2 text-md'>
                    Your Panel
                </button>
                <button className='background-color-5 font-4 p-6 pl-4 w-1/2 text-md'>
                    Feedback
                </button>
                <button className='background-color-5 font-4 p-6 pl-4 w-1/2 text-md' onClick={FocusLogs}>
                    Admin Logs
                </button>
                <button className='background-color-5 font-4 p-6 pl-4 w-1/2 text-md'>
                    Ban Student
                </button>
            </div>
            <div className='relative background-color-5 w-full h-72'>
                <div className='background-color-2 w-1/6 p-4 text-2xl font-4 text-center'>Director</div>
                <div className='w-5/6 flex flex-row justify-between m-6 ml-12'>
                    <ol className='flex flex-col gap-1'>
                        <li className='font-3 ml-6 text-xl'>
                            * Track the working and ban the accounts founded suspicious
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Maintain the subsystem and have access to unique Microservice rights
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Easily maintain and update the system through a single dashboard pane
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Approve and disapprove of the entire Student and Admins Community and collects feedbacks
                        </li>
                        <li className='font-3 ml-6 text-xl'>
                            * Work with the development team to resolve issues and fix bugs
                        </li>
                    </ol>
                    <span id='director' className="-top-12 background-color-1 flex justify-center items-center">
                        <Link to='/director'>
                            <button className='text-xl font-4 w-36' id='button-3'>
                                Apply as Director
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
            <div id='adminLogs'>
                <AdminLogs />
            </div>
            <RecentAdminLogs />
            <Footer />
        </div>
    )
};

export default AdminDashboard;