(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3c84"],{"5ddc":function(t,e,n){"use strict";n.r(e),n.d(e,"startStatusTap",(function(){return s}));var o=n("3105"),c=n("ec02");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=()=>{const t=window;t.addEventListener("statusTap",()=>{Object(o["k"])(()=>{const e=t.innerWidth,n=t.innerHeight,s=document.elementFromPoint(e/2,n/2);if(!s)return;const r=s.closest("ion-content");r&&new Promise(t=>Object(c["c"])(r,t)).then(()=>{Object(o["n"])(async()=>{r.style.setProperty("--overflow","hidden"),await r.scrollToTop(300),r.style.removeProperty("--overflow")})})})})}}}]);
//# sourceMappingURL=chunk-2d0d3c84.d15eb1d5.js.map