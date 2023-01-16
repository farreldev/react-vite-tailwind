import clsx from 'clsx';

export function Button(props) {
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
