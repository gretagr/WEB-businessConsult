window.onload=function(){
document.getElementById("first_name").addEventListener("focusout", label);
document.getElementById("last_name").addEventListener("focusout", label);
document.getElementById("email").addEventListener("focusout", label);

function label() {
  if (this.value == "") {
      this.classList.remove("has-value");
      } else {
      this.classList.add("has-value");
      }
}

}
