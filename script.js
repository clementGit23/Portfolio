const terminal = document.querySelector(".terminal");

// click enter, récupère valeur input
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        let input = document.getElementById(`cmd-input`).value;

        //Création div
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");

        // Balises
        const BaseLigneVert = document.createElement("span");
        const BaseLigne2points = document.createElement("p");
        const BaseLigneBleu = document.createElement("span");
        const BaseLigneDollar = document.createElement("p");
        const result = document.createElement("p");


        BaseLigneVert.classList.add("green");
        BaseLigneVert.innerText = "clement@choeur";
        resultDiv.appendChild(BaseLigneVert);

        // Création base-ligne ":"
        BaseLigne2points.innerText = ":";
        resultDiv.appendChild(BaseLigne2points);

        // Création base-ligne "/portfolio"
        BaseLigneBleu.classList.add("blue");
        BaseLigneBleu.innerText = "/portfolio";
        resultDiv.appendChild(BaseLigneBleu);

        //Création base-ligne "$"
        BaseLigneDollar.classList.add("margin-right")
        BaseLigneDollar.innerText = "$";
        resultDiv.appendChild(BaseLigneDollar);

        //Création résultat commande
        result.innerText = input;
        resultDiv.appendChild(result);

        //Affichage du résultat de la commande
        terminal.appendChild(resultDiv);
  
    }
});
