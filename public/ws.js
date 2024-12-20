document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.movie-list');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentIndex = 0;
    let movies = []; 

    function updateSlider(index) {
        if (slider) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        updateMovieInfo(index); 
    }

    function updateMovieInfo(index) {
        const movieTitleElement = document.querySelector('.movie-title');
        const movieGenreElement = document.querySelector('.movie-genre');
        if (movies[index]) {
            if (movieTitleElement) movieTitleElement.textContent = movies[index].name;
            if (movieGenreElement) movieGenreElement.textContent = movies[index].genre;
        }
    }

    const prevButton = document.querySelector('.prev');
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
            updateSlider(currentIndex);
        });
    }

    const nextButton = document.querySelector('.next');
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
            updateSlider(currentIndex);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-slide'));
            updateSlider(currentIndex);
        });
    });

    function fetchMovieDetails(movieId) {
        fetch(`http://localhost:5069/movies/${movieId}`)
            .then(response => response.json())
            .then(data => {
                // After fetching the movie details, redirect to the movie details page
                window.location.href = `http://localhost:5069/movieselected?id=${movieId}&name=${encodeURIComponent(data.name)}`;
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }

    fetch('http://localhost:5069/movies/in-theaters')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched movie data:', data);

            movies = data; 
           
            if (slider) {
                slider.innerHTML = '';

                data.forEach((movie, index) => {
                    const movieCard = document.createElement('div');
                    movieCard.className = 'movie-card';
                    movieCard.style.display = 'inline-block';
                    movieCard.style.margin = '10px';
                    movieCard.style.cursor = 'pointer';

                    const moviePoster = document.createElement('img');
                    moviePoster.src = movie.movie_image || 'https://via.placeholder.com/300x450?text=No+Poster';
                    moviePoster.alt = movie.name;
                    moviePoster.className = 'movie-poster';
                    moviePoster.style.width = '200px';
                    moviePoster.style.height = 'auto';

                    moviePoster.onerror = () => {
                        moviePoster.src = 'https://via.placeholder.com/300x450?text=No+Poster';
                    };

                    movieCard.appendChild(moviePoster);
                    slider.appendChild(movieCard);

                    // Add click event listener to fetch details and then redirect
                    movieCard.addEventListener('click', () => {
                        fetchMovieDetails(movie._id);
                    });

                    if (index === 0) {
                        updateMovieInfo(0);
                    }
                });

                updateSlider(currentIndex);
            }
        })
        .catch(error => console.error('Failed to fetch movie data:', error));
});

// Check if we're on the movie details page
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
const movieName = urlParams.get('name');

if (movieId && movieName) {
    // We're on the movie details page, so let's fetch and display the details
    fetch(`http://localhost:5069/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
            // Update the DOM with the movie details
            const titleElement = document.querySelector('.movie-title');
            if (titleElement) titleElement.textContent = data.name;

            const movieImage = document.querySelector('.movie-image');
            if (movieImage) {
                movieImage.src = data.movie_image || movieImage.src;
                movieImage.alt = data.name;
            }

            const genreElement = document.querySelector('.genre');
            if (genreElement) {
                genreElement.textContent = Array.isArray(data.genre) ? data.genre.join(', ') : data.genre;
            }

            const trailerBtn = document.querySelector('.watch-trailer-btn');
            if (trailerBtn && data.trailer) {
                trailerBtn.onclick = () => window.location.href = data.trailer;
            }

            const descriptionElement = document.querySelector('.description');
            if (descriptionElement) {
                descriptionElement.textContent = data.synopsis || '';
            }

            const castContainer = document.querySelector('.cast-container');
            if (castContainer && Array.isArray(data.cast)) {
                castContainer.innerHTML = ''; // Clear existing content
                data.cast.forEach(actor => {
                    const actorElement = document.createElement('div');
                    actorElement.classList.add('profile');
                    actorElement.innerHTML = `
                        <img src="${actor.actor_image}" alt="${actor.name}">
                        <div class="text-container">
                            <p>${actor.name}</p>
                            <p>${actor.character}</p>
                        </div>
                    `;
                    castContainer.appendChild(actorElement);
                });
            }
        })
        .catch(error => console.error('Error fetching movie details:', error));
}


function fetchMovieDetails() {
    fetch(`http://localhost:5069/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
            // Set movie title
            document.querySelector('.movie-title').textContent = data.name;

            // Set movie image
            const movieImage = document.querySelector('.movie-image');
            if (movieImage) {
                movieImage.src = data.movie_image || movieImage.src;
            }

            // Set genre
            const genreElement = document.querySelector('.genre');
            if (genreElement) {
                genreElement.textContent = Array.isArray(data.genre) ? data.genre.join(', ') : data.genre;
            }

            // Set watch trailer button
            const trailerBtn = document.querySelector('.watch-trailer-btn');
            if (trailerBtn && data.trailer) {
                trailerBtn.addEventListener('click', () => {
                    window.location.href = data.trailer;
                });
            }

            // Set synopsis
            const descriptionElement = document.querySelector('.description');
            if (descriptionElement) {
                descriptionElement.textContent = data.synopsis || '';
            }

            // Populate cast
            const castContainer = document.querySelector('.cast-container');
            if (castContainer && Array.isArray(data.cast)) {
                castContainer.innerHTML = ''; // Clear existing content
                data.cast.forEach(actor => {
                    const actorElement = document.createElement('div');
                    actorElement.classList.add('profile');
                    actorElement.innerHTML = `
                        <img src="${actor.actor_image}" alt="${actor.name}">
                        <div class="text-container">
                            <p>${actor.name}</p>
                            <p>${actor.character}</p>
                        </div>
                    `;
                    castContainer.appendChild(actorElement);
                });
            }
        })
        .catch(error => console.error('Error fetching movie details:', error));
}

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', fetchMovieDetails);

document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5069/movies/coming-soon')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched coming soon movie data:', data);

            data.forEach((movie, index) => {
                if (index < 3) { 
                    const container = document.getElementById(`movie${index + 1}-container`);
                    const poster = container.querySelector('.imgC');
                    const title = container.querySelector(`#movie${index + 1}-title`);
                    const year = container.querySelector(`#movie${index + 1}-year`);
                    const genre = container.querySelector(`#movie${index + 1}-genre`);

                    if (poster && title && year && genre) {
                        poster.src = movie.movie_image || 'https://via.placeholder.com/300x450?text=No+Poster';
                        poster.alt = movie.name;
                        title.textContent = movie.name;
                        year.textContent = movie.year || 'Unknown Year';
                        genre.textContent = movie.genre || 'Unknown Genre';

                        // Añadir evento de clic para redirigir a la página de detalles
                        container.addEventListener('click', () => {
                            window.location.href = `/coming?movieId=${movie._id}`;
                        });
                    } else {
                        console.error(`Elements for movie ${index + 1} are missing in the DOM.`);
                    }
                }
            });

            console.log('Finished populating coming soon movies');
        })
        .catch(error => console.error('Failed to fetch coming soon movie data:', error));
});



document.addEventListener('DOMContentLoaded', () => {
    // Obtener el movieId de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    if (movieId) {
        fetchMovieDetails(movieId);
    } else {
        console.error('No movieId provided in the URL');
    }
});
// Variable para controlar si ya se ha cargado la información
let isMovieDetailsLoaded = false;

document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el ID de la película está disponible en algún lugar, como en una URL de consulta
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    if (movieId) {
        fetchMovieDetails(movieId);
    } else {
        console.error('No movieId found in the URL');
    }

    // Manejar el botón de retroceso
    const backArrow = document.querySelector('.back-arrow-especific');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.location.href = 'http://localhost:5069/home';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el ID de la película está disponible en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    if (movieId) {
        fetchMovieDetails(movieId);
    } else {
        console.error('No movieId found in the URL');
        // Maneja el caso en el que no se encuentra el ID de la película
        displayError('Movie ID not found.');
    }

    // Manejar el botón de retroceso
    const backArrow = document.querySelector('.back-arrow-especific');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.location.href = 'http://localhost:5069/home';
        });
    }
});

function fetchMovieDetails(movieId) {
    const movieImage = document.querySelector('.movie-image');
    const titleElement = document.querySelector('.movie-title');
    const trailerBtn = document.querySelector('.watch-trailer-btn');
    const descriptionElement = document.querySelector('.description');
    const castContainer = document.querySelector('.cast-container');

    // Mostrar indicador de carga
    displayLoading();

    // Función para manejar el reintento
    function fetchWithRetry(attempts) {
        fetch(`http://localhost:5069/movieselected/${movieId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displayData(data);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                if (attempts > 0) {
                    // Reintentar después de un breve retraso
                    setTimeout(() => fetchWithRetry(attempts - 1), 3000);
                } else {
                    // Mostrar error si se agotaron los intentos
                    displayError('Failed to load movie details.');
                }
            });
    }

    fetchWithRetry(3); // Intentar hasta 3 veces
}

function displayLoading() {
    const movieImage = document.querySelector('.movie-image');
    const titleElement = document.querySelector('.movie-title');
    const trailerBtn = document.querySelector('.watch-trailer-btn');
    const descriptionElement = document.querySelector('.description');
    const castContainer = document.querySelector('.cast-container');

    if (movieImage) movieImage.src = 'https://via.placeholder.com/300x450?text=Loading...';
    if (titleElement) titleElement.textContent = 'Loading...';
    if (descriptionElement) descriptionElement.textContent = 'Loading...';
    if (castContainer) castContainer.innerHTML = '<p>Loading...</p>';
}

function displayData(data) {
    const movieImage = document.querySelector('.movie-image');
    const titleElement = document.querySelector('.movie-title');
    const trailerBtn = document.querySelector('.watch-trailer-btn');
    const descriptionElement = document.querySelector('.description');
    const castContainer = document.querySelector('.cast-container');

    if (movieImage) {
        movieImage.src = data.movie_image || 'https://via.placeholder.com/300x450?text=No+Poster';
        movieImage.alt = data.name || 'Movie Poster';
    }

    if (titleElement) {
        titleElement.textContent = data.name || 'Unknown Title';
    }

    if (trailerBtn) {
        if (data.trailer) {
            trailerBtn.style.display = 'block';
            trailerBtn.addEventListener('click', () => {
                window.location.href = data.trailer;
            });
        } else {
            trailerBtn.style.display = 'none';
        }
    }

    if (descriptionElement) {
        descriptionElement.textContent = data.synopsis || 'No synopsis available.';
    }

    if (castContainer && Array.isArray(data.cast)) {
        castContainer.innerHTML = '';
        data.cast.forEach(actor => {
            const actorElement = document.createElement('div');
            actorElement.classList.add('profile');
            actorElement.innerHTML = `
                <img src="${actor.actor_image || 'https://via.placeholder.com/150'}" alt="${actor.name || 'Unknown Actor'}">
                <div class="text-container">
                    <p>${actor.name || 'Unknown Actor'}</p>
                    <p>${actor.character || 'Unknown Character'}</p>
                </div>
            `;
            castContainer.appendChild(actorElement);
        });
    } else if (castContainer) {
        castContainer.innerHTML = '<p>No cast information available.</p>';
    }
}

function displayError(message) {
    const movieImage = document.querySelector('.movie-image');
    const titleElement = document.querySelector('.movie-title');
    const trailerBtn = document.querySelector('.watch-trailer-btn');
    const descriptionElement = document.querySelector('.description');
    const castContainer = document.querySelector('.cast-container');

    if (movieImage) movieImage.src = 'https://via.placeholder.com/300x450?text=Error+Loading+Image';
    if (titleElement) titleElement.textContent = message;
    if (descriptionElement) descriptionElement.textContent = 'Error Loading Description';
    if (castContainer) castContainer.innerHTML = '<p>Error Loading Cast Information</p>';
}

document.addEventListener("DOMContentLoaded", function() {
    const backArrow = document.querySelector('.back-arrow-especific');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.location.href = 'http://localhost:5069/home';
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const backArrow = document.querySelector('.back-arrow-especific');
    if (backArrow) {
        backArrow.addEventListener('click', function() {
            window.location.href = 'http://localhost:5069/home';
        });
    }
});





function redirectToBooking() {
    // window.location.href = 'http://localhost:5069/asientos';
    window.location.href = `http://localhost:5069/asientos?id=${movieId}`;
}



const PostReservation = async(showId, seatsToReserve)=>{
const response = await fetch(`http://localhost:5069/seats/:showId/seatsToReserve`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "showId": showId,
  "seatsToReserve": seatsToReserve }),
    })
}
data.forEach((movie, index) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';

    const moviePoster = document.createElement('img');
    moviePoster.src = movie.movie_image || 'https://via.placeholder.com/300x450?text=No+Poster';
    moviePoster.alt = movie.name;
    moviePoster.className = 'movie-poster';

    moviePoster.onerror = () => {
        moviePoster.src = 'https://via.placeholder.com/300x450?text=No+Poster';
    };

    movieCard.appendChild(moviePoster);
    slider.appendChild(movieCard);

    // Añade el listener para hacer clic en la tarjeta de película
    movieCard.addEventListener('click', () => {
        fetchMovieDetails(movie._id);  // Asegúrate de que movie._id está definido
    });

    if (index === 0) {
        updateMovieInfo(0);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const backArrow = document.querySelector('.back-arrow-especific');
    if (backArrow) {
    backArrow.addEventListener('click', () => {
    window.location.href = 'http://localhost:5069/home';
    });
    }
    
    // Llamar a la función para obtener detalles de la película
    const movieId = /* Recupera el movieId dinámicamente si es necesario */
    fetchMovieDetails(movieId);
    });