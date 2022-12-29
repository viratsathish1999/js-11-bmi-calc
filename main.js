let button=document.getElementById("btn")
button.addEventListener("click",myFunction)
function myFunction(){
  let weight =document.getElementById("weigh").value;
  let height=document.getElementById("high").value;
  height=height/100;
  let calc=weight/(height*height);
  document.getElementById("bmi").value=calc;
  if(calc<18){
    document.write("under weight")
  }
  else if(calc>=18 && calc<25){
    document.write("normal weight")
  }
  else if(calc>=25 && calc<30){
    document.write("over weight")
  }
  else{
    document.write("obesity")
  }

} 