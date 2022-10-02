import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
    unique: true,
    required: true,
  },
  videos: {
    type: String,
    required: true,
  },
  isMovies: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  coverPoster: {
    type: String,
    required: true,
  },
  genres: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  ageLimit: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});

const Movies = new mongoose.model("Movie", movieSchema);
export default Movies;
