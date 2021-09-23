var donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];

  // accsess array
  for (var row = 0; row < donutBox.length; row++){
      console.log(donutBox[row]);
  };

  // accsess indiviual iteem array or element.
  for (var row = 0; row < donutBox.length; row++){
      for (var column =0; column < donutBox[row].length; column++)
    console.log(donutBox[row][column]);
};