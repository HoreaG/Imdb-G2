class Movie {
  constructor(){
    this._id = "";
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
   return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/'+id,{
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

  MovieUpdate(updateId, updateData, authToken) {
    return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/'+updateId, {
        method: 'PUT',
        beforeSend: function(request) {
            request.setRequestHeader("x-auth-token", authToken);
        },
        data: updateData,
        success: function(response) {
            console.log('Response =', response);
            
        },
        error :()=>{
            console.log('Error: Movie was not edited!');
        }
    });
      console.log("Can't see me!");
  }
    
deleteMovie(id) {
  if (confirm("Are you sure you want to delete this movie?")) {
            $('.message').text("You deleted a movie!");
        } else {
            $('.message').text("You canceled the action!");
        }
  return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/' +id,{
    method: 'DELETE',
    success: (response)=>{
      console.log('You deleted movie');     
    },
    error: ()=> {
      console.log('Error!!');
    } 
  });
}

  newMovie(data){
    return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/'),{
      method : 'POST',
      data : data,
      success : (response)=> {
          this.Title = response.data.Title;
      },

      error : ()=> {
        console.log(' erorare');
      }
    }
  }

}