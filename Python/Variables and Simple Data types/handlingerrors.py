# handling errors
""" try: 
  print(5/0)
except ZeroDivisionError:
  print("You can't divide by zero!")
 """
 
 # Program to handle errors
""" print("Give me two numbers, and I'll divide them.")
print("Enter 'q' to quit.")

while True: 
  first_number = input("\nFirst number: ")
  if first_number == 'q':
    break
  second_number = input("Second number: ")
  if second_number == 'q':
    break
  try:
    answer = int(first_number) / int(second_number)
  except ZeroDivisionError:
    print("You can't divide by 0!")
  else:
    print(answer) """
    
# reading a file with handling errors


# this is without handling error
""" with open(file, encoding='utf-8') as f_obj:
  contents = f_obj.read()
 """

# codecs module is used to handle errors
# this is with handling error
import codecs

file = 'alice.txt'
try:
    with codecs.open(file, 'r', encoding='utf-8') as f:
        contents = f.read()
except IOError:
    print("Sorry, the file '{}' does not exist or could not be opened.".format(file))
except Exception as e:
    print("An error occurred:", e)
