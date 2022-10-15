document
  .querySelectorAll(
    ".contactSection__wrapper input, .contactSection__wrapper textarea"
  )
  .forEach((e) => {
    e.value = "";
  });

const sendmsgBtn = document.querySelector(
  ".contactSection__wrapper .checkoutbtn"
);

const handleSendMessage = () => {
  sendmsgBtn.textContent = "Sending...";
  setTimeout(() => {
    sendmsgBtn.textContent = "Thank You!";
  }, 2000);
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 4000);
};

sendmsgBtn.addEventListener("click", () => {
  let isValid = true;
  isValid = document.getElementById("email-form-co").value.includes("@");
  document.querySelectorAll(".form-required-co").forEach((e) => {
    if (e.value.length == 0) isValid = false;
  });
  if (!isValid) {
    alert("Please enter all the required fields properly");
  } else {
    handleSendMessage();
  }
});
updateCounter();
