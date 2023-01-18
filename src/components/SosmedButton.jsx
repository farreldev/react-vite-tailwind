import { IconBrandGoogle, IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons';
import React from 'react';
import Button from './Button';

export default function SosmedButton() {
    const type = 'submit';
    const onClick = () => console.log('Login with Google');

    return (
        <div className='flex gap-x-2'>
            {/*----------- Menggunakan type object ----------- */}
            <Button customclass={'bg-google hover:bg-googleHover'} {...{ type, onClick }}>
                <IconBrandGoogle />
                Google
            </Button>
            {/*----------- End ----------- */}
            <Button customclass={'bg-facebook hover:bg-facebookHover'} onClick={() => console.log('Login with Facebook')} type={'reset'}>
                <IconBrandFacebook />
                Facebook
            </Button>
            <Button customclass={'bg-twitter hover:bg-twitterHover'} onClick={() => console.log('Login with Twitter')} type={'button'}>
                <IconBrandTwitter />
                Twitter
            </Button>
            <Button customclass={'bg-instagram hover:bg-instagramHover'} onClick={() => console.log('Login with Instagram')} type={'button'}>
                <IconBrandInstagram />
                Instagram
            </Button>
        </div>
    );
}
