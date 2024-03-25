# import unitest module
import unittest
from test import get_formatted_name

# create a class that inherits from unittest.TestCase
class NameTestCase(unittest.TestCase):
    # create a method that tests the function
    def test_first_last_name(self):
        # call the function and store the result
        formatted_name = get_formatted_name('jimi', 'hendrix')
        self.assertEqual(formatted_name, 'Jimi Hendrix')
        
if __name__ == '__main__':
    unittest.main()