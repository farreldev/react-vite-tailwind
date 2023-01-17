// import { IconBrandFacebook, IconBrandGoogle, IconBrandTwitter } from '@tabler/icons';

import Button from './components/Button';
import Card from './components/Card';

export default function App() {
    const type = 'submit';
    const onClick = () => console.log('Login with another style type...');

    return (
        <div className={'bg-slate-100 antialiased min-h-screen flex items-center justify-center'}>
            {/* <div className='flex gap-x-2'> */}
            {/*----------- Menggunakan type object ----------- */}
            {/* <Button {...{ type, onClick }}>
                    <IconBrandGoogle />
                    Register
                </Button> */}
            {/*----------- End ----------- */}
            {/* <Button injectclass={'bg-indigo-600 hover:bg-indigo-700'} onClick={() => console.log('Register')} type={'submit'}>
                    <IconBrandFacebook />
                    Register
                </Button> */}
            {/* <Button onClick={() => console.log('Login')} type={'button'}>
                    <IconBrandTwitter />
                    Login
                </Button> */}
            {/* </div> */}
            <div className={'max-w-md w-full'}>
                <Card>
                    <Card.Title>Hello World</Card.Title>
                    <Card.Body>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos voluptates facere placeat adipisci distinctio, laudantium illum
                        officiis. Dolore culpa nihil iure nemo quidem ad dolor. Unde doloremque commodi soluta laborum.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
