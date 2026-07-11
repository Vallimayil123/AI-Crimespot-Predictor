import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    🚔 Crime Hotspot Predictor
                </Link>

                <div>

                    <Link
                        to="/"
                        className="btn btn-outline-light me-2"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/prediction"
                        className="btn btn-outline-warning"
                    >
                        AI Prediction
                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;