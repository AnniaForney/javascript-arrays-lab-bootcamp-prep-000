var kittens = ["Milo", "Otis", "Garfield"];

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens; 
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var array = [name]
  return kittens.concat(array)
}

array = [1, 2, 4, 5]
...array // 1, 2, 4, 5


function prependKitten(name) {
 console.log (kittens.pop());
 return kittens.po
}

function removeLastKitten(name) {
  
}

function removeFirstKitten(name) {
  return kittens.slice(0 - 1);
}