
// class Character {
export class Character {
    constructor(name, type, attack, health, level, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}

Character.typeList = [
    { 'Bowerman': { attack: 25, defence: 25 } },
    { 'Swordsman': { attack: 40, defence: 10 } },
    { 'Magician': { attack: 10, defence: 40 } },
    { 'Daemon': { attack: 25, defence: 25 } },
    { 'Undead': { attack: 40, defence: 10 } },
    { 'Zombie': { attack: 10, defence: 40 } },
]

// module.exports = {
//     Character
// }
