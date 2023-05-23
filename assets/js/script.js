const successMessage = document.getElementById('mail-success');
const failMessage = document.getElementById('mail-fail');
const invalidMessage = document.getElementById('mail-invalid');
const contactTemplate = "template_7ewcr96";
const applicationTemplate = "template_mtv529v";

hideMessages();

function sendMail(isContactTemplate = true) {
  hideMessages();
  let data;

  if (isContactTemplate) {
    data = {
      name: document.getElementById("client-name").value,
      subject: document.getElementById("client-subject").value,
      email: document.getElementById("client-email").value,
      message: document.getElementById("client-message").value,
    };
  } else {
    data = {
      name: document.getElementById("name").value,
      work: document.getElementById("work").value,
      salary: document.getElementById("salary").value,
      debit: document.getElementById("debit").value,
      building_debit: document.getElementById("building-debit").value,
      identity: document.getElementById("identity").value,
      dob: document.getElementById("dob").value,
      phone: document.getElementById("phone").value,
      city: document.getElementById("city").value,
    };

  }

  if (!isEmailInputsValid(data)) {
    invalidMessage.style.display = "block";
    return;
  }

  emailjs.send('service_76ddvvk', isContactTemplate ? contactTemplate : applicationTemplate, data, "hsCn6pxX3grMzV8Z6")
    .then(
      res => successMessage.style.display = 'block',
      err => failMessage.style.display = 'block'
    );
}

function isEmailInputsValid(obj) {
  for (const key in obj)
    if (obj[key] == null || obj[key].trim() == "") return false;
  return true;
}

function hideMessages() {
  successMessage.style.display = 'none';
  failMessage.style.display = 'none';
  invalidMessage.style.display = 'none';
}