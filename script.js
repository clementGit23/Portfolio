// click enter, récupère valeur input
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var input = document.getElementById(`cmd-input`).value;
    }
});
