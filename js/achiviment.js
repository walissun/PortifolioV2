

document.addEventListener("DOMContentLoaded", function() {
    const creditoscontainer = document.getElementById("creditos-container");
    const princial = document.getElementById("princial");

    
    creditoscontainer.classList.remove("esconder");

   
    setTimeout(function() {
        creditoscontainer.classList.add("esconder");
        princial.classList.remove("esconder");
    }, 10000); // Match the animation duration (10 seconds)
});
