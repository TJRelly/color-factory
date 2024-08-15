import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";
import Nav from "./Nav";
import "./App.css";

function App() {
    const INITIALSTATE = [
        { name: "yellow", hue: "yellow" },
        { name: "lightblue", hue: "lightblue" },
        { name: "peachpuff", hue: "peachpuff" },
    ];

    const [colors, setColors] = useState(INITIALSTATE);

    const addColor = (newColor) => setColors((colors) => [newColor, ...colors]);

    return (
        <BrowserRouter>
            <Nav />
            <div className="App">
                <Routes>
                    <Route path="/" element={<ColorList colors={colors} />} />
                    <Route
                        path="/color/:name"
                        element={<Color colors={colors} />}
                    />
                    <Route
                        path="/color/new"
                        element={<ColorForm addColor={addColor} />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
