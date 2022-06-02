console.log("Labyrinthe");
console.log(mazes);

let mazeLength = mazes["3"]["ex-0"].length;


function displayMaze(){
    debugger;
    for (let i = 0; i < mazeLength; i++){
        let wrapper = document.getElementById('wrapper');
        // affichage sur le html grâce getElementByID
        let newCase = document.createElement("div");
        // création de la/les div
        newCase.classList.add('case');
        // ajout du css sur la class case par rapport à la div déclaré newCase
        wrapper.appendChild(newCase);
        // ajoute le nombre de noeuds (ici les div) créé par rapport à la taille du labyrinthe à l'élément wrapper

        let mazeWall = mazes["3"]["ex-0"][i].walls[i];
        console.log(mazeWall);

        if(mazeWall === false){
           newCase.style.borderRight = "none";
        }
        if(mazeWall === false){
        newCase.style.borderLeft = "none";
        }
        if(mazeWall === false){
             newCase.style.borderTop = "none";
        }
        if(mazeWall === false){
             newCase.style.borderBottom = "none";
        }
    }
}

displayMaze();
