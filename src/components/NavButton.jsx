import { Link } from "react-router-dom";

function NavButton({ linkTo, navText, filled }) {
    return (
        <Link
            to={linkTo}
            className={`flex items-center justify-center text-xl rounded-full p-4 m-5 max-w-xs text-center 
                ${filled 
                    ? "bg-white text-indigo-600 border-2 border-indigo-500" 
                    : "text-white border-2 border-white"
                }`}
        >
            {navText}
        </Link>
    );
}

export default NavButton;
