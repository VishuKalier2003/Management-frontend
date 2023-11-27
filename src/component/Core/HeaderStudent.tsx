import { Link } from 'react-router-dom';
import MagmaDesk from './MagmaDesk';

const HeaderStudent = () => {
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
        <h2 className="background-color-1 text-4xl p-4 m-2 font-bold relative font-3 flex flex-row justify-between">
                <MagmaDesk />
                <div className="w-1/2 flex justify-around">
                    <Link to='/'>
                        <button id='bhs-1' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhs-1')}} onMouseLeave={() => {Delarge('bhs-1')}}>Home</button>
                    </Link>
                    <Link to='/student/get/database'>
                        <button id='bhs-2' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhs-2')}} onMouseLeave={() => {Delarge('bhs-2')}}>Database</button>
                    </Link>
                    <Link to='/student/dashboard'>
                        <button id='bhs-3' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhs-3')}} onMouseLeave={() => {Delarge('bhs-3')}}>Dashboard</button>
                    </Link>
                    <Link to='/student/add/studentData'>
                        <button id='bhs-4' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhs-4')}} onMouseLeave={() => {Delarge('bhs-4')}}>Enroll</button>
                    </Link>
                </div>
            </h2>
    )
};

export default HeaderStudent;