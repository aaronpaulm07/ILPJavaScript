for (let i = 1; i <= 5; i++) {
  let row = document.getElementById(`line${i}`);
  for (let j = 1; j < 7; j++) {
    const listLine = document.createElement("li");
    listLine.classList.add("dot");
    row.appendChild(listLine);
  }
}

let highlight = 0;
let changecolor = () => {
  if (highlight < 6) {
    highlight++;
    let row = document.getElementById(`line${highlight}`);
    listLine = row.querySelectorAll(".dot");
    listLine.forEach((item) => item.classList.toggle("active"));
  }
};

let revertcolor = () => {
  if (highlight > 0) {
    let row = document.getElementById(`line${highlight}`);
    listLine = row.querySelectorAll(".dot");
    listLine.forEach((item) => item.classList.toggle("active"));
    highlight--;
  }
};
