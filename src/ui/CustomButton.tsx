import React,{FC} from "react";

const CustomButton:FC<{
onClick?:(func:any)=>void;
 child?: any;
 type?:any;
 className?:string;
 primary?:boolean;
 children?:React.ReactNode;
}>=({ onClick, child, type, className, primary, children })=> {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`rounded-full h-[40px] flex justify-center items-center py-2 px-4 ease-in-out duration-300 ${className} ${
                primary
                    ? "bg-black text-lime-500 hover:bg-lime-500 hover:text-black border border-lime-500"
                    : " bg-white text-black border border-yellow-400 hover:bg-black hover:text-white"
            }`}
        >
            {child}
            {children}
        </button>
    );
}

export default CustomButton;
