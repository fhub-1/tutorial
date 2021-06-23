export default function Button({ className, children }) {
    const addClassName = className ? `${className}` : "";
    return (
        <a className={`border  text-yellow-100 border-yellow-500  py-3 px-10  text-lg font-semibold rounded-full inline-block ${addClassName}`}>
            {children}
        </a>  
    );
}
