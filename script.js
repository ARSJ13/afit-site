let efeito = true;

const navBar = document.querySelector('#navBar');
const navToggle = navBar.querySelector('.navToggle');
const nav = document.querySelector('#nav');
const ulMenu = nav.querySelector('ul');

navToggle.addEventListener('click', ()=>{

  document.body.style.overflow = efeito?'hidden':'initial';

  navBar.classList.toggle('on', efeito);
  efeito = !efeito;
  ulMenu.classList.toggle('on');
})
