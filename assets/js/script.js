const containerEl = document.getElementById("container");

for (let i=1; i<=100; i++){

   if (i % 3 == 0 && i % 5 == 0) {
      const FizzBuzzCont = document.createElement("div");
      const FizzBuzzItem = document.createElement("div");
      FizzBuzzCont.classList.add("square", "fizzbuzz", "position-relative");
      FizzBuzzItem.classList.add("center-text-absolute")
      FizzBuzzItem.append("FizzBuzz");
      FizzBuzzCont.append(FizzBuzzItem);
      containerEl.append(FizzBuzzCont);
   } else if (i % 3 == 0) {
      const FizzCont = document.createElement("div");
      const FizzItem = document.createElement("div");
      FizzCont.classList.add("square", "fizz", "position-relative");
      FizzItem.classList.add("center-text-absolute");
      FizzItem.append("Fizz");
      FizzCont.append(FizzItem);
      containerEl.append(FizzCont);
   } else if (i % 5 == 0){
      const BuzzCont = document.createElement("div");
      const BuzzItem = document.createElement("div");
      BuzzCont.classList.add("square", "buzz", "position-relative");
      BuzzItem.classList.add("center-text-absolute");
      BuzzItem.append("Buzz");
      BuzzCont.append(BuzzItem);
      containerEl.append(BuzzCont);
   } else {
      const NumberCont = document.createElement("div");
      const NumberItem = document.createElement("div");
      NumberCont.classList.add("square", "number", "position-relative");
      NumberItem.classList.add("center-text-absolute");
      NumberItem.append(i);
      NumberCont.append(NumberItem);
      containerEl.append(NumberCont);
   }
}