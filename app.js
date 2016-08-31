// #### XHR Call ####     
function callXHR(url, callbackId){
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.addEventListener("load", function(){
        if(request.status < 400)
            callbackId(request, callbackId);
    });
    request.send(null);
}

// #### Callback for Text ####
function text(request) {
    callback(request, "text")
}

// #### Callback for HTML ####
function html(request) {
    callback(request, "html")
}

// #### Callback for JSON ####
function json(request) {
    callbackJSON(request, "json")
}

// #### Callback for API as Text ####
function discogs(request) {
    callback(request, "discogs")
}

// #### Callback for API as JSON ####
function discogsj(request) {
    callbackJSON(request, "discogsJ")
}

// #### Callback ####
function callback(request, id) {
    if(id==="html" || id==="ejahtml"){
        document.getElementById(id).innerHTML = request.response;
    } else {
        var node = document.createTextNode(request.response);
        document.getElementById(id).appendChild(node);
    }
}

// #### Callback JSON ####
function callbackJSON(request, id) {
	var obj = JSON.parse(request.response);
    for (var key in obj){
        //Sets UL Item
        var myUl = document.createElement('ul');
        var node = document.createTextNode(key);
        myUl.id = key;
        myUl.appendChild(node);
        document.getElementById(id).appendChild(myUl);
        //Sets LI Items
        var myArr = obj[key];
        for (var i=0; i< myArr.length; i++){
            var myLi = document.createElement('li');
            var node = document.createTextNode(myArr[i]);
            myLi.appendChild(node);
            document.getElementById(key).appendChild(myLi);
        }
    }
}

// #### Button Assignments and Function Calls ####
var myTextButton = document.getElementById('loadtext');
myTextButton.addEventListener('click', function() {
    callXHR("text.txt", text);
});

var myHtmlButton = document.getElementById('loadhtml');
myHtmlButton.addEventListener('click', function() {
    callXHR("html.html", html);
});

var myJSONButton = document.getElementById('loadjson');
myJSONButton.addEventListener('click', function() {
    callXHR("animals.json", json);
});


//##### Headers #####

// // #### XHR Header Call ####     
 function callHeader(media, callback){
     var id = callback;
     var url = 'http://eloquentjavascript.net/author';
     var request = new XMLHttpRequest();
     request.open("GET", url, true);
     request.addEventListener("load", function(){
         if(request.status < 400)
             callback(request, id);
     });
     request.setRequestHeader('Accept', media);
     request.send(null);
 }

// #### Callback for text Header ####
function ejatext(request) {
    callback(request, "ejatext")
}

// #### Callback for HTML Header ####
function ejahtml(request) {
    callback(request, "ejahtml")
}

// #### Callback for JSON Header ####
function ejajson(request) {
    callback(request, "ejajson")
}

// #### Callback for Unicorns ####
function unicorns(request) {
    callback(request, "unicorns")
}

// #### Button Assignments and Function Calls ####
var myHeaderTextButton = document.getElementById('textEJA');
myHeaderTextButton.addEventListener('click', function() {
    callHeader('text/plain', ejatext);
});

var myHeaderHTMLButton = document.getElementById('htmlEJA');
myHeaderHTMLButton.addEventListener('click', function() {
    callHeader('text/html', ejahtml);
});

var myHeaderJSONButton = document.getElementById('jsonEJA');
myHeaderJSONButton.addEventListener('click', function() {
    callHeader('application/json', ejajson);
});

var myRainbowsButton = document.getElementById('rainbows');
myRainbowsButton.addEventListener('click', function() {
    callHeader('application/rainbows+unicorns', 'unicorns');
});

// ######## APIs ########


// #### Button Assignments and Function Calls ####
var myAPIButton = document.getElementById('discogsAPI');
myAPIButton.addEventListener('click', function() {
    callXHR("https://api.discogs.com/database/search?q='Bob Seger’&token=abmMbBpRUqbQMSXSRPKzcXYltFQqnsdUjbiVCDIJ", discogs);
});

var myApiJsonButton = document.getElementById('discogsJSON');
myApiJsonButton.addEventListener('click', function() {
    callXHR("https://api.discogs.com/database/search?q='Bob Seger’&token=abmMbBpRUqbQMSXSRPKzcXYltFQqnsdUjbiVCDIJ", discogsj);
});



// #### Earlier Versions ####

// var loadtext = document.getElementById('loadtext');

// loadtext.addEventListener('click', function() {
//     var request = new XMLHttpRequest();
//     request.addEventListener("load", callback);
//     request.open("GET", "text.txt");
//     request.send();
// });

// function callback() {
// 	var myTag = document.createElement('p');
//     myTag.innerHTML = this.response;
//     document.getElementById("text").appendChild(myTag);
// }



//var loadhtml = document.getElementById('loadhtml');

//loadhtml.addEventListener('click', function() {
//    var request = new XMLHttpRequest();
//    request.addEventListener("load", callback2);
//    request.open("GET", "html.html");
//    request.send();
//});

//function callback2() {
//	var myTag = document.createElement('p');
//    myTag.innerHTML = this.response;
//    document.getElementById("html").appendChild(myTag);
//}


// var loadjson = document.getElementById('loadjson');

// loadjson.addEventListener('click', function() {
//     var request = new XMLHttpRequest();
//     request.addEventListener("load", callback3);
//     request.open("GET", "animals.json");
//     request.send();
// });

// function callback3() {
// 	var obj = JSON.parse(this.response);
//     for (var key in obj){
//         var myUl = document.createElement('ul');
//         myUl.innerHTML = key;
//         document.getElementById("json").appendChild(myUl);

//         var myArr = obj[key];
//         for (var i=0; i< myArr.length; i++){
//             var myLi = document.createElement('li');
//             myLi.innerHTML = myArr[i];
//             document.getElementById("json").appendChild(myLi);
//         }
//     }
// }
	

// function makeJSON(button, div, text){
//     var myButton = document.getElementById(button);
//     myButton.addEventListener('click', function() {
//         var request = new XMLHttpRequest();
//         request.addEventListener("load", function callback() {
// 	        var myTag = document.createElement('p');
//             myTag.innerHTML = this.response;
//             document.getElementById(div).appendChild(myTag);
//         });
//     request.open("GET", text);
//     request.send();
//     });
// }

// makeJSON("loadtext", "text", "text.txt");
// makeJSON("loadhtml", "html", "html.html");


// function makeJSON(item){
//     var myButton = document.getElementById("load" + item);
//     myButton.addEventListener('click', function() {
//         var request = new XMLHttpRequest();
//         request.addEventListener("load", function callback() {
// 	        var myTag = document.createElement('p');
//             myTag.innerHTML = this.response;
//             document.getElementById(item).appendChild(myTag);
//         });
//     var requestItem = (item == "html" ? "html.html" : "text.txt")
//     request.open("GET", requestItem);
//     request.send();
//     });
// }

//makeJSON("text");
//makeJSON("html");


//if(this.status == 200){
//  myTag.innerHTML = this.response;
//} else { 
//  myTag.innerHTML = "Sorry, something went wrong";
//}