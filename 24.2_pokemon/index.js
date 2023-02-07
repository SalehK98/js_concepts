function Pokeman(pokemonName, pokemonType, pokemonAttackList) {
    this.pokemonName = pokemonName
    this.pokemonType = pokemonType
    this.pokemonAttackList = pokemonAttackList
}


const pokeman1 = new Pokeman("Pikachu", "Electric", ["Thunderbolt", "Rising Voltage", "Surf", "Nasty Plot"])
const pokeman2 = new Pokeman("Snorlax", "Normal", ["Outrage", "Super Power", "Earthquake", "Heavy Slam"])
const pokeman3 = new Pokeman("Psyduck", "Water", ["Tail Whip", "Water Gun", "Aqua Tail "])

Pokeman.prototype.callPokemon = function () {
    return `I choose you ${this.pokemonName}`;
}

Pokeman.prototype.attack = function (attackNumber) {
    return ` ${this.pokemonName} used  ${this.pokemonAttackList[attackNumber]}`
}

console.log(pokeman1.callPokemon(), pokeman1.attack(1))
console.log(pokeman2.callPokemon(), pokeman2.attack(1))
console.log(pokeman3.callPokemon(), pokeman3.attack(1))
