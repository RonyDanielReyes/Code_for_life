# testing a function
def get_formatted_name(first, last):
  full_name = first + ' ' + last
  return full_name.title()



print("Enter 'q' at any time to quit. ")
while True:
  first = input('\nPlease give me a first name: ')
  if first == 'q':
    break
  last = input('Please give me a last name: ')
  if last == 'q':
    break
  formatted_name = get_formatted_name(first, last)
  print('\tNeatly formatted name: ' + formatted_name + '.')
  
# creating a new program with the same logic
# Path: test2.py
print("Enter 'q' at any time to quit. ")
while True:
  first = input('\nPlease give me a first name: ')
  if first == 'q':
    break
  last = input('Please give me a last name: ')
  if last == 'q':
    break
  formatted_name = get_formatted_name(first, last)
  print('\tNeatly formatted name: ' + formatted_name + '.')