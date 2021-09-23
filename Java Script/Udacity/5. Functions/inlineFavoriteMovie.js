// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
    console.log("My Favorite movie is " + movieName);
}

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name){
    messageFunction(name)
}


console.log(movies(favoriteMovie, 'Nimo'));