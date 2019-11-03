


class SpookyThing {
    constructor (cursedness, age, attire)
        {
        this.cursedness = cursedness;
        this.age = age;
        this.attire = attire;
        }
        // cursedness is a function we made //
    print_cursedness() {
        console.log ('This ${this.cursedness} bat is ${this.age} years old and wearing ${this.attire'}
    }

const spook1 = new SpookyThing("awfully cursed, 42, socks")

class Ghost extends SpookyThing {
    constructor(cursedness, age, attire, name, location) {
        super(cursedness,age,attire)
        this.name = name
        this.location = location
    }

    print_cursedness() {
        console.log('${this.name} the spooky ghost was last seen ${this.location}')}
    move(newLocation)
        {this.location = newLocation}
    changeAttire(newAttire)
        {this.attire = newAttire}

    
}

const Ghost1 = new Ghost("not that cursed", 20, "hat", "Courage", "basement" )
    Ghost1.move("garden")
    Ghost1.changeAttire("watch")
    console.log(Ghost1.move("garden"))
