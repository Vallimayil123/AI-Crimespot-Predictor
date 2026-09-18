import { useState } from "react";
import Navbar from "../components/Navbar";
import { predictCrime } from "../services/PredictionService";
function Prediction() {

    const [district, setDistrict] = useState("");
    const [crimeType, setCrimeType] = useState("");
    const [month, setMonth] = useState("");
    const [hour, setHour] = useState("");

    const [prediction, setPrediction] = useState(null);

    const handlePredict = async () => {

    try {

        const response = await predictCrime({

            district,

            crimeType,

            month: Number(month),

            hour: Number(hour)

        });

        setPrediction(response.data);

    } catch (error) {
    console.error("Prediction error:", error);

    if (error.response) {
        alert(error.response.data.message || "Prediction failed");
    } else {
        alert("Cannot connect to prediction service");
    }
}

};

    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4">
                    🤖 AI Crime Hotspot Prediction
                </h2>

                <div className="row">

                    <div className="col-md-3">

                        <label>District</label>

                        <select
                            className="form-control"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option>Chennai</option>
                            <option>Coimbatore</option>
                            <option>Madurai</option>
                        </select>

                    </div>

                    <div className="col-md-3">

                        <label>Crime Type</label>

                        <select
                            className="form-control"
                            value={crimeType}
                            onChange={(e) => setCrimeType(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option>Theft</option>
                            <option>Robbery</option>
                            <option>Assault</option>
                        </select>

                    </div>

                    <div className="col-md-3">

                        <label>Month</label>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="1-12"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        />

                    </div>

                    <div className="col-md-3">

                        <label>Hour</label>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="0-23"
                            value={hour}
                            onChange={(e) => setHour(e.target.value)}
                        />

                    </div>

                </div>

                <br />

                <button
                    className="btn btn-danger"
                    onClick={handlePredict}
                >
                    Predict Crime Risk
                </button>

                <br />
                <br />

                {prediction && (

                    <div className="card border-danger">

                        <div className="card-body">

                            <h3>Prediction Result</h3>

                            <h2 className="text-danger">

                                {prediction.risk} Risk

                            </h2>

                            <h5>

                                Confidence :
                                {" "}
                                {prediction.confidence}

                            </h5>

                        </div>

                    </div>

                )}

            </div>
        </>
    );
}

export default Prediction;