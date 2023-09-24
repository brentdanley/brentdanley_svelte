import sqlite3
import csv

# Connect to SQLite database
conn = sqlite3.connect('pilot_logbook.db')
cursor = conn.cursor()

# Drop table if it exists
cursor.execute('DROP TABLE IF EXISTS logbook;')

# Create table
cursor.execute('''
CREATE TABLE IF NOT EXISTS logbook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    aircraft_registration TEXT,
    departure_airport TEXT,
    arrival_airport TEXT,
    flight_hours REAL
);
''')

# Read CSV and populate the table
with open('pilot_logbook.csv', 'r') as f:
    csv_reader = csv.reader(f)
    next(csv_reader)  # Skip header row
    for row in csv_reader:
        cursor.execute(
            "INSERT INTO logbook (date, aircraft_registration, departure_airport, arrival_airport, flight_hours) VALUES (?, ?, ?, ?, ?)",
            (row[0], row[1], row[2], row[3], row[4])
        )

# Commit changes and close
conn.commit()
conn.close()
