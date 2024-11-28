// Function to get Random Number

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event Listener and Logic for Random Numbers

window.addEventListener("load", (event) => {
  document.getElementById("mybutton").addEventListener("click", () => {
    let numbers;
    do {
      numbers = [];
      for (let i = 0; i < 6; i++) {
        let num;
        do {
          num = getRandomInt(1, 59);
        } while (numbers.includes(num));
        numbers.push(num);
      }
    } while (new Set(numbers).size !== numbers.length);

    document.getElementById("num1").innerText = numbers[0];
    document.getElementById("num2").innerText = numbers[1];
    document.getElementById("num3").innerText = numbers[2];
    document.getElementById("num4").innerText = numbers[3];
    document.getElementById("num5").innerText = numbers[4];
    document.getElementById("num6").innerText = numbers[5];
  });
});
