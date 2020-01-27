var mode = {
	day : 'day',
	night : 'night'
};

function SetMode(m)
{
	options.mode = m.toString();
	GetModeIcons();
	GetStyle();
	SetOptions();
}

function SetFont(m)
{
	options.font = m.toString();
	GetStyle();
	SetFontFamily();
	SetOptions();
}

function SetColor(m)
{
	options.color = m.toString();
	GetStyle();
	SetColorOptions();
	SetOptions();
}

function GetModeIcons()
{
	try{
		var o_mode = document.getElementsByClassName('options-mode')[0]
			.getElementsByTagName('div');
		var o_mode_d = o_mode[1].firstElementChild;
		var o_mode_n = o_mode[2].firstElementChild;
		if(options.mode == mode.day)
		{
			o_mode_d.setAttribute('src','assets/images/day.png');
			o_mode_n.setAttribute('src','assets/images/night0.png');
		}
		else if(options.mode == mode.night)
		{
			o_mode_d.setAttribute('src','assets/images/day0.png');
			o_mode_n.setAttribute('src','assets/images/night.png');
		}
	} catch(e) {}
}

function ForEachSelector(selector,func)
{
	var box = document.querySelectorAll(selector);
	for(var i = 0; i < box.length; i++)
	{
		if(func != null) func(box[i].style);
	}
}

function BoxColor(color)
{
	try
	{
		ForEachSelector('.job-msg',function(style){
			style.backgroundColor = color[0];
		});

		ForEachSelector('fieldset',function(style){
			style.backgroundColor = color[0];
		});

		ForEachSelector('legend',function(style){
			style.backgroundColor = color[0];
		});

		ForEachSelector('#problems-block',function(style){
			style.backgroundColor = color[0];
		});

		ForEachSelector('#list-block',function(style){
			style.backgroundColor = color[0];
		});

		ForEachSelector('#problems-block table tr td',function(style){
			style.backgroundColor = color[1];
		});
		
		document.querySelector('header').style.backgroundColor = color[2];
		document.querySelector('.logo').style.color = color[3];
		
		ForEachSelector('#menu ul li[disabled="true"]',function(style){
			style.backgroundColor = color[4];
		});
		
		document.getElementById('menu').setAttribute('class',color[5]);
		
	} catch(e) {}
}

function GetColorOptions(mode)
{
	var color,color0,color1,color2;
	if(mode == 'night')
	{
		color0 = ["#555","#777","#797b84","#fff"];
		color1 = ["#535346","#4e5544","#4b6252","#fff"];
		color2 = ["#444b55","#515a65","#544b62","#fff"];
	}
	else
	{
		color0 = ["#f0f0f0","#fff","#cecfd8","#000"];
		color1 = ["#eaeac3","#fff","#b2d4bc","#000"];
		color2 = ["#e3e7ef","#fff","#b9b2d4","#000"];
	}
	
	color0 = color0.concat(["#dae2e8","menu0"]);
	color1 = color1.concat(["#e7e8da","menu1"]);
	color2 = color2.concat(["#e0dae8","menu2"]);
	
	switch(options.color)
	{
		case '1':
			color = color1;
			break;
		case '2':
			color = color2;
			break;
		default:
			color = color0;
			break;
	}
	try{
		document.querySelector('#id_color_a0').style.backgroundColor = color0[2];
		document.querySelector('#id_color_b0').style.backgroundColor = color0[4];
		document.querySelector('#id_color_c0').style.backgroundColor = color0[0];
		
		document.querySelector('#id_color_a1').style.backgroundColor = color1[2];
		document.querySelector('#id_color_b1').style.backgroundColor = color1[4];
		document.querySelector('#id_color_c1').style.backgroundColor = color1[0];
		
		document.querySelector('#id_color_a2').style.backgroundColor = color2[2];
		document.querySelector('#id_color_b2').style.backgroundColor = color2[4];
		document.querySelector('#id_color_c2').style.backgroundColor = color2[0];
	} catch(e) {}
	return color;
}

function SetColorOptions()
{
	try{
		switch(options.color)
		{
			case '1':
				document.getElementById('id_color_1').checked = true;
				break;
			case '2':
				document.getElementById('id_color_2').checked = true;
				break;
			default:
				document.getElementById('id_color_0').checked = true;
				break;
		}
	} catch(e) {}
}

function GetFontFamily()
{
	switch(options.font){
		case '1':
			ForEachSelector('*',function(style){
				style.fontFamily = '"Palatino Linotype", "Book Antiqua", Palatino, serif';
			});
			break;
		case '2':
			ForEachSelector('*',function(style){
				style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
			});
			break;
		default:
			ForEachSelector('*',function(style){
				style.fontFamily = 'arial, helvetica, sans-serif';
			});
			break;
	}
}

function SetFontFamily()
{
	try{
		switch(options.font){
			case '1':
				document.getElementById('id_pl').checked = true;
				break;
			case '2':
				document.getElementById('id_cs').checked = true;
				break;
			default:
				document.getElementById('id_a').checked = true;
				break;
		}
	} catch(e) {}
}

function GetStyle()
{
	var selector = document.querySelector('body');
	if(options.mode == mode.night)
	{
		selector.style.backgroundColor = "#22232a";
		selector.style.color = "#fff";
		BoxColor(GetColorOptions("night"));
	}
	else
	{
		selector.style.backgroundColor = "#fff";
		selector.style.color = "#000";
		BoxColor(GetColorOptions("day"));
	}
	GetFontFamily();
}

(function() {
	GetOptions();
	GetStyle();
	GetModeIcons();
	SetFontFamily();
	SetColorOptions();
	SetOptions();
}());