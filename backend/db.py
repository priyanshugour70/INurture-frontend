from pymysql import connect

def create_db_connection(config):
    return connect(
        user=config['user'],
        password=config['password'],
        host=config['host'],
        database=config['database']
    )
