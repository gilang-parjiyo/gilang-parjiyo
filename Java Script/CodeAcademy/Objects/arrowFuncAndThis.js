const robot = {
    energyLevel: 100,
    checkEnergyArrow: () => {
      console.log(`Energy is currently at ${this.energyLevel}%.`); // arrow function got result 'Energy is currently at undefined%.'
    },
    checkEnergyShort (){
        console.log(`Energy is currently at ${this.energyLevel}%.`); // result 'Energy is currently at 100%.'
    }
  }
  
  robot.checkEnergyArrow();
  robot.checkEnergyShort();