'use client'

import { useContext } from 'react';
import PreferencesContext from '@/contexts/PreferencesContext';


export default function ScrollableBackground() {
    return (
        <img
            src="/assets/squ1rrel_background.webp"
            className={'fixed top-0 -z-10 opacity-10 object-cover object-center h-[max(100vh,_100vw)] scale-[1.5] origin-bottom'}
        />
    )
}
