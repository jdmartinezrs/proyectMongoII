document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.movie-list');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const movieTitleElement = document.querySelector('.movie-title');
    const movieGenreElement = document.querySelector('.movie-genre');
    let currentIndex = 0;
    let movies = []; 

    function updateSlider(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        updateMovieInfo(index); 
    }

    function updateMovieInfo(index) {
        if (movies[index]) {
            movieTitleElement.textContent = movies[index].name;
            movieGenreElement.textContent = movies[index].genre;
        }
    }

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
        updateSlider(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < dots.length - 1) ? currentIndex + 1 : 0;
        updateSlider(currentIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-slide'));
            updateSlider(currentIndex);
        });
    });

    fetch('http://localhost:5069/movies/in-theaters')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched movie data:', data);

            movies = data; 
           
            slider.innerHTML = '';

            data.forEach((movie, index) => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.style.display = 'inline-block';
                movieCard.style.margin = '10px';

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

                if (index === 0) {
                    updateMovieInfo(0);
                }
            });

            updateSlider(currentIndex);
        })
        .catch(error => console.error('Failed to fetch movie data:', error));
});



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
                    } else {
                        console.error(`Elements for movie ${index + 1} are missing in the DOM.`);
                    }
                }
            });

            console.log('Finished populating coming soon movies');
        })
        .catch(error => console.error('Failed to fetch coming soon movie data:', error));
});







