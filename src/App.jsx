import { useEffect, useState } from 'react';
import axios from 'axios';
import PlacedContentCenter from './components/PlacedContentCenter';
import Card from './components/Card';

export default function App() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/users');
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(`Error: ${error.message}`);
                setLoading(false);
            }
        }
        getUsers();
    }, []);
    return (
        <PlacedContentCenter>
            <Card>
                <Card.Title>
                    <p>Data Users: {users.length}</p>
                </Card.Title>
                <Card.Body>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul className={'text-slate-500'}>
                            <li className={'grid grid-cols-3 py-2 px-2 font-semibold tracking-normal bg-slate-800 text-white rounded'}>
                                <span>Name</span>
                                <span>Website</span>
                                <span>Email</span>
                            </li>
                            {users.map((user) => (
                                <li key={user.id} className={'grid grid-cols-3 py-2 px-2 odd:bg-[#f3f3f3]'}>
                                    <span>{user.name}</span>
                                    <span>{user.website}</span>
                                    <span>{user.email}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </Card.Body>
            </Card>
        </PlacedContentCenter>
    );
}
