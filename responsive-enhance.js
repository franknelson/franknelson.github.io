var addEvent=function(){return document.addEventListener?function(e,t,n){if(e&&e.nodeName||e===window)e.addEventListener(t,n,!1);else if(e&&e.length)for(var r=0;r<e.length;r++)addEvent(e[r],t,n)}:function(e,t,n){if(e&&e.nodeName||e===window)e.attachEvent("on"+t,function(){return n.call(e,window.event)});else if(e&&e.length)for(var r=0;r<e.length;r++)addEvent(e[r],t,n)}}();var responsiveEnhance=function(e,t,n){if(e.length){for(var r=0,i=e.length;r<i;r++){responsiveEnhance(e[r],t,n)}}else{if((" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(" large ")==-1&&e.clientWidth>t){var s=new Image;addEvent(s,"load",function(t){e.className+=" large";e.src=this.src});s.src=e.getAttribute("data-fullsrc")}}if(n!=false){addEvent(window,"resize",function(n){responsiveEnhance(e,t,false)});addEvent(e,"load",function(n){responsiveEnhance(e,t,false)})}}