# 03-21-2024

# python has to modify the file in order to read it

file = 'file.txt'

# open the file in the same directory
with open(file) as file_object:
  # read the file
    contents = file_object.read()
    # print the file
    # print(contents)
    # to remove the space at the end
    print(contents.rstrip())