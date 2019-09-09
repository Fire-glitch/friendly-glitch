	var tempOut;
	var programNum;
	programNum = Math.floor(Math.random()*10+1)// генерирует случайное число между 1-10
	//tempOut=document.getElementById('tempout');
	//tempOut.innerHTML = programNum;
	console.log(programNum);

function f1(){
	var num;
	var out;
	num = document.getElementById('mynum').value;
	out = document.getElementById('out');
	
	if (num==programNum){
		out.innerHTML = "Вы угадали!!!";
	}
	else if(num > programNum){
		out.innerHTML = "Вы ввели число больше, чем нужно";
	}
	else if(num < programNum){
		out.innerHTML = "Вы ввели число меньше, чем нужо";
	}
	
}