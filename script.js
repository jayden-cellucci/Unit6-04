function formula(){
  let a =document.getElementById("t1").value;
  let b =document.getElementById("t2").value;
  let h =document.getElementById("t3").value;

  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)

  calculate(a, b, h);
}

function calculate(a, b, h){
  const answer = ((a+b)/2) * h;
  alert(answer);
}