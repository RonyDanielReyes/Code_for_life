# Adding a new function
""" def describe_pet(animal_type, pet_name):
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

describe_pet('hamster', 'harry')

 """
# Adding a new function

""" def describe_pet(animal_type, pet_name):
    print("\nI have a {}.".format(animal_type))
    print("My {}'s name is {}.".format(animal_type, pet_name.title()))

describe_pet('hamster', 'harry') """

# creating two functions can work together

def print_modesls(unprinted_designs, completed_models):
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        print("Printing model:{}.".format())
        completed_models.append(current_design)

def show_completed_models(completed_models):
    print("\nThe following models have been printed:")
    for completed_model in completed_models:
        print(completed_model)
      
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []

print_modesls(unprinted_designs, completed_models)
show_completed_models(completed_models)