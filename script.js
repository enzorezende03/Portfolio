const check = document.getElementById('checkbox');
let clicado = false;


check.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  document.getElementById('label1').classList.toggle('dark')
  document.getElementById('paragrafoTema').classList.toggle('dark')
})