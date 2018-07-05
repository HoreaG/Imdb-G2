window.onload=function(){

  var submit=document.getElementsByTagName("button")[0];
  var form=document.getElementsByTagName("form")[0];
  var newAuth=new Auth();
  
   submit.addEventListener("click", function(event){
   	event.preventDefault();
   	if(form.password.value===form.passConf.value){	
      newAuth.createAuth(form);
   	}else{
   		console.log("passwords dont match")
   	}
    })
}
