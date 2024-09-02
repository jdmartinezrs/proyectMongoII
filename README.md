**MOVIES**

*Movies in theaters*

**Method** : `GET`

**URL** : http://localhost:5069/movies/in-theaters

## Success Responses

```js
[
  {
    "_id": "64dedf4e9b5f1f7b0f8a2c3d",
    "name": "Killers Of The Flower Moon",
    "genre": "Crime Drama",
    "movie_image": "https://mycima.lol/wp-content/uploads/2023/11/MV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@-scaled.jpg"
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8a2c3e",
    "name": "Pulp Fiction",
    "genre": "crime",
    "movie_image": "https://image.tmdb.org/t/p/original/pbWgQPC6l9pkpEpi3WNRSfWYNP6.jpg"
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8a2c3f",
    "name": "The Godfather",
    "genre": "crime",
    "movie_image": "https://i.etsystatic.com/27928788/r/il/4aaa89/3000980481/il_1140xN.3000980481_5txr.jpg"
  }
]
```

![image-20240902100128550](/home/camper/.config/Typora/typora-user-images/image-20240902100128550.png)





*Movies Coming Soon*

**Method** : `GET`

**URL** :http://localhost:5069/movies/coming-soon

## Success Responses

```js
[
  {
    "name": "Dune Part Two",
    "genre": "science fiction",
    "movie_image": "https://deadline.com/wp-content/uploads/2024/02/Dune-Part-Two-Dolby-Poster.jpg?w=1280",
    "year": 2024
  },
  {
    "name": "Avatar: The Way of Water",
    "genre": "science fiction",
    "movie_image": "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_avatar_thewayofwater_poster_rebra_fa08636d.jpeg",
    "year": 2024
  },
  {
    "name": "Alien 7",
    "genre": "action",
    "movie_image": "https://i.blogs.es/6b4c06/alien-romulus-poster-japones/1366_2000.jpeg",
    "year": 2024
  }
]
```

![image-20240902100636561](/home/camper/.config/Typora/typora-user-images/image-20240902100636561.png)





*Movies Coming Soon*

**Method** : `GET`

**URL** :http://localhost:5069/movies/64dedf4e9b5f1f7b0f8a2c3d

"http://localhost:5069/movies/${*movieId*}" 

## Success Responses



```js
{
  "_id": "64dedf4e9b5f1f7b0f8a2c3d",
  "name": "Killers Of The Flower Moon",
  "genre": "Crime Drama",
  "synopsis": "Miembros de la tribu Osage del noreste de Oklahoma son asesinados en circunstancias misteriosas en la década de 1920, lo que desencadena una importante investigación del FBI dirigida por un J. Edgar Hoover de 29 años y el exranger de Texas Tom White",
  "trailer": "https://www.youtube.com/watch?v=7cx9nCHsemc",
  "movie_image": "https://mycima.lol/wp-content/uploads/2023/11/MV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@-scaled.jpg",
  "cast": [
    {
      "name": "Leonardo DiCaprio",
      "character": "Ernest Burkhart",
      "actor_image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Leonardo_DiCaprio_in_2023_%28cropped%29.png"
    },
    {
      "name": "Robert De Niro",
      "character": "William Hale",
      "actor_image": "https://upload.wikimedia.org/wikipedia/commons/5/58/Robert_De_Niro_Cannes_2016.jpg"
    },
    {
      "name": "Elliot Page",
      "character": "Ariadne",
      "actor_image": "https://www.thepinknews.com/wp-content/uploads/2023/06/Elliot-Page-opens-up-about-shingles-on-Inception-set.-Getty.jpg"
    },
    {
      "name": "Tom Hardy",
      "character": "Eames",
      "actor_image": "https://image.tmdb.org/t/p/w500/yVGF9FvDxTDPhGimTbZNfghpllA.jpg"
    }
  ]
}
```



![image-20240902101626299](/home/camper/.config/Typora/typora-user-images/image-20240902101626299.png)


**seats**

*get Movie Show By Day*

**Method** : `GET`

**URL** :http://localhost:5069/seats/:movieId/:dayOfWeek

**Example:** http://localhost:5069/seats/64dedf4e9b5f1f7b0f8a2c3d/Sunday

```js
[
  {
    "_id": "64dedf4e9b5f1f7b0f8a3025",
    "date": "01",
    "day": "Sunday",
    "price": 4.75,
    "type": "2D",
    "time": "11:30",
    "seats": [
      {
        "seat": "G1",
        "status": "available"
      },
      {
        "seat": "G2",
        "status": "available"
      },
      {
        "seat": "G3",
        "status": "available"
      },
      {
        "seat": "G4",
        "status": "available"
      },
      {
        "seat": "G5",
        "status": "available"
      },
      {
        "seat": "H1",
        "status": "available"
      },
      {
        "seat": "H2",
        "status": "available"
      },
      {
        "seat": "H3",
        "status": "available"
      },
      {
        "seat": "H4",
        "status": "available"
      },
      {
        "seat": "H5",
        "status": "available"
      },
      {
        "seat": "H6",
        "status": "available"
      },
      {
        "seat": "H7",
        "status": "available"
      },
      {
        "seat": "I1",
        "status": "available"
      },
      {
        "seat": "I2",
        "status": "available"
      },
      {
        "seat": "I3",
        "status": "available"
      },
      {
        "seat": "I4",
        "status": "available"
      },
      {
        "seat": "I5",
        "status": "available"
      },
      {
        "seat": "I6",
        "status": "available"
      },
      {
        "seat": "I7",
        "status": "available"
      },
      {
        "seat": "I8",
        "status": "available"
      },
      {
        "seat": "I9",
        "status": "available"
      },
      {
        "seat": "J1",
        "status": "available"
      },
      {
        "seat": "J2",
        "status": "available"
      },
      {
        "seat": "J3",
        "status": "available"
      },
      {
        "seat": "J4",
        "status": "available"
      },
      {
        "seat": "J5",
        "status": "available"
      },
      {
        "seat": "J6",
        "status": "available"
      },
      {
        "seat": "J7",
        "status": "available"
      },
      {
        "seat": "J8",
        "status": "available"
      },
      {
        "seat": "J9",
        "status": "available"
      },
      {
        "seat": "K1",
        "status": "available"
      },
      {
        "seat": "K2",
        "status": "available"
      },
      {
        "seat": "K3",
        "status": "available"
      },
      {
        "seat": "K4",
        "status": "available"
      },
      {
        "seat": "K5",
        "status": "available"
      },
      {
        "seat": "K6",
        "status": "available"
      },
      {
        "seat": "K7",
        "status": "available"
      },
      {
        "seat": "K8",
        "status": "available"
      },
      {
        "seat": "K9",
        "status": "available"
      },
      {
        "seat": "L1",
        "status": "available"
      },
      {
        "seat": "L2",
        "status": "available"
      },
      {
        "seat": "L3",
        "status": "available"
      },
      {
        "seat": "L4",
        "status": "available"
      },
      {
        "seat": "L5",
        "status": "available"
      },
      {
        "seat": "L6",
        "status": "available"
      },
      {
        "seat": "L7",
        "status": "available"
      },
      {
        "seat": "L8",
        "status": "available"
      },
      {
        "seat": "L9",
        "status": "reserved"
      }
    ]
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8ae002",
    "date": "01",
    "day": "Sunday",
    "price": 4.75,
    "type": "2D",
    "time": "13:00",
    "seats": [
      {
        "seat": "M1",
        "status": "available"
      },
      {
        "seat": "M2",
        "status": "available"
      },
      {
        "seat": "M3",
        "status": "available"
      },
      {
        "seat": "M4",
        "status": "available"
      },
      {
        "seat": "M5",
        "status": "available"
      },
      {
        "seat": "N1",
        "status": "available"
      },
      {
        "seat": "N2",
        "status": "available"
      },
      {
        "seat": "N3",
        "status": "available"
      },
      {
        "seat": "N4",
        "status": "available"
      },
      {
        "seat": "N5",
        "status": "available"
      },
      {
        "seat": "N6",
        "status": "available"
      },
      {
        "seat": "N7",
        "status": "available"
      },
      {
        "seat": "O1",
        "status": "available"
      },
      {
        "seat": "O2",
        "status": "available"
      },
      {
        "seat": "O3",
        "status": "available"
      },
      {
        "seat": "O4",
        "status": "available"
      },
      {
        "seat": "O5",
        "status": "available"
      },
      {
        "seat": "O6",
        "status": "available"
      },
      {
        "seat": "O7",
        "status": "available"
      },
      {
        "seat": "O8",
        "status": "available"
      },
      {
        "seat": "O9",
        "status": "available"
      },
      {
        "seat": "P1",
        "status": "available"
      },
      {
        "seat": "P2",
        "status": "available"
      },
      {
        "seat": "P3",
        "status": "available"
      },
      {
        "seat": "P4",
        "status": "available"
      },
      {
        "seat": "P5",
        "status": "available"
      },
      {
        "seat": "P6",
        "status": "available"
      },
      {
        "seat": "P7",
        "status": "available"
      },
      {
        "seat": "P8",
        "status": "available"
      },
      {
        "seat": "P9",
        "status": "available"
      },
      {
        "seat": "Q1",
        "status": "available"
      },
      {
        "seat": "Q2",
        "status": "available"
      },
      {
        "seat": "Q3",
        "status": "available"
      },
      {
        "seat": "Q4",
        "status": "available"
      },
      {
        "seat": "Q5",
        "status": "available"
      },
      {
        "seat": "Q6",
        "status": "available"
      },
      {
        "seat": "Q7",
        "status": "available"
      },
      {
        "seat": "Q8",
        "status": "available"
      },
      {
        "seat": "Q9",
        "status": "available"
      },
      {
        "seat": "R1",
        "status": "available"
      },
      {
        "seat": "R2",
        "status": "available"
      },
      {
        "seat": "R3",
        "status": "available"
      },
      {
        "seat": "R4",
        "status": "available"
      },
      {
        "seat": "R5",
        "status": "available"
      },
      {
        "seat": "R6",
        "status": "available"
      },
      {
        "seat": "R7",
        "status": "available"
      },
      {
        "seat": "R8",
        "status": "available"
      },
      {
        "seat": "R9",
        "status": "available"
      }
    ]
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8a2cba",
    "date": "01",
    "day": "Sunday",
    "price": 7.85,
    "type": "3D",
    "time": "15:45",
    "seats": [
      {
        "seat": "A1",
        "status": "available"
      },
      {
        "seat": "A2",
        "status": "available"
      },
      {
        "seat": "A3",
        "status": "available"
      },
      {
        "seat": "A4",
        "status": "available"
      },
      {
        "seat": "A5",
        "status": "available"
      },
      {
        "seat": "B1",
        "status": "available"
      },
      {
        "seat": "B2",
        "status": "available"
      },
      {
        "seat": "B3",
        "status": "available"
      },
      {
        "seat": "B4",
        "status": "available"
      },
      {
        "seat": "B5",
        "status": "available"
      },
      {
        "seat": "B6",
        "status": "available"
      },
      {
        "seat": "B7",
        "status": "available"
      },
      {
        "seat": "C1",
        "status": "available"
      },
      {
        "seat": "C2",
        "status": "available"
      },
      {
        "seat": "C3",
        "status": "available"
      },
      {
        "seat": "C4",
        "status": "available"
      },
      {
        "seat": "C5",
        "status": "available"
      },
      {
        "seat": "C6",
        "status": "available"
      },
      {
        "seat": "C7",
        "status": "available"
      },
      {
        "seat": "C8",
        "status": "available"
      },
      {
        "seat": "C9",
        "status": "available"
      },
      {
        "seat": "D1",
        "status": "available"
      },
      {
        "seat": "D2",
        "status": "available"
      },
      {
        "seat": "D3",
        "status": "available"
      },
      {
        "seat": "D4",
        "status": "available"
      },
      {
        "seat": "D5",
        "status": "available"
      },
      {
        "seat": "D6",
        "status": "available"
      },
      {
        "seat": "D7",
        "status": "available"
      },
      {
        "seat": "D8",
        "status": "available"
      },
      {
        "seat": "D9",
        "status": "available"
      },
      {
        "seat": "E1",
        "status": "available"
      },
      {
        "seat": "E2",
        "status": "available"
      },
      {
        "seat": "E3",
        "status": "available"
      },
      {
        "seat": "E4",
        "status": "available"
      },
      {
        "seat": "E5",
        "status": "available"
      },
      {
        "seat": "E6",
        "status": "available"
      },
      {
        "seat": "E7",
        "status": "available"
      },
      {
        "seat": "E8",
        "status": "available"
      },
      {
        "seat": "E9",
        "status": "available"
      },
      {
        "seat": "F1",
        "status": "available"
      },
      {
        "seat": "F2",
        "status": "available"
      },
      {
        "seat": "F3",
        "status": "available"
      },
      {
        "seat": "F4",
        "status": "available"
      },
      {
        "seat": "F5",
        "status": "available"
      },
      {
        "seat": "F6",
        "status": "available"
      },
      {
        "seat": "F7",
        "status": "available"
      },
      {
        "seat": "F8",
        "status": "available"
      },
      {
        "seat": "F9",
        "status": "available"
      }
    ]
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8a3028",
    "date": "01",
    "day": "Sunday",
    "price": 5.75,
    "type": "2D",
    "time": "18:50",
    "seats": [
      {
        "seat": "G1",
        "status": "available"
      },
      {
        "seat": "G2",
        "status": "available"
      },
      {
        "seat": "G3",
        "status": "available"
      },
      {
        "seat": "G4",
        "status": "available"
      },
      {
        "seat": "G5",
        "status": "available"
      },
      {
        "seat": "H1",
        "status": "available"
      },
      {
        "seat": "H2",
        "status": "available"
      },
      {
        "seat": "H3",
        "status": "available"
      },
      {
        "seat": "H4",
        "status": "available"
      },
      {
        "seat": "H5",
        "status": "available"
      },
      {
        "seat": "H6",
        "status": "available"
      },
      {
        "seat": "H7",
        "status": "available"
      },
      {
        "seat": "I1",
        "status": "available"
      },
      {
        "seat": "I2",
        "status": "available"
      },
      {
        "seat": "I3",
        "status": "available"
      },
      {
        "seat": "I4",
        "status": "available"
      },
      {
        "seat": "I5",
        "status": "available"
      },
      {
        "seat": "I6",
        "status": "available"
      },
      {
        "seat": "I7",
        "status": "available"
      },
      {
        "seat": "I8",
        "status": "available"
      },
      {
        "seat": "I9",
        "status": "available"
      },
      {
        "seat": "J1",
        "status": "available"
      },
      {
        "seat": "J2",
        "status": "available"
      },
      {
        "seat": "J3",
        "status": "available"
      },
      {
        "seat": "J4",
        "status": "available"
      },
      {
        "seat": "J5",
        "status": "available"
      },
      {
        "seat": "J6",
        "status": "available"
      },
      {
        "seat": "J7",
        "status": "available"
      },
      {
        "seat": "J8",
        "status": "available"
      },
      {
        "seat": "J9",
        "status": "available"
      },
      {
        "seat": "K1",
        "status": "available"
      },
      {
        "seat": "K2",
        "status": "available"
      },
      {
        "seat": "K3",
        "status": "available"
      },
      {
        "seat": "K4",
        "status": "available"
      },
      {
        "seat": "K5",
        "status": "available"
      },
      {
        "seat": "K6",
        "status": "available"
      },
      {
        "seat": "K7",
        "status": "available"
      },
      {
        "seat": "K8",
        "status": "available"
      },
      {
        "seat": "K9",
        "status": "available"
      },
      {
        "seat": "L1",
        "status": "available"
      },
      {
        "seat": "L2",
        "status": "available"
      },
      {
        "seat": "L3",
        "status": "available"
      },
      {
        "seat": "L4",
        "status": "available"
      },
      {
        "seat": "L5",
        "status": "available"
      },
      {
        "seat": "L6",
        "status": "available"
      },
      {
        "seat": "L7",
        "status": "available"
      },
      {
        "seat": "L8",
        "status": "available"
      },
      {
        "seat": "L9",
        "status": "available"
      }
    ]
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8ae005",
    "date": "01",
    "day": "Sunday",
    "price": 6.11,
    "type": "2D",
    "time": "20:30",
    "seats": [
      {
        "seat": "M1",
        "status": "available"
      },
      {
        "seat": "M2",
        "status": "available"
      },
      {
        "seat": "M3",
        "status": "available"
      },
      {
        "seat": "M4",
        "status": "available"
      },
      {
        "seat": "M5",
        "status": "available"
      },
      {
        "seat": "N1",
        "status": "available"
      },
      {
        "seat": "N2",
        "status": "available"
      },
      {
        "seat": "N3",
        "status": "available"
      },
      {
        "seat": "N4",
        "status": "available"
      },
      {
        "seat": "N5",
        "status": "available"
      },
      {
        "seat": "N6",
        "status": "available"
      },
      {
        "seat": "N7",
        "status": "available"
      },
      {
        "seat": "O1",
        "status": "available"
      },
      {
        "seat": "O2",
        "status": "available"
      },
      {
        "seat": "O3",
        "status": "available"
      },
      {
        "seat": "O4",
        "status": "available"
      },
      {
        "seat": "O5",
        "status": "available"
      },
      {
        "seat": "O6",
        "status": "available"
      },
      {
        "seat": "O7",
        "status": "available"
      },
      {
        "seat": "O8",
        "status": "available"
      },
      {
        "seat": "O9",
        "status": "available"
      },
      {
        "seat": "P1",
        "status": "available"
      },
      {
        "seat": "P2",
        "status": "available"
      },
      {
        "seat": "P3",
        "status": "available"
      },
      {
        "seat": "P4",
        "status": "available"
      },
      {
        "seat": "P5",
        "status": "available"
      },
      {
        "seat": "P6",
        "status": "available"
      },
      {
        "seat": "P7",
        "status": "available"
      },
      {
        "seat": "P8",
        "status": "available"
      },
      {
        "seat": "P9",
        "status": "available"
      },
      {
        "seat": "Q1",
        "status": "available"
      },
      {
        "seat": "Q2",
        "status": "available"
      },
      {
        "seat": "Q3",
        "status": "available"
      },
      {
        "seat": "Q4",
        "status": "available"
      },
      {
        "seat": "Q5",
        "status": "available"
      },
      {
        "seat": "Q6",
        "status": "available"
      },
      {
        "seat": "Q7",
        "status": "available"
      },
      {
        "seat": "Q8",
        "status": "available"
      },
      {
        "seat": "Q9",
        "status": "available"
      },
      {
        "seat": "R1",
        "status": "available"
      },
      {
        "seat": "R2",
        "status": "available"
      },
      {
        "seat": "R3",
        "status": "available"
      },
      {
        "seat": "R4",
        "status": "reserved"
      },
      {
        "seat": "R5",
        "status": "available"
      },
      {
        "seat": "R6",
        "status": "available"
      },
      {
        "seat": "R7",
        "status": "available"
      },
      {
        "seat": "R8",
        "status": "available"
      },
      {
        "seat": "R9",
        "status": "available"
      }
    ]
  },
  {
    "_id": "64dedf4e9b5f1f7b0f8a2cbd",
    "date": "01",
    "day": "Sunday",
    "price": 6.32,
    "type": "3D",
    "time": "23:15",
    "seats": [
      {
        "seat": "A1",
        "status": "available"
      },
      {
        "seat": "A2",
        "status": "available"
      },
      {
        "seat": "A3",
        "status": "available"
      },
      {
        "seat": "A4",
        "status": "available"
      },
      {
        "seat": "A5",
        "status": "available"
      },
      {
        "seat": "B1",
        "status": "available"
      },
      {
        "seat": "B2",
        "status": "available"
      },
      {
        "seat": "B3",
        "status": "available"
      },
      {
        "seat": "B4",
        "status": "available"
      },
      {
        "seat": "B5",
        "status": "available"
      },
      {
        "seat": "B6",
        "status": "available"
      },
      {
        "seat": "B7",
        "status": "available"
      },
      {
        "seat": "C1",
        "status": "available"
      },
      {
        "seat": "C2",
        "status": "available"
      },
      {
        "seat": "C3",
        "status": "available"
      },
      {
        "seat": "C4",
        "status": "available"
      },
      {
        "seat": "C5",
        "status": "available"
      },
      {
        "seat": "C6",
        "status": "available"
      },
      {
        "seat": "C7",
        "status": "available"
      },
      {
        "seat": "C8",
        "status": "available"
      },
      {
        "seat": "C9",
        "status": "available"
      },
      {
        "seat": "D1",
        "status": "available"
      },
      {
        "seat": "D2",
        "status": "available"
      },
      {
        "seat": "D3",
        "status": "available"
      },
      {
        "seat": "D4",
        "status": "available"
      },
      {
        "seat": "D5",
        "status": "available"
      },
      {
        "seat": "D6",
        "status": "available"
      },
      {
        "seat": "D7",
        "status": "available"
      },
      {
        "seat": "D8",
        "status": "available"
      },
      {
        "seat": "D9",
        "status": "available"
      },
      {
        "seat": "E1",
        "status": "available"
      },
      {
        "seat": "E2",
        "status": "available"
      },
      {
        "seat": "E3",
        "status": "available"
      },
      {
        "seat": "E4",
        "status": "available"
      },
      {
        "seat": "E5",
        "status": "available"
      },
      {
        "seat": "E6",
        "status": "available"
      },
      {
        "seat": "E7",
        "status": "available"
      },
      {
        "seat": "E8",
        "status": "available"
      },
      {
        "seat": "E9",
        "status": "available"
      },
      {
        "seat": "F1",
        "status": "available"
      },
      {
        "seat": "F2",
        "status": "reserved"
      },
      {
        "seat": "F3",
        "status": "available"
      },
      {
        "seat": "F4",
        "status": "available"
      },
      {
        "seat": "F5",
        "status": "available"
      },
      {
        "seat": "F6",
        "status": "reserved"
      },
      {
        "seat": "F7",
        "status": "available"
      },
      {
        "seat": "F8",
        "status": "available"
      },
      {
        "seat": "F9",
        "status": "reserved"
      }
    ]
  }
]
```

![image-20240902102410853](/home/camper/.config/Typora/typora-user-images/image-20240902102410853.png)

**Method** : `POST`

**URL** : http://localhost:5069/seats/:showId/seatsToReserve

## Success Responses

```js
{
"showId": "64dedf4e9b5f1f7b0f8a2c8a",
"seatsToReserve": "C9"
}
```

```js
{
"acknowledged": true,
"modifiedCount": 1,
"upsertedId": null,
"upsertedCount": 0,
"matchedCount": 1
}
```

![image-20240902102634139](/home/camper/.config/Typora/typora-user-images/image-20240902102634139.png)



**Method** : `DELETE`

**URL** : http://localhost:5069//seats/:showId/seats/:seatId/remove'

## Success Responses

```JS
{
"acknowledged": true,
"modifiedCount": 1,
"upsertedId": null,
"upsertedCount": 0,
"matchedCount": 1
}
```

**TICKETS**

**Method** : `GET`

**URL** : http://localhost:5069/factura?day=Monday&time=11:30&room=Cinema%20A&seats=R5&price=5.53&movieImage=https%3A%2F%2Fmycima.lol%2Fwp-content%2Fuploads%2F2023%2F11%2FMV5BNjQwOGM2YTItMGYwNC00YTM4LWI0Y2QtZjQ2ZDcyMmRjMTFhXkEyXkFqcGdeQXVyMDM2NDM2MQ%40%40-scaled.jpg&movieName=Killers%20Of%20The%20Flower%20Moon

![image-20240902103129943](/home/camper/.config/Typora/typora-user-images/image-20240902103129943.png)



📕 **Título: CineCampus**

------

**Tiempo de ejecución**: 4 Dias

**Nivel de dificultad:** ★★★★☆

### **Problematica**

CineCampus es una empresa de entretenimiento que se especializa en ofrecer una experiencia de cine completa y personalizada. La empresa desea desarrollar una aplicación web que permita a los usuarios seleccionar películas, comprar boletos y asignar asientos de manera eficiente y cómoda. La aplicación también ofrecerá opciones de descuento para usuarios con tarjeta VIP y permitirá realizar compras en línea.

### **Objetivo**

Desarrollar una serie de APIs para la aplicación web de CineCampus utilizando MongoDB como base de datos. Las APIs deberán gestionar la selección de películas, la compra de boletos, la asignación de asientos, y la implementación de descuentos para tarjetas VIP, con soporte para diferentes roles de usuario.

### Requisitos Funcionales

1. Selección de Películas:

   - **API para Listar Películas:** Permitir la consulta de todas las películas disponibles en el catálogo, con detalles como título, género, duración y horarios de proyección.

     ```javascript
     //Aunque el estado que se desea consultar es "En cartelera", no dude en realizar consultas adicionales según sea necesario, usando "Próximamente" o "Retirada de Cartelera"//
     
      let obj = new Pelicula()
      const status = "En cartelera"; 
      const moviesAndFunctions = await obj.getAllMoviesAndFunctionsInfo(status);
      console.table(moviesAndFunctions);


       //common.js 
       
        Pelicula.getInstance()
        .then(peliculaInstance => {
            // Verifica si la instancia es válida
            if (!peliculaInstance) {
                throw new Error('Pelicula instance is not available');
            }

            // Llama al método con el estado deseado
            return peliculaInstance.getAllMoviesAndFunctionsInfo('En cartelera');
        })
        .then(moviesAndFunctions => {
            console.log('Movies and Functions Info:', moviesAndFunctions);
        })
        .catch(error => {
            console.error('Error initializing Pelicula:', error);
        });
     ```

     

   - **API para Obtener Detalles de Película:** Permitir la consulta de información detallada sobre una película específica, incluyendo sinopsis.

   ```javascript
   //Otros titulos son: "La Noche de los Monstruos","El Viaje Intergaláctico"//
   
   let obj = new Pelicula()
   const titulo = "El Gran Escape"; 
   const specificMovie = await obj.getAnEspecificMovieInfo(titulo);
   console.table(specificMovie);

   //common.js
   Pelicula.getInstance()
    .then(peliculaInstance => {
        const titulo = "El Gran Escape"; 
        return peliculaInstance.getAnEspecificMovieInfo(titulo);
    })
    .then(specificMovie => {
        console.table(specificMovie);
        Pelicula.closeConnection(); // Asegúrate de cerrar la conexión
    })
    .catch(error => {
        console.error('Error initializing Pelicula:', error);
        Pelicula.closeConnection(); // Asegúrate de cerrar la conexión en caso de error
    });

   ```

   

2. - Compra de Boletos:

     - **API para Comprar Boletos:** Permitir la compra de boletos para una película específica, incluyendo la selección de la fecha y la hora de la proyección.

     - **API para Verificar Disponibilidad de Asientos:** Permitir la consulta de la disponibilidad de asientos en una sala para una proyección específica.

       ```javascript
       //Filtrará los asientos con el estado "Por Asignar". Inserte el ObjectId de la función, por ejemplo: "64a7e409f7a42a24c8d7e825", "64a7e409f7a42a24c8d7e826" o "64a7e409f7a42a24c8d7e82e".//
       
       let obj = new Asiento() 
       const asientoInstance = new Asiento();
       const idFuncion = "64a7e409f7a42a24c8d7e826";
       asientoInstance.getAllSeatsByFunction(idFuncion).then(seats => {
           console.log("Available seats:", seats);
       }).catch(err => {
           console.error("Error:", err);
       });


       //common js

       let obj = new Asiento();
        const asientoInstance = new Asiento();

        const idFuncion = "64a7e409f7a42a24c8d7e826";


        asientoInstance.getAllSeatsByFunction(idFuncion)
            .then(seats => {
                console.log("Available seats:", seats);
            })
            .catch(err => {
                console.error("Error:", err);
            })
            .finally(() => {

                Asiento.closeConnection();
            });
    

3. Asignación de Asientos:

   - **API para Reservar Asientos:** Permitir la selección y reserva de asientos para una proyección específica.

   ```javascript
     //Inserte un "seatId" de un asiento al cual quiera asignar el estado "Reservado". Puede probar con alguno de estos asientos: "64a7e409f7a42a24c8d7e82f" o "64a7e409f7a42a24c8d7e830". Adicionalmente, podrá asignar el asiento a una proyección/función específica. Como ejemplo, considere los siguientes "functionId": "64a7e409f7a42a24c8d7e860" o "64a7e409f7a42a24c8d7e863".//
     
     let obj = new Asiento() 
     const asientoInstance = new Asiento();
     const seatId = "64a7e409f7a42a24c8d7e82b"; 
     const functionId = "64a7e409f7a42a24c8d7e828"; 
     
     asientoInstance.setAReservetoASeatForAFunction(seatId, functionId).then(result => {
         console.log(result.message);
     }).catch(err => {
         console.error("Error:", err);
     });
     
     
     //common js

     const asientoInstance = new Asiento();

    const seatId = "64a7e409f7a42a24c8d7e82b"; 
    const functionId = "64a7e409f7a42a24c8d7e828"; 

    asientoInstance.setAReservetoASeatForAFunction(seatId, functionId)
        .then(result => {
            console.log(result.message); 
        })
        .catch(err => {
            console.error("Error:", err); 
        })
        .finally(() => {
            Asiento.closeConnection();
        });

     ``javascript

     //Podrá ver el horario, estado y sala de la reserva con los siguientes "_id": "64a7e409f7a42a24c8d7e850","64a7e409f7a42a24c8d7e82b"// Además, podrá identificar cuándo un asiento no ha sido reservado comprobando el siguiente "_id":"64a7e409f7a42a24c8d7e848"
     
     const asientoInstance = new Asiento();
     const seatId = "64a7e409f7a42a24c8d7e82b"; 
     
     asientoInstance.getAllTSeatsReservedByFunction(seatId).then(result => {
         if (result.success) {
             console.log("Seat details:", result.data);
         } else {
             console.log(result.message);
         }
     }).catch(err => {
         console.error("Error:", err);
     });

     //common js

     const asientoInstance = new Asiento();
    const seatId = "64a7e409f7a42a24c8d7e82b";

    asientoInstance.getAllTSeatsReservedByFunction(seatId)
        .then(result => {
            if (result.success) {
                console.log("Seat details:", result.data);
            } else {
                console.log(result.message);
            }
        })
        .catch(err => {
            console.error("Error:", err);
        });

     ```

     

   - **API para Cancelar Reserva de Asientos:** Permitir la cancelación de una reserva de asiento ya realizada.

   ```javascript
   // Este "Seatid" ya ha sido ejecutado, por tanto, la validación indica que el asiento no se puede cancelar por que ya no está reservado, para ver la cancelación, podrá ejecutar los el siguiente "seatId": "64a7e409f7a42a24c8d7e879"
   
   const asientoInstance = new Asiento();
   const seatId = "64a7e409f7a42a24c8d7e879"; 
   
   asientoInstance.setACancelationtoAReservedSeat(seatId).then(result => {
       console.log(result.message);
   }).catch(err => {
       console.error("Error:", err);
   });
   ```

   

4. Descuentos y Tarjetas VIP:

   - **API para Aplicar Descuentos:** Permitir la aplicación de descuentos en la compra de boletos para usuarios con tarjeta VIP.
   - **API para Verificar Tarjeta VIP:** Permitir la verificación de la validez de una tarjeta VIP durante el proceso de compra.

5. Roles Definidos: **Administrador:** Tiene permisos completos para gestionar el sistema, incluyendo la venta de boletos en el lugar físico. Los administradores no están involucrados en las compras en línea realizadas por los usuarios. **Usuario Estándar:** Puede comprar boletos en línea sin la intervención del administrador. **Usuario VIP:** Puede comprar boletos en línea con descuentos aplicables para titulares de tarjetas VIP.

   

6. **API para Crear Usuario:** Permitir la creación de nuevos usuarios en el sistema, asignando roles y privilegios específicos (usuario estándar, usuario VIP o administrador)

   ```javascript
   //Crear un usuario tipo "Administrador"
   
   let obj = new Cliente()
   console.log( await obj.createClientAndUser({ _id: new ObjectId(),nombre:"vincent",apellido:"Ruad",nick:"admnort",email:"exlpcampus@example.com","telefono":"3010284187",tipo_de_cliente:"",descuento:0,codigo_tarjeta:"",fecha_expedicion:null,estado: "", cedula: 1080091010, rol: "Administrador"}))

   //common js

   const clienteInstance = Cliente.getInstance();

    clienteInstance.createClientAndUser({
        _id: new ObjectId(),
        nombre: "vincent",
        apellido: "Ruad",
        nick: "admnort",
        email: "exlpcampus@example.com",
        telefono: "3010284187",
        tipo_de_cliente: "",
        descuento: 0,
        codigo_tarjeta: "",
        fecha_expedicion: null,
        estado: "",
        cedula: 1080091010,
        rol: "Administrador"
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
   
   //Crear un "usuarioVIP"
   
   let obj = new Cliente()
   console.log( await obj.createClientAndUser({ _id: new ObjectId(),nombre:"maxine",apellido:"jaddimes",nick:"docker",email:"preffcampus@example.com","telefono":"3150110087",tipo_de_cliente:"VIP",descuento:10,codigo_tarjeta:"VIP108410",fecha_expedicion:new Date("2024-07-15T00:00:00.000Z"),estado: "activo", cedula: 1097101010, rol: "usuarioVIP"}))
   
   //Crear "usuarioEstandar"
   
   let obj = new Cliente()
   console.log( await obj.createClientAndUser({ _id: new ObjectId(),nombre:"klimt",apellido:"dewy",nick:"fluxus",email:"devcampus@example.com","telefono":"3210233087",tipo_de_cliente:"Regular",descuento:0,codigo_tarjeta:"",fecha_expedicion:"",estado: "", cedula: 1039911717, rol: "usuarioEstandar"}))
   
   ```

7. **API para Obtener Detalles de Usuario:** Permitir la consulta de información detallada sobre un usuario, incluyendo su rol y estado de tarjeta VIP

   ```javascript
   //podra utilizar otros "userId" si así lo prefiere, como "66aa1145a69bc089a192f16c","66a966ce18a924c1093f439f"
   const cliente = new Cliente();
   const userId = "66aa0f35311f70d89314da1f";
   const userInfo = await cliente.getUserInfo(userId);
   console.log(userInfo);

   //common.js

   const cliente = new Cliente();
    const userId = "66aa0f35311f70d89314da1f";

    cliente.getUserInfo(userId)
        .then(userInfo => {
            console.log(userInfo);
        })
        .catch(error => {
            console.error('Error fetching user info:', error);
        });

   ```

8. *API para Listar Usuarios:** Permitir la consulta de todos los usuarios del sistema, con la posibilidad de filtrar por rol (VIP, estándar o administrador).

   ```javascript
   //Se podrá consultar usuarios adicionales como 'usuarioVIP','Administrador',
   const clienteRol = new Cliente();
   console.log(await clienteRol.getUserByRoles('usuarioEstandar'));

   //common.js

    const clienteRol = new Cliente();
    const rol = 'usuarioEstandar';

    clienteRol.getUserByRoles(rol)
        .then(userByRoles => {
            console.log(userByRoles);
        })
        .catch(error => {
            console.error('Error fetching users by role:', error);
        });


   ```

9. Compras en Línea:

   - **API para Procesar Pagos:** Permitir el procesamiento de pagos en línea para la compra de boletos.

   - **API para Confirmación de Compra:** Enviar confirmación de la compra y los detalles del boleto al usuario.

     

### **Requisitos Técnicos**

- **Base de Datos:** Utilizar MongoDB para el almacenamiento de datos relacionados con películas, boletos, asientos, usuarios y roles.
- **Autenticación:** Implementar autenticación segura para el acceso a las APIs, utilizando roles de usuario para determinar los permisos y accesos (por ejemplo, usuarios VIP y usuarios estándar).
- **Autorización de Roles:** Asegurar que las APIs y las operaciones disponibles estén adecuadamente restringidas según el rol del usuario (por ejemplo, aplicar descuentos solo a usuarios VIP).
- **Documentación:** Proveer una documentación clara y completa para cada API, describiendo los endpoints, parámetros, y respuestas esperadas.
- **Recursos**

### **Rúbrica Evaluativa**

Los puntos a evaluar serán los siguientes:

### 1. Selección de Películas (20%)

- **0 puntos:** No se implementa la funcionalidad para listar películas ni obtener detalles de una película.
- **25 puntos:** La funcionalidad para listar películas o obtener detalles de una película está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para listar películas y obtener detalles de una película está implementada pero presenta errores menores o no proporciona todos los datos requeridos.
- **75 puntos:** La funcionalidad para listar películas y obtener detalles de una película está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para listar películas y obtener detalles de una película está completamente implementada, es eficiente, y proporciona toda la información requerida de manera clara.

### 2. Compra de Boletos (20%)

- **0 puntos:** No se implementa la funcionalidad para comprar boletos ni verificar la disponibilidad de asientos.
- **25 puntos:** La funcionalidad para comprar boletos o verificar la disponibilidad de asientos está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para comprar boletos y verificar la disponibilidad de asientos está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para comprar boletos y verificar la disponibilidad de asientos está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para comprar boletos y verificar la disponibilidad de asientos está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 3. Asignación de Asientos (20%)

- **0 puntos:** No se implementa la funcionalidad para reservar ni cancelar reservas de asientos.
- **25 puntos:** La funcionalidad para reservar o cancelar reservas de asientos está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para reservar y cancelar reservas de asientos está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para reservar y cancelar reservas de asientos está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para reservar y cancelar reservas de asientos está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 4. Descuentos y Tarjetas VIP (10%)

- **0 puntos:** No se implementa la funcionalidad para aplicar descuentos ni verificar la validez de tarjetas VIP.
- **25 puntos:** La funcionalidad para aplicar descuentos o verificar la validez de tarjetas VIP está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para aplicar descuentos y verificar la validez de tarjetas VIP está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para aplicar descuentos y verificar la validez de tarjetas VIP está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para aplicar descuentos y verificar la validez de tarjetas VIP está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 5. Gestión de Usuarios y Roles (10%)

- **0 puntos:** No se implementa la funcionalidad para gestionar usuarios ni roles.
- **25 puntos:** La funcionalidad para gestionar usuarios o roles está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para gestionar usuarios y roles está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para gestionar usuarios y roles está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para gestionar usuarios y roles está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 6. Compras en Línea (10%)

- **0 puntos:** No se implementa la funcionalidad para procesar pagos ni enviar confirmaciones de compra.
- **25 puntos:** La funcionalidad para procesar pagos o enviar confirmaciones de compra está parcialmente implementada, con errores significativos o faltante de características importantes.
- **50 puntos:** La funcionalidad para procesar pagos y enviar confirmaciones de compra está implementada pero presenta errores menores o no maneja todos los casos posibles.
- **75 puntos:** La funcionalidad para procesar pagos y enviar confirmaciones de compra está mayormente correcta, pero con pequeños problemas de usabilidad o eficiencia.
- **100 puntos:** La funcionalidad para procesar pagos y enviar confirmaciones de compra está completamente implementada, es eficiente, y maneja todos los casos posibles de manera clara.

### 7. Documentación y Entregables (10%)

- **0 puntos:** No se entrega la documentación requerida ni el código fuente en el repositorio de GitHub.
- **25 puntos:** La documentación o el código fuente están incompletos o presentan errores significativos.
- **50 puntos:** La documentación y el código fuente están mayormente completos, pero con algunos errores menores o faltantes.
- **75 puntos:** La documentación y el código fuente están correctos, con pequeños problemas de claridad o detalles menores faltantes.
- **100 puntos:** La documentación y el código fuente están completos, claros y bien organizados, proporcionando toda la información necesaria de manera eficiente.

### GitHub y Entrega de Proyecto

- 🚨 **Cancelación o Anulación del Proyecto** : No se entregó ningún repositorio, su visualización está oculta (o no compartida con el Trainer) o hubo adulteración después de la fecha y hora establecida para su entrega, ***Evidencia de clonación o conocido como `fork` de algún repositorio, distribución y/o copia de dicho trabajo por cualquier medio de comunicación (verbal, digital, entre otras), se asumirá como cancelación del proyecto de manera definitiva.*** 🚨
- **25 puntos**: Se creó el repositorio, pero en su rama principal no se encuentra el proyecto general ,al igual que algún archivo en relación al proyecto.
- **100 puntos**: Se creó exitosamente el repositorio, donde en su rama principal se encuentra el proyecto general y sus archivos en relación a ello, con evidencia de la participación del equipo completo de manera periódica.



