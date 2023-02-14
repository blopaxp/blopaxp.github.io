
//BOTON PARA DESPLEGAR EL MENU LATERAL

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
btn.addEventListener('click', e=>{
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    document.querySelector('body').classList.toggle('body-expanded');
});
        

//BOTON PARA ENVIAR EMAIL

const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#abrircorreo');
$form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute('href', `mailto:gonzalezpabloa@yahoo.com.ar?subject=nombre: ${form.get('nombre')} /correo: ${form.get('email')} /asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`);
  $buttonMailto.click();
  document.getElementById("form").reset();
}
