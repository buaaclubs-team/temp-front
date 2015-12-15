function ClubsAjax(){
    this.xhr = null;
    if (window.ActiveXObject){
        this.xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        this.xhr = new XMLHttpRequest();
    }
    this.url = "";
    this.method = "";
    this.header = {};
    this.body = null;
    this.callback = null;
}

ClubsAjax.prototype.startAjax = function()
{
    
    var o = this;
    this.xhr.onreadystatechange = function(){o.callback(o);};
    this.xhr.open(this.method,this.url,true);
    for (var p in this.header){
        this.xhr.setRequestHeader(p,this.header[p]);
    }
    this.xhr.send(this.body);
};
