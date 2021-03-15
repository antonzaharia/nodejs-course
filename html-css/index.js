const image1 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";
const image2 = "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

document.getElementById("btn-1").addEventListener("click", () => {
  document.getElementById("image").src = image1;
});
document.getElementById("btn-2").addEventListener("click", () => {
  document.getElementById("image").src = image2;
});
document.getElementById("add-frame").addEventListener("click", () => {
  document.getElementById("image").style.border = "10px solid white";
  document.getElementById("image").style.left = "440px";
  document.getElementById("image").style.top = "140px";
});
document.getElementById("remove-frame").addEventListener("click", () => {
  document.getElementById("image").style.border = "none";
  document.getElementById("image").style.left = "443px";
  document.getElementById("image").style.top = "150px";
});
