export default function Button({children}) {
    return (
        <a className="border  border-yellow-500 text-white-500 py-3 px-8 font-semibold rounded-full">
            {children}
        </a>  
    );
}
