const containerEl = document.getElementById("container");

for (let i=1; i<=100; i++){

   if (i % 3 == 0 && i % 5 == 0) {
      const FizzBuzzEl = "FizzBuzz ";
      containerEl.append(FizzBuzzEl);
   } else if (i % 3 == 0) {
      const Fizz = "Fizz ";
      containerEl.append(Fizz);
   } else if (i % 5 == 0){
      const BuzzEl = "Buzz ";
      containerEl.append(BuzzEl);
   } else {
      containerEl.append(i);
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