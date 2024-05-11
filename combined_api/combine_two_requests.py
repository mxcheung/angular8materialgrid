import requests

# Example API endpoints
api1_url = "https://api1.example.com/clients"
api2_url = "https://api2.example.com/clients"

# Make HTTP requests to fetch client lists from both APIs
response_api1 = requests.get(api1_url)
response_api2 = requests.get(api2_url)

# Check if requests were successful
if response_api1.status_code == 200 and response_api2.status_code == 200:
    # Extract client lists from responses
    clients_api1 = response_api1.json()['clients']
    clients_api2 = response_api2.json()['clients']

    # Combine client lists (assuming 'id' is the unique identifier)
    combined_clients = {}

    for client in clients_api1:
        combined_clients[client['id']] = client

    for client in clients_api2:
        combined_clients[client['id']] = client

    # Now, combined_clients dictionary contains the merged list of clients from both APIs
else:
    print("Failed to fetch data from one or both APIs.")
