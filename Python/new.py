# creating new project
list = []

# logic to find the number of elements in the list
list = [1, 2, 3, 4, 5]

# deleting item from the list
del list[2]

print(list)

# looping through the last element in the list
# once the last element is reached, delete it
# and print the list
for i in list:
  if i == list[-1]:
    del list[-1]
    print(list)
  else:
    print(i)
    
# print the list
