
var button1 = document.querySelectorAll('button')[0];
button1.addEventListener('click', requestText);

function requestText() {
	$.getJSON(
		'https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f',
		function(data){
			var text =`${data.text}`

		document.getElementById('label').textContent=text;
		}
	);
}

var inputs = document.querySelectorAll('input');
var button2 = document.querySelectorAll('button')[1];
var label = document.querySelector('p');

button2.addEventListener('click', updateText);

function updateText() {
	if (inputsAreEmpty()) {
    	label.textContent = 'Ошибка: заданы не все значения.';
    	return;
   }
   updateLabel();
}

 function inputsAreEmpty() {
	 if (getVAR1() === ''||
	 	 getVAR2() === ''||
	 	 getVAR3() === ''||
	 	 getVAR4() === ''||
	 	 getVAR5() === ''||
	 	 getVAR6() === ''||
	 	 getSpeach() === '') {
     return true;
   } else {
     return false;
   }
}

function updateLabel() {
	var var1 = getVAR1();
	var var2 = getVAR2();
	var var3 = getVAR3();
	var var4 = getVAR4();
	var var5 = getVAR5();
	var var6 = getVAR6();
	var speach = getSpeach(); 

	var updateText = `
	  	Жили-были  ${var1} да ${var2},Была у них ${var3},Снесла ${var3} ${var4},
	 	не простое - золотое,- ${var1} бил, бил - не разбил,- ${var2} била,
	 	 била - не разбила, ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.,
	 	 ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:, ${speach}`

	document.getElementById('label').textContent=updateText;
}

function getVAR1() {
return inputs[0].value;
}

function getVAR2() {
return inputs[1].value;
}

function getVAR3() {
return inputs[2].value;
}

function getVAR4() {
return inputs[3].value;
}

function getVAR5() {
return inputs[4].value;
}

function getVAR6() {
return inputs[5].value;
}

function getSpeach() {
return inputs[6].value;
}


function renderText() {
	var $text = $(text);
	$text.appendTo('p');
}