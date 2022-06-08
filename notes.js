const displayMaze = (width, way) => {
    //debugger;

//const root = document.documentElement;
//root.style.setProperty('--maze-width', width);
//root.style.setProperty('--maze-ex', way);
    maze = mazes["3"]["ex-0"]

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


//browse();


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

//for (let i = 0; i < stack.length; i++) {
// start = mazes["3"]["ex-0"][i].entrance;
//let node = wrapper.children[i];
//console.log(node);

//newCase.setAttribute("id", "0"); - pour attribuer un id
//newCase.setAttribute('id', '' + i);
//if (visited) {
//visited = true;
//}
// si l'un des murs = false => avance de ce côté
//if (mazes["3"]["ex-0"][i].walls[0] || mazes["3"]["ex-0"][i].walls[1] || mazes["3"]["ex-0"][i].walls[2] || mazes["3"]["ex-0"][i].walls[3] === false) {
//voisin = true;
//}


function deleteMaze() {
    if (size && way) {
        document.getElementById("suppression").reset(size, way);
    }
}



