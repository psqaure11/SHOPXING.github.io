const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');

if(bar)
{
    bar.addEventListener("click", function(){
        nav.classList.add("active");
      });

   
}

if(close)
{
    close.addEventListener("click", function(){
        nav.classList.remove("active");
      });

   
}

var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  
}
