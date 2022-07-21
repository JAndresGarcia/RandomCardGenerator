function aleatorioVal() {
  let medios = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
  let puntas = ["♦", "♥", "♠", "♣",];
  const cartas = [];
  for (let v = 0; v < medios.length; v++) {
    for (let s = 0; s < puntas.length; s++) {
      const punta = puntas[s];
      const medio = medios[v];
      cartas.push({ medio, punta });
    }
  }
  return cartas
}
function random(cartas) {
  const aleatorio = Math.floor(Math.random() * 51);
  const valor = cartas[aleatorio].medio;
  const forma = cartas[aleatorio].punta;
  const carta = document.getElementById('carta');
  carta.innerHTML =
    forma == "♠" || forma == "♣" ? 
    `<span class="topn">${forma}</span><span class="numero">${valor}</span><span class="botn">${forma}</span>` : 
    `<span class="top">${forma}</span><span class="numeron">${valor}</span><span class="bot">${forma}</span>`;
}

const cartas = aleatorioVal();
random(cartas);



