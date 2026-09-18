import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";

function App() {

    return (

        <HashRouter>

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/prediction" element={<Prediction />} />

            </Routes>

        </HashRouter>

    );

}

export default App;