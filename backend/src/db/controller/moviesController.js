import Movies from "../modal/movie.js";
import { upload } from "../middleware/cloudinary.js";

const cerateMovies = async (req, res, next) => {
  console.log("file", req.files);
  try {
    const {
      movieName,
      isMovies,
      description,
      genres,
      duration,
      ageLimit,
      year,
    } = req.body;

    const movies = await Movies.findOne({
      $or: [{ movieName }, { $and: [{ movieName }, { year }] }],
    });

    if (movies) {
      return res.status(400).json({ error: "movies already exist" });
    } else {
      console.log(req.fies);
      const { coverPoster, videos } = req.files;

      const imageType = ["image/jpg", "image/jpeg", "image/png"];
      const videoFormat = ["video/mp4", "video/mkv", "video/avi"];

      if (!imageType.includes(coverPoster.mimetype)) {
        return res.json({ error: "only jpg,png,jpeg file allow" });
      }
      const uploadFile = await upload(coverPoster.tempFilePath);

      if (!uploadFile) {
        return res.status(400).json({ data: "image not upload" });
      }

      if (!videoFormat.includes(videos.mimetype)) {
        return res.json({ error: "only mp4,mkv,avi files supports" });
      }

      const uploadVideo = await upload(videos.tempFilePath);

      if (!uploadVideo) {
        return res.status(400).json({ data: "video not upload" });
      }

      const data = new Movies({
        movieName,
        isMovies,
        description,
        genres,
        coverPoster: uploadFile.url,
        year,
        duration,
        ageLimit,
        videos: uploadVideo.url,
      });
      const result = await data.save();
      return res.status(201).json({ data: result });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(400).json({ error: "id not found" });
    }
    const delMovies = await Movies.findByIdAndDelete(id);
    console.log(delMovies);

    return res.status(200).json({ data: "movie deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateMovies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { coverPoster, videos } = req.files || {};
    console.log("coverPOS", coverPoster);
    console.log("videosss", videos);
    let imageUrl;
    let videoUrl;

    const user = await Movies.findById(id);

    if (!coverPoster) {
      imageUrl = user.coverPoster;
    } else {
      
      const uploadFile = await upload(coverPoster.tempFilePath);
      
      if (!uploadFile) {
        return res.status(400).json({ data: "image not upload" });
      }
      imageUrl = uploadFile.url;
    }

    if (!videos) {
      videoUrl = user.videos;
    } else {
      
      const uploadVideo = await upload(videos.tempFilePath);
      
      if (!uploadVideo) {
        return res.status(400).json({ error: "video not upload found" });
      }
      videoUrl = uploadVideo.url;
    }

    const updateDetails = {
      ...req.body,
      coverPoster: imageUrl,
      videos: videoUrl,
    };

    const movies = await Movies.findByIdAndUpdate({ _id: id }, updateDetails, {
      new: true,
      runValidator: true,
    });
    res.status(200).json({ data: movies });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllMovies = async (req, res, next) => {
  try {
    res.status(200).json(res.myPagination);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      return res.status(400).json({ success: false, error: "id not found" });
    }
    const data = await Movies.findById(id);
    console.log(data);

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return res.status(400).json({ success: false, errore: error.message });
  }
};

const getRandom = async (req, res, next) => {
  const type = req.query.type;
  console.log("type", type);
  let movie;

  if (type === "movies") {
    movie = await Movies.aggregate([
      { $match: { isMovies: "movies" } },
      { $sample: { size: 1 } },
    ]);
  } else if (type === "series") {
    movie = await Movies.aggregate([
      { $match: { isMovies: "series" } },
      { $sample: { size: 1 } },
    ]);
  } else {
    movie = await Movies.aggregate([{ $sample: { size: 1 } }]);
  }
  res.status(200).json({ success: true, data: movie });
};

export {
  cerateMovies,
  deleteMovies,
  updateMovies,
  getAllMovies,
  getMovieById,
  getRandom,
};
