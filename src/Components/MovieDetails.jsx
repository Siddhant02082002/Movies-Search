import React from "react";
const MovieDetails = (props) => {
    const { datas } = props;
    const ratings = datas.Ratings;
    return (
        <div class="flex items-center flex-col">
            <img src={datas.Poster} class="h-5/6 w-[250px]"></img>
            <div class="my-5 text-red-50 text-5xl font-medium">{datas.Title}</div>
            <div class="my-5 text-red-50 text-xl font-medium">Year: {datas.Year}</div>
            <div class="my-5 text-red-50 text-xl font-medium">Genre: {datas.Genre}</div>
            <div class="w-1/2 my-5">
                <div class="text-3xl font-medium text-white">Plot</div>
                <p className="text-justify text-xl text-white">{datas.Plot}</p>
            </div>
            <div class="w-1/2 my-5">
                <div class="text-3xl font-medium text-white">Director</div>
                <p className="text-center text-xl text-white">{datas.Director}</p>
            </div>
            <div class="w-1/2 my-5">
                <div class="text-3xl font-medium text-white">Actors</div>
                <p className="text-center text-xl text-white">{datas.Actors}</p>
            </div>
            
        </div>
    )
}
export default MovieDetails;