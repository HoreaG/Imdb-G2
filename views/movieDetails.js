
window.onload = function(){
    
    var current_id = getUrlParameter('postId');
    var current_movie = new Movie();
     const editBtn = document.getElementById('edit-btn');
    const submitBtn = document.getElementById('updateChanges');
    const modalContainer = document.getElementById('edit-modal-container')
    const editModal = document.getElementById('edit-modal');
    const closeModal = document.getElementById('close-modal');
    
    const hiddenMovieId = document.getElementById('movie-id');
    const movieTitle = document.getElementById('movie-title');
    const movieYear = document.getElementById('movie-year');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieGenre = document.getElementById('movie-genre');
    const movieLanguage = document.getElementById('movie-language');
    const movieCountry = document.getElementById('movie-country');
    const moviePoster = document.getElementById('movie-poster');
    const movieImdbRating = document.getElementById('movie-imdb-rating');
    const movieImdbVotes = document.getElementById('movie-imdb-votes');
    const movieImdbId = document.getElementById('movie-imdb-id');
    const movieType = document.getElementById('movie-type');

    current_movie.MovieFetchData(current_id).then(()=>{
        const title = document.getElementById('movie_title');
        title.innerHTML = current_movie.Title;
        console.log(current_movie.imdbID);
    }).then(function(){
   
    
    editBtn.addEventListener('click', function(e) {
        modalContainer.style.display = "block";
        hiddenMovieId.value = current_id;
        movieTitle.value = current_movie.Title;
        movieYear.value = current_movie.Year;
        movieRuntime.value = current_movie.Runtime;
        movieGenre.value = current_movie.Genre;
        movieLanguage.value = current_movie.Language;
        movieCountry.value = current_movie.Country;
        moviePoster.value = current_movie.Poster;
        movieImdbRating.value  = current_movie.imdbRating;
        movieImdbVotes.value = current_movie.imdbVotes;
        movieImdbId.value = current_movie.imdbID;
        console.log(current_movie);
        movieType.value = current_movie.Type;
    })
        }).then(()=>{
        closeModal.addEventListener('click', function(){
            modalContainer.style.display = 'none';
        })
    }).then(function(){
    submitBtn.addEventListener('click', function(e) {
        
        const updateId = hiddenMovieId.value;
        const updateTitle = movieTitle.value;
        const updateYear = movieYear.value;
        const updateRuntime = movieRuntime.value;
        const updateGenre = movieGenre.value;
        const updateLanguage = movieLanguage.value;
        const updateCountry = movieCountry.value;
        const updatePoster = moviePoster.value;
        const updateImdbRating = movieImdbRating.value;
        const updateImdbVotes = movieImdbVotes.value;
        const updateImdbId = movieImdbId.value;
        const updateType = movieType.value;
        
        const updateData = {
            Title: updateTitle,
            Year: updateYear,
            Runtime: updateRuntime,
            Genre: updateGenre,
            Language: updateLanguage,
            Country: updateCountry,
            Poster: updatePoster,
            imdbRaring: updateImdbRating,
            imdbVotes: updateImdbVotes,
            imdbID: updateImdbId,
            Type: updateType
        }
        console.log(updateData);
        modalContainer.style.display = "none";
        
        current_movie.MovieUpdate(updateId, updateData);
        
    });
        });
}
                

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};