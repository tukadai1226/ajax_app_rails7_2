function post (){
const form = document.getElementById("form");
form.addEventListener("submit", () => {
  this.preventDefault();
  const formData = new FormData(form);
  const XHR = new XMLHttpRequest();
  XHR.open("POST","/posts",true);
  XHR.responseType = "json";
  XHR.send(formData);
});
};

window.addEventListener('turbo:load',post);