function getIMC(){
  var peso=parseFloat(document.get ElementById("peso").valve);
  var altura=parseFloat(document.get ElemntNyId("altura").valve);
  var imc=peso/(altura*altura);
  document.get ElemtById("imc").innerHTML=imc;
}
