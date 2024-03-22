# reading the json file we have alraday created
import json

filename = 'numbers.json'

with open(filename) as f:
    numbers = json.load(f)
    print("Welcome back {}".format(numbers))

