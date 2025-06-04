# routes/candidate_routes.py
from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from models.candidate_model import candidate_serializer # type: ignore
from bson import ObjectId

candidate_bp = Blueprint('candidate_bp', __name__)
client = MongoClient("mongodb+srv://anilkumar:anilkumar@ecommerce.cngsbpv.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce")
db = client.job_portal
candidates_collection = db.candidates

@candidate_bp.route('/candidates', methods=['GET'])
def get_all_candidates():
    candidates = candidates_collection.find()
    return jsonify([candidate_serializer(candidate) for candidate in candidates]), 200

@candidate_bp.route('/candidates/<id>', methods=['GET'])
def get_candidate(id):
    candidate = candidates_collection.find_one({"_id": ObjectId(id)})
    if candidate:
        return jsonify(candidate_serializer(candidate)), 200
    return jsonify({"error": "Candidate not found"}), 404

@candidate_bp.route('/candidates', methods=['POST'])
def add_candidate():
    data = request.get_json()
    new_candidate = {
        "name": data["name"],
        "role": data["role"],
        "location": data["location"],
        "experience": data["experience"],
        "skills": data["skills"],
        "salary": data["salary"],
        "availability": data["availability"],
        "rating": data["rating"],
        "image": data.get("image", "")
    }
    result = candidates_collection.insert_one(new_candidate)
    return jsonify({"id": str(result.inserted_id)}), 201



