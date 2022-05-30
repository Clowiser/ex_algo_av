//Activité préliminaire

// Tri tableau
console.log([3,9,7,1,6,2,8,4,5]);

const tri = (list) => {
    debugger;
    for(let i = 0; i < list.length; i++){
        //stocker l'index de l'élément minimum
        let min = i;
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
console.log(tri(tab1));


const tribulle = (tableau) => {
let passage = 0;
for(let i = 0; i<tableau.length; i++){
}
}