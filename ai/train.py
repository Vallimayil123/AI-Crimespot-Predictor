import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import joblib

# Load dataset
df = pd.read_csv("crime_data.csv")

district_encoder = LabelEncoder()
crime_encoder = LabelEncoder()

df["District"] = district_encoder.fit_transform(df["District"])
df["CrimeType"] = crime_encoder.fit_transform(df["CrimeType"])

X = df[["District", "CrimeType", "Month", "Hour"]]
y = df["Risk"]

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

joblib.dump(model, "crime_model.pkl")
joblib.dump(district_encoder, "district_encoder.pkl")
joblib.dump(crime_encoder, "crime_encoder.pkl")

print("Model trained successfully!")