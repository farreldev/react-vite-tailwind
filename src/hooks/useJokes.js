import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useJoke(name) {
    const [joke, setJoke] = useState('');
    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            // console.log(data);
            setJoke(data);
        };
        getJoke();
    }, [name]);
    return joke;
}
