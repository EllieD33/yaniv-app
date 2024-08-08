import { Link } from "react-router-dom";

function NavButton({ linkTo, navText }) {
    return (
        <Link to={linkTo} >
            {navText}
        </Link>
    );
}

export default NavButton;
