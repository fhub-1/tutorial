export default function Button({ className,variant, children }) {
    const addClassName = className ? `${className}` : "";
     
    const variants = {
        "outline-yellow": `border border-yellow text-yellow-500`,
        "yellow": "bg-yellow-500 text-black"
    }
     
    const pickedVariant = variants[variant];

    return (
        <a className={`border  text-yellow-100 border-yellow-500  py-3 px-10  text-lg font-semibold rounded-full inline-block ${pickedVariant}${addClassName}`}>
            {children}
        </a>  
    );
}
