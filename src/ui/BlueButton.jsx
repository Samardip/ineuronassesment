const BlueButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={`rounded px-4 py-2 bg-sky-500 hover:bg-sky-600 text-gray-50 text-lg disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:text-gray-300 transition-all ease-out duration-300 ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default BlueButton;
