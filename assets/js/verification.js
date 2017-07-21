
/*鎖右鍵*/
function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
if(event.ctrlKey || event.shiftKey || event.altKey) {
window.event.returnValue=false;
iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
document.onselectstart=iEsc;
else{
document.onmousedown=iEsc;
document.onmouseup=iRec;
}
function DisableRightClick(qsyzDOTnet){
if (window.Event){
if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
iEsc();}
else
if (event.button == 2 || event.button == 3){
event.cancelBubble = true
event.returnValue = false;
iEsc();}
}

/*json*/
function validatecode(){
  $("#load").show();
  $("#jgsb").hide();
  $("#jgcg").hide();
  var fwmzhi=$("#fwmzhi").val();
  if(fwmzhi.length!=16){
    $("#load").hide();
    $("#jgsb").show();
    $("#jgcg").hide();
    return false;
  }
   $.ajax({
             type: "get",
             async: false,
             url: "http://cu.wangdaya.com/antiforgery/queryp.na?key="+fwmzhi,
             dataType: "jsonp",
             jsonp: "callback",
             jsonpCallback:"flightHandler",
             success: function(json){
        $("#load").hide();
                if(json.success==false){
          $("#jgsb").show();
          $("#jgcg").hide();
        }else{
          $("#jgsb").hide();
          $("#jgcg").show();
        }
             },
             error: function(){
        $("#load").hide();
        $("#jgsb").show();
        $("#jgcg").hide();
             }
         });
     return true;
}