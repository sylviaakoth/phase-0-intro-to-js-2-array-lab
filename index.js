 // Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name) {
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(name) {
    cats.shift('Milo');
}

let newCats = cats.concat(['Broom'])

function appendCat(){
    return newCats
}

const copyOfCats = [...cats]
copyOfCats.unshift("Arnold")
function prependCat () {

    return copyOfCats
}

const feline = [...cats]
function removeLastCat() {
    console.log(feline.pop())
    return feline
}

const kitten = [...cats]
function removeFirstCat() {
    console.log(kitten.shift())
    return kitten
}