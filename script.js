var myArray = [
  "Yaakov",
  "John",
  "Jen",
  "jason",
  "paul",
  "frank",
  "larry",
  "paula",
  "laura",
  "jim",
];

for (var i = 0; i < myArray.length; i++) {
  if (myArray[i].charAt(0) === "J" || myArray[i].charAt(0) === "j") {
    console.log("Goodbye " + myArray[i]);
  } else {
    console.log("Hello " + myArray[i]);
  }
}
