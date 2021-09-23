let bird = {
    name: 'kutilang',
    color: 'white'
}

let boat = {
    name: 'yacht',
    merk: 'honda'
}

let glideMixin = (obj)=> {  // func glide mixin to use common behaviour but for unrelated object
   obj.glide = () => {
       console.log('Wooosh!');
   } 
}

glideMixin(boat); // apply mixin object to object boat
glideMixin(bird);

boat.glide() // call method glide from glideMixin.
bird.glide() // call method glide from glideMixin.

