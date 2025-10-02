class Palette {
  constructor(name, colors) {
    this.name = name;
    this.colors = colors;
  }
}

const palettes = [
  new Palette("End of summer", [
    "slateblue",
    "cornflowerblue",
    "khaki",
    "goldenrod",
    "chocolate",
    "saddlebrown",
    "darkolivegreen",
    "olivedrab",
  ]),
  new Palette("glacier", [
    "darkslategray",
    "teal",
    "lightseagreen",
    "mediumturquoise",
    "paleturquoise",
    "lightcyan",
    "snow",
  ]),
  new Palette("Riverside", [
    "darkslategray",
    "darkolivegreen",
    "olivedrab",
    "yellowgreen",
    "wheat",
    "skyblue",
    "cornflowerblue",
    "royalblue",
  ]),
  new Palette("orchid", [
    "darkslateblue",
    "rebeccapurple",
    "darkorchid",
    "mediumorchid",
    "orchid",
    "plum",
    "thistle",
    "gainsboro",
  ]),
  new Palette("Cottage roof", [
    "cornflowerblue",
    "skyblue",
    "powderblue",
    "chocolate",
    "sienna",
    "silver",
    "linen",
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
  new Palette("City pop", [
    "orchid",
    "plum",
    "thistle",
    "gainsboro",
    "whitesmoke",
    "paleturquoise",
    "turquoise",
    "lightseagreen",
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
  if (!CSS.supports("background-color", color)) {
    throw new RangeError(`${color} is not a valid CSS background-color.`);
  }

  const newColorDiv = document.createElement("div");
  newColorDiv.classList.add("color");
  newColorDiv.classList.add(color);
  newColorDiv.textContent = color;

  if (darkColors.includes(color)) {
    newColorDiv.classList.add("contrast");
  }

  return newColorDiv;
}

function printStats() {
  const allColorArrays = collectAllColorArrays();
  const allColors = Array.prototype.concat.apply([], allColorArrays);
  const uniqueColors = [...new Set(allColors)];
  uniqueColors.sort((a, b) => a.localeCompare(b));

  console.log(`${palettes.length} palettes created.`);
  console.log(`${uniqueColors.length} out of 140 named HTML colors used.`);
  console.log(`Unique colors used:`);
  uniqueColors.forEach((element) => {
    console.log(element);
  });
}

function collectAllColorArrays() {
  const allColorArrays = [];
  palettes.forEach((element) => {
    allColorArrays.push(element.colors);
  });

  return allColorArrays;
}

populatePalettes();
printStats();
