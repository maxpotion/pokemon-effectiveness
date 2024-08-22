let superEffective = document.getElementById("superEffective")
let notVeryEffective = document.getElementById("notVeryEffective")
let noEffect = document.getElementById("noEffect")
let chosenType = document.getElementById("chosenType")

function normalDmg() {
  chosenType.textContent = "NORMAL"
  superEffective.textContent = "-"
  notVeryEffective.textContent = "Rock, steel"
  noEffect.textContent = "Ghost"
}
function fireDmg() {
  chosenType.textContent = "FIRE"
  superEffective.textContent = "Grass, bug, steel, ice"
  notVeryEffective.textContent = "Fire, water, rock, dragon"
  noEffect.textContent = "-"
}
function waterDmg() {
  chosenType.textContent = "WATER"
  superEffective.textContent = "Fire, rock, ground"
  notVeryEffective.textContent = "Water, grass, dragon"
  noEffect.textContent = "-"
}
function grassDmg() {
  chosenType.textContent = "GRASS"
  superEffective.textContent = "Rock, ground, water"
  notVeryEffective.textContent = "Fire, grass, poison, flying, bug, dragon, steel"
  noEffect.textContent = "-"
}
function electricDmg() {
  chosenType.textContent = "ELECTRIC"
  superEffective.textContent = "Water, flying"
  notVeryEffective.textContent = "Electric, grass, dragon"
  noEffect.textContent = "Ground"
}
function iceDmg() {
  chosenType.textContent = "ICE"
  superEffective.textContent = "Grass, ground, flying, dragon"
  notVeryEffective.textContent = "Fire, water, ice, steel"
  noEffect.textContent = "-"
}
function groundDmg() {
  chosenType.textContent = "GROUND"
  superEffective.textContent = "Rock, steel, fire, electric, poison"
  notVeryEffective.textContent = "Grass, bug"
  noEffect.textContent = "Flying"
}
function rockDmg() {
  chosenType.textContent = "ROCK"
  superEffective.textContent = "Fire, ice, flying, bug"
  notVeryEffective.textContent = "Fighting, ground, steel"
  noEffect.textContent = "-"
}
function steelDmg() {
  chosenType.textContent = "STEEL"
  superEffective.textContent = "Ice, rock, fairy"
  notVeryEffective.textContent = "Fire, water, electric, steel"
  noEffect.textContent = "-"
}
function fairyDmg() {
  chosenType.textContent = "FAIRY"
  superEffective.textContent = "Fighting, dragon, dark"
  notVeryEffective.textContent = "Fire, poison, steel"
  noEffect.textContent = "-"
}
function psychicDmg() {
  chosenType.textContent = "PSYCHIC"
  superEffective.textContent = "Fighting, poison"
  notVeryEffective.textContent = "Psychic, steel"
  noEffect.textContent = "Dark"
}
function darkDmg() {
  chosenType.textContent = "DARK"
  superEffective.textContent = "Psychic, ghost"
  notVeryEffective.textContent = "Fighting, dark, fairy"
  noEffect.textContent = "-"
}
function dragonDmg() {
  chosenType.textContent = "DRAGON"
  superEffective.textContent = "Dragon"
  notVeryEffective.textContent = "Steel"
  noEffect.textContent = "Fairy"
}
function fightingDmg() {
  chosenType.textContent = "FIGHTING"
  superEffective.textContent = "Normal, rock, ice, dark, steel"
  notVeryEffective.textContent = "Poison, flying, psychic, bug, fairy"
  noEffect.textContent = "Ghost"
}
function ghostDmg() {
  chosenType.textContent = "GHOST"
  superEffective.textContent = "Psychic, ghost"
  notVeryEffective.textContent = "Dark"
  noEffect.textContent = "Normal"
}
function poisonDmg() {
  chosenType.textContent = "POISON"
  superEffective.textContent = "Grass, fairy"
  notVeryEffective.textContent = "Poison, ground, rock, ghost"
  noEffect.textContent = "Steel"
}
function bugDmg() {
  chosenType.textContent = "BUG"
  superEffective.textContent = "Grass, psychic, dark"
  notVeryEffective.textContent = "Fire, fighting, poison, flying, ghost, steel, fairy"
  noEffect.textContent = "-"
}
function flyingDmg() {
  chosenType.textContent = "FLYING"
  superEffective.textContent = "Grass, fighting, bug"
  notVeryEffective.textContent = "Electric, rock, steel"
  noEffect.textContent = "-"
}