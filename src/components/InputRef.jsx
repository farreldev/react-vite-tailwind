import clsx from 'clsx';
import { forwardRef } from 'react';

const InputRef = forwardRef(({ type = 'text', customClass, ...props }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            {...props}
            className={clsx(
                `${customClass} transition duration-300 focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-slate-500 focus:border-blue-400 border border-slate-300 dark:border-slate-500 dark:text-slate-400 shadow-lg rounded px-2 py-2 flex-1 dark:bg-transparent`
            )}
        />
    );
});

export default InputRef;
