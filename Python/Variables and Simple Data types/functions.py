# Adding a new function
def describe_pet(animal_type, pet_name):
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

describe_pet('hamster', 'harry')


# Adding a new function
def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print("\nI have a {}.".format(animal_type))
    print("My {}'s name is {}.".format(animal_type, pet_name.title()))

describe_pet('hamster', 'harry')
