var a = 2;

{ // if with many conditions
  if (a == 2) {
    console.log("first conditon");

  }
  else if (a == 4) {

    console.log("second condition");
  }
  else if (a == 6) {

    console.log("Third condition");
  }
  else {

    console.log("nothing meet the condition");
  }
}

{ // Switch case
  switch (a) {
    case 2:
      console.log("first case");
      break;
    case 4:
      console.log("second case");
      break;
    case 6:
      console.log("third case");
      break;
    default:
      break;
  }
}

{ //Switch case fall through
  switch (a) {
    case 2:
    case 5:
      console.log("case 2 or 5 will print this");
      break;
    case 6:
      console.log("Case 6 will print this");
      break;
    default:
  }
}

{ //Ternary operations
  var a = 2;
  var b = (a < 2) ? "Hello" : "World";
  console.log(b);

  // is similiar to
  var c = 1;
  if (c < 2) {
    d = "hello"
  } else {
    d = "world"
  }
  console.log(d);
}