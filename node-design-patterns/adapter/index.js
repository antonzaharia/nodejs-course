const LocalStorage = require("./LocalStorage");

const localStorage = new LocalStorage();
console.log("localStorage length: ", localStorage.length);

const uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
  console.log("User ID not found. Setting the user id and token...");
  localStorage.setItem("token", "Tr4t4tsdaDSA34rDDFASD3sdasDA3er3243EFD3rEf");
  localStorage.setItem("user_id", "12345");
} else {
  console.log("User ID found. ", uid);
  console.log("clearing the User ID...");
  localStorage.clear();
}
