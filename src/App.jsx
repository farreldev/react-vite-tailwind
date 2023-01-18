import PlacedContentCenter from './components/PlacedContentCenter';
import Card from './components/Card';
import Button from './components/Button';
import { IconBrandGithub } from '@tabler/icons';
import Input from './components/Input';
import Label from './components/Label';
export default function App() {
    return (
        <PlacedContentCenter>
            <Card>
                <Card.Title>
                    <p className={'text-slate-600 text-lg font-medium antialiased tracking-normal'}>Sign up a new account</p>
                </Card.Title>
                <Card.Body>
                    <div className='max-w-md space-y-5 mx-auto'>
                        <div className={'flex items-center justify-between'}>
                            <Label htmlFor={'name'} val={'name'} />
                            <Input name={'name'} id={'name'} />
                        </div>
                        <div className={'flex items-center justify-between'}>
                            <Label htmlFor={'email'} val={'email'} />
                            <Input name={'email'} id={'email'} type={'email'} />
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button>
                        <IconBrandGithub />
                        Register
                    </Button>
                </Card.Footer>
            </Card>
        </PlacedContentCenter>
    );
}
