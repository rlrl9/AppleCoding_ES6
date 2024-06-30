class Unit {
    constructor(){
        var attack = 5;
        var hp = 100;
    }
    get battlePoint(){
        return this.attack + this.hp;
    }
    set heal(hp){
        this.hp+=parseInt(hp);
    }
}
var newOne = new Unit();
console.log(newOne.battlePoint);
newOne.heal=50;