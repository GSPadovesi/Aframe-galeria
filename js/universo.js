window.addEventListener('load', openUniverse);

function toggleUniverse(){
  const universe = document.querySelector('#container-universe');
  universe.classList.toggle('hide');

}


function openUniverse() {
  const acess = document.querySelector('#acess');
  const close = document.querySelector('#closeModal');

  acess.addEventListener('click', toggleUniverse);
  close.addEventListener('click', toggleUniverse);
}