

window.onload = function(){
    var current_id = getUrlParameter('postId');
    var current_movie = new Movie();
   
    current_movie.MovieFetchData(current_id).then(()=>{
        const title = document.getElementById('movie_title');
        title.innerHTML = current_movie.Title;
    });

   
   
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};