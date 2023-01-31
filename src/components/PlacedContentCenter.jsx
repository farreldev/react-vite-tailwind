export default function PlacedContentCenter({ children }) {
    return (
        <div>
            <div className={'bg-gray-100 dark:bg-slate-900 max-h-screen h-screen flex items-center justify-center antialiased tracking-tighter'}>
                <div className={'max-w-3xl w-full'}>{children}</div>
            </div>
        </div>
    );
}
