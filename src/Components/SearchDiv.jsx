import axios from "axios";
import React, { useState } from "react";
const SearchDiv = ({ moviesData,setBool,startP }) => {
    const [search, setSearch] = useState("");
    const [moviesSearchData, setMoviesData] = useState();
    const searchHandler = (event) => {
        setSearch(event.target.value);
    }
    async function submitHandler(event) {
        try {
            event.preventDefault();
            const data = await axios.get('http://www.omdbapi.com/?apikey=59b63942&', { params: { s: search } })
           
            const moviesList = data.data.Search;
            moviesData(moviesList);
            setBool(1);
            startP(1);
            setMoviesData(data.data.Search);
        }
        catch (error) {
            console.log(error);
        }
        setSearch("");
    }
    return (
        <div class="w-auto">
            <form onSubmit={submitHandler} class="flex bg-white w-[400px] rounded-lg place-content-between">
                <input placeholder="search for Movie by Name" class="w-[300px] h-[40px] rounded-lg text-2xl pl-4 text-slate-700" onChange={searchHandler} value={search} />
                <button type="submit" class="w-[100px]">Search</button>
            </form>
        </div>
    )
}
export default SearchDiv;