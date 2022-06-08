//console.log(mazes);
let wrapper = document.getElementById('wrapper');
let maze;

const displayMaze = (width, way) => {
    //Partie en relation avec le html et le css
    //debugger;
    const root = document.documentElement;
    //documentElement : renvoie l'élément racine du document (par exemple, l'élément <html> pour les documents HTML)
    root.style.setProperty('--maze-width', width);
    root.style.setProperty('--maze-ex', way);
    //méthode définit une nouvelle valeur pour une propriété sur un objet de déclaration de style CSS - setProperty(propertyName, value)

    let entrance;
    maze = mazes[width][way]

    for (let i = 0; i < maze.length; i++) {
        const cases = maze[i];
        //console.log(maze[i]); // affiche l'ensemble du plateau
        let div = document.createElement("div");
        // création de la/les div
        div.classList.add('case');
        // ajout du css sur la class case par rapport à la div déclaré div
        div.setAttribute('id', '' + i);
        // ajout d'un id dont la valeur itère (c'est ça que je cherchais l'autre fois bordel!)
        wrapper.appendChild(div);
        // ajoute le nombre de noeuds (ici les div) créé par rapport à la taille du labyrinthe à l'élément wrapper

        //Cases et Mur du labyrinthe : afficher les bordures/couleurs si = true
        if (cases.entrance === true) {
            div.style.background = "orange";
            entrance = cases;
            // définit le départ
        }
        if (cases.walls[0] === true) {
            div.style.borderTop = "1px solid red";
        }
        if (cases.walls[1] === true) {
            div.style.borderRight = "1px solid red";
        }
        if (cases.walls[2] === true) {
            div.style.borderBottom = "1px solid red"
        }
        if (cases.walls[3] === true) {
            div.style.borderLeft = "1px solid red";
        }
        if (cases.exit === true) {
            div.style.background = "green";
        }
        cases.div = div;
        // définir les cases
    }
    browse(maze, entrance);
    // appel de la fonction
}

//SELECTION - DONNEES DYNAMIQUES
//sélection labyrinthe
let selectMaze = document.getElementById("maze-select");

//Parcours de mazes + mettre la valeur d'un maze dans une option
// for in :  permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles.
// Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un bloc d'instructions).
for (let m in mazes) {
    let option = document.createElement("option");
    option.textContent = m;
    // textContent représente le contenu textuel d'un nœud et de ses descendants.
    option.value = m;
    // = renvoie donc toutes les valeurs contenues dans chaque object.maze de mazes
    selectMaze.appendChild(option);
    // ajoute le nombre d'option créé par rapport à la taille du mazes dans la balise du selectMaze
}

let size;
let way;

//action à la sélection du labyrinthe
selectMaze.addEventListener('change', function () {
    size = selectMaze.value;
    displayMaze(size, way);
})

//sélection parcours
let selectPath = document.getElementById("path-select");

//action à la sélection du chemin
selectMaze.addEventListener('change', function () {
    way = selectPath.value;
    displayMaze(size, way);
})

// au nouveau onchange, supprimer l'ancien labyrinthe et afficher le nouveau
document.getElementById("suppression").reset();


//parcourir le labyrinthe + laisser un grain de riz (mettre true) quand visiter
const browse = (maze, entrance) => {
    //prend en paramètre le Labyrinthe + l'entrée
    //debugger;
    let stack = [];
    // déclaration d'un tableau vide dans lequel on mettra le chemin réalisé
    let advance = 0;
    // déclaration d'une variable représentant l'avancée en affichant des chiffres sur la plateau (grâce à v.div.innerHTML = "" + advance++)

    stack.push(entrance);
    // insert l'entrée dans le tableau vide, on commence avec elle

    while (stack.length !== 0) {
        // tant que la longueur du tableau n'est pas vide...
        let v = stack.pop();
        //... déclaration de v (qui est la position actuelle), on supprime
        // pop() supprime le dernier élément d'un tableau et retourne cet élément.
        //console.log(v);

        if (v.visited !== true) {
            //if v was not visited
            v.visited = true;
            //mark v as visited
            v.div.innerHTML = "" + advance++;
            if (v.entrance !== true && v.exit !== true) {
                v.div.style.background = "gray";
            }
        }

        if (v.exit === true) {
            //if v is the exit :
            return console.log("Exit !");
            //return alert("Bravo ! Vous êtes sorti !");
        }

        for (const w of getNeighbours(v)) {
            //Pour tous les voisins w de v
            //console.log(w);
            if (w.visited !== true) {
                //if w was not visited :
                stack.push(w);
                //insert w in the stack (pushe-le)
            }
        }
    }
}


function getNeighbours(cases) {
    const neighbours = [];

    if (cases.walls[0] !== true) {
        neighbours.push(getTop(cases))
    }
    if (cases.walls[1] !== true) {
        neighbours.push(getRight(cases))
    }
    if (cases.walls[2] !== true) {
        neighbours.push(getBottom(cases))
    }
    if (cases.walls[3] !== true) {
        neighbours.push(getLeft(cases))
    }

    return neighbours;
}


function getTop(cases) {
    let x = cases.posX - 1;
    let y = cases.posY;

    return maze[x * size + y];
}

function getRight(cases) {
    let x = cases.posX;
    let y = cases.posY + 1;

    return maze[x * size + y];
}

function getBottom(cases) {
    let x = cases.posX + 1;
    let y = cases.posY;

    return maze[x * size + y];
}

function getLeft(cases) {
    let x = cases.posX;
    let y = cases.posY - 1;

    return maze[x * size + y];
}

