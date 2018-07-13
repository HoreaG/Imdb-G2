
 $(document).ready(()=>{
     
    const searchList = new SearchList();
    const searchBtn = document.getElementById('search-btn');	
     
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const input = document.getElementById('searchBar').value;
        console.log("CLICK: ", input );
        searchMovies(input);
        
    });

    function searchMovies (input){
        searchList.fetchMovieList(input).then((item)=>{
            console.log('RES', item.results);
        for( let i = 0; i < item.results.length; i++){
            console.log("Result of search: ",item.results[i]);
         }
       });
    }

    const movieList = new MovieList();
    movieList.fetchDataList().then(()=>{
      const globalContainer = document.getElementById('ceva');
      const moviesGlobalContainer = document.createElement('article');
      moviesGlobalContainer.setAttribute('class', 'movies-global-container');
      globalContainer.appendChild(moviesGlobalContainer);
      
      for( let i = 0; i < movieList.items.length; i++){
          console.log(movieList.items[i].Title);
          const movieElement = document.createElement('div');
          const ancor_element = document.createElement('a');
          ancor_element.setAttribute('href','../pages/movieDetails.html?postId='+movieList.items[i]._id);
          movieElement.setAttribute('class', 'movie-element');
          moviesGlobalContainer.appendChild(movieElement);
          const posterContainer = document.createElement('div');
          posterContainer.setAttribute('class', 'poster-container');
          movieElement.appendChild(posterContainer);
          //posterContainer.style.height = "500px";
          posterContainer.style.backgroundImage = `url("${movieList.items[i].Poster}")`;
          posterContainer.style.backgroundSize = "100% 100%";
          const imdbRating = document.createElement('p');
          imdbRating.innerHTML = "Rating &nbsp;" + movieList.items[i].imdbRating;
          imdbRating.setAttribute('class', 'imdb-rating');
          posterContainer.appendChild(imdbRating);
//          const moviePoster = document.createElement('img');
//          moviePoster.setAttribute('src',  movieList.items[i].Poster);
//          moviePoster.setAttribute('class', 'movie-poster');
//          posterContainer.appendChild(moviePoster);
          const movieTitle  = document.createElement('p');
          movieTitle.setAttribute('class', 'movie-title');
          ancor_element.appendChild(movieTitle);
          movieTitle.innerHTML = movieList.items[i].Title;
          movieElement.appendChild(ancor_element);
      }
  }).catch(()=>{
      console.log('Eroare afisare');

  });
  
});
     

