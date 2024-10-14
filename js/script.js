"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    const filmsWatched = prompt("Один из последних просмотренных фильмов?");
    const gradeFilm = prompt("Оцените этот фильм?");
    personalMovieDB.movie[filmsWatched] = gradeFilm;
};

console.log(personalMovieDB);