"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat != true) {
        alert("Privat: False!")
        console.log(personalMovieDB)
    } else {
        function start() {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

            while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
            }
        };
        start();

        function writeYourGenres() {
            for (let i = 0; i < 3; i++) {
                const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
                personalMovieDB.genres[i + 1] = genre;
            };
        };

        writeYourGenres();

        function detectPersonalLevel() {
            if (numberOfFilms < 10) {
                console.log("Просмотрено довольно мало фильмов!");
            } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
                console.log("Вы класический зритель!");
            } else if (numberOfFilms >= 30) {
                console.log("Вы киноман!");
            } else {
                console.log("Произошла ошибка!")
            };
        };

        detectPersonalLevel();

        function rememberMyFilms() {
            for (let i = 0; i < 2; i++) {
                const filmsWatched = prompt("Один из последних просмотренных фильмов?");
                const gradeFilm = prompt("Оцените этот фильм?");

                if (filmsWatched != null && gradeFilm != null && filmsWatched != "" && gradeFilm != "" && filmsWatched.length < 50) {
                    personalMovieDB.movie[filmsWatched] = gradeFilm;
                    console.log("done!")
                } else {
                    console.log("error!");
                    i--;
                };
            };
        };

        rememberMyFilms();

        console.log(personalMovieDB);
    };
};

showMyDB();