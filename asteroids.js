window.Dom2=window.Dom2||{},function(a){function b(a,b){this.x=a,this.y=b}function c(a,b){this.position=a,this.direction=b}function d(){function a(){I.dom2.isAccelerating=!0}function d(){I.dom2.isAccelerating=!1}function e(){I.dom2.isRotatingLeft=!0}function f(){I.dom2.isRotatingLeft=!1}function g(){I.dom2.isRotatingRight=!0}function h(){I.dom2.isRotatingRight=!1}function i(a){I.dom2.isShooting=!0,I.dom2.isAtLeastOneShot=!0}function j(){I.dom2.isShooting=!1}function k(a){var c=(new Date).getTime(),d=(c-w)/1e3;w=c,C=d,d=Math.min(.02,d);var e=x=a.gamma,f=y=a.beta;return e=Math.max(Math.min(Math.round(e*z)/z,90),-90),f=Math.max(Math.min(Math.round(f*z)/z,90),-90),x=e,y=f,Math.abs(e)<=.2||Math.abs(f)<=.2?(I.dom2.isRotatingLeft=!1,void(I.dom2.isRotatingRight=!1)):(A=S*Math.min(1,20*Math.abs(e)/90),B=S*Math.min(1,20*Math.abs(f)/90),e*=Math.PI/180,f*=Math.PI/180,v=new b(e,f).normalize(),u=new b(A*d*v.x,B*d*v.y).add(I.dom2.speed),u.x>V?u.x=V:u.x<-V&&(u.x=-V),u.y>V?u.y=V:u.y<-V&&(u.y=-V),I.dom2.direction=v,void(I.dom2.speed=u))}function l(a){if(t){if(P=document.elementsFromPoint(a.x,a.y),!P)return null;for(var b=0;b<P.length;b++)if(m(P[b]))return P[b]}else{if(N=document.elementFromPoint(a.x,a.y),console.log(N),!N)return null;if(N.nodeType===Node.TEXT_NODE&&(N=N.parentElement),m(N))return N}return null}function m(a){return a!==document.body&&!a.classList.contains("dom2")&&a.children.length<2&&a!==Node.TEXT_NODE}function n(){_=!1,I.parentNode.removeChild(I),q.parentNode.removeChild(q)}function o(a){for(var c,d=(new Date).getTime(),e=0;20>e;e++)c={},c.position=new b(a.x,a.y),c.direction=new b(1,1).rotate(360*Math.random()),c.speed=X*(1-.2*Math.random()),c.color=e%3==0?"#E14832":e%3==1?"#ff0000":"#1E1E1E",c.time=d,da.push(c)}var p=this;console.log("Ignite()");var q=document.createElement("div");q.className="dom2";var r=!!("onorientationchange"in window),s=!r&&!!("ontouchstart"in window||navigator.msMaxTouchPoints),t=!!document.elementsFromPoint;console.log("supportsFetchingSeveralElements:"+t);var u,v,w=(new Date).getTime(),x="-",y="-",z=10,A=0,B=0,C="-",D=document.createElement("div");if(D.id="shipContainer",D.className="dom2",document.body.appendChild(D),s){q.innerHTML='<div class="dom2" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;font-family:Arial, Helvetica, sans-serif;font-size: 12px;background:rgba(0,0,0,0.6);width:100%;position:fixed;bottom:0;color:#fff;z-index:1010;text-align:center;"><div class="dom2" id="Dom2.controls.up" style="box-sizing:border-box;width:80px;height:80px;;text-align:center;font-size:x-large;border-left:2px solid #262626;border-top:2px solid #262626;border-right:2px solid #262626;padding:20px;display:inline-block;">&uarr;</div><div class="dom2" style="text-align:center;width:100%; overflow: hidden;margin-left:auto;margin-right:auto;"><div class="dom2" id="Dom2.controls.left" style="box-sizing:border-box;width:80px;height:80px;text-align:center;font-size:x-large;border-left:2px solid #262626;border-top:2px solid #262626;border-bottom:2px solid #262626;padding:20px;display:inline-block;">&larr;</div><div class="dom2" id="Dom2.controls.shoot" style="box-sizing:border-box;width:80px;height:80px;text-align:center;font-size:x-large;border:2px solid #262626;padding:20px;display:inline-block;">&otimes;</div><div class="dom2" id="Dom2.controls.right" style="box-sizing:border-box;width:80px;height:80px;text-align:center;font-size:x-large;border-top:2px solid #262626;border-bottom:2px solid #262626;border-right:2px solid #262626;padding:20px;display:inline-block;">&rarr;</div></div><div class="dom2" style="width:100%;text-align:center;clear:left;">Control ship with arrows or WASD. Shoot with SPACE or mouse click. Press ESC to quit. <a href="https://blog.roysolberg.com/2017/10/dom2-bookmarklet">Read more</a></div></div>',D.appendChild(q);var E=document.getElementById("Dom2.controls.up"),F=document.getElementById("Dom2.controls.left"),G=document.getElementById("Dom2.controls.right"),H=document.getElementById("Dom2.controls.shoot");E.addEventListener("touchstart",a),E.addEventListener("mousedown",a),E.addEventListener("touchend",d),E.addEventListener("mouseup",d),F.addEventListener("touchstart",e),F.addEventListener("mousedown",e),F.addEventListener("touchend",f),F.addEventListener("mouseup",f),G.addEventListener("touchstart",g),G.addEventListener("mousedown",g),G.addEventListener("touchend",h),G.addEventListener("mouseup",h),H.addEventListener("touchstart",i),H.addEventListener("mousedown",i),H.addEventListener("touchend",j),H.addEventListener("mouseup",j)}else r?(q.innerHTML='<div class="dom2" style="font-family:Arial, Helvetica, sans-serif;font-size: 12px;background:rgba(0,0,0,0.6);width:100%;position:fixed;bottom:0;color:#fff;z-index:1010;"><div class="dom2" style="width:100%;text-align:center;">Control ship tilting your device. Shoot by touching the screen. <a href="https://blog.roysolberg.com/2017/10/dom2-bookmarklet">Read more</a></div></div>',D.appendChild(q),window.addEventListener("deviceorientation",k,!0)):(q.innerHTML='<div class="dom2" style="font-family:Arial, Helvetica, sans-serif;font-size: 12px;background:rgba(0,0,0,0.6);width:100%;position:fixed;bottom:0;color:#fff;z-index:1010;"><div class="dom2" style="width:100%;text-align:center;">Control ship with arrows or WASD. Shoot with SPACE or mouse click. Press ESC to quit. <a href="https://blog.roysolberg.com/2017/10/dom2-bookmarklet">Read more</a></div></div>',D.appendChild(q));var I=document.createElement("canvas");I.className="dom2",I.addEventListener("mousedown",i,!1),I.addEventListener("mouseup",j,!1),I.width=document.clientWidth||window.innerWidth||document.documentElement.clientWidth,I.height=document.clientHeight||window.innerHeight||document.documentElement.clientHeight,I.style.width=I.width+"px",I.style.height=I.height+"px",I.style.zIndex=1e3,I.style.position="fixed",I.style.top=0,I.style.left=0,I.style.webkitTapHighlightColor="rgba(0,0,0,0)",I.dom2={},I.dom2.direction=new b(0,-1),I.dom2.position=new b(I.width/2-40,I.height/2-4.5),I.dom2.speed=new b(0,0),I.id="Dom2.ship",D.appendChild(I),document.onkeydown=function(a){switch(a.keyCode){case 32:return I.dom2.isShooting=!0,I.dom2.isAtLeastOneShot=!0,!1;case 65:case 37:return I.dom2.isRotatingLeft=!0,!1;case 87:case 38:return I.dom2.isAccelerating=!0,!1;case 39:case 68:return I.dom2.isRotatingRight=!0,!1;case 40:case 83:return I.dom2.isDeaccelerating=!0,!1;case 27:n()}},document.onkeypress=function(a){},document.onkeyup=function(a){switch(a.keyCode){case 32:return I.dom2.isShooting=!1,!1;case 65:case 37:return I.dom2.isRotatingLeft=!1,!1;case 87:case 38:return I.dom2.isAccelerating=!1,!1;case 68:case 39:return I.dom2.isRotatingRight=!1,!1;case 40:case 83:return I.dom2.isDeaccelerating=!1,!1}};var J,K,L,M,N,O,P,Q=(new Date).getTime(),R=400,S=450,T=.95,U=1,V=700,W=750,X=150,Y=10,Z=.6,$=250,_=!0,aa=0,ba=[],ca=0,da=[];return p.run=function(){if(_){var a=(new Date).getTime(),d=(a-Q)/1e3;if(Q=a,I.dom2.isRotatingLeft&&I.dom2.direction.rotate(R*-d),I.dom2.isRotatingRight&&I.dom2.direction.rotate(R*d),I.dom2.isAccelerating?(I.dom2.speed.add(new b(S*d*I.dom2.direction.x,S*d*I.dom2.direction.y)),I.dom2.speed.x>V?I.dom2.speed.x=V:I.dom2.speed.x<-V&&(I.dom2.speed.x=-V),I.dom2.speed.y>V?I.dom2.speed.y=V:I.dom2.speed.y<-V&&(I.dom2.speed.y=-V)):I.dom2.speed.multiply(1-T*d),I.dom2.isDeaccelerating&&I.dom2.speed.multiply(1-U*d),I.dom2.position.add(new b(d*I.dom2.speed.x,d*I.dom2.speed.y)),I.dom2.position.y<Y?window.pageYOffset>0?(L=Math.min(window.pageYOffset,I.height),window.scrollBy(0,-L),I.dom2.position.y+=L,I.dom2.position.y>I.height-Y&&(I.dom2.position.y=I.height-Y)):(I.dom2.position.y=Y,I.dom2.speed.y=-I.dom2.speed.y*Z):I.dom2.position.y>I.height-Y&&(K=document.body.offsetHeight-(window.innerHeight+window.pageYOffset),K>0?(L=Math.min(K,I.height),window.scrollBy(0,L),I.dom2.position.y-=L,I.dom2.position.y<Y&&(I.dom2.position.y=Y)):(I.dom2.position.y=I.height-Y,I.dom2.speed.y=-I.dom2.speed.y*Z)),I.dom2.position.x<Y?(I.dom2.position.x=Y,I.dom2.speed.x=-I.dom2.speed.x*Z):I.dom2.position.x>I.width-Y&&(I.dom2.position.x=I.width-Y,I.dom2.speed.x=-I.dom2.speed.x*Z),(I.dom2.isAtLeastOneShot||I.dom2.isShooting)&&a>aa+$&&(aa=a,I.dom2.isAtLeastOneShot=!1,ba.push(new c(new b(I.dom2.position.x+22*I.dom2.direction.x,I.dom2.position.y+22*I.dom2.direction.y),new b(I.dom2.direction.x,I.dom2.direction.y)))),J=I.getContext("2d"),J.save(),J.clearRect(0,0,I.width,I.height),ba.length>0){for(t||(D.style.zIndex=-1e3,I.style.zIndex=-990,q.style.zIndex=-980),M=ba.length,J.fillStyle="#fff",O=l(new b(I.dom2.position.x+22*I.dom2.direction.x,I.dom2.position.y+22*I.dom2.direction.y),new b(I.dom2.direction.x,I.dom2.direction.y));M--;)ba[M].position.add(new b(d*ba[M].direction.x*W,d*ba[M].direction.y*W)),ba[M].position.x<0||ba[M].position.x>I.width||ba[M].position.y<0||ba[M].position.y>I.height?ba.splice(M,1):(N=l(ba[M].position),J.fillRect(ba[M].position.x-2,ba[M].position.y-2,4,4),N&&N!=O&&(o(ba[M].position),N.remove?N.remove():N.parentNode.removeChild(N),ba.splice(M,1)));t||(D.style.zIndex=1e3,I.style.zIndex=1005,q.style.zIndex=1010)}if(da.length>0)for(M=da.length;M--;)a-da[M].time>900?da.splice(M,1):(da[M].position.add(new b(d*da[M].direction.x*da[M].speed,d*da[M].direction.y*da[M].speed)),J.globalAlpha=1-(a-da[M].time)/900,J.fillStyle=da[M].color,J.fillRect(da[M].position.x-2,da[M].position.y-2,4,4));J.globalAlpha=1,J.translate(I.dom2.position.x,I.dom2.position.y),J.rotate(I.dom2.direction.getAngle()),J.globalAlpha=ca,1>ca&&(ca+=.5*d),J.strokeStyle="#fff",J.fillStyle="#8a8a8a",J.lineWidth=2,J.lineCap="square",J.beginPath(),J.moveTo(-10,12),J.lineTo(20,0),J.lineTo(-10,-12),J.closePath(),J.stroke(),J.fill(),J.restore(),window.requestAnimationFrame&&window.requestAnimationFrame(p.run)}},window.requestAnimationFrame?window.requestAnimationFrame(p.run):setInterval(p.run,1e3/60),p.stop=function(){},!1}b.prototype={RADIANS_FACTOR:Math.PI/180,rotate:function(a){var b=a*this.RADIANS_FACTOR,c=this.x,d=this.y;return this.x=c*Math.cos(b)-Math.sin(b)*d,this.y=c*Math.sin(b)+Math.cos(b)*d,this},add:function(a){return this.x+=a.x,this.y+=a.y,this},multiply:function(a){return this.x*=a,this.y*=a,this},getAngle:function(){return Math.atan2(this.y,this.x)},length:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y);return.005>a&&a>-.005?0:a},normalize:function(){var a=this.length();return 0!==a?(this.x/=a,this.y/=a):this.x=this.y=0,this}},a.Ignite=d}(window.Dom2),Dom2.Ignite(),console.log("")
