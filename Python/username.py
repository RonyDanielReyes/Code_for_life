import json

username = input("What is your name? ")

filename = 'username.json'
with open(filename, 'w') as f:
  json.dumb(username, f)
  print("We'll remember you when you come back, " + username + "!")