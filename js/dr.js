window.onload=function(){
    let usernameelt = document.getElementById('zha');
   let wdtn=document.getElementById('scs')
   let bqc=document.getElementById('bqc')
   let mim=document.getElementById('mim') 
   usernameelt.onblur =function(){
   let zha =usernameelt.value;
   zha = zha.trim();
   if(zha==""){
     wdtn.innerHTML="账号不能为空"
   }else{
     if(zha.length <7|| zha.length >11){
       wdtn.innerHTML="账号长度不符合标准大于6小于12";
     }
   }
   }
   usernameelt.onfocus = function(){
      wdtn .innerHTML="";
   }
 
 
   mim.onblur=function(){
     let zhe =mim.value;
     zhe=zhe.trim();
     if(zhe==""){
       bqc.innerHTML="你还没输入密码呢";
     }else{
       if(zhe.length<4 || zhe.length>8)
         bqc.innerHTML="密码长度不符合标准要大于3小于9";
     }
   }
   mim.onfocus = function(){
     bqc.innerHTML="";
   }
   document.getElementById('dr').onclick=function(){
 
     usernameelt.focus();
     usernameelt.blur();
 
     mim.focus();
     mim.blur();
 
     if((wdtn.innerHTML=="")||( bpc.innerHTML=="")){
     let formobj = document.getElementById("hf")
     formobj.submit();
   }
   }
 }