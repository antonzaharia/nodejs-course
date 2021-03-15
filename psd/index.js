const PSD = require("psd");
const psd = PSD.fromFile(__dirname + "/psd.psd");
psd.parse();

console.log(psd.tree());
PSD.open("psd.psd")
  .then(function (psd) {
    return psd.image.saveAsPng("homepage.png");
  })
  .then(function () {
    console.log("Finished!");
  });
