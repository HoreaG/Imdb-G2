class Movie {
  constructor(){
    this._id = null;
    this.Title = "";
    this.Year = "";
    this.Runtime = "";
    this.Genre = "";
    this.Language = "";
    this.Country = "";
    this.Poster = "";
    this.imdbRating = "";
    this.imdbVotes = "";
    this.imdbID = "";
    this.Type = ""
  }

  MovieFetchData(id){
   return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies'+id,{
     method : 'GET',
     success : (data)=>{
      this._id = data.id;
      this.Title = data.Title;
      this.Year = data.Year;
      this.Runtime = data.Runtime;
      this.Genre = data.Genre;
      this.Language = data.Language;
      this.Country = data.Country;
      this.Poster = data.Poster;
      this.imdbRating = data.imdbRating;
      this.imdbVotes = data.imdbVotes;
      this.imdbID = data.imdbID;
      this.Type = data.Type;
    },
    error :()=>{
     console.log('Error on showing the detail movie');
   }
  });
 }

 deleteMovie(id) {

  return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/' +"5acf8c967327000021063f8c",{
    method: 'DELETE',
    success: (response)=>{
      console.log('You deleted movie');
      
    },
    error: ()=> {
      console.log('Error!!');
    } 
  });
  }
 
}