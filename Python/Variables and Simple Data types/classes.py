# learning about classes 03/18/2024
class Dog:
  
  def _init_(self, name, age):
    self.name = name
    self.age = age
    
  def sit(self):
    print("{} is now sitting.".format(self.name))