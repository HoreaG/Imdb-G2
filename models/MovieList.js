class MovieList {
    constructor(){
       
        this.items = [];
        this.next = null;
        this.prev = null;
    }
    fetchDataList(s){
        return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/?take=10&skip='+s,{
            method : 'GET',
            success : (movieData)=>{
                //console.log(movieData);

                
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

                this.next = movieData.pagination.links.next;
            
            },
        error : () => {
            console.log('Errorrrr');
        }
        });
    }
   
}

