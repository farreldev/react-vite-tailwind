import PlacedContentCenter from './components/PlacedContentCenter';
import Todo from './components/Todo';

export default function App() {
    // const [form, setForm] = useState({
    //     nama: '',
    //     email: '',
    // });

    // const [theme, setTheme] = useState('light');

    // const themeContextVal = {
    //     theme,
    //     setTheme,
    // };

    // const formContextVal = {
    //     form,
    //     setForm,
    // };

    return (
        <PlacedContentCenter>
            <Todo />
        </PlacedContentCenter>
    );
}
