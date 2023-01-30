/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                facebook: '#1877F2',
                facebookHover: '#0b5fcc',
                twitter: '#1DA1F2',
                twitterHover: '#0a88d5',
                google: '#db3236',
                googleHover: '#ac1519',
                instagram: '#E4405F',
                instagramHover: '#d02444',
                pinterest: '#BD081C',
                pinterestHover: '#880917',
                youtube: '#CD201F',
                youtubeHover: '#ad0e0d',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
