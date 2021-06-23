export default function Button({children}) {
    return (
        <a className="border-blue-500 text-white-500 py-4 px-6 rounded-full ">
            {children}
        </a>
    );
}
