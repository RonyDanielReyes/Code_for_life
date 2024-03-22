# 03-21-2024

# python has to modify the file in order to read it

#file = 'file.txt'

# open the file in the same directory
""" with open(file) as file_object:
  # read the file
    contents = file_object.read()
    # print the file
    # print(contents)
    # to remove the space at the end
    print(contents.rstrip()) """
    
    # opening each line of the file
""" with open(file) as file_object:
  for line in file_object:
    print(line.rstrip()) """

# making a list tof lines from a file
""" with open(file) as file_object:
  lines = file_object.readlines()
pi_strong = ''

for line in lines:
  pi_strong += line.strip()
  
birthday = input("Enter your birthday in the form mmddyy: ")
if str(birthday) in pi_strong:
  print("Your birthday appears in the first million digits of pi!")
else:
  print("Your birthday does not appears in the first million digits of pi!")
  
   """
# writing to a file
   
file = 'file.txt'

# this code below helps us to write a code
""" with open(file, 'w') as file_object:
  file_object.write("I love programming.\n")
  file_object.write("I love creating new games.\n") """
  
# this code helps us to append in the existing file
with open(file, 'a') as file_object:
  file_object.write("I also love finding meaning in large datasets.\n")
  file_object.write("I love creating apps that can run in a browser.\n")
  