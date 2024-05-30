import React from "react";
import MovieInfo from "./MovieInfo.jsx";
const MovieList = (props) => {
    const { datas } = props;
    console.log(props.datas);
    console.log(typeof (props.datas))
    let movieItems = [];
    for (let i = 0; i < datas.length; i++) {
        const movie = datas[i]; // Access each movie object
        movieItems.push(<MovieInfo key={movie.id} mov={movie} />); // Add JSX with key
    }
    return (
        <ul>
            {movieItems}
        </ul>
    )
}
export default MovieList;