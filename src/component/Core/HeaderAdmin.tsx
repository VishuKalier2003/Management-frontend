import { Link } from 'react-router-dom';
import MagmaDesk from './MagmaDesk';
import { Fade, Slide } from 'react-awesome-reveal';

const HeaderAdmin = () => {
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
        <Fade cascade damping={10} delay={500}>
        <h2 className="background-color-1 text-4xl p-4 m-2 font-bold relative font-3 flex flex-row justify-between">
                <MagmaDesk />
                <div className="w-1/2 flex justify-around">
                    <Slide delay={800} direction="down">
                    <Link to='/'>
                        <button id='bha-1' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bha-1')}} onMouseLeave={() => {Delarge('bha-1')}}>Home</button>
                    </Link>
                    </Slide>
                    <Slide delay={1100} direction="down">
                    <Link to='/admin/feedback'>
                        <button id='bha-2' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bha-2')}} onMouseLeave={() => {Delarge('bha-2')}}>Feedback</button>
                    </Link>
                    </Slide>
                    <Slide delay={1400} direction="down">
                    <Link to='/admin/dashboard'>
                        <button id='bha-3' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bha-3')}} onMouseLeave={() => {Delarge('bha-3')}}>Dashboard</button>
                    </Link>
                    </Slide>
                    <Slide delay={1700} direction="down">
                    <Link to='/admin'>
                        <button id='bha-4' className='background-color-2 text-xl m-1 p-2 pl-8 pr-8'
                        onMouseEnter={() => {Enlarge('bha-4')}} onMouseLeave={() => {Delarge('bha-4')}}>Admin</button>
                    </Link>
                    </Slide>
                </div>
            </h2>
        </Fade>
    )
};

export default HeaderAdmin;