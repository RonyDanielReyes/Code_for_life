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
file = 'alice.txt'

# this is without handling error
""" with open(file, encoding='utf-8') as f_obj:
  contents = f_obj.read()
 """