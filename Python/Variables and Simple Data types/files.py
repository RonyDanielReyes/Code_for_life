# 03-21-2024

# python has to modify the file in order to read it

file = 'file.txt'

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
with open(file) as file_object:
  
  # readline reaads each line and stores it in a list
  lines = file_object.readlines()
  
  # print the list

# creating a string from a file    
pi_strong = ''

for line in lines:
  pi_strong += line.strip()
  
print("{}...".format(pi_strong[:52]))

print(len(pi_strong))


birthday = input("Enter your birthday in the form mmddyy: ")
if birthday in pi_strong:
  print("Your birthday appears in the first 52 digits of pi")
else:
  print("Your birthday does not appear in the first 52 digits of pi")
  
  