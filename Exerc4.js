// Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
// retorne a união dos dois em um novo vetor.


let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2 = [20, 21, 22, 23, 24, 25, 26, 27 ,28, 29]
function unirArray(array1, array2)  {
    let array3 = array1.concat(array2)
    return console.log(array3)
}

unirArray(array1, array2)