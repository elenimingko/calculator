function displa(val) { 
    document.getElementById("display").value += val 
} 
function cleare() {
    document.getElementById('display').value ='';
  }

  function calculatore() {
    let operators = ['+', '-', '*', '/'];
   let number= document.getElementById('display').value;
   const last = number[number.length - 1];
   console.log(last);
   if (operators.includes(last)) {
    return ;
   }else{
     let result=eval(number);
   document.getElementById('display').value=result;
   }
  }


 