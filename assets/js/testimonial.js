class Testimonial {
    image = "";
    content = "";
    author = "";
    rating = 0;
  
    constructor(image, content, author, rating) {
      this.image = image;
      this.content = content;
      this.author = author;
      this.rating = rating;
    }
  
    getHTML() {
      return `<div class="testimonial">
          <img src="${this.image}" class="profile-testimonial" />
          <p class="quote">"${this.content}"</p>
          <p class="author">- ${this.author}</p>
          <p class="author">${this.rating}</p>
      </div>`;
    }
  }
  
  const testimonial1 = new Testimonial(
    "assets/img/jarjit.jpeg",
    "dua tiga ayam goreng,hmmmm eeennaakkk",
    "jartit singh",
    5
  );
  
  const testimonial2 = new Testimonial(
    "assets/img/ehsan.jpeg",
    "punyaku punyaku punyaku",
    "ehsan gendut",
    1
  );
  
  const testimonial3 = new Testimonial(
    "assets/img/mail.jpeg",
    "2 ringgit 2 ringgit 2 ringgit",
    "mail",
    3
  );
  
  const testimonials = [testimonial1, testimonial2, testimonial3]
  
  let testimonialHTML = ``
  
  for(let index = 0; index < testimonials.length; index++) {
      testimonialHTML += testimonials[index].getHTML()
  }
  
  document.getElementById("testimonials").innerHTML = testimonialHTML