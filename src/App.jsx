import PlacedContentCenter from './components/PlacedContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import useJoke from './hooks/useJokes';
import { useRef, useState } from 'react';
import InputRef from './components/InputRef';

export default function App() {
    const nameRef = useRef();
    const [name, setName] = useState('Alex');
    const joke = useJoke(name);

    function generateJokes(e) {
        e.preventDefault();
        setName(nameRef.current.value);
    }
    return (
        <PlacedContentCenter>
            <Card>
                <Card.Title>
                    <p className={'text-lg'}>Joke</p>
                </Card.Title>
                <Card.Body>
                    <p className={'mb-3'}>{joke.value}</p>
                    <InputRef ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateJokes}>generate jokes</Button>
                </Card.Footer>
            </Card>
        </PlacedContentCenter>
    );
}
