import { useParams, Navigate, useNavigate } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {
    const { name } = useParams();
    const navigate = useNavigate();
    const color = colors.find((c) => c.name === name);

    if (!color) return <Navigate to="/" />;

    return (
        <div className="Color" style={{ backgroundColor: `${color.hue}` }}>
            <h1 className="pb-6 text-white bg-black">
                You must like{" "}
                <span style={{ color: `${color.hue}` }}>{name}</span>.
            </h1>
            <button className="mt-20" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
}

export default Color;
