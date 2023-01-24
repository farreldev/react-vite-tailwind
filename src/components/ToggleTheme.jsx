import React from 'react';
import Button from './Button';
import { IconSun, IconMoon } from '@tabler/icons';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ToggleTheme() {
    const context = useContext(ThemeContext);
    return (
        <Button onClick={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')} customclass={'bg-black/[.2]'}>
            Switch to {context.theme === 'light' ? <IconMoon /> : <IconSun />}
        </Button>
    );
}
