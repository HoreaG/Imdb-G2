class MovieList {
    constructor(){
       
        this.items = [];
    }
    fetchDataList(){
        return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies',{
            method : 'GET',
            success : (movieData)=>{
                //console.log(movieData.results);
                for( let i = 0; i < movieData.results.length; i++){
                    const movieItem  = movieData.results[i];
                    
                    const movieModel = new Movie();
                    movieModel._id = movieItem._id;
                    movieModel.Title = movieItem.Title;
                    movieModel.Year = movieItem.Year;
                    movieModel.Runtime = movieItem.Runtime;
                    movieModel.Genre = movieItem.Genre;
                    movieModel.Language = movieItem.Language;
                    movieModel.Country = movieItem.Country;
                    movieModel.Poster = movieItem.Poster;
                    movieModel.imdbRating = movieItem.imdbRating;
                    movieModel.imdbVotes = movieItem.imdbVotes;
                    movieModel.imdbID = movieItem.imdbID;
                    movieModel.Type = movieItem.Type;

                    this.items.push(movieModel);
                   // console.log(movieModel);
                }

            
            },
        error : () => {
            console.log('Errorrrr');
        }
        });
    }
}

