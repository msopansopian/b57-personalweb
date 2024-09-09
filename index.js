const express = require("express");
const app = express();
const path = require("path"); //SET UP FOLDER STATIS
const dayjs = require("dayjs"); //ATUR WAKTU
const data = [];

// memberi tahu template engine yang di pakai adalah hbs
app.set("view engine", "hbs");

// memberi tahu bahwa template engine hbs berada di folder views
app.set("views", path.join(__dirname, "views"));

// ini untuk set up lokasi assets statis untuk pemakaian folder assets
app.use("/assets", express.static(path.join(__dirname, "assets")));

//SET UP BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routing
app.get("/", home);
// menjalankan function HOME
function home(req, res) {
  res.render("index"); // code ini untuk render code index.hbs
}

app.get("/contact", contactme);
function contactme(req, res) {
  res.render("contact"); // render file contact.hbs
}

app.get("/testimonial", testimonial);
function testimonial(req, res) {
  res.render("testimonial");
}

// GET ADDPROJECT.HBS
app.get("/addproject", addproject);
function addproject(req, res) {
  res.render("addproject");
}

function duration_(startDate, endDate) {
  let myStartDate = dayjs(startDate, "YYYY-MM-DD");
  let myEndDate = dayjs(endDate, "YYYY-MM-DD");

  let durationDay = myEndDate.diff(myStartDate, "days");
  durationDay = Math.abs(durationDay);

  let year = Math.floor(durationDay / 365);
  let month = Math.floor((durationDay % 365) / 30);
  let day = Math.floor((durationDay % 365) % 30);
  // console.log(`duration : ${year} tahun ${month} bulan ${day} hari`);
  let result = "durasi :";
  if (year != 0) {
    result = result + `${year} tahun `;
  }
  if (month != 0) {
    result = result + `${month} bulan `;
  }
  if (day != 0) {
    result = result + `${day} hari `;
  }

  return result;
}

// POST ADDPROJECT.HBS
app.post("/addproject", postproject);
function postproject(req, res) {
  const projectname = req.body.projectname;
  const startdate = req.body.startdate;
  const enddate = req.body.enddate;
  const description = req.body.description;
  const nodejs = req.body.nodejs;
  const reactjs = req.body.reactjs;
  const typescript = req.body.typescript;
  const angular = req.body.angular;

  console.log(projectname);
  console.log(startdate);
  console.log(enddate);
  console.log(description);
  console.log(nodejs);
  console.log(reactjs);
  console.log(typescript);
  console.log(angular);

  let duration = duration_(startdate, enddate);
  console.log(duration);
  
  const dataProject = { projectname, startdate, enddate, duration, description, nodejs, reactjs, typescript, angular };
  
  const arraydata = data.unshift(dataProject);
  console.log(data);
  console.log(arraydata);

  res.redirect("listproject");
}

// GET LISTPROJET (SETELAH ADDPROJECT DI POST,MAKA AKAN MUNCUL LIST PROJECT)
app.get("/listproject", listproject);
function listproject(req, res) {
  res.render("listproject", { data });
}

// SAAT LIST PROJECT DI KLIK MAKA AKAN MUNCUL DETAIL PROJECT SESUAI ID
app.get("/detailproject/:id", detailproject);
function detailproject(req, res) {
  const { id } = req.params;
  const detail = data[id];

  res.render("detailproject", { detail });
}


// menjalankan program di port 3000
app.listen(3000, () => {
  console.log("server berjalan di port 3000");
});
