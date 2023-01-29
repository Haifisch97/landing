(function activeBurger(){
    if (document.getElementById("burger-bar").style.display !== "none"){
    document.getElementById("top-nav").classList.toggle("active");
    document.getElementById("burger-bar").classList.toggle("change");
}
})();