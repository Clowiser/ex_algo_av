console.log("Algo Avancé");
//Une fonction récursive est une fonction qui s’appelle elle-même. C'est-à-dire que dans le corps de la fonction, il y a un appel à elle-même.
//Utiliser le debugger via le code debugger, à placer en haut du bloc de code de la méthode

console.log("2 - Factorielle");

//Écrivez une fonction récursive qui retourne la factorielle d’un nombre n, passé en paramètre - faire une fonction qui retourne 1 quand n vaut 1
function retourneUn(n) {
    if (n === 1) {
        return 1;
    }
    return n;
}

console.log("Exo 1 : " + retourneUn(1));

//Quand n est plus grand que 1, retourner la multiplication de n, par le résultat de factorielle n-1
function factorielle(n) {
    //debugger;
    if (n > 1) {
        console.log(n);
        return factorielle(n - 1) * n;
    }
    return n;
}

console.log("Exo 2 : " + factorielle(5));


console.log("3 - Fibonacci");

//Les nombres de la suite de Fibonacci, noté Fn ou F(n) sont égaux à la somme des deux termes précédents.
function fibonacci(n) {
    //debugger;
    if (n < 2) {
        //console.log(n); // série de 1 et de 0
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log("Exo 3 : " + fibonacci(9));
// explications :
// n = 9, tant que n = 9, il passe directement au second return partie 1 fibonacci(n - 1)
// si n passe à < 2, il passe directement au second return partie 2 soit fibonacci(n - 2)


console.log("4 - Conjecture de Syracuse");
//Modulo avec la formule n % 2 = soit 0 (paire) soit 1 (impaire) pour savoir si un entier est paire ou impair
/*function syracuse(n){
    if((n % 2) === 0){
        console.log("paire")
        return n/2;
    }
    if((n % 2) === 1){
        console.log("impaire");
        return (n * 3)+1;
    }
    return n;
}
console.log("U+1 est égal à "+ syracuse(160));
// 160 = 80
*/

// Écrivez une fonction récursive qui retourne la valeur U(i) - le calcul se fait pour les U(n)
// il faut calculer le résultat du U(i), le stocker dans une variable puis vérifier si paire/impaire
// function syracuseR(i){
//     const N = 15; // base de 15
//     //debugger;
//     if(i === 0) {
//         return N;
//     }
//         let resultat = syracuseR(i-1);
// appel de la fonction elle-même en diminuant i de 1
//
//         if (resultat % 2 === 0) {
//             //console.log("paire")
//             return resultat / 2;
//         } else {
//             //console.log("impaire");
//             return (resultat * 3) + 1;
//         }
//     }
// console.log("U+1 est égal à "+ syracuseR(17));

// Supprimez la globale et passez N en paramètre de la fonction U
function syracuseR(N, i) {
    //debugger;
    if (i === 0) {
        return N;
    }
    let resultat = syracuseR(N, i - 1);

    if (resultat % 2 === 0) {
        //console.log("paire")
        return resultat / 2;
    } else {
        //console.log("impaire");
        return (resultat * 3) + 1;
    }
}

console.log("U+1 est égal à " + syracuseR(15, 17));


console.log("5 - PGCD");
// On peut calculer le PGCD de deux entiers de la manière suivante :
// pgcd(a, 0) = a et donc b = 0
// pgcd(a, b) = pgcd(b, r) avec r = a mod b, si b ≠ 0

function pgcd(a, b) {
    if (b === 0) {
        return a; // dans la méthode, si le b = 0 retourne-moi a
    } else { // sinon si b /= 0
        let r = a % b; // stocke dans r = a modulo b (reste de la division entière)
        return pgcd(b, r);
    }
}

console.log("Le PGCD pour b = 0 est : " + pgcd(1800, 0));
console.log("Le PGCD pour b /= 0 est : " + pgcd(1800, 1960));


//fibonacci avec itération
function iterationF(n) {
    //debugger;
    if (n < 2) {
        return n;
    }
    let x = 0;
    let y = 1;
    let z;
    for (let i = 1; i < n; i++) {
        z = y + x;
        x = y;
        y = z;
    }
    return z;
}

console.log(iterationF(6))





