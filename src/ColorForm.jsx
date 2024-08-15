import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({ addColor }) {
    const INITIAL_STATE = { name: "", hue: "#000000" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    /** Send {color, hue} to parent
     *    & clear form. */

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
        navigate(-1);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    /** render form */

    return (
        <div>
            <form className="w-full max-w-sm mt-8" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="color-name"
                        >
                            Color Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="color-name"
                            name="name"
                            type="text"
                            placeholder="choose a color"
                            onChange={handleChange}
                            value={formData.color}
                            required
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="color-hue"
                        >
                            Color Hue
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-[2rem]"
                            id="color-hue"
                            name="hue"
                            type="color"
                            onChange={handleChange}
                            value={formData.hue}
                            required
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
                            type="submit"
                        >
                            Add Color
                        </button>
                    </div>
                </div>
            </form>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button
                        onClick={() => navigate(-1)}
                        className="shadow bg-black hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-8"
                        type="button"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ColorForm;
