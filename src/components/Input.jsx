import clsx from 'clsx';

export default function Input({ type = 'text', customClass, ...props }) {
    return <input type={type} {...props} className={clsx(`${customClass} border border-slate-300 shadow-lg rounded px-2 py-2 flex-1`)} />;
}
