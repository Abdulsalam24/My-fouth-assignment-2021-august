function toggle(){
    var menu = document.getElementById("menu-slide");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else{
        menu.style.display = "block"
    }
} 


let slider = document.querySelector(".portfolio-div");
let animateName = document.querySelector(".image");
let clickRight = document.querySelector(".click1");
let clickLeft = document.querySelector(".click2");




clickRight.addEventListener("click" , function(){
    slider.style.animationName = "slide";
});

clickLeft.addEventListener("click" , function(){
    slider.style.animationName = "slider";
});





    
















