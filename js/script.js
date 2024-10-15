"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

if(numberOfFilms < 10) {
    console.log("Просмотрено довольно мало фильмов!");
} else if(numberOfFilms >= 10 && numberOfFilms < 30){
    console.log("Вы класический зритель!");
} else if(numberOfFilms >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка!")
};

for(let i = 0; i < 2; i++){
    const filmsWatched = prompt("Один из последних просмотренных фильмов?");
    const gradeFilm = prompt("Оцените этот фильм?");

    if(filmsWatched != null && gradeFilm != null && filmsWatched != "" && gradeFilm != "" && filmsWatched.length < 50) {
        personalMovieDB.movie[filmsWatched] = gradeFilm;
        console.log("done!")
    } else {
        console.log("error!");
        i--;
    };
};

console.log(personalMovieDB);