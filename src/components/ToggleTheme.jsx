import React from 'react';
import Button from './Button';
import { IconSun, IconMoon } from '@tabler/icons';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ToggleTheme() {
    const context = useContext(ThemeContext);
    useEffect(() => {
        if (context.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [context.theme]);
    return (
        <Button onClick={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')} customclass={'bg-black/[.2]'}>
            Switch to {context.theme === 'light' ? <IconMoon /> : <IconSun />}
        </Button>
    );
}
