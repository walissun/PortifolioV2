

document.addEventListener("DOMContentLoaded", function() {
    const creditoscontainer = document.getElementById("creditos-container");
    const princial = document.getElementById("princial");

    
    creditoscontainer.classList.remove("esconder");

   
    setTimeout(function() {
        creditoscontainer.style.opacity = '0';
        setTimeout(function() {
            creditoscontainer.classList.add("esconder");
            princial.style.opacity = '1';
            princial.classList.remove("esconder");
        }, 1000); // Match the transition duration (1 second)
    }, 5000); // Match the animation duration (5 seconds)
});