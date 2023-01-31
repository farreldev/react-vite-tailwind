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
                completed: false,
            },
        ]);
        setNewTask('');
    }

    function handleCompleteTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updateTask);
    }
    function handleRemoveTask(id) {
        const rmTask = tasks.filter((task) => task.id !== id);
        setTasks(rmTask);
    }

    return (
        <Card>
            <Card.Title>
                <p className={'font-bold text-2xl capitalize'}>todo list</p>
            </Card.Title>
            <Card.Body>
                <form className={'mb-5'}>
                    <div className='flex items-center gap-x-2'>
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        <Button onClick={handleAddTask} text={'Add task'} />
                    </div>
                </form>
                {tasks.length > 0 && (
                    <ol className={'list-decimal list-inside space-y-2'}>
                        {tasks.map((task, num) => (
                            <li key={task.id} className={'flex w-full items-center justify-between'}>
                                <p>
                                    <span className={'inline-block text-gray-400 mr-2'}>{num + 1}.</span>
                                    <span className={'text-gray-900 capitalize'}>
                                        {task.name} <b>{task.completed ? 'complete' : 'incomplete'}</b>
                                    </span>
                                </p>
                                <div className={'space-x-2'}>
                                    <Button
                                        customclass={
                                            'px-3 py-0.5 bg-white border text-black hover:bg-green-500 hover:border-transparent hover:text-white'
                                        }
                                        onClick={() => handleCompleteTask(task.id)}>
                                        {task.completed ? 'incomplete' : 'complete'}
                                    </Button>
                                    <Button
                                        customclass={
                                            'px-3 py-0.5 bg-white border text-black hover:bg-red-600 hover:border-transparent hover:text-white'
                                        }
                                        onClick={() => handleRemoveTask(task.id)}>
                                        remove
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ol>
                )}
            </Card.Body>
            <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
        </Card>
    );
}
