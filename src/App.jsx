import PlacedContentCenter from './components/PlacedContentCenter';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { FormContext } from './context/FormContext';
import SignUp from './components/SignUp';

export default function App() {
    const [form, setForm] = useState({
        nama: '',
        email: '',
    });

    const [theme, setTheme] = useState('light');

    const themeContextVal = {
        theme,
        setTheme,
    };

    const formContextVal = {
        form,
        setForm,
    };

    return (
        <PlacedContentCenter>
            <ThemeContext.Provider value={themeContextVal}>
                <FormContext.Provider value={formContextVal}>
                    <SignUp />
                </FormContext.Provider>
            </ThemeContext.Provider>
        </PlacedContentCenter>
    );
}
