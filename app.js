class Palette {
  constructor(name, colors) {
    this.name = name;
    this.colors = colors;
  }
}

const palettes = [
  new Palette("End of summer", [
    "slateblue",
    "deepskyblue",
    "khaki",
    "goldenrod",
    "chocolate",
    "brown",
    "darkolivegreen",
    "olivedrab",
  ]),
  new Palette("Riverside", [
    "darkslategray",
    "darkolivegreen",
    "olivedrab",
    "yellowgreen",
    "antiquewhite",
    "skyblue",
    "cornflowerblue",
    "royalblue",
  ]),
  new Palette("Cottage roof", [
    "steelblue",
    "skyblue",
    "powderblue",
    "sandybrown",
    "darkorange",
    "chocolate",
    "saddlebrown",
    "dimgray",
  ]),
  new Palette("orchid", [
    "indigo",
    "rebeccapurple",
    "darkorchid",
    "mediumorchid",
    "orchid",
    "plum",
    "thistle",
    "gainsboro",
  ]),
];

const main = document.querySelector("main");

function populatePalettes() {
  palettes.forEach((palette) => {
    const newSection = createPaletteSection(palette);

    main.appendChild(newSection);
  });
}

function createPaletteSection(palette) {
  const newSection = document.createElement("section");
  const newHeading = document.createElement("h2");
  newHeading.textContent = palette.name;
  newSection.appendChild(newHeading);

  const newPalette = document.createElement("div");
  newPalette.classList.add("palette");

  palette.colors.forEach((color) => {
    const newColorDiv = createColorDiv(color);

    newPalette.appendChild(newColorDiv);
  });

  newSection.appendChild(newPalette);

  return newSection;
}

function createColorDiv(color) {
  const newColorDiv = document.createElement("div");
  newColorDiv.classList.add("color");
  newColorDiv.classList.add(color);
  newColorDiv.textContent = color;

  return newColorDiv;
}

populatePalettes();
