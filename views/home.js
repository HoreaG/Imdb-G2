window.onload = ()=>{
    const movieList = new MovieList();
    movieList.fetchDataList().then(()=>{
      const container = document.getElementById('ceva');
      for( let i = 0; i < movieList.items.length; i++){
          let movieElement = document.createElement('div');
          //alert(movieList.items[i].Title);
          movieElement.innerHTML = movieList.items[i].Title;
          container.appendChild(movieElement);
      }
  }).catch(()=>{
      console.log('Eroare afisare');
  });
}