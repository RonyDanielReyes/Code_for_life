## working with dictionaries
""" alien_0 = {'color': 'green', 'points': 5}
print(alien_0['points']) """

## starting with an empty dictionary
alien_1 = {}

alien_1['color'] = 'green'
alien_1['points'] = 5
alien_1['x_position'] = 0
alien_1['y_position'] = 25
alien_1['speed'] = 'medium'
print(alien_1)

# modifying values in a dictionary
alien_1['color'] = 'yellow'
print(alien_1)

# removing key-value pairs
del alien_1['y_position']
print(alien_1)

# using get() to access values
if alien_1['speed'] == 'slow':
    x_increment = 1
elif alien_1['speed'] == 'medium':
    x_increment = 2
else:
    x_increment = 3
    
alien_1['x_position'] = alien_1['x_position'] + x_increment
print(alien_1)