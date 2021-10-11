for(var i=0 ; i<document.querySelectorAll(".panel").length;i++){
  document.querySelectorAll(".panel")[i].addEventListener("click",function(i){
      document.querySelector(".panel.active").classList.remove("active");
    this.classList.add("active");



  });
}
