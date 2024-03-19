""" # learning about classes 03/18/2024

# creating a class
class Dog:
  
# a simple attempt to model a dog
  def __init__(self, name, age):

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
  
  def get_name(self):
    print('The dog\'s name is: {}'.format(self.name))
    
# creating an instance
my_dog = Dog('Canelo', 6)
my_dog.get_name()
my_dog.sit()
my_dog.roll_over()

print('\n')
# creating another instance
your_dog = Dog('Lucy', 3)
your_dog.get_name()
your_dog.sit()
your_dog.roll_over()

 """
 
class Car:
  def __init__(self, make, model, year):
      self.make = make
      self.model = model
      self.year = year
      self.odometer_reading = 0
    
  def get_descriptive_name(self):
    long_name = str(self.year) + ' ' + self.make + ' ' + self.model
    return long_name.title()
  
  def read_odometer(self):
      print("This car has {} miles on it.".format(self.odometer_reading))
  
  def update_odometer(self, mileage):
    self.odometer_reading = mileage

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())
my_new_car.update_odometer(23)
my_new_car.read_odometer()

