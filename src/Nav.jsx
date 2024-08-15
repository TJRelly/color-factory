import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-black text-white py-8 px-2">
            <h1 className="pb-8">Welcome to the color factory.</h1>
            <Link to="/color/new" className="text-white underline text-2xl">Add a color</Link>
        </div>
    );
};

export default Nav;
