window.onload = ()=>{
    const movieList = new MovieList();
    movieList.fetchDataList().then(()=>{
      const globalContainer = document.getElementById('ceva');
      const moviesGlobalContainer = document.createElement('article');
      moviesGlobalContainer.setAttribute('class', 'movies-global-container');
      globalContainer.appendChild(moviesGlobalContainer);
      for( let i = 0; i < movieList.items.length; i++){
          const movieElement = document.createElement('div');
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
          movieTitle.innerHTML = movieList.items[i].Title;
          movieElement.appendChild(movieTitle);
      }
  }).catch(()=>{
      console.log('Eroare afisare');
  });
}