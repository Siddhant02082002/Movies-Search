import axios from "axios";
import React, { useState } from "react";
const SearchByTitle = ({ moviesData,setBool,startP}) => {
    const [Title, setTitle] = useState("");
    const [moviesSearchData, setMoviesData] = useState();
    const searchHandler = (event) => {
        setTitle(event.target.value);
    }
    async function submitHandler(event) {
        try {
            event.preventDefault();
            const data = await axios.get('https://www.omdbapi.com/?apikey=59b63942&', { params: { t: Title, plot: "full" } })
            const MovieData = data.data;
            setMoviesData(MovieData);
            console.log(MovieData);
            moviesData(MovieData);
            setBool(0);
            startP(1);
        }
        catch (error) {
            console.log(error);
        }
        setTitle("");
    }
    return (
        <div class="my-7 w-auto">
            <form onSubmit={submitHandler} class="flex bg-white w-[400px] rounded-lg place-content-between">
                <input placeholder="search for Movie by Name" class="w-[300px] h-[40px] rounded-lg text-2xl pl-4 text-slate-700" onChange={searchHandler} value={Title} />
                <button type="submit" class="w-[100px]">Search</button>
            </form>
        </div>
    )
}
export default SearchByTitle;