(function (){

    function activeBurger () { 
        if (document.querySelector('.burger-menu').style.display !== "none"){
            document.querySelector('.header__navigation').classList.toggle("active");
            document.querySelector('.burger-menu').classList.toggle("change");
    }
}

    document.querySelector('.burger-menu').addEventListener('click', activeBurger);

})();