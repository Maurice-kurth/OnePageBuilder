const button = document.querySelectorAll(".addProduct ");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //Duplicate each text input field inside .productFields except the button and append it to .productFields
    const productFields = document.querySelector(".productFields");
    const clone = productFields.cloneNode(true);
    clone.querySelector(".addProduct").remove();
    productFields.after(clone);
  });
});
