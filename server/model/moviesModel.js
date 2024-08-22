const Connect = require("../index");
const { ObjectId } = require('mongodb'); 

class MoviesModel extends Connect {
    constructor() {
        super();
        this.collection = this.db.collection('movies');
    }

    async getAllMoviesInTheaters() {
        try {
            const result = await this.collection.aggregate([
                {
                    $match: { "status": "in theaters" }
                },
                {
                    $project: {
                        _id: 0,
                        name: 1,
                        genre: 1,
                        movie_image: 1
                    }
                }
            ]).toArray(); 

            return result;
        } catch (err) {
            console.error('Error retrieving movies and functions:', err);
            throw err;
        }
    }

    getAllMoviesComingSoon() {
        return this.collection.aggregate([
            {
                $match: { "status": "coming soon" }
            },
            {
                $project: {
                    _id: 0,
                    name: 1,
                    genre: 1,
                    movie_image: 1,
                    year: 1
                }
            }
        ]).toArray()
        .then(result => {
            return result;
        })
        .catch(err => {
            console.error('Error retrieving movies:', err);
            throw err;
        });
    }

    getAnEspecificMovieInfo(movieId) {
        return this.collection.aggregate([
            // Match the movie by its ID
            {
                $match: { _id: new ObjectId(movieId) }
            },
            // Unwind the cast array to decompose each element
            {
                $unwind: '$cast'
            },
            // Group the results back to a single document per movie
            {
                $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    genre: { $first: '$genre' },
                    synopsis: { $first: '$synopsis' },
                    trailer: { $first: '$trailer' },
                    movie_image: { $first: '$movie_image' },
                    cast: { $push: {
                        name: '$cast.name',
                        character: '$cast.character',
                        actor_image: '$cast.actor_image'
                    }}
                }
            },
            // Optionally, you can project to remove the _id field if not needed
            {
                $project: {
                    _id: 0,
                    name: 1,
                    genre: 1,
                    synopsis: 1,
                    trailer: 1,
                    movie_image: 1,
                    cast: 1
                }
            }
        ]).toArray()
        .then(result => {
            // Return the first (and only) element in the array
            return result[0];
        })
        .catch(err => {
            console.error('Error fetching movie details:', err);
            throw err;
        });
    }
}

module.exports = MoviesModel;


