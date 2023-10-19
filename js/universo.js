window.addEventListener('load', openUniverse);

function toggleUniverse(){
  const universe = document.querySelector('#container-universe');
  const fade = document.getElementById('faden');

  universe.classList.toggle('hide');
  fade.classList.toggle('hide');
}


function openUniverse() {
  const acess = document.querySelector('#acess');
  const close = document.querySelector('#closeModal');

  acess.addEventListener('click', toggleUniverse);
  close.addEventListener('click', toggleUniverse);
}