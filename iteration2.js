console.log("Tri par insertion - EXEMPLE 1 ");

console.log("Tableau base : " + [3,9,7,1,6,2,8,4,5]);

const tri = (list) => {
    for(let i = 0; i < list.length; i++){
        // stocker l'index de l'élément minimum
        // partie sur l'index du tableau (on travaille avec les index) ou l'on effectue une boucle sur la longueur du tableau
        let min = i; // on stocke l'index dans la variable min
        for(let j = i+1; j < list.length; j++){
            if (list[j] < list[min]){
                // mettre à jour l'index de l'élément minimum
                min = j;
            }
        }
        let indexList = list[i];
        list[i] = list[min];
        list[min] = indexList;
    }
    return list;
};
let tab1 = [3,9,7,1,6,2,8,4,5];
console.log("Tableau fin : "+tri(tab1));


console.log("Tri par insertion - EXEMPLE 2");
//le tri apr insertion va comparer la valeur précédente sur toute la longueur du tableau
function insertionSort(lst) {
    //debugger;
    let size = lst.length;
    for (let index = 1; index < size; index++) {
        // index = index du tableau (de 0 à 8)
        // boucle qui parcourt tous les éléments de notre liste dès le départ
        let current = lst[index];
        // mémorisation
        let j = index-1;
        // mémorisation
        while ((j > -1) && (current < lst[j])) {
            // tant que index-1 est > à -1 ET que le tableau d'index index-1
            lst[j+1] = lst[j];
            // alors le tableau index-1 + 1 = tableau index-1
            j--;
            //décrémentation du j
        }
        lst[j+1] = current;
        // le tableau index-1 + 1 devient la valeur courante
    }
    return lst;
}

let listeChiffre = [3,1,2,4];
console.log(insertionSort(listeChiffre));
