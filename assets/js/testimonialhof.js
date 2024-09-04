const TestimoniData = [
  {
    image: "assets/img/jarjit.jpeg",
    content: "dua tiga ayam goreng,hmmmm eeennaakkk",
    author: "jartit singh",
    rating: 1,
  },
  {
    image: "assets/img/ehsan.jpeg",
    content: "punyaku punyaku punyaku",
    author: "ehsan gendut",
    rating: 2,
  },
  {
    image: "assets/img/mail.jpeg",
    content: "2 ringgit 2 ringgit 2 ringgit",
    author: "mail",
    rating: 3,
  },
  {
    image: "assets/img/meimei.jpeg",
    content: "aku suka aku suka",
    author: "mei-mei",
    rating: 4,
  },
  {
    image: "assets/img/susanti.jpeg",
    content: "hallo namaku susanti",
    author: "susanti",
    rating: 5,
  },
];

//   untuk mencetak ke testimonial.html
function html(item) {
  return `
        <div class="testimonial">
            <img src="${item.image}" alt="testimonial" class="profile-testimonial">
                <p class="quote">${item.content}</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>`;
}

//   aksi ketika rating all di klik

function allTestimonial() {
  let testimonialHtml = ``;
  TestimoniData.forEach((item) => {
    testimonialHtml += html(item);
  });

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}

//   aksi ketika salah satu rating di klik,contoh ratting 1 di klik maka card testimonial rating 1 akan muncul dan yg lainnya di hidden
function filterTestimonials(rating) {
  let testimonialHtml = ``;
  const testimonialFilter = TestimoniData.filter((item) => {
    return item.rating === rating;
  });

  if (testimonialFilter.length === 0) {
    testimonialHtml = `<h1> Data not found!</h1>`;
  } else {
    testimonialFilter.forEach((item) => {
      testimonialHtml += html(item);
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}

// // panggil function all testi
// allTestimonial();
// disini tidak di panggil,testimonial muncul ketika rating di klik