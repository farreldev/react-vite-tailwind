import {
    IconBrandFacebook,
    IconBrandGoogle,
    IconBrandTwitter,
} from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
    const type = 'submit';
    const onClick = () => console.log('Login with another style type...');

    return (
        <div className={'bg-slate-900 min-h-screen grid place-content-center'}>
            <div className='flex gap-x-2'>
                {/*----------- Menggunakan type object ----------- */}
                <Button {...{ type, onClick }}>
                    <IconBrandGoogle />
                    Register
                </Button>
                {/*----------- End ----------- */}
                <Button
                    injectclass={'bg-indigo-600 hover:bg-indigo-700'}
                    onClick={() => console.log('Register')}
                    type={'submit'}
                >
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button onClick={() => console.log('Login')} type={'button'}>
                    <IconBrandTwitter />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const {
        children,
        text,
        injectclass = 'bg-blue-600 hover:bg-blue-700',
        type = 'button',
    } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                injectclass,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
