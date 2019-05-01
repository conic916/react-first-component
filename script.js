'use strict'
import React from 'react';
import potter from '../images/potter.jpg';
import lion from '../images/lion.jpg';
import avengers from '../images/avengers.jpg';
import wojna from '../images/wojna.jpg';

// tablica
var movies = [{
        id: 1, // dodanie key, aby moc odswiezac zmiany poszczegolnych el, a nie wszystkich
        title: 'Harry potter',
        desc: 'film o czarodzieju',
        image: {potter},
    },
    {
        id: 2,
        title: 'Krol lew',
        desc: 'film o krolu sawanny',
        image: {lion},
    },
    {
        id: 3,
        title: 'Avengers',
        desc: 'film o superbohaterach',
        image: {avengers},
    },
    {
        id: 4,
        title: 'Bekarty wojny',
        desc: 'film o zydowskiej zemscie na nazistow',
        image: {wojna},
    }
];

// metoda .map przyjmuje parametr jako funkcje, przez ktora przechodza wszystkie el. z tablicy,
// ktory jest mapowany do react.createEl.
var moviesElements = movies.map(function (movie) {
    // return - zwraca cos dla funkcji z arg. movie
    return React.createElement('li', {
            key: movie.id
        }, // dodanie key rowniez do listy filmow
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {}, movie.image),
    );
});
// umieszczenie elementow w liscie
var element = React.createElement('div', {},
    React.createElement('h1', {}, 'lista filmow'),
    React.createElement('ul', {}, moviesElements)
);

// renderowanie w drzewie DOM jesli element jest gotowy
//parametry renderowania : element reactu ktory tworzymy, i element dom do ktorego przypinamy dany element, czyli ID = app.
ReactDOM.render(element, document.getElementById('app'));









// metoda createElement = tworzymy obiekt
//tworzymy element dzieki klasie div, propsy {}= wlasciwosci danego el, dziecko el = to co ma byc wewnatrz '',
// var element = React.createElement('div', {}, 'Hello world!');
// var element =
//     React.createElement('div', {},
//         React.createElement('h1', {}, 'Lista filmow'),
//         React.createElement('ul', {},
//             React.createElement('li', {},
//                 React.createElement('h2', {}, 'Harry Potter'),
//                 React.createElement('p', {}, 'film o czarodzieju')
//             ),
//             React.createElement('li', {},
//                 React.createElement('h2', {}, 'Król Lew'),
//                 React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//             ),
//         )
//     );