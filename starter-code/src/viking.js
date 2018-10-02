// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function() {
    return this.strength;
}

Soldier.prototype.receiveDamage = function(dmg) {
    // do something!
    this.health -= dmg;
    // don't return anything
}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name = name;
}

Viking.prototype.receiveDamage = function(dmg) {
    this.health -= dmg;
    if (0 >= this.health) {
        return this.name + " has died in act of combat";
    }
    return this.name + " has received " + dmg + " points of damage";
}

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
}


// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

function Saxon(health,strength) {
    Soldier.call(this,health,strength);
}

Saxon.prototype.receiveDamage = function(dmg) {
    // do something!
    this.health -= dmg;
    if (0 >= this.health) {
        return "A Saxon has died in combat";
    }
    return "A Saxon has received " + dmg + " points of damage";
}
// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(newvik) {
    this.vikingArmy.push(newvik);
}

War.prototype.addSaxon = function(newsax) {
    this.saxonArmy.push(newsax);
}

War.prototype.vikingAttack = function() {
    rndSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    rndViking = Math.floor(Math.random() * this.vikingArmy.length);
    var battleResult =
     this.saxonArmy[rndSaxon].receiveDamage(this.vikingArmy[rndViking].attack());
    if (0 >= this.saxonArmy[rndSaxon].health) {
        this.saxonArmy.splice(rndSaxon,1);
    }
    return battleResult;
}

War.prototype.saxonAttack = function() {
    rndSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    rndViking = Math.floor(Math.random() * this.vikingArmy.length);
    var battleResult =
     this.vikingArmy[rndViking].receiveDamage(this.saxonArmy[rndSaxon].attack());
    if (0 >= this.vikingArmy[rndViking].health) {
        this.vikingArmy.splice(rndViking,1);
    }
    return battleResult;
}
/*
should be a function
should receive 0 arguments
if the Saxon array is empty, should return "Vikings have won the war of the century!"
if the Viking array is empty, should return "Saxons have fought for their lives and survive another day..."
if there are at least 1 Viking and 1 Saxon, should return "Vikings and Saxons are still in the thick of battle."
*/
War.prototype.showStatus = function() {
    if (0 == this.saxonArmy.length) {
        return "Vikings have won the war of the century!";
    }
    if (0 == this.vikingArmy.length) {
        return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle.";
}

