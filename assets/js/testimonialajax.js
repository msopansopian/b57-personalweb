// promise bernama testimonial yang akan mengambil data dari URL yang diberi
const testimonial = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
  
    // Membuka koneksi GET ke URL yang diberi
    xhr.open("GET", "https://api.npoint.io/2b7e25284cdece34de2b", true);
  
    // Ketika permintaan berhasil, status 200, resolve dengan data yang di-parse dari JSON
    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.response)); // data yang di-parse dari JSON
      } else {
        reject("Erorr Loaded Data"); // Jika status tidak 200, reject dengan pesan error
      }
    };
  
    // Jika terjadi kesalahan dalam permintaan, reject dengan pesan 404 Not Found
    xhr.onerror = function () {
      reject("404 Not Found");
    };
  
    // Mengirim permintaan
    xhr.send();
  });
  
  // Fungsi asinkron untuk menampilkan semua testimonial
  async function allTestimonial() {
    try {
      const response = await testimonial; // Menunggu hasil dari promise testimonial
  
      let testimonialHtml = ``; // Inisialisasi variabel untuk menyimpan HTML testimonial
  
      // Looping melalui setiap item dalam response untuk membuat elemen HTML
      response.forEach((item) => {
        testimonialHtml += `
        <div class="testimonial">
          <img src="${item.image}" alt="testimonial" class="profile-testimonial">
              <p class="quote">${item.content}</p>
              <p class="author">- ${item.author}</p>
              <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>`;
      });
  
      // Memasukkan HTML yang telah dibuat ke dalam elemen dengan id "testimonials"
      document.getElementById("testimonials").innerHTML = testimonialHtml;
    } catch (error) {
      console.log(error); // Jika terjadi kesalahan, cetak pesan error di konsol
    }
  }
  
  // Fungsi asinkron untuk memfilter testimonial berdasarkan rating
  async function filterTestimonials(rating) {
    try {
      const response = await testimonial; // Menunggu hasil dari promise testimonial
      let testimonialHtml = ``;
  
      // Memfilter data berdasarkan rating yang diberikan
      const dataFilter = response.filter((data) => data.rating === rating);
      if (dataFilter.length === 0) {
        // Jika tidak ada data yang sesuai dengan rating, tampilkan pesan Data not found
        testimonialHtml = `<h1> Data not found!</h1>`;
      } else {
        // Looping melalui setiap item dalam data yang difilter untuk membuat elemen HTML
        dataFilter.forEach((item) => {
          testimonialHtml += `<div class="testimonial">
          <img src="${item.image}" alt="testimonial" class="profile-testimonial">
          <p class="quote">${item.content}</p>
          <p class="author">- ${item.author}</p>
          <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
          </div>`;
        });
      }
  
      // Memasukkan HTML yang telah dibuat ke dalam elemen dengan id "testimonials"
      document.getElementById("testimonials").innerHTML = testimonialHtml;
    } catch (error) {
      console.log(error); // Jika terjadi kesalahan, cetak pesan error di konsol
    }
  }
  
  // callback / pemanggilan fungsi kembali
  allTestimonial();
  