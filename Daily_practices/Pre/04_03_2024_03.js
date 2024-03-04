// creationg of objects and working with objects
const film = {
  name: 'Harry Potter',
  director: 'Rony Reyes',
  series: "Indiana Jones",
};
console.log(film.director); // Rony Reyes
const somekey = 'director';
console.log(film[somekey]); // Rony Reyes

// adding a new key-value pair to the object
film.year = 2001;

console.log(film);