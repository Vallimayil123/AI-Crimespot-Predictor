from flask import Flask, request, jsonify
import joblib
import pandas as pd
app = Flask(__name__)

model = joblib.load("crime_model.pkl")
district_encoder = joblib.load("district_encoder.pkl")
crime_encoder = joblib.load("crime_encoder.pkl")

print("MODEL FEATURES:", model.feature_names_in_)

@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.json

        district_name = data["district"]
        crime_name = data["crimeType"]

        month = int(data["month"])
        hour = int(data["hour"])

        # Check whether district exists in training data
        if district_name not in district_encoder.classes_:
            return jsonify({
                "error": "Unknown district",
                "message": f"District '{district_name}' was not used when training the model."
            }), 400

        # Check whether crime type exists in training data
        if crime_name not in crime_encoder.classes_:
            return jsonify({
                "error": "Unknown crime type",
                "message": f"Crime type '{crime_name}' was not used when training the model."
            }), 400

        # Validate month
        if month < 1 or month > 12:
            return jsonify({
                "error": "Invalid month",
                "message": "Month must be between 1 and 12."
            }), 400

        # Validate hour
        if hour < 0 or hour > 23:
            return jsonify({
                "error": "Invalid hour",
                "message": "Hour must be between 0 and 23."
            }), 400

        district = district_encoder.transform([district_name])[0]
        crime = crime_encoder.transform([crime_name])[0]


        input_data = pd.DataFrame([{
    "District": district,
    "CrimeType": crime,
    "Month": month,
    "Hour": hour
}])

        prediction = model.predict(input_data)[0]

        probability = model.predict_proba(input_data)[0]

        confidence = round(max(probability) * 100, 2)

        if prediction == 1:
            risk = "High"
        else:
            risk = "Low"

        return jsonify({
            "risk": risk,
            "confidence": confidence
        })

    except Exception as e:

        print("Prediction error:", str(e))

        return jsonify({
            "error": "Prediction failed",
            "message": str(e)
        }), 500

if __name__ == "__main__":
    app.run(debug=True)