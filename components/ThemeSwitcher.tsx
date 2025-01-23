'use client';

import React from 'react'
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
const theme = atomWithStorage('dark', false);

const ThemeSwitcher = () => {
    const [appTheme, setAppTheme] = useAtom(theme);
    const handleClick = () => setAppTheme(!appTheme);
    return (
        <div className={appTheme ? 'dark' : 'light'}>
            <h1>This is a theme switcher</h1>
            <button onClick={handleClick}>{appTheme ? 'DARK' : 'LIGHT'}</button>
        </div>
    )
}

export default ThemeSwitcher