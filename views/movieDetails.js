
window.onload = function(){
    var current_id = getUrlParameter('postId');
    var current_movie = new Movie();

    current_movie.MovieFetchData(current_id).then(()=>{
        const title = document.getElementById('movie_title');
        title.innerHTML = current_movie.Title;
    });
    const editBtn = document.getElementById('edit-btn');
    const submitBtn = document.getElementById('updateChanges');
    const editModal = document.getElementById('edit-modal');
    editBtn.addEventListener('click', function(e) {
        editModal.style.display = "block";
        const hiddenMovieId = document.getElementById('movie-id');
        hiddenMovieId.value = current_id;
        const movieTitle = document.getElementById('movie-title');
        movieTitle.value = current_movie.Title;
        const movieYear = document.getElementById('movie-year');
        movieYear.value = current_movie.Year;
        const movieRuntime = document.getElementById('movie-runtime');
        movieRuntime.value = current_movie.Runtime;
        const movieGenre = document.getElementById('movie-genre');
        movieGenre.value = current_movie.Genre;
        const movieLanguage = document.getElementById('movie-language');
        movieLanguage.value = current_movie.Language;
        const movieCountry = document.getElementById('movie-country');
        movieCountry.value = current_movie.Country;
        const moviePoster = document.getElementById('movie-poster');
        moviePoster.value = current_movie.Poster;
        const movieImdbRating = document.getElementById('movie-imdb-rating');
        movieImdbRating.value  = current_movie.imdbRating;
        const movieImdbVotes = document.getElementById('movie-imdb-votes');
        movieImdbVotes.value = current_movie.imdbVotes;
        const movieImdbId = document.getElementById('movie-imdb-id');
        movieImdbId.value = current_movie.imdbID;
        console.log(current_movie.imdbID);
        const movieType = document.getElementById('movie-type');
        movieType.value = current_movie.Type;
    });
    submitBtn.addEventListener('click', function(e) {
        editModal.style.display = "none";
    })
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
