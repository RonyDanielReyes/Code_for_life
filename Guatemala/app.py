from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

# Define route to get total population data
@app.route('/api/total_population', methods=['GET'])
def get_total_population():
    connection = sqlite3.connect('guatemala_population.db')
    cursor = connection.cursor()

    query = "SELECT * FROM total_population"
    cursor.execute(query)
    data = cursor.fetchall()

    connection.close()

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
