function sendEmail(event) {
  event.preventDefault();
  // menangkap id di contact.html
  const name = document.getElementById("inputName").value;
  const email = document.getElementById("inputEmail").value;
  const phone = document.getElementById("inputPhoneNumber").value;
  const subject = document.getElementById("inputSubject").value;
  const message = document.getElementById("inputMessage").value;

  // pengkondisian untuk memastikan bahwa jangan ada yang kosong
  if (!name.length) {
    return alert("name harus di isi");
  } else if (!email.length) {
    return alert("email harus di isi");
  } else if (!phone.length) {
    return alert("phone number harus di isi");
  } else if (!subject.length) {
    return alert("subject harus di isi");
  } else if (!message.length) {
    return alert("message harus di isi");
  }

  //   membuat element a dan memerintahkan saat tag input di isi maka akan di pindahkan ke link gmail untuk kirim email dengan dan membuka tab baru

  let a = document.createElement("a");
  a.href = `mailto:${email}?subject=${subject}&body=hallo nama saya ${name}, dan nomor HP saya ${phone} ${message}`;
  a.target = "_blank";
  a.click();

  let data = {
    dataName: name,
    dataEmail: email,
    dataPhone: phone,
    dataSubject: subject,
    dataMessage: message,
  };

  console.log(data);
}

