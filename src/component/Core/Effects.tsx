import React from "react";
import { Slide } from 'react-awesome-reveal';

    const ScrollToRoles = (div : string) => {
        const element = document.getElementById(`${div}`);
        if(element)
        {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    const WiggleEffect = (component : string) => {
        const comp = document.getElementById(`${component}`) as HTMLDivElement;
        comp.classList.add("animate-wiggle");
        setTimeout(() => {comp.classList.remove("animate-wiggle");}, 1000);
    };

    const SlideFromLeft = (component : string) => {
        const comp = document.getElementById(`${component}`) as HTMLDivElement;
        comp.classList.add("animate-slide-from-left");
    }

    const CursorBlitz = (event: React.MouseEvent) => {
        console.log(event.clientX+","+event.clientY);
        const box = document.createElement('span');
        box.style.position = 'fixed';
        box.style.left = event.clientX + 'px';
        box.style.top = event.clientY + 'px';
        box.classList.add('sprinkle-effect');
        document.getElementById('block')?.appendChild(box);
        setTimeout(() => {
            box.remove();
        }, 500);
    }

    const TransitioningColor = (component : string) => {
        const main = document.getElementById(`${component}`) as HTMLDivElement;
        main.classList.add('remove-background');
        const color1 = document.createElement('span');
        color1.classList.add('transition-color-1');
        setTimeout(() => {
            color1.style.left = '0px';
        }, 10);
        main.appendChild(color1);
        setTimeout(() => {
            color1.classList.add('transition-color-1-forward');
            main.removeChild(color1);
            main.classList.remove('remove-background');
        }, 2500);
    };

    const SlideWaveEffect = (words : string, id : string, num: number) => {
        const main = document.getElementById(`${id}`) as HTMLParagraphElement;
        let len = words.length, i = 0;          // The innerHTML does not preserves the White-spaces...
        const interval = setInterval(() => {
            const data = words[i];
            main.textContent += data;  // The textContent preserves the White-spaces...
                    // Preserves the White-spaces in between...
            i++;
            if(i == len)
                clearInterval(interval);
        }, num);
        if(i == len)
            clearInterval(interval);
    };

const ExportedEffects = {
    ScrollToRoles,
    WiggleEffect,
    SlideFromLeft,
    CursorBlitz,
    TransitioningColor,
    SlideWaveEffect
}

export default ExportedEffects;