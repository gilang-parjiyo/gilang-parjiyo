//Without property value shortHand
function robotFactory(model, mobile){
    return {
     model: model,
     mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)



//Using value shortHand
  function robotFactory2(model, mobile){
    return {
     model,
     mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot2 = robotFactory2('P-501', false)
  console.log(newRobot2.model)
  console.log(newRobot2.mobile)