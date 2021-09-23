const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep (){
            console.log('Beep Boop');
        }
    }
}

const tinCan = robotFactory('P-500', true);
A57.beep();
console.log(A57);