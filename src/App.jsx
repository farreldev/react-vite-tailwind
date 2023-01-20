import PlacedContentCenter from './components/PlacedContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import { IconBrandGithub } from '@tabler/icons';
import Input from './components/Input';
import Label from './components/Label';
import { useState } from 'react';
export default function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function eventSubmit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <PlacedContentCenter>
            <Card>
                <Card.Title customClass={'bg-indigo-600'}>
                    <p className={'text-white text-lg font-medium antialiased tracking-normal'}>Sign up a new account</p>
                </Card.Title>
                <form onSubmit={eventSubmit}>
                    <Card.Body>
                        <div className={'border rounded-lg space-y-2 mb-4 p-4'}>
                            <p className='text-slate-500'>
                                <strong>Name:</strong> {form.name}
                            </p>
                            <p className='text-slate-500'>
                                <strong>Email:</strong> {form.email}
                            </p>
                        </div>
                        <div className='space-y-5'>
                            <div className={'flex flex-col gap-y-1'}>
                                <Label htmlFor={'name'} val={'name'} />
                                <Input onChange={handleChange} name={'name'} id={'name'} />
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
        </PlacedContentCenter>
    );
}
