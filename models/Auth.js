function Auth(){
  this._id="";
  this.username="";
  this.password="";
}

Auth.prototype.createAuth=function (form){
  console.log(form);
    var url = "https://ancient-caverns-16784.herokuapp.com/auth/register";
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    $.post(url, formData);
}
