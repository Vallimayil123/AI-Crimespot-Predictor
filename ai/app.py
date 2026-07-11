from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

model = joblib.load("crime_model.pkl")
district_encoder = joblib.load("district_encoder.pkl")
crime_encoder = joblib.load("crime_encoder.pkl")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    district = district_encoder.transform([data["district"]])[0]
    crime = crime_encoder.transform([data["crimeType"]])[0]

    month = data["month"]
    hour = data["hour"]

    
    prediction = model.predict([[district, crime, month, hour]])[0]


    probability = model.predict_proba([[district, crime, month, hour]])[0]


    confidence = round(max(probability) * 100, 2)


    if prediction == 1:
       risk = "High"
    else:
        risk = "Low"

    return jsonify({
        "risk": risk,
        "confidence": confidence
    })

if __name__ == "__main__":
    app.run(debug=True)