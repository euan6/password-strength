function changeColourOnMatch(target){
  target.style.color = "rgb(4,199,69)"
}
function changeColourNoMatch(target){
  target.style.color = "#272727"
}

var passClass = document.getElementsByClassName("checkPassword");
function passwordCheck(data){
  const eightChar = new RegExp ('(?=.{8,})');
  const lowerCase = new RegExp ('(?=.*[a-z])');
  const upperCase = new RegExp ('(?=.*[A-Z])');
  const number = new RegExp ('(?=.*[0-9])');
  const specialChar = new RegExp ('(?=.*[!@#\$%\^&\*])');

  if(eightChar.test(data)){
    changeColourOnMatch(passClass[0]);
  }
  else{
    changeColourNoMatch(passClass[0]);
  }

  if(lowerCase.test(data)){
    changeColourOnMatch(passClass[1]);
  }
  else{
    changeColourNoMatch(passClass[1]);
  }

  if(upperCase.test(data)){
    changeColourOnMatch(passClass[2]);
  }
  else{
    changeColourNoMatch(passClass[2]);
  }

  if(number.test(data)){
    changeColourOnMatch(passClass[3]);
  }
  else{
    changeColourNoMatch(passClass[3]);
  }

  if(specialChar.test(data)){
    changeColourOnMatch(passClass[4]);
  }
  else{
    changeColourNoMatch(passClass[4]);
  }
}

const togglebtnJ = document.getElementById("toggleBtn");
const inputJ = document.getElementById("input");
togglebtnJ.addEventListener('click',() =>{
  if(inputJ.type == 'password'){
    inputJ.type = 'text';
    togglebtnJ.style.color = "rgb(150,150,150)";
  } 
  else if(inputJ.type == 'text'){
    inputJ.type = 'password';
    togglebtnJ.style.color = "#3d3d3d"
  }
})