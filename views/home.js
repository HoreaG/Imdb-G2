
 $(document).ready(()=>{
     
    const searchList = new SearchList();
    const searchBtn = document.getElementById('search-btn');
    //const add_btn = document.getElementById("add-btn");
    const modal_container = document.getElementById('add-modal-container');
    const close_modal_add = document.getElementById('close-container');
    
    const authToken = localStorage.getItem('loggedUser');
    console.log('AuthToken:', authToken);
    if(authToken !== null) {
        const h2MostRecentMvies = document.getElementById('h2-most-recent-movies');
        const searchBarForm = document.getElementById('searchBar-form');
        const displayAddBtn = document.createElement('button');
        displayAddBtn.setAttribute('id', 'add-btn');
        displayAddBtn.innerHTML = "Add new movie";
        h2MostRecentMvies.parentNode.insertBefore(displayAddBtn, h2MostRecentMvies.nextSibling);
    }
    const add_btn = document.getElementById('add-btn');
    add_btn.addEventListener('click',(e)=>{
        modal_container.style.display = "block";
        close_modal_add.addEventListener('click',()=>{
            modal_container.style.display = "none";
        })
        const new_movie =  new Movie();

        const add_title = document.getElementById('movie-title');
        const add_year = document.getElementById('movie-year');
        const add_runtime = document.getElementById('movie-runtime');
        const add_genre = document.getElementById('movie-genre');
        const add_language = document.getElementById('movie-language');
        const add_country = document.getElementById('movie-country');
        const add_poster = document.getElementById('movie-poster');
        const add_imdb_rating = document.getElementById('movie-imdb-rating');
        const add_imdb_votes = document.getElementById('movie-imdb-votes');
        const add_imdb_id = document.getElementById('movie-imdb-id');
        const add_type = document.getElementById('movie-type');
        const add_to_database = document.getElementById('updateChanges');

        
        add_to_database.addEventListener('click',()=>{
            const addObj = {
                Title: add_title.value,
                Year: add_year.value,
                Runtime:add_runtime.value,
                Genre: add_genre.value,
                Language: add_language.value,
                Country: add_country.value,
                Poster: add_poster.value,
                imdbRaring: add_imdb_rating.value,
                imdbVotes: add_imdb_votes.value,
                imdbID: add_imdb_id.value,
                Type: add_type.value
            }
           
            new_movie.addMovie(addObj,authToken);
        });

        

    });
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
     

