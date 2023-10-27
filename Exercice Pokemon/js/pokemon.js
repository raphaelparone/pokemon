class Pokemon {
  constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
  }

  isLucky() {
      let i = Math.random();
      if (i < this.luck) {
          return true;
      } else {
          return false;
      }
  }

  attackPokemon(ennemy) {
    if (this.isLucky()) {
        let damage = this.attack - ennemy.defense;
        ennemy.hp = ennemy.hp - damage;
        return damage;
    } else {
        return 0;
    }
  }
}

let squirtle = new Pokemon("Squirtle", 48, 65, 44, 60);
let bulbasaur = new Pokemon("Bulbasaur", 62, 63, 80, 20);
  
while (squirtle.hp > 0 && bulbasaur.hp > 0) {
    let squirtleDamage = squirtle.attackPokemon(bulbasaur);
    if (bulbasaur.hp <= 0) {
        console.log(bulbasaur.name + " is dead. " + squirtle.name + " wins!");
        break;
    }

    let bulbasaurDamage = bulbasaur.attackPokemon(squirtle);
    if (squirtle.hp <= 0) {
        console.log(squirtle.name + " is dead. " + bulbasaur.name + " wins!");
        break;
    }
}