(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9381"],{"8d32":function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return o}));var r=n("ec02"),c=n("e379");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,t,n,o,a)=>{const s=e.ownerDocument.defaultView,i=e=>e.startX<=50&&t(),d=e=>{const t=e.deltaX,n=t/s.innerWidth;o(n)},u=e=>{const t=e.deltaX,n=s.innerWidth,c=t/n,o=e.velocityX,i=n/2,d=o>=0&&(o>.2||e.deltaX>i),u=d?1-c:c,w=u*n;let h=0;if(w>5){const e=w/Math.abs(o);h=Math.min(e,540)}a(d,c<=0?.01:Object(r["d"])(0,c,.9999),h)};return Object(c["createGesture"])({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:i,onStart:n,onMove:d,onEnd:u})}}}]);
//# sourceMappingURL=chunk-2d0e9381.c36d5f80.js.map