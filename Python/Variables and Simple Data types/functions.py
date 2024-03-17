# working with functions
def get_formated(first_name, last_name):
  """Return a full name, neatly formatted."""
  full_name = f"{first_name} {last_name}"
  return full_name.title()


musician = get_formated('jimi', 'hendrix')
print(musician)

## 