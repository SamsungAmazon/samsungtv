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
    console.log(amazonUrl);
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





$(document).ready(function()
		{
		  $.ajax({
		    type: "GET",
		    url: amazonItemSearch("potter","Books"),
		    dataType: "xml",
		    success: dataReceive
		  });
		});



function dataReceive(xml){
	
 
		// alert("aaaaa");
		
	 $(xml).find("Item").each(function(){
		
	//$("#output").append($(this).find("Author").text()+ "<br />");
	
	
	
	var alt = $(this).find("Title").text();
	
	
			
    var author = $(this).find("ItemAttributes").children("Author").text();
	var title  = $(this).find("ItemAttributes").children("Title").text();
	var image  = $(this).find("MediumImage").children("URL").text();
		
	
	//showImage(image,100,100,alt);
	
	$("#output").append(author + " ");
	$("#output").append(title + "<br />");
	showImage(image,100,100,alt);
	
	
		 
	});
	 
	 
	 
};
