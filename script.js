'use strict'

// tablica
var movies = [{
        id: 1, // dodanie key, aby moc odswiezac zmiany poszczegolnych el, a nie wszystkich
        title: 'Harry potter',
        desc: ' data wydania w kinach : 24 listopada 2010 r.',
        image: 'https://cdn.radiofrance.fr/s3/cruiser-production/2018/10/05e2cf52-d708-473e-a666-c4d85c005eaf/801x410_image_content_24195956_20180919155929.jpg'

    },
    {
        id: 2,
        title: 'X-men',
        desc: 'premiera miala miejsce : 12 lipca 2000 roku.',
        image: 'http://www.francesoir.fr/sites/francesoir/files/x-men-6-_wolverine-hugh-jackman-francesoir_field_image_diaporama.jpg'
    },
    {
        id: 3,
        title: 'Avengers',
        desc: 'Data premiery : 24 kwietnia 2019',
        image: 'https://www.journaldugeek.com/content/uploads/2018/06/disney-avengers-4-nie-bedzie-koncem-avengerow-z-mcu-spoiler.jpg'
    },
    {
        id: 4,
        title: 'Bekarty wojny',
        desc: 'Film o zydowskiej zemscie na nazistow, data premiery odbyla sie w 2009r.',
        image: 'http://mid.images.nitro.to/nitro.to_bekarty_wojny_inglourious_basterds_2009_720p_brrip_xvid_ac3-ltn_lektor_pl_karibu.mid_3766__2210368.jpeg'
    }
];

// metoda .map przyjmuje parametr jako funkcje, przez ktora przechodza wszystkie el. z tablicy,
// ktory jest mapowany do react.createEl.
var moviesElements = movies.map(function (movie) {
    // return - zwraca cos dla funkcji z arg. movie
    return React.createElement('li', {
            key: movie.id
        }, // dodanie key rowniez do listy filmow
        React.createElement('h4', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.image
        },)
        );
});
// umieszczenie elementow w liscie
var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Top filmow'),
    React.createElement('h3', {}, 'Ranking filmowy'),
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