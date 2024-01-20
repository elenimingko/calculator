function displa(val) { 
  let operators = ['+', '-', '*', '/'];
 let number= document.getElementById('display').value;
 const last = number[number.length - 1];
 
 if (operators.includes(val) && operators.includes(last)) {
  return ;
 }else{
 document.getElementById('display').value += val;
 }

} 
function cleare() {
  document.getElementById('display').value ='';
}

function calculatore() {
  let number= document.getElementById('display').value;
  let result=eval(number);
  document.getElementById('display').value=result;
}


 