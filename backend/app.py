from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Harda20p!@localhost/SpreadsheetModule'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'Users'

    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/get_users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'ID': user.ID, 'email': user.email, 'password': user.password} for user in users]
    return jsonify(user_list)

if __name__ == '__main__':
    app.run(debug=True)
