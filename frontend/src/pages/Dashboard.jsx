import { useEffect, useState } from "react";
import { getCrimes } from "../services/CrimeService";
import Navbar from "../components/Navbar";
import CrimeCard from "../components/CrimeCard";
import CrimeMap from "./CrimeMap";

function Dashboard() {

    const [crimes, setCrimes] = useState([]);
    const uniqueDistricts = [...new Set(crimes.map(c => c.district))];

    useEffect(() => {
        loadCrimes();
    }, []);

    const loadCrimes = async () => {

        const response = await getCrimes();

        setCrimes(response.data);

    };

    return (

        <>

            <Navbar />

            <div className="container mt-4">

                <div className="row">

                    <CrimeCard
                        title="Total Crimes"
                        value={crimes.length}
                        color="primary"
                    />

                    <CrimeCard
                        title="High Risk Areas"
                        value="8"
                        color="danger"
                    />

                    <CrimeCard
                       title="Districts"
                      value={uniqueDistricts.length}
                      color="success"
                    />

                    <CrimeCard
                        title="Today's Alerts"
                        value="2"
                        color="warning"
                    />

                </div>

                <hr />

                

<h3>Crime Map</h3>

<CrimeMap crimes={crimes} />

<hr />

                <h3>Crime Records</h3>

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>

                            <th>Crime Type</th>

                            <th>District</th>

                            <th>Latitude</th>

                            <th>Longitude</th>

                            <th>Date</th>

                            <th>Time</th>

                        </tr>

                    </thead>

                    <tbody>

                        {crimes.map((crime) => (

                            <tr key={crime.id}>

                                <td>{crime.id}</td>

                                <td>{crime.crimeType}</td>

                                <td>{crime.district}</td>

                                <td>{crime.latitude}</td>

                                <td>{crime.longitude}</td>

                                <td>{crime.crimeDate}</td>

                                <td>{crime.crimeTime}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default Dashboard;