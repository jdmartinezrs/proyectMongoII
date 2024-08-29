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

