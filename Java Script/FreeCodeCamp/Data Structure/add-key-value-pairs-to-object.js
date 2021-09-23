let foods = {
      apples: 25,
      oranges: 32,
      plums: 28
    };
    
    // Only change code below this line
    
    // mapping key and values to array
    let key = ['bananas', 'grapes', 'strawberries'];
    let value = [13, 35, 27];
    
    // add key-value pairs to object
    for (let i in key) foods[key[i]] = value[i]; 
    
    // Only change code above this line
    
    console.log(foods);