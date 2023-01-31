import clsx from 'clsx';

export default function Button({ children, text, customclass, type = 'button', ...props }) {
    // const { children, text, customclass = 'bg-blue-600 hover:bg-blue-700', type = 'button' } = props;
    return (
        <button
            {...props}
            className={clsx(
                'bg-black hover:bg-gray-800 capitalize [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-2 inline-flex items-center gap-x-2 text-white px-4 py-2 rounded',
                customclass
            )}>
            {text || children}
        </button>
    );
}
