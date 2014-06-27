var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();
var element;

var Input  = function(id, previousId, nextId)
{
    var imeReady = function(imeObject)
    {
        installFocusKeyCallbacks();
        installStatusCallbacks();
        Main.ready(id);
    };
    
    var ime = new IMEShell(id, imeReady, 'en');
    element = document.getElementById(id);
    var previousElement = document.getElementById(previousId);
    var nextElement= document.getElementById(nextId);

    
    var installFocusKeyCallbacks = function()
    {
        ime.setKeyFunc(tvKey.KEY_UP, function(keyCode) { previousElement.focus(); return false; } );
        ime.setKeyFunc(tvKey.KEY_DOWN, function(keyCode) { nextElement.focus(); return false; } );
        ime.setKeyFunc(tvKey.KEY_RETURN, function(keyCode) { widgetAPI.sendReturnEvent(); return false; } );
        ime.setKeyFunc(tvKey.KEY_EXIT, function(keyCode) { widgetAPI.sendExitEvent(); return false; } );
         };
    
    var installStatusCallbacks = function()
    {
    	ime.setKeySetFunc('qwerty');
    	ime.setQWERTYPos(340, 150);
    	ime.setKeypadPos(400, 109);
        ime.setWordBoxPos(180, 60);
		ime.setAnyKeyFunc(onAnyKey);
        ime.setMaxLengthFunc(onMaxLength);
        ime.setPrevEventOnLeftFunc(onLeft);
        ime.setOnCompleteFunc(onComplete);
        ime.setEnterFunc(onEnter);
        ime.setKeyFunc(tvKey.KEY_INFO, onInfoKey);
       
    };
    
    var onAnyKey = function(keyCode)
    {
       alert("a key pressed : " + element.value );
    };
    
    var onMaxLength = function()
    {
        Main.showMessage("Maximum length of input reached in " + element.id + ", text is " + element.value);
    };
    
    var onLeft = function()
    {
        Main.showMessage("Left key pressed at start of " + element.id);
    };
    
    var onComplete = function()
    {
        alert("Letter entry completed in " + element.id + ", text is " + element.value);
    };
    
    var onEnter = function(string)
    {
       alert("Enter key pressed in " + element.id + ", string is " + string);
    };
    
    var onInfoKey = function(keyCode)
    {
        alert("Info key pressed in " + element.id + ", key code is " + keyCode + ", text is " + element.value);
        ime.setString("Hello world");
        
        return true;
    };
    
};


var Main =
{
    elementIds : [ "plainText"],
    inputs : [ null],
    ready : [ false]
};

Main.onLoad = function()
{
    alert("Main.onLoad()");
    
 //this.createInputObjects();
    
    pluginAPI.registIMEKey();
    widgetAPI.sendReadyEvent();
};

Main.onUnload = function()
{
    alert("Main.onUnload()");
};


Main.createInputObjects = function()
{
    for (var index in this.elementIds)
    {
        var previousIndex = index - 1;
        if (previousIndex < 0)
        {   
            previousIndex = Main.inputs.length - 1;
        }
        var nextIndex = (index + 1) % Main.inputs.length;
        
        Main.inputs[index] = new Input( this.elementIds[index], this.elementIds[previousIndex], this.elementIds[nextIndex] );
    }
};


Main.ready = function(id)
{
    var ready = true;
    
    for (var i in Main.elementIds)
    {
        if (Main.elementIds[i] == id)
        {
            Main.ready[i] = true;
        }
        
        if (Main.ready[i] == false)
        {
            ready = false;
        }
    }
    
    if (ready)
    {
        document.getElementById("plainText").focus();
        //alert("focuus");
    }
};


Main.keyDown = function () {
    var keyCode = event.keyCode;
    alert("Main Key code : " + keyCode);
   
    switch (keyCode) {
        case tvKey.KEY_BLUE: 
        window.document.location.href = 'indexGalerija.html?id=' + element.value + '&';
        	
            break;
        case tvKey.KEY_DOWN:
        	this.createInputObjects();
        	break;
        
        case tvKey.KEY_UP: 
        	this.elementsIds.focus();
            alert("focus up");
        	break;
        	
        case tvKey.KEY_LEFT:
        	this.elementsIds.focus();
            alert("LEFT FOCUS");
        	break;
        
        	
    }
};





