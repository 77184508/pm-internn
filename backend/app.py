from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Build the full path to the dataset
DATA_FILE = os.path.join(BASE_DIR, "pm_internship_sample_dataset.csv")

# --- LOAD DATASET ON STARTUP ---
try:
    data = pd.read_csv(DATA_FILE)
    print(f"Dataset loaded successfully: {len(data)} records")
except Exception as e:
    print("Error loading dataset:", e)
    data = pd.DataFrame()  # fallback if dataset fails to load

# Ensure only required columns are used
required_columns = [
    'Title', 
    'Skills Required', 
    'Location (State)', 
    'Stipend (₹/Month)', 
    'Eligibility', 
    'Application Deadline'
]

# Validate dataset
if not data.empty:
    missing_cols = [col for col in required_columns if col not in data.columns]
    if missing_cols:
        raise ValueError(f"Missing required columns: {missing_cols}")
    data = data[required_columns]


# --- SCORING FUNCTION ---
def compute_composite_score(row, user_profile):
    score = 0

    # Skill similarity using TF-IDF
    vectorizer = TfidfVectorizer()
    tfidf = vectorizer.fit_transform([str(row['Skills Required']), ' '.join(user_profile['skills'])])
    skill_similarity = cosine_similarity(tfidf[0], tfidf[1])[0][0]

    if skill_similarity > 0.5:
        score += skill_similarity * 10
    else:
        score += skill_similarity * 5

    # Location match
    if str(row['Location (State)']).strip().lower() == user_profile['preferred_location'].strip().lower():
        score += 5

    # Stipend match
    try:
        stipend = float(row['Stipend (₹/Month)'])
        if (user_profile['expected_stipend'] - 1000) <= stipend <= (user_profile['expected_stipend'] + 1000):
            score += 1
    except (ValueError, TypeError):
        pass  # Ignore invalid stipend values

    # Education match
    education_hierarchy = ['Any Graduate', 'BA', 'BBA', 'BSC', 'B.Tech', 'M.A.', 'M.Sc.', 'M.Tech', 'PhD']
    try:
        internship_min_edu_index = education_hierarchy.index(row['Eligibility'])
        user_edu_index = education_hierarchy.index(user_profile['education'])

        if user_edu_index >= internship_min_edu_index:
            if user_edu_index == internship_min_edu_index:
                score += 5
            else:
                score += 1
    except ValueError:
        pass  # Ignore if eligibility is not found

    return score


# --- API ROUTE TO GET RECOMMENDATIONS ---
@app.route("/recommend", methods=["POST"])
def recommend():
    if data.empty:
        return jsonify({"error": "Dataset not loaded"}), 500

    # Get user profile from frontend request
    user_profile = request.get_json()

    # Calculate composite scores for all rows
    data['composite_score'] = data.apply(lambda row: compute_composite_score(row, user_profile), axis=1)

    # Sort by score and return top 4 internships
    top_4 = data.sort_values(by='composite_score', ascending=False).head(4)

    result = top_4[['Application Deadline', 'Eligibility', 'Title', 'Location (State)', 'Stipend (₹/Month)']].to_dict(orient='records')
    return jsonify(result)

print("Server is running on port 5000")
# --- RUN SERVER ---
if __name__ == "__main__":
    app.run(port=5000, debug=True)
