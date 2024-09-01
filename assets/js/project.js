let dataBlog = [];

// fungsi saat data di input dan setelah di submit
function submitData(event) {
  event.preventDefault();

  const projectname = document.getElementById("project-name").value;
  const startdate = document.getElementById("start-date").value;
  const enddate = document.getElementById("end-date").value;
  const description = document.getElementById("description").value;
  const nodejs = document.getElementById("nodejs").checked;
  const reactjs = document.getElementById("reactjs").checked;
  const typescript = document.getElementById("typescript").checked;
  const angular = document.getElementById("angular").checked;
  const uploadimage = document.getElementById("upload-image").files;

  // kondisi memastikan tidak ada data yg kosong

  if (projectname == "") {
    alert("Name project harus diisi"); 
  } else if (startdate == "" && enddate == "") {
    alert("tanggal Harus Diisi"); 
  } else if (description == "") {
    alert("deskripsi harus di isi"); 
  } else if (uploadimage == undefined) {
    alert("img harus di isi"); 
  }

  // mengabil sumber dari file image(jpn/png)

  try {
    inputImage = URL.createObjectURL(uploadimage[0]);
    console.log("File URL:", inputImage);
  } catch (e) {
    console.error("Failed to create object URL", e);
    inputImage = "";
  }

  const teknologi = [nodejs, reactjs, typescript, angular];

  // data ini akan kita masukkan kedalam sebuah array datablog
  const blog = {
    name: projectname,
    startdate: startdate,
    enddate: enddate,
    deskripsi: description,
    author: "sopan sopian",
    teknologi: teknologi,
    uploadimage: inputImage,
  };

  dataBlog.push(blog);
  console.log("dataArray:", dataBlog);

  showProject();
}

// fungsi menampilkan project setelah di input
function showProject() {
  document.getElementById("list-project").innerHTML = "";
  for (let index = 0; index < dataBlog.length; index++) {
    // mengecek cekbox
    let datacheckbox = "";
    if (dataBlog[index].teknologi[0] === true) {
      datacheckbox += `<i class="fa-brands fa-node-js" style="padding: 10px;"></i>`;
    }
    if (dataBlog[index].teknologi[1] === true) {
      datacheckbox += `<i class="fa-brands fa-react" style="padding: 10px;"></i>`;
    }
    if (dataBlog[index].teknologi[2] === true) {
      datacheckbox += `<i class="fa-solid fa-subscript" style="padding: 10px;"></i>`;
    }
    if (dataBlog[index].teknologi[3] === true) {
      datacheckbox += `<i class="fa-brands fa-angular" style="padding: 10px;"></i>`;
    }

    // menghitung waktu
    const startDate = new Date(dataBlog[index].startdate);
    const endDate = new Date(dataBlog[index].enddate);
    const selisihwaktu = Math.abs(endDate - startDate);
    const selisihhari = Math.ceil(selisihwaktu / (1000 * 60 * 60 * 24));

    // kondisi hari bulan atau tahun
    let durasi;
    if (selisihhari < 30) {
      durasi = `${selisihhari} hari`;
    } else if (selisihhari < 365) {
      const selisihbulan = Math.round(selisihhari / 30);
      durasi = `${selisihbulan} bulan`;
    } else {
      const selisihtahun = Math.round(selisihhari / 365);
      durasi = `${selisihtahun} tahun`;
    }

    // setelah input di isi,maka datanya dimasukan ke list project 
    document.getElementById("list-project").innerHTML += `
        <div class="card-blog" id="project-${index}">
              <img src="${dataBlog[index].uploadimage}" alt="">


              <h3  onclick="openDetail('${dataBlog[index].name}','${dataBlog[index].uploadimage}','${dataBlog[index].startdate}','${dataBlog[index].enddate}','${durasi}','${dataBlog[index].deskripsi}','${dataBlog[index].teknologi}')">${dataBlog[index].name}</h3>
          
              <h4>${durasi}</h4>
              <p>${dataBlog[index].deskripsi}</p>
              <div class="logo-checkbox" id="list-checkbox" >
              ${datacheckbox}  
              </div>
              <button class="button-edit">EDIT</button>
              <button class="button-delete" onclick="deleteProject(${index})">DELETE</button>
              
            </div>

            
    `;
  }
}


// membuat fungsi delete list project
function deleteProject(index) {
  dataBlog.splice(index, 1);
  showProject();
}


// fungsi untuk membuka detail dari list project
function openDetail(title, imageUrl, startDate, endDate, duration, description, teknologi) {
  
  cardData = {
    title: title,
    imageUrl: imageUrl,
    startDate: startDate,
    endDate: endDate,
    duration: duration,
    description: description,
    teknologi: teknologi,
  };
  localStorage.setItem("cardDetail", JSON.stringify(cardData));
  window.open("detailproject.html", "_blank");
}
openDetail("sopan", "123");
