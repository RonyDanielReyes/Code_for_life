import json

# Prompt the user for their name
username = input("What is your name? ")

# Define a dictionary to store the username
data = {"username": username}

# Define the filename
filename = 'username.json'

# Write the dictionary to a JSON file
with open(filename, 'w') as f:
    json.dump(data, f)

# Print a personalized message for the user
print("Thank you, {} We'll remember your name.".format(username))

## no able to finish it 03-18-2024