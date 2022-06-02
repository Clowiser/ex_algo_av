console.log("Labyrinthe");
console.log(mazes);

let mazeLength = mazes["3"]["ex-0"].length;

function labyrinthe(){
    for (let i = 0; i < mazeLength; i++){
        let wrapper = document.getElementById('wrapper');
        // affichage sur le html grâce getElementByID
        let newCase = document.createElement("div");
        // création de la/les div
        newCase.classList.add('case');
        // ajout du css sur la class case par rapport à la div déclaré newCase
        wrapper.appendChild(newCase);
        // ajoute le nombre de noeuds (ici les div) créé par rapport à la taille du labyrinthe à l'élément wrapper
    }
}

labyrinthe();

