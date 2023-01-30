import Input from './Input';
import Button from './Button';
import React from 'react';
import Card from './Card';
import { useState } from 'react';
export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                complete: false,
            },
        ]);
        setNewTask('');
    }

    return (
        <Card>
            <Card.Title>
                <p>Todo</p>
            </Card.Title>
            <Card.Body>
                <form className={'mb-5'}>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add task'} />
                    </div>
                </form>
            </Card.Body>
            {tasks.length > 0 ? (
                <ol className={'space-y-2 p-4'}>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ol>
            ) : null}
            <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
        </Card>
    );
}
