import{d as y,r as g,B as c,o as a,c as m,k as _,f as k,b as u,z as h,F as P,ag as b,i as T,l as v,g as $,h as L,e as I,q as N,s as D}from"../modules/vue--yM61x30.js";import{u as S,f as B}from"./context-CZJ7whrF.js";import{a as M,ad as C}from"../index-Bn_1jjCP.js";import{_ as z}from"./title-renderer.md_vue_type_script_setup_true_lang-vofsJ-Sg.js";import{I as A}from"./default-pRNZhGef.js";import"../modules/shiki-DUnpIRf4.js";const H=["href","innerHTML"],V=["href"],F=y({__name:"Link",props:{to:{},title:{}},setup(d){const{isPrintMode:r}=M();return(s,o)=>{const l=g("RouterLink");return!c(r)&&s.title?(a(),m(l,{key:0,to:String(s.to),onClick:o[0]||(o[0]=i=>i.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!c(r)&&!s.title?(a(),m(l,{key:1,to:String(s.to),onClick:o[1]||(o[1]=i=>i.target.blur())},{default:_(()=>[k(s.$slots,"default")]),_:3},8,["to"])):c(r)&&s.title?(a(),u("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,H)):(a(),u("a",{key:3,href:`#${s.to}`},[k(s.$slots,"default")],8,V))}}}),O=["start"],R=y({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(d){const r=d,s=h(()=>[...C(r.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${r.level}`]),o=h(()=>[...C(r.listStyle||[])]);return(l,i)=>{const f=F,t=g("TocList",!0);return l.list&&l.list.length>0?(a(),u("ol",{key:0,class:T(s.value),start:l.level===1?l.start:void 0,style:L(o.value.length>=l.level?`list-style:${o.value[l.level-1]}`:void 0)},[(a(!0),u(P,null,b(l.list,e=>(a(),u("li",{key:e.path,class:T(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[v(f,{to:e.path},{default:_(()=>[v(c(z),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(a(),m(t,{key:0,level:l.level+1,"list-style":l.listStyle,list:e.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):$("v-if",!0)],2))),128))],14,O)):$("v-if",!0)}}}),E=y({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(d){const r=d,{$slidev:s}=S();function o(t,e=1){if(e>Number(r.maxDepth))return[];if(e<Number(r.minDepth)){const n=t.find(p=>p.active||p.activeParent);return n?o(n.children,e+1):[]}return t.map(n=>({...n,children:o(n.children,e+1)}))}function l(t){return t.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:l(e.children)}))}function i(t){const e=t.some(n=>n.active||n.activeParent||n.hasActiveParent);return t.filter(()=>e).map(n=>({...n,children:i(n.children)}))}const f=h(()=>{const t=s==null?void 0:s.nav.tocTree;if(!t)return[];let e=o(t);return r.mode==="onlyCurrentTree"?e=l(e):r.mode==="onlySiblings"&&(e=i(e)),e});return(t,e)=>(a(),u("div",{class:"slidev-toc",style:L(`column-count:${t.columns}`)},[v(R,{level:1,start:t.start,"list-style":t.listStyle,list:f.value,"list-class":t.listClass},null,8,["start","list-style","list","list-class"])],4))}}),K={__name:"slides.md__slidev_2",setup(d){const{$slidev:r,$nav:s,$clicksContext:o,$clicks:l,$page:i,$renderContext:f,$frontmatter:t}=S();return o.setup(),(e,n)=>{const p=E;return a(),m(A,N(D(c(B)(c(t),1))),{default:_(()=>[n[0]||(n[0]=I("h1",null,"Table of contents",-1)),v(p,{minDepth:"1",maxDepth:"2"})]),_:1},16)}}};export{K as default};