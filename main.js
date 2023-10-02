document.addEventListener("DOMContentLoaded", init)
function init(){
  document.getElementById("gomb").addEventListener("click",modify_url);
  document.getElementById("gomb").addEventListener("click",modify_width);
  document.getElementById("gomb").addEventListener("click",modify_thickness);
  document.getElementById("gomb").addEventListener("click",modify_color);
  document.getElementById("gomb2").addEventListener("click",modify_mode);

}
function modify_url(){
  document.getElementById("kep").src=document.getElementById("urlx").value;
}
function modify_width(){
  var imgx=document.getElementById("kep");
  imgx.style.width=document.getElementById("szelesseg").value+"px";
}
function modify_thickness(){
  var imgx=document.getElementById("kep");
  imgx.style.borderWidth=document.getElementById("vastagsag").value+"px";
}
function modify_color(){
  var imgx=document.getElementById("kep");
  imgx.style.borderColor=document.getElementById("szin").value;
}
function modify_mode(){
document.body.classList.toggle("dark-mode");
}