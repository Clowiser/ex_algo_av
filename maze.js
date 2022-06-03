console.log(mazes);
let mazeLength = mazes["3"]["ex-0"].length;

let wrapper = document.getElementById('wrapper');
// affichage sur le html grâce getElementByID

const maze = (width, way) => {
    //debugger;

    const root = document.documentElement;
    root.style.setProperty('--maze-width', width);
    root.style.setProperty('--maze-ex', way);
    // let maze = mazes[width][way]

    for (let i = 0; i < mazeLength; i++) {
        let newCase = document.createElement("div");
        // création de la/les div
        //newCase.setAttribute("id", "0"); - pour attribuer un id
        newCase.classList.add('case');
        // ajout du css sur la class case par rapport à la div déclaré newCase
        wrapper.appendChild(newCase);
        // ajoute le nombre de noeuds (ici les div) créé par rapport à la taille du labyrinthe à l'élément wrapper

        let mazeWall = mazes["3"]["ex-0"][i].walls.length;
        let start = mazes["3"]["ex-0"][i].entrance;
        let end = mazes["3"]["ex-0"][i].exit;

        for (let j = 0; j < mazeWall; j++) {
            if (start === true) {
                newCase.style.background = "orange";
            }
            if (mazes["3"]["ex-0"][i].walls[0] === true) {
                newCase.style.borderTop = "1px solid red";
            }
            if (mazes["3"]["ex-0"][i].walls[1] === true) {
                newCase.style.borderRight = "1px solid red";
            }
            if (mazes["3"]["ex-0"][i].walls[2] === true) {
                newCase.style.borderBottom = "1px solid red"
            }
            if (mazes["3"]["ex-0"][i].walls[3] === true) {
                newCase.style.borderLeft = "1px solid red";
            }
            if (end === true) {
                newCase.style.background = "green";
            }
        }
    }
}


let visited = false;
let case_voisine_is_empty = false;
let case_voisine_is_not_empty = true;
let stack = [];
let voisin = false;


//parcourir le labyrinthe + laisser un grain de riz (mettre true) quand visite
const browse = (start) => {

    for (let i = 0; i < mazeLength; i++) {
        start = mazes["3"]["ex-0"][i].entrance;

        let node = wrapper.children[i];
        console.log(node);

        stack.push(mazes["3"]["ex-0"][i]);
        console.log(stack)

        //tant que la stack n'est pas vide, on pop
        while (!stack) {
            stack.pop();
        }

        // si l'un des murs = false => avance de ce côté
        if (mazes["3"]["ex-0"][i].walls[0] || mazes["3"]["ex-0"][i].walls[1] || mazes["3"]["ex-0"][i].walls[2] || mazes["3"]["ex-0"][i].walls[3] === false) {
            voisin = true;
        }

        if (visited) {
            visited = true;
        }

        if (case_voisine_is_empty === !visited) {

        }

        //si cul de sac retourner en arrière => sauf 1 grain de riz
        //donc faire devenir le déplacement avec un grain de riz à true
        if (case_voisine_is_not_empty) {

        }

        // const cellDiv = wrapper.children[i];
        // cellDiv.innerHTML = i;
    }
}

//personnage
function displayChar() {
    let wrapper = document.getElementById('wrapper');
    let char = document.createElement("div");
    char.classList.add('character');
    wrapper.appendChild(char);
}

//
// function displayRiz() {
//     let wrapper = document.getElementById('wrapper');
//     let riz = document.createElement("div");
//     riz.classList.add('riz');
//     wrapper.appendChild(riz);
// }


maze();
browse();


// IDEES
// for (let i = 0; i < mazeLength; i++) {
// const cellDiv = wrapper.children[i];
// cellDiv.innerHTML = i;
// }

// if (mazes["3"]["ex-0"][i].walls[0] || mazes["3"]["ex-0"][i].walls[1] || mazes["3"]["ex-0"][i].walls[2] || mazes["3"]["ex-0"][i].walls[3] === false) {
//
// }
//
// if (cellDiv === wrapper.children[0]) {
//     console.log("Case de départ")
// }




