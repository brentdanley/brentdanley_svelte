import csv
import json

# Initialize an empty list to hold the flight data
logbook_data = []

# Read CSV and populate the list
with open('pilot_logbook.csv', 'r') as f:
    csv_reader = csv.DictReader(f)
    for row in csv_reader:
        logbook_data.append({
            'date': row['Date'],
            'aircraft_registration': row['AircraftID'],
            'departure_airport': row['DepartureAirport'],
            'arrival_airport': row['DestinationAirport'],
            'flight_hours': float(row['TotalTime'])
        })

# Write the data to a JSON file
with open('pilot_logbook.json', 'w') as f:
    json.dump(logbook_data, f, indent=4)

print("Successfully converted CSV to JSON!")
