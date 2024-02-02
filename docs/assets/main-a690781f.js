import{d as e,r as s,c as a,o as t,b as n,i as o,j as l,F as i,k as p,h as d,u,l as r,n as c,A as v,e as g,t as m,f as h,T as x,m as y,_ as f,q as w,s as M,p as A,g as _,a as k,w as z}from"./index-c85e42f6.js";import{P as I}from"./PosEntity-ddb53806.js";const P=["onMousedown","onMousemove"],$={class:"icon"},B={style:{height:"100%",width:"100%"},"aria-hidden":"true"},S=["xlink:href"],b={class:"name"},C=f(e({__name:"Desktop",setup(e){function getPosByIndex(e){return(new I).setX(Math.floor(e/v.columnAppNum)*v.appSize).setY(e%v.columnAppNum*v.appSize)}const f=s(new I);function onMouseMove(e){r().dragApp.id&&(w.value=!0);const s=e.x>v.appSize/2?e.x-v.appSize/2:0,a=e.y>v.appSize/2?e.y-v.appSize/2:0;f.value.setX(s).setY(a)}const w=s(!1),M=s(0),A=a((()=>r().appList.findIndex((e=>e.id===r().dragApp.id))));const _=s(null);function onMouseUp(){Date.now()-M.value<=300&&function onClick(){r().dragApp.onAction()}(),w.value=!1,r().setDragApp(new y)}return(e,s)=>(t(),n("div",{id:"desktop",class:"desktop",onMousemove:onMouseMove,onMouseup:onMouseUp},[o(x,{tag:"div",name:"appList"},{default:l((()=>[(t(!0),n(i,null,p(u(r)().appList,((e,s)=>(t(),n("div",{key:e.name,class:d(["appitem",e.id===u(r)().dragApp.id&&"drag"]),style:c({width:`${u(v).appSize}px`,height:`${u(v).appSize}px`,left:`${e.id===u(r)().dragApp.id&&w.value?f.value.x:getPosByIndex(s).x}px`,top:`${e.id===u(r)().dragApp.id&&w.value?f.value.y:getPosByIndex(s).y}px`}),onMousedown:s=>function onMousedown(e){console.log("mousedown"),M.value=Date.now(),r().setDragApp(e)}(e),onMousemove:a=>function onItemMove(e,s){if(_.value)return;_.value=!0;const a=getPosByIndex(s);r().dragApp.id!==e.id&&w.value&&Math.abs(f.value.x-a.x)<=24&&Math.abs(f.value.y-a.y)<=24&&r().changeAppListIndex(e),setTimeout((()=>{_.value=!1}),100)}(e,s)},[g("div",$,[(t(),n("svg",B,[g("use",{"xlink:href":`#${e.icon}`},null,8,S)]))]),g("div",b,m(e.name),1)],46,P)))),128)),w.value?(t(),n("div",{key:0,class:"fake",style:c({width:`${u(v).appSize}px`,height:`${u(v).appSize}px`,left:`${getPosByIndex(A.value).x}px`,top:`${getPosByIndex(A.value).y}px`})},null,4)):h("",!0)])),_:1})],32))}}),[["__scopeId","data-v-7663e314"]]),_withScopeId=e=>(A("data-v-ce695a5f"),e=e(),_(),e),E={class:"footer"},L=_withScopeId((()=>g("div",{class:"part size-1"},null,-1))),D={class:"part"},N=_withScopeId((()=>g("div",{class:"snapshot"},null,-1))),U=["onMouseover"],j={style:{height:"30px",width:"30px"},"aria-hidden":"true"},T=["xlink:href"],F=_withScopeId((()=>g("div",{class:"part size-2"},null,-1))),X=_withScopeId((()=>g("div",{class:"part size-2"},null,-1))),Y=f(e({__name:"Footer",setup:e=>(e,s)=>{const a=w("el-popover");return t(),n("div",E,[L,g("div",D,[(t(!0),n(i,null,p(u(r)().openAppPool,((e,s)=>(t(),M(a,{key:e.id,width:"auto",placement:"top",trigger:"hover"},{reference:l((()=>[g("div",{class:"pool-icon",onMouseover:a=>function getElementByApp(e,s){var a;const t=document.getElementsByClassName("snapshot")[s];for(;null==t?void 0:t.firstChild;)null==t||t.removeChild(null==t?void 0:t.firstChild);const n=null==(a=document.getElementById(`APP_${e.id}`))?void 0:a.cloneNode(!0);n.style.position="relative",n.style.inset="0",n.style.width="300px",n.style.height="200px",n.classList.remove("mini"),n.style.zIndex="1",null==t||t.appendChild(n);const o=document.createElement("div");o.style.position="absolute",o.style.inset="0",o.style.background="rgba(0,0,0,0.1)",o.style.zIndex="2",null==t||t.appendChild(o)}(e,s)},[(t(),n("svg",j,[g("use",{"xlink:href":`#${e.icon}`},null,8,T)]))],40,U)])),default:l((()=>[N])),_:2},1024)))),128))]),F,X])}}),[["__scopeId","data-v-ce695a5f"]]),q={class:"main"},V=f(e({__name:"main",setup(e){const a=s(!0);return setTimeout((()=>{a.value=!1}),1e3),window.addEventListener("storage",(e=>{"bgUrl"===e.key&&r().setBgUrl(e.newValue)})),(e,s)=>{const l=k("loading");return z((t(),n("div",q,[o(C),o(Y)])),[[l,a.value]])}}}),[["__scopeId","data-v-6c6a0fc5"]]);export{V as default};
