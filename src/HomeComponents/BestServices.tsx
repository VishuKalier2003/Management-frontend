import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';

const BestServices = () => {
    const [entered, setEntered] = useState(false);

    const Initiate = () => {
        if (entered) return;
        const banner = document.getElementById('column-1') as HTMLDivElement;
        banner.style.width = '100vw';
        for (let i = 0; i < 100; i++) {
            const block = document.createElement('div');
            block.className = 'blocks';
            block.addEventListener('mouseenter', Glow);
            banner.appendChild(block);
        }
        setEntered(true);
    };

    const Glow = (e: Event) => {
        const currentBlock = e.target as HTMLDivElement;
        // Now you have the current block, and you can apply styles or perform actions.
        currentBlock.classList.add('glow');
        setTimeout(() => {currentBlock.classList.remove('glow');}, 1000);
    };

    useEffect(() => {
        const blocks = document.getElementsByClassName('blocks');
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener('mouseenter', Glow);
        }
    }, []);

    return (
        <Zoom damping={100} delay={500}>
        <div className='block-down' onMouseEnter={Initiate}>
            <div id='column-1' className='relative w-full h-60 flex flex-row overflow-hidden flex-wrap'>
                <div id='words' className='absolute top-12 left-1/3 w-1/3 flex flex-row justify-center text-center'>
                    <p className='font-4 text-6xl font-color-4'>Envision the Complete Power of the System</p>
                </div>
            </div>
        </div>
        </Zoom>
    );
};

export default BestServices;
