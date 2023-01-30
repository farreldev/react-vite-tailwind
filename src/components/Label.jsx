import React from 'react';

export default function Label({ val = 'fieldname', children, customClass, ...props }) {
    return (
        <label {...props} className={`${customClass} text-slate-600 dark:text-slate-500 capitalize w-full min-w-[70px] max-w-[150px]`}>
            {val || children}
        </label>
    );
}
