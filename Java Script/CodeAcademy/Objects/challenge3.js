const girlGroup = (name, postion, color) => {
    return {
        name,
        postion,
        color,
        greeting (){
            console.log(`Hello my name is ${this.name}`); 
        }
    }
}

const apink = girlGroup("naeun", "visual", "pink");

apink.greeting();