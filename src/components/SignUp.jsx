import React from 'react';
import Card from './Card';
import Button from './Button';
import { IconBrandGithub } from '@tabler/icons';
import Input from './Input';
import Label from './Label';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import ToggleTheme from './ToggleTheme';

export default function SignUp() {
    const context = useContext(FormContext);

    function handleChange(e) {
        context.setForm({ ...context.form, [e.target.name]: e.target.value });
    }

    function eventSubmit(e) {
        e.preventDefault();
        console.log(context.form);
    }
    return (
        <Card>
            <Card.Title customClass={'bg-indigo-600'}>
                <p className={'text-white text-lg font-medium antialiased tracking-normal'}>Sign up a new account</p>
                <ToggleTheme />
            </Card.Title>
            <form onSubmit={eventSubmit}>
                <Card.Body>
                    <div className={'border dark:border-slate-500 rounded-lg space-y-2 mb-4 p-4 text-slate-500 dark:text-slate-400'}>
                        <p>
                            <strong>Name:</strong> {context.form.nama}
                        </p>
                        <p>
                            <strong>Email:</strong> {context.form.email}
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <div className={'flex flex-col gap-y-1'}>
                            <Label htmlFor={'nama'} val={'nama'} />
                            <Input onChange={handleChange} name={'nama'} id={'nama'} />
                        </div>
                        <div className={'flex flex-col gap-y-1'}>
                            <Label htmlFor={'email'} val={'email'} />
                            <Input onChange={handleChange} name={'email'} id={'email'} type={'email'} />
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
            </form>
        </Card>
    );
}
