import PlacedContentCenter from './components/PlacedContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useState, useRef } from 'react';

export default function App() {
    /**
     * useRef digunakan untuk state componet yang tidak perlu dirender ulang
     * ex: const varName = useRef(initialValue)
     */
    // const tick = useRef(0);
    /* End */

    /**
     * useState digunakan untuk state componet yang pasti dirender ulang
     * ex: const [state, setState] = useState(initialValue);
     */

    const [tick, setTick] = useState(0);

    // const [form, setForm] = useState({
    //     nama: '',
    //     email: '',
    // });

    // const [theme, setTheme] = useState('light');

    // const themeContextVal = {
    //     theme,
    //     setTheme,
    // };

    // const formContextVal = {
    //     form,
    //     setForm,
    // };

    function handleClick() {
        /**
         * contoh eksekusi useRef
         */
        // tick.current = tick.current + 1;
        // console.log(tick.current);
        /* End */

        /**
         * Contoh penggunaan useState
         */
        const nextTick = tick + 1;
        setTick(nextTick);
        console.log(nextTick);
        /* End */
    }

    return (
        <PlacedContentCenter>
            <Card>
                <Card.Title>
                    <p className={'capitalize text-lg'}>userRef Hooks</p>
                </Card.Title>
                <Card.Body>
                    <div className='flex items-center gap-x-2'>
                        <Input isFocused />
                        <Button onClick={handleClick}>Tick</Button>
                    </div>
                </Card.Body>
                <Card.Footer>You clicked {tick} times.</Card.Footer>
            </Card>
        </PlacedContentCenter>
    );
}
