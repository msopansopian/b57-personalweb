// ambil data di local storage item card detail
const cardData = JSON.parse(localStorage.getItem("cardDetail"));

console.log(cardData); // Cek apakah data yang didapatkan dari localStorage benar

if (cardData) {
  document.getElementById("project-title").innerText = cardData.title;
  document.getElementById("project-image").src = cardData.imageUrl;
  document.getElementById("start-date").innerText = cardData.startDate || ""; 
  document.getElementById("end-date").innerText = cardData.endDate || ""; 
  document.getElementById("duration").innerText = cardData.duration || ""; 
  document.getElementById("description").innerText = cardData.description;

  const techListElement = document.getElementById("tech-list");
  const technologies = [];
  console.log(cardData.teknologi);
  console.log(technologies[0]);
  console.log("masuk");

  let teknologiArray = cardData.teknologi.split(",").map((value) => value === "true");

  console.log( teknologiArray);

  // Memasukkan teknologi yang dipilih ke dalam array technologies
  if (teknologiArray[0] === true) {
    technologies.push({ iconClass: "fa-brands fa-node-js", name: "Node.js" });
  }
  if (teknologiArray[1] === true) {
    technologies.push({ iconClass: "fa-brands fa-react", name: "React.js" });
  }
  if (teknologiArray[2] === true) {
    technologies.push({ iconClass: "fa-solid fa-subscript", name: "TypeScript" });
  }
  if (teknologiArray[3] === true) {
    technologies.push({ iconClass: "fa-brands fa-angular", name: "Angular" });
  }

  // Menampilkan teknologi yang dipilih ke dalam elemen tech-list
  technologies.forEach((tech) => {
    techListElement.innerHTML += `<li><i class="${tech.iconClass}"></i> ${tech.name}</li>`;
  });
}
