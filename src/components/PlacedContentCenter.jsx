export default function PlacedContentCenter({ children }) {
    return (
        <div>
            <div className={'bg-gray-900/[.25] max-h-screen h-screen flex items-center justify-center antialiased tracking-tighter'}>
                <div className={'max-w-lg w-full'}>{children}</div>
            </div>
        </div>
    );
}
