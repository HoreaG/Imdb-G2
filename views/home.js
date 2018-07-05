 $(document).ready(()=>{
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
          const moviePoster = document.createElement('img');
          moviePoster.setAttribute('src',  movieList.items[i].Poster);
          moviePoster.setAttribute('class', 'movie-poster');
          posterContainer.appendChild(moviePoster);
          const movieTitle  = document.createElement('p');
          ancor_element.appendChild(movieTitle);
          movieTitle.innerHTML = movieList.items[i].Title;
          movieElement.appendChild(ancor_element);

        


      }
  }).catch(()=>{
      console.log('Eroare afisare');
  });
 });
   
