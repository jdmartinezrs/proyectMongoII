const Connect = require("../index");
const { ObjectId } = require('mongodb');

class SeatsModel extends Connect {
    constructor() {
        super();
        this.collection = this.db.collection('shows');
    }

    async getMovieShowByDay(movieId, dayOfWeek) {
        try {
            const results = await this.collection.aggregate([
                {
                    $match: {
                        movie: new ObjectId(movieId),
                        day: dayOfWeek
                    }
                },
                {
                    $lookup: {
                        from: "rooms",
                        localField: "room_id",
                        foreignField: "_id",
                        as: "roomDetails"
                    }
                },
                {
                    $unwind: "$roomDetails"
                },
                {
                    $project: {
                        date: { $ifNull: [{ $substr: ["$date", 8, 2] }, null] },
                        day: 1,
                        price: 1,
                        type: 1,
                        time: 1,
                        bookedSeats: { $ifNull: ["$Booked_seats", []] },
                        room1: { $ifNull: ["$roomDetails.room1", []] },
                        room2: { $ifNull: ["$roomDetails.room2", []] },
                        room3: { $ifNull: ["$roomDetails.room3", []] }
                    }
                },
                {
                    $match: {
                        $or: [
                            { "room1.0": { $exists: true } },
                            { "room2.0": { $exists: true } },
                            { "room3.0": { $exists: true } }
                        ]
                    }
                },
                {
                    $project: {
                        date: 1,
                        day: 1,
                        price: 1,
                        type: 1,
                        time: 1,
                        seats: {
                            $map: {
                                input: {
                                    $concatArrays: [
                                        "$room1",
                                        "$room2",
                                        "$room3"
                                    ]
                                },
                                as: "seat",
                                in: {
                                    seat: "$$seat",
                                    status: {
                                        $cond: [
                                            { $in: ["$$seat", "$bookedSeats"] },
                                            "reserved",
                                            "available"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    $sort: { "time": 1 }
                }
            ]).toArray();

            if (results.length > 0) {
                const movieShows = results.map(show => ({
                    date: show.date,
                    day: show.day,
                    price: show.price,
                    type: show.type,
                    time: show.time,
                    seats: show.seats.map(seat => ({
                        seat: seat.seat,
                        status: seat.status
                    }))
                }));

                return movieShows;
            } else {
                return [];
            }
        } catch (err) {
            console.error('Error retrieving movie shows:', err);
            throw err;
        }
    }
    async SetASeatBooking(showId, seatsToReserve) {
        try {
            const result = await this.collection.updateOne(
                { "_id": new ObjectId(showId) },
                { $push: { "Booked_seats": { $each: seatsToReserve } } }
            );
            return result;
        } catch (err) {
            console.error('Error setting seat reservation:', err);
            throw err;
        }
    }

   async removeASeatReservation(showId, seatsToRemove) {
        return this.collection.updateOne(
            { "_id": new ObjectId(showId) },
            { $pull: { "Booked_seats": { $in: seatsToRemove } } }
        ).then(result => {
            return result;
        }).catch(err => {
            console.error('Error removing seat reservation:', err);
            throw err;
        });
    }

}
module.exports = SeatsModel;








