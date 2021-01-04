function setURLs(){
    var d = document.getElementById("frame");
    if(d) setURL(d);
}

var lastURL = "";
function setURL(d){
    var url = '//learningapps.org/show.php?id=prstqomc518';
    var iconurl = '//learningapps.org/icon?id=prstqomc518';
    if(window.innerWidth <= 200) url = iconurl;
    if(lastURL != url){
        lastURL = url;
        switch(window.location.protocol) {
            case 'http:':
            case 'https:':
                //remote file over http or https
                d.src = window.location.protocol + url;
                break;
            case 'file:':
                //local file
                d.src = 'http:'+url;
                break;
            default:
                //some other protocol
                d.src = 'http:'+url;
        }
    }
}

setURLs();



if(typeof window.addEventListener == "function") {
    window.addEventListener("message", function(event){
        var inner = document.getElementById("frame").contentWindow;
        if(inner == event.source) return; // no loop back
        inner.postMessage(event.data,"*");
    }, false);
    window.addEventListener("resize", function(event){
        setURLs();
    });
}

function setURLs(){
    d = document.getElementById("frame2");
    if(d) setURL(d);
}

var lastURL = "";
function setURL(d){
    var url = '//learningapps.org/show.php?id=poaags62c18';
    var iconurl = '//learningapps.org/icon?id=poaags62c18';
    if(window.innerWidth <= 200) url = iconurl;
    if(lastURL != url){
        lastURL = url;
        switch(window.location.protocol) {
            case 'http:':
            case 'https:':
                //remote file over http or https
                d.src = window.location.protocol + url;
                break;
            case 'file:':
                //local file
                d.src = 'http:'+url;
                break;
            default:
                //some other protocol
                d.src = 'http:'+url;
        }
    }
}

setURLs();