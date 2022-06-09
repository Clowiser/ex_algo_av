//console.log(mazes);
let wrapper = document.getElementById('wrapper');
const root = document.documentElement;
let maze;

const displayMaze = (width, way) => {
    wrapper.innerHTML = "";
    //magie!

    //Partie en relation avec le html et le css
    //documentElement : renvoie l'élément racine du document (par exemple, l'élément <html> pour les documents HTML)
    root.style.setProperty('--maze-width', width);
    root.style.setProperty('--maze-ex', way);
    //méthode définit une nouvelle valeur pour une propriété sur un objet de déclaration de style CSS - setProperty(propertyName, value)

    let entrance;
    let exit;
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
            div.style.background = "green"
            exit = cases;
        }
        cases.div = div;
        // définir les cases
    }
    //DFS ITERATIF
    //console.log(browse(maze, entrance));

    //DFS RECURSIF
    //console.log(recursiveMaze(entrance).reverse());

    //BFS ITERATIF
    console.log(bfs(entrance));
}

//SELECTION - DONNEES DYNAMIQUES
let size;
let way;

//sélection labyrinthe
let selectMaze = document.getElementById("maze-select");

//Parcours de mazes + mettre la valeur d'un maze dans une option
// for in : permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles.
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

//action à la sélection du labyrinthe
selectMaze.addEventListener('change', function () {
    size = selectMaze.value;
    displayMaze(size, way);
})

//sélection parcours
let selectPath = document.getElementById("path-select");

//action à la sélection du chemin
selectPath.addEventListener('change', function () {
    way = selectPath.value;
    displayMaze(size, way);
})


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
            //console.log(v);
            // si v was not visited
            v.visited = true;
            // marqué v comme visited
            v.div.innerHTML = "" + advance++;
            // itération de notation
            if (v.entrance !== true && v.exit !== true) {
                v.div.style.background = "gray";
            }
            // background color = gris sauf pour entrance & exit ne change pas
        }

        for (const w of getNeighbours(v)) {
            //Pour tous les voisins w de v
            if (w.visited !== true) {
                //if w was not visited :
                w.parent = v;
                //Tag v as the parent of w : tag la PA comme parent des voisins de la PA
                stack.push(w);
                //insert w in the stack (pushe-le)
            }
        }

        if (v.exit === true) {
            //if v is the exit :
            let path = [];
            //définit un tab vide dans lequel on va pusher le chemin
            while (v.parent) {
                //tant que v.parent = sorte de chemin de exit à l'entrée (car l'entrée n'a pas de parent, c'est le papi)
                //La propriété Window.parent est une référence au parent de la fenêtre ou du cadre embarqué (subframe).
                v = v.parent;
                // redéclare que v (soit position actuelle) = à ce chemin de exit à l'entrée
                path.push(v);
                //push dans path chacune des PA
            }
            return path.reverse();
            //retourne le tableau à l'envers
        }
    }
}

//méthode qui correspond aux voisins
const getNeighbours = (cases) => {
    const neighbours = [];
    //déclaration d'un tab vide

    //top
    if (cases.walls[0] !== true) {
        neighbours.push(getTop(cases))
    }
    //right
    if (cases.walls[1] !== true) {
        neighbours.push(getRight(cases))
    }
    //bottom
    if (cases.walls[2] !== true) {
        neighbours.push(getBottom(cases))
    }
    //left
    if (cases.walls[3] !== true) {
        neighbours.push(getLeft(cases))
    }

    return neighbours;
}

//ensemble des méthodes pour le plateau en 2D : posY et posX
//placement des cases
//retourne le placement de la case X (+/-1) * la taille du tab + placement de la case Y (-/+1)
const getTop = (cases) => {
    let x = cases.posX - 1;
    let y = cases.posY;
    return maze[x * size + y];
}

const getRight = (cases) => {
    let x = cases.posX;
    let y = cases.posY + 1;
    return maze[x * size + y];
}

const getBottom = (cases) => {
    let x = cases.posX + 1;
    let y = cases.posY;
    return maze[x * size + y];
}

const getLeft = (cases) => {
    let x = cases.posX;
    let y = cases.posY - 1;
    return maze[x * size + y];
}

//Méthode récursive (fait appel à elle-même)
const recursiveMaze = (entrance, advance = 0) => {
    //debugger;
    //on définit avec les paramètres de l'entrée (case de départ) / advance est optionnelle, c'est pour afficher la numérotation
    let v = entrance;
    //on déclare (au départ) v comme entrée (elle va s'itérer par la suite)
    //console.log(v);
    // c'est la position actuelle qui va changer à chaque apppel de la méthode via la concaténation
    if (v.visited !== true) {
        //si v = Position actuelle est différent de true
        v.visited = true;
        // devient true
        v.div.innerHTML = "" + advance;
        //affichage des chiffres

        if (v.entrance !== true && v.exit !== true) {
            v.div.style.background = "gray";
        }

        if (v.exit === true) {
            //si sortie atteinte (vu qu'elle sera égale à true)
            //tant qu'elle n'est pas atteinte, elle n'est pas égale à true
            return [v];
        }

        for (const w of getNeighbours(v)) {
            //pour tous les voisins w de v
            // l'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
            let path = recursiveMaze(w, advance + 1)
            // exécution de la méthode récursive, s'appelant elle-même, qui prend en paramètre w (qui correspond aux voisins) + itération par rapport aux chiffres
            // déclaration de la méthode à path

            /* [ex : en partant du départ, v = entrance (x:0, y:0) et w (son voisin) sera donc = (x:0, y:1) ou (x:1, y:0) en fonction de la position de son voisin
            puis, w deviendra v entrance */

            if (path) {
                //si la méthode est true
                v.div.style.background = "pink";
                // change la couleur en gris sauf pour entrance et exit
                return path.concat(v)
                // fin for : retour de la méthode qui concatène (ajoute)
                // c'est la CONCATENATION qui fait l'avancement à chaque tout et qui fait que v prend + 1 et donc permet l'avancement
            }
        }
    }

}

const bfs = (entrance, advance = 0) => {
    let Q = [];

    Q.push(entrance);

    while (Q.length !== 0) {

        while (Q !== true) {
            let v = Q.shift();
            //shift() permet de retirer le premier élément d'un tableau et de renvoyer cet élément.

            if (v.visited !== true) {
                v.visited = true;
                v.div.innerHTML = "" + advance++;

                if (v.entrance !== true && v.exit !== true) {
                    v.div.style.background = "black";
                    //case qu'il a visité
                }
            }

            if (v.exit === true) {
                let path = [];
                while (v.parent) {
                    v = v.parent;
                    path.push(v);
                    v.div.style.background = "pink";
                }

                return path.reverse();
            }

            for (const w of getNeighbours(v)) {
                if (w.visited !== true) {
                    w.parent = v;
                    Q.push(w);
                }
            }
        }
    }
}

