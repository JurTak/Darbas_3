var game = {
	num1:0,
	num2:0
}
function SetRandNumber()
{
	game.num1 = Math.floor(Math.random() * 10) + 1;
	game.num2 = Math.floor(Math.random() * 10) + 1;
	var gc = document.getElementById('game-condition-id');
	gc.innerHTML = game.num1 + " &times; " + game.num2 + " = ";
}

function StoresStatusSetGBColor()
{
	var color = "#fff";
	if(options.mode == 'night')
	{
		switch(options.color)
		{
			case '1':
				color = "#4e5544";
				break;
			case '2':
				color = "#515a65";
				break;
			default:
				color = "#777";
				break;
		}
	}
	ForEachSelector('.game-info table tbody tr td',function(style){
		style.backgroundColor = color;
	});
}

function StoresStatus(status, answer, actual)
{
	var newElement = document.createElement('tr');
	
	var e1 = document.createElement('td');
	e1.innerHTML = status;
	newElement.appendChild(e1);
	
	var e2 = document.createElement('td');
	e2.innerHTML = answer;
	newElement.appendChild(e2);
	
	var e3 = document.createElement('td');
	e3.innerHTML = actual;
	newElement.appendChild(e3);
	
	document.getElementById('game-info-box-id').appendChild(newElement);
	
	try{StoresStatusSetGBColor();}
	catch(except){}
	
	var scroll = this.document.querySelector('.game-info table');
	scroll.scrollTop = scroll.scrollHeight;
}

function AnswerNumEnter(e)
{
	if (e.charCode >= 48 && e.charCode <= 57)
	{
		return false;
	}
	if (e.keyCode == 13)
	{
		var ga = document.getElementById('game-answer-id');
		if(ga.value.length > 0)
		{
			var answer = parseInt(ga.value, 10);
			var actual = game.num1 * game.num2;
			var status = (answer == actual ? 'OK' : 'Fail');
			if(status == 'OK')
			{
				var statusOk = document.getElementById('game-info-ok-id');
				var n = parseInt(statusOk.innerHTML, 10) + 1;
				statusOk.innerHTML = n;
			}
			else
			{
				var statusFail = document.getElementById('game-info-fail-id');
				var n = parseInt(statusFail.innerHTML, 10) + 1;
				statusFail.innerHTML = n;
			}
			answer = game.num1 + " &times; " + game.num2 + " = " + answer;
			actual = game.num1 + " &times; " + game.num2 + " = " + actual;
			StoresStatus(status, answer, actual);
			SetRandNumber();
			ga.value = "";
		}
	}
	e.preventDefault();
	return false;
}

(function() {
	SetRandNumber();
}());