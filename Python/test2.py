# import unitest module
import unittest
from test import get_formatted_name

# create a class that inherits from unittest.TestCase
class NameTestCase(unittest.TestCase):
    def test_first_last_name(self):
        formatted_name = get_formatted_name('jimi', 'hendrix')
        self.assertEqual(formatted_name, 'Jimi Hendrix')
        
if __name__ == '__main__':
    unittest.main()