var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

var Main =
{

};

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	
	//amazonItemSearch("potter","Books");
	
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
			history.back();
			break;
		case tvKey.KEY_PANEL_RETURN:
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			$('.dg-prev').click();
			break;
		case tvKey.KEY_RIGHT:
			$('.dg-next').click();
			break;
		case tvKey.KEY_UP:
			break;
		case tvKey.KEY_DOWN:
			break;
		case tvKey.KEY_ENTER:
			location.href = $('.dg-center').attr('href');
		case tvKey.KEY_PANEL_ENTER:
			location.href = $('.dg-center').attr('href');
			break;
		default:
			alert("Unhandled key");
			break;
	}
};
