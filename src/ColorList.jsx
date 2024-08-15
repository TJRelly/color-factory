import { Link } from "react-router-dom";

function Color({ colors }) {
    return (
        <div>
            <h2 className="py-4 px-2 text-2xl text-white">Color List</h2>
            <ul>
                {colors.map((color) => (
                    <li key={color.name}>
                        <Link
                            className="text-xl"
                            style={{ color: `${color.hue}` }}
                            to={`/color/${color.name}`}
                        >
                            {color.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Color;
