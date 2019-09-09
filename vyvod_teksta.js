//первый способ,как заменить текст в html
/*function out(){
	var p;
	p = document.getElementById('out');
	p.innerHTML = 'Hello';
}*/

//дописать информацию
function out(){
	var p;
	p = document.getElementById('out');
	p.innerHTML = 'Hello';
	p.innerHTML += ', <b>World!</b>';//innetText - тэги выводятся, но не обрабатываются, в отличие от innerHTML
	p.insertAdjacentHTML('beforeBegin','Hi');//позволяет ставить инф. в разные позиции по отношению к текущему элементу. имеет 2 параметра: 1- кудавставить инф; 2- что вставить
	//beforeBegin вставляет текст перед открывающимся тэгом
	p.insertAdjacentHTML('afterBegin','Hi2');
	//afterBegin вставляет текст после открывающего тэга, но перед содержимым
	p.insertAdjacentHTML('beforeEnd','Hi3');
	//beforeEnd вставит перед закрывающимся тэгом
	p.insertAdjacentHTML('afterEnd','Hi4');
	//afterEnd вставит после закрытого тэга
	
	
	p.outerHTML = '<div class = "one">hello</div>'
	//outerHTML заменяет тэг полностю, а innerHTML заменяет содержимое тэга, но сам тег не трогает

}