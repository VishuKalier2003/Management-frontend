import { Link } from 'react-router-dom';
import MagmaDesk from './MagmaDesk';

const HeaderDirector = () => {
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
                        <button id='bhd-1' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhd-1')}} onMouseLeave={() => {Delarge('bhd-1')}}>Home</button>
                    </Link>
                    <Link to='/director/adminList'>
                        <button id='bhd-2' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhd-2')}} onMouseLeave={() => {Delarge('bhd-2')}}>Authorize</button>
                    </Link>
                    <Link to='/director/dashboard'>
                        <button id='bhd-3' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhd-3')}} onMouseLeave={() => {Delarge('bhd-3')}}>Dashboard</button>
                    </Link>
                    <Link to='/director'>
                        <button id='bhd-4' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bhd-4')}} onMouseLeave={() => {Delarge('bhd-4')}}>Director</button>
                    </Link>
                </div>
            </h2>
    )
};

export default HeaderDirector;