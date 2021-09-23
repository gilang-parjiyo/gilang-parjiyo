const girlGroup =
{
    name: 'naeun',
    position: 'visual',
    color: 'pink',
    introduction() {
        return `Hello my name is ${this.name}, position is ${this.position}`;
    }

}

const me = Object.create(girlGroup);

me.name = 'gilang';
me.position = 'visual';

console.log(me.introduction());