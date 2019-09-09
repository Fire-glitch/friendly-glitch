function plus(){
	var num1,num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);//функция, которая преобразует строку в число
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//функция, которая преобразует строку в число
	
	result = num1+num2;
	
	document.getElementById('out').innerHTML = result;
	//innerHTML 
 }
 
 function minus(){
	var num1,num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);//функция, которая преобразует строку в число
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//функция, которая преобразует строку в число
	
	result = num1-num2;
	
	document.getElementById('out').innerHTML = result;
	//innerHTML 
 }
 
  function umnogenie(){
	var num1,num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);//функция, которая преобразует строку в число
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//функция, которая преобразует строку в число
	
	result = num1*num2;
	
	document.getElementById('out').innerHTML = result;
	//innerHTML 
 }
 
function delenie(){
	var num1,num2, result;
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);//функция, которая преобразует строку в число
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);//функция, которая преобразует строку в число
	 if(num2==0){
		 document.getElementById('out').innerHTML="На ноль делить нельзя!";
	 }
	 else{
	result = num1/num2;

	 document.getElementById('out').innerHTML = result;}
	//innerHTML 
 }