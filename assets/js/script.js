const containerEl = document.getElementById("container");

for (let i=1; i<=100; i++){

   if (i % 3 == 0 && i % 5 == 0) {
      const FizzBuzz = document.createElement("li");
      FizzBuzz.append("FizzBuzz");
      containerEl.append(FizzBuzz);
   } else if (i % 3 == 0) {
      const Fizz = document.createElement("li");
      Fizz.append("Fizz");
      containerEl.append(Fizz);
   } else if (i % 5 == 0){
      const Buzz = document.createElement("li");
      Buzz.append("Buzz");
      containerEl.append(Buzz);
   } else {
      const Number = document.createElement("li");
      Number.append(i);
      containerEl.append(Number);
   }


   // if (i % 3 == 0 && i % 5 == 0) {
   //    console.log("FizzBuzz");
   // } else if (i % 3 == 0) {
   //    console.log("Fizz");
   // } else if (i % 5 == 0){
   //    console.log("Buzz");
   // } else {
   //       console.log(i);
   // }

}