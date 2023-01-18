import React, { useState } from 'react';
import { Button } from './Button';

export default function Counter({ initVal }) {
    const [count, setCount] = useState(initVal);
    const handleClick = () => {
        setCount((prevState) => prevState + 1); /* With Updater Syntax */
        // setCount(count + 1); /* With Default Syntax */
    };
    return (
        <div>
            <span className={'block mb-3'}>{count}</span>
            <Button onClick={handleClick}>Change</Button>
        </div>
    );
}
