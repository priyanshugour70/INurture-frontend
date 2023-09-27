from flask import Flask, jsonify
from flask_cors import CORS
from db import create_db_connection
from users import fetch_users
from config import DATABASE_CONFIG

app = Flask(__name__)
CORS(app)

# Create a database connection
db = create_db_connection(DATABASE_CONFIG)

@app.route("/hello")
def hello():
    return "Hello, World!"

@app.route("/users")
def get_users():
    # Fetch users from the database using the fetch_users function
    users = fetch_users(db)
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
