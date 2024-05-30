const MovieInfo = ({ mov }) => {
    return (
        <div class="flex w-full m-5 mb-16 pl-16 ">
            <img src={mov.Poster} class="w-64"></img>
            <div class="text-start ml-12">
                <h1 class="text-5xl  font-semibold text-rose-50 border-b-4 border- border-blue-500 w-3/6">{mov.Title}</h1>
                <h1 class="text-3xl font-medium text-rose-50 my-5"> Year {mov.Year}</h1>
                <h2 class="text-2xl font-medium text-rose-50 my-5">Type: {mov.Type}</h2>
            </div>
        </div>
    );
}
export default MovieInfo;