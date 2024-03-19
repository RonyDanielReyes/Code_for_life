# learning about classes 03/18/2024

# creating a class
class Dog:
  
# a simple attempt to model a dog
  def __init__(self, name, age):
    
    # initialize name and age attributes
    self.name = name
    self.age = age
  
  # creating a method
  def sit(self):
    
    # simulate a dog sitting in response to a command
    print("{} is now sitting.".format(self.name))
    
  # creating a method
  def roll_over(self):
    # simulate a dog rolling over in response to a command
    print("{} rolled over!".format(self.name))
    
# creating an instance
my_dog = Dog('willie', 6)
# accessing attributes
my_dog.sit()
# accessing attributes
my_dog.roll_over()