let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  spaceship.color = 'glorious gold'; // mutate new object properties
  spaceship.numEngines = 5;  // add new object properties
  delete spaceship["Secret Mission"]; // delete object properties

  