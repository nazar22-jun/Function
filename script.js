'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How much you watch?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much you watch?");
    }
}
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("One of the watching films?"),
            b = prompt("Your rating");

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log('error');
            i--;
        }
    }
}
remeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Watched little movies");

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are typical viever");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are movie baff");
    } else {
        console.log("Error");
    }
}
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    let janrMovie;
    for (let i = 1; i <= 3; i++) {
        janrMovie = prompt(`Your favorite janr movie under the number, number${i}`);
        personalMovieDB.genres[i - 1] = janrMovie;
    }
}
writeYourGenres();