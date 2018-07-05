window.onload=function(){

  var submit=document.getElementsByTagName("button")[0];
  var form=document.getElementsByTagName("form")[0];
  var newAuth=new Auth();
  
   submit.addEventListener("click", function(event){
   	event.preventDefault();
      newAuth.createAuth(form);
    })
}
