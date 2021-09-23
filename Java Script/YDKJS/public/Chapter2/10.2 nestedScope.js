// //Nested scope
// {
//   function foo() {
//     var a = 1;

//     function bar() {
//       var b = 2;

//       function baz() {
//         var c = 3;
//         console.log(a, b, c);
//       }

//       baz();
//       console.log(a, b);
//     }

//     bar();
//     console.log(a);
//   }
//   foo();
// }

// { //nested loop
//   function first() {
//     var satu = 1;

//     function second() {
//       var dua = 2;

//       function third(params) {
//         var tiga = 3;

//         console.log(satu, dua, tiga);
//       }

//       third();
//       console.log(satu, dua);
//     }

//     second();
//     console.log(satu);
//   }

//   first();
// }

// { //set variable before declaring the variable.
//     function declare() {
//         value = 1;

//     }

//     declare();
//     console.log(value); // value automated set as global variable.

// }

// {
//   function TestLet() {
//     a = 1;

//     if (a <= 1) {
//       let b = 2;

//       while (b < 5) {
//         let c = b * 2;
//         b++;

//         console.log(a + c); //5 + 7 + 9
//       }
//     }
//   }

//   TestLet();
// }

{
  //Resume let
  function ResLet() {
    a = 1;

    if (a <= 1) {
      let b = 2;

      while (b <= 5) {
        let c = b * 2;
        b++;

        console.log("Resume TestLet", a + c);
      }
    }
  }

  ResLet();
}
