import clsx from 'clsx';

export default function Button({ children, text, customclass = 'bg-black hover:bg-gray-800', type = 'button', ...props }) {
    // const { children, text, customclass = 'bg-blue-600 hover:bg-blue-700', type = 'button' } = props;
    return (
        <button
            {...props}
            className={clsx(customclass, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2 flex items-center gap-x-2 text-white px-4 py-2 rounded')}>
            {text || children}
        </button>
    );
}
