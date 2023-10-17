window.addEventListener('load', darkMode)

function toggleDark(){
  document.body.classList.toggle("dark");
}


function darkMode(){
  const btn = document.getElementById("change-theme");

  btn.addEventListener("change", function(){
    toggleDark();
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
      localStorage.setItem("dark", 1);
      document.body.classList.add("dark");
    } 
  });

  storage();
}

function storage(){
  const dark = localStorage.getItem("dark");
  const btn = document.getElementById("change-theme");

  if(dark){
    toggleDark();
    btn.checked = true;
  }
}