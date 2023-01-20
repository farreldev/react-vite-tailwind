import clsx from 'clsx';

export default function Input({ type = 'text', customClass, ...props }) {
    return (
        <input
            type={type}
            {...props}
            className={clsx(
                `${customClass} transition duration-300 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border border-slate-300 shadow-lg rounded px-2 py-2 flex-1`
            )}
        />
    );
}
