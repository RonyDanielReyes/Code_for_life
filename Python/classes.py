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
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles

class Battery:
    def __init__(self, battery_size=75):
        self.battery_size = battery_size

    def describe_battery(self):
        print("This car has a {}-kWh battery.".format(self.battery_size))
        
    def get_range(self):
        if self.battery_size == 75:
            range = 260
        elif self.battery_size == 100:
            range = 315
        print("This car can go about {} miles on a full charge.".format(range))

class ElectricCar(Car):
    def __init__(self, make, model, year):
        Car.__init__(self, make, model, year)
        self.battery = Battery()
        
    def describe_battery(self):
        print("This car has a 75-kWh battery.")
        
    def fill_gas_tank(self):
        print("This car doesn't need a gas tank!")


my_tesla = ElectricCar('tesla', 'models', 2019)
print(my_tesla.get_descriptive_name())
my_tesla.battery.describe_battery()
my_tesla.battery.get_range()


