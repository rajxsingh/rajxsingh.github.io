import{d as _,P as u,z as h,f as n,g as t,t as s,C as c,F as f,Q as g,o as l,i as v,e as x,B as b}from"../modules/vue-Dg_4JHGW.js";import{l as k,k as y,h as m}from"../index-B0JiApnh.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-sT_lI7IW.js";import"../modules/shiki-DP_8D5YA.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},z={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(D){const{slides:d,total:p}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(l(),n("div",w,[t("div",B,[t("div",L,[t("h1",T,s(c(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(i.value,(e,r)=>(l(),n("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(c(p)),1),b(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(l(),n("hr",z)):v("v-if",!0)]))),128))])]))}});export{A as default};
