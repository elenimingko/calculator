function displa(val) { 
    document.getElementById("display").value += val 
} 
function cleare() {
    document.getElementById('display').value ='';
  }
  
  function calculatore() {
   let resultat= document.getElementById('display').value;
   let resul=eval(resultat);
   document.getElementById('display').value=resul;

  
  }