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
  for line in lines:
    # remove the space at the end
    print(line.rstrip())