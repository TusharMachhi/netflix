import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { CgSpinner } from "react-icons/cg";

const Formupdate = ({ data }) => {
  const isLoading = false;

  const [formData, setFormData] = useState({
    movieName: "",
    genres: "",
    duration: "",
    ageLimit: "",
    year: "",
    coverPoster: "",
    videos: "",
    isMovies: "",
    description: "",
  });
  useEffect(() => {
    setFormData((prev) => {
      return {
        ...prev,
        movieName: data?.data?.data?.movieName,
        genres: data?.data?.data?.genres,
        duration: data?.data?.data?.duration,
        ageLimit: data?.data?.data?.ageLimit,
        year: data?.data?.data?.year,
        isMovies: data?.data?.data?.isMovies,
        description: data?.data?.data?.description,
      };
    });
  }, [
    data?.data?.data?.movieName,
    data?.data?.data?.genres,
    data?.data?.data?.duration,
    data?.data?.data?.ageLimit,
    data?.data?.data?.year,
    data?.data?.data?.isMovies,
    data?.data?.data?.description,
  ]);

  console.log(formData);
  const inputHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newForm = new FormData();

    newForm.append("movieName", formData.movieName);
    newForm.append("genres", formData.genres);
    newForm.append("duration", formData.duration);
    newForm.append("ageLimit", formData.ageLimit);
    newForm.append("year", formData.year);
    newForm.append("coverPoster", formData.coverPoster);
    newForm.append("videos", formData.videos);
    newForm.append("isMovies", formData.isMovies);
    newForm.append("description", formData.description);
    
    
  };

  


  return (
    <>
      <form
        onSubmit={onSubmit}
        className=" flex text-white w-[80%] m-auto gap-8 mt-20 p-4 border border-red-800 relative"
      >
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col">
            <label htmlFor="">Movie Name</label>
            <Input
              type="text"
              placeholder="enter movie name"
              className="outline-0 border-2 border-red-800 bg-zinc-800 my-2 p-2"
              name="movieName"
              onChange={inputHandler}
              defaultValue={formData?.movieName}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">genres</label>
            <Input
              type="text"
              placeholder="enter movie genres"
              className="outline-0 border-2 border-red-800 bg-zinc-800 my-2 p-2"
              name="genres"
              onChange={inputHandler}
              defaultValue={formData?.genres}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">duration</label>
            <Input
              type="text"
              className="outline-0 border-2 border-red-800 bg-zinc-800 my-2 p-2"
              placeholder="Enter duration ex- 1:20:04"
              onChange={inputHandler}
              name="duration"
              defaultValue={formData?.duration}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">ageLimit</label>
            <Input
              type="number"
              placeholder="Enter Age Limit"
              className="outline-0 border-2 border-red-800 bg-zinc-800 my-2 p-2"
              onChange={inputHandler}
              name="ageLimit"
              defaultValue={formData?.ageLimit}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Movie Year</label>
            <Input
              type="number"
              placeholder="Enter Movie Year"
              className="outline-0 border-2 border-red-800 bg-zinc-800 my-2 p-2"
              onChange={inputHandler}
              defaultValue={formData?.year}
              name="year"
            />
          </div>
          <Button
            disabled={isLoading}
            className={`text-white w-[30%] bg-red-800 py-2 my-2 rounded-md ${
              isLoading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <CgSpinner className=" m-auto text-2xl animate-spin " />
            ) : (
              "update"
            )}
          </Button>
        </div>

        <div className="flex-1 ">
          <div className="flex flex-col">
            <label htmlFor="">Movie Image</label>
            <Input
              type="file"
              accept="image/*"
              onChange={inputHandler}
              name="coverPoster"
              className="w-full h-8 my-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Movie video</label>
            <Input
              type="file"
              className="w-full h-8 my-2"
              accept="video/*"
              onChange={inputHandler}
              name="videos"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="my-2">
              is Movie
            </label>
            <div className="flex gap-4 items-center my-2 ">
              <Input
                type="radio"
                name="isMovies"
                id="yes"
                className="label-1 hidden"
                onChange={inputHandler}
                defaultValue={"movies"}
              />
              <label
                htmlFor="yes"
                className="lab-1 flex justify-center items-center border-2 border-red-800 rounded-md p-1   pr-4 before:content-[''] before:w-4 before:h-4 before:border-2 before:border-red-800 before:rounded-full before:mr-2"
              >
                Yes
              </label>

              <Input
                type="radio"
                name="isMovies"
                defaultValue={"series"}
                id="noid"
                onChange={inputHandler}
                className="label-2 appearance-none"
              />
              <label
                htmlFor="noid"
                className="lab-2 group flex justify-center items-center border-2 border-red-800 rounded-md p-1  pr-4 before:content-[''] before:w-4 before:h-4 before:border-2 before:border-red-800 before:rounded-full before:mr-2 before:group-hover:block"
              >
                No
              </label>
            </div>
          </div>
          <div className="flex flex-col relative  h-full ">
            <label htmlFor="">Movie Description</label>
            <textarea
              type="text"
              placeholder="Enter movie Description!"
              onChange={inputHandler}
              name="description"
              defaultValue={formData?.description}
              className="outline-none bg-zinc-800 my-2 w-full h-[43%] resize-none overflow-y-scroll p-4 text-slate-400"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default Formupdate;
