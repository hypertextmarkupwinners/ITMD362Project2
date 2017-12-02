(() => {
    
window.onload = function() {
    $('.classes').hide();
}

function semsel(value) {
    prompt("Enter your alternate pin: ");
    $('.classes').show();
}

function navbarScale() {
    var topbar = document.getElementById("topnavbar");
    if (topbar.className === "topnav") {
        topbar.className += " responsive";
    } else {
        topbar.className = "topnav";
    }
}

})();