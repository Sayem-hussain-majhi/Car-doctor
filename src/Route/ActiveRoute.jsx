import { checkPropTypes } from "prop-types";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? 'bg-[#FF3811] text-white p-2 font-bold mx-3 rounded-md' : 'font-semibold mx-3 p-2'}
        >
            {children}
        </NavLink>
    );
};

ActiveRoute.propTypes = {
    children: checkPropTypes.string,
    to: checkPropTypes.string,
};

export default ActiveRoute;