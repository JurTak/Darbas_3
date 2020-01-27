var options = {
	mode:"",
	font:"",
	color:""
};

function out_menu(x)
{
	try{
		var id1 = this.document.getElementById('checkbox_id1');
		if(x == 0 || x == 1) id1.checked = false;
	} catch(e){}
	try{
		var id2 = this.document.getElementById('checkbox_id2');
		if(x == 0 || x == 2) id2.checked = false;
	} catch(e){}
}

function CreateCookie(name, value, days)
{
	var expires = "";
	if(days)
	{
		var time = 60*60*24*days;
		expires = "; max-age="+time.toString();
	}
	this.document.cookie = name+"="+value+expires+";";
	return name+"="+value+expires+";";
}

function GetCookie(name)
{
	var ret = "";
	var cookie = this.document.cookie;
	var res = cookie.split(";");
	for(var i = 0; i < res.length; i++)
	{
		var coo = res[i].trim(' ').split("=");
		if(coo[0] && coo[0] == name)
		{
			if(coo[1]) {ret = coo[1];break;}
		}
	}
	return ret;
}

function GetOptions()
{
	var params = document.URL.split('?')[1];
	if(params)
	{
		params = params.split('&');
		for(var i = 0,n = params.length; i < n; i++)
		{
			var o = params[i].split('=');
			switch(o[0]){
				case 'mode':
					if(o[1]) options.mode = o[1];
					break;
				case 'font':
					if(o[1]) options.font = o[1];
					break;
				case 'color':
					if(o[1]) options.color = o[1];
					break;
			}
		}
	}
}

function GoToChild(parent, childName, index = 0)
{
	var pos = 0;
	for(var i = 0,n = parent.childNodes.length; i < n; i++)
	{
		var ul = parent.childNodes[i].tagName;
		if(ul)
		{
			if(ul.toLowerCase() == childName.toLowerCase())
			{
				if(pos == index)
					return parent.childNodes[i];
				pos++;
			}
		}
	}
}

function SetOptions()
{
	var params = '';
	if(options.mode == 'night')
	{
		params += 'mode=night';
	}
	if(options.font.length > 0 && options.font != '0')
	{
		if(params.length > 0) params += '&';
		params += 'font='+options.font;
	}
	if(options.color.length > 0 && options.color != '0')
	{
		if(params.length > 0) params += '&';
		params += 'color='+options.color;
	}
	
	var menu = document.getElementById('menu');
	menu = GoToChild(menu,'ul');
	for(var i = 0,n = menu.childElementCount; i < n; i++)
	{
		var a = GoToChild(menu, 'a', i);
		if(a)
		{
			var link = a.getAttribute('href');
			var url = link.split('?');
			link = url[0];
			if(params.length > 0) link += '?' + params;
			a.setAttribute('href', link);
		}
	}
	
	menu = document.getElementsByClassName('dropdownbox-table');
	for(var i = 0; i < menu.length; i++)
	{
		for(var j = 0; j < menu[i].childElementCount; j++)
		{
			try{
				var link = menu[i].childNodes[j].getAttribute('href');
				if(link == 'options.html')
				{
					var url = link.split('?');
					link = url[0];
					if(params.length > 0) link += '?' + params;
					menu[i].childNodes[j].setAttribute('href',link);
				}
			}catch(except){}
		}
	}
}


