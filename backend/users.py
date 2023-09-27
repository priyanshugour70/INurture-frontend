def fetch_users(connection):
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM users")
    users = []
    for row in cursor.fetchall():
        user = {
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "password": row[3]
        }
        users.append(user)
    return users
