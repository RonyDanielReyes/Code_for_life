# learning about classes 03/18/2024
class Dog:
  
  def __init__(self, name, age):
    self.name = name
    self.age = age
    
  def sit(self):
    print("{} is now sitting.".format(self.name))
    
  def roll_over(self):
    print("{} rolled over!".format(self.name))
    
my_dog = Dog('willie', 6)
my_dog.sit()
my_dog.roll_over()