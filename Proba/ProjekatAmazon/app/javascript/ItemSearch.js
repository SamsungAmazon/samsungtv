function sha256(stringToSign, secretKey) {
  var hex = CryptoJS.HmacSHA256(stringToSign, secretKey);
  return hex.toString(CryptoJS.enc.Base64);
 
  
}

function timestamp() {
    var date = new Date();
    var y = date.getUTCFullYear().toString();
    var m = (date.getUTCMonth() + 1).toString();
    var d = date.getUTCDate().toString();
    var h = date.getUTCHours().toString();
    var min = date.getUTCMinutes().toString();
    var s = date.getUTCSeconds().toString();

    if(m.length < 2) { m = "0" + m; }
    if(d.length < 2) { d = "0" + d; }
    if(h.length < 2) { h = "0" + h; }
    if(min.length < 2) { min = "0" + min; }
    if(s.length < 2) { s = "0" + s;}

    var date = y + "-" + m + "-" + d;
    var time = h + ":" + min + ":" + s;
    return date + "T" + time + "Z";
}

function amazonItemSearch (keywords , searchIndex) {
    var PrivateKey = "dvryatQr/NNo6UWAfw+J2y4g7L1uBTNR+gbqLTi2";
    var PublicKey = "AKIAI2KRT4ZQMVGLRLJA";
    var AssociateTag = "popravimiskol-20";
   
    var parameters = [];
    parameters.push("AWSAccessKeyId=" + PublicKey);
    parameters.push("Keywords=" + keywords);
    parameters.push("Operation=ItemSearch");
    parameters.push("SearchIndex=" + searchIndex);
    parameters.push("Service=AWSECommerceService");
    parameters.push("Timestamp=" + encodeURIComponent(timestamp()));
    parameters.push("Version=2011-08-01");
    parameters.push("AssociateTag=" + AssociateTag);
    parameters.push("ResponseGroup=Large");
    
    parameters.sort();
    var paramString = parameters.join('&');

    var signingKey = "GET\n" + "ecs.amazonaws.com\n" + "/onca/xml\n" + paramString;

    var signature = sha256(signingKey,PrivateKey);
        signature = encodeURIComponent(signature);

    var amazonUrl =  "http://ecs.amazonaws.com/onca/xml?" + paramString + "&Signature=" + signature;

    return amazonUrl;
}
   
function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;  
    document.body.appendChild(img);
}

function findID(str)
{
theleft = str.indexOf("=")+1;
theright = str.lastIndexOf("&");
alert(theleft + " " + theright);
return(str.substring(theleft, theright));
}

$(document).ready(function() {
	
	alert(document.URL);
	
	alert(findID(document.URL));
	var id = findID(document.URL);
	$.ajax({
		
	    type: "GET",
	    url: amazonItemSearch(id,"Books"),
	    dataType: "xml",
	    success: dataReceive
	});
});

function dataReceive(xml){
	$(xml).find("Item").each(function(){
		var alt = $(this).find("Title").text();
		var author = $(this).find("ItemAttributes").children("Author").text();
		var title  = $(this).find("ItemAttributes").children("Title").text();
		var image  = $(this).find("MediumImage").children("URL").text();
		var largeImage = $(this).find("LargeImage").children("URL").text();
		var itemLink = $(this).find("ItemLinks").find("URL").text();
		$("#dg-container").find('.dg-wrapper').
		append('<a href="' + itemLink + '" >' + 
					'<img src="' + largeImage + '" alt="' + alt + '" style="width:482px; height:316px; " />' +
					'<div class="textDetails author">' + author + '</div>' +
					'<div class="textDetails title">' + title + '</div>' +
		       '</a>');		 
	});
	 
	 $('#dg-container').gallery();
};
