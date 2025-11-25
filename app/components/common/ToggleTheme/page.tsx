"use client"
import { Moon } from 'lucide-react';
import { SunMedium } from 'lucide-react';
import {useTheme} from 'next-themes';

export default function ToggleTheme() {
    const {theme, setTheme} = useTheme();
    return (
        <div>
            <button className='rounded-full p-1' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <SunMedium /> : <Moon />}
            </button>
        </div>
    );
}