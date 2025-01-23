'use client';

import { atom, useAtom } from 'jotai';

const textAtom = atom('readonly atoms')
const uppercase = atom((get) => get(textAtom).toUpperCase())

export default function Page() {
    const [lowercaseText, setLowercaseText] = useAtom(textAtom);
    const [uppercaseText] = useAtom(uppercase);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setLowercaseText(e.target.value);
    return (
        <div className="app">
            <h1>{uppercaseText}</h1>
            <input value={lowercaseText} onChange={handleChange} />
        </div>
    )
}