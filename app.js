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
  new Palette("grayscale", [
    "black",
    "darkslategray",
    "dimgray",
    "gray",
    "darkgray",
    "gainsboro",
    "whitesmoke",
    "ghostwhite",
  ]),
  new Palette("pale", [
    "skyblue",
    "cadetblue",
    "darkseagreen",
    "blanchedalmond",
    "peachpuff",
    "lightpink",
    "thistle",
    "gainsboro",
  ]),
];

const darkColors = ["black", "midnightblue", "indigo", "navy"];

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

  if (darkColors.includes(color)) {
    newColorDiv.classList.add("contrast");
  }

  return newColorDiv;
}

populatePalettes();
