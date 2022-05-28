const $btn_submitForm = document.getElementById("btn-formulario-submit");
const $formulario = document.querySelectorAll("form");

console.log($btn_submitForm);
$btn_submitForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   console.log($formulario);
})