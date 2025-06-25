import{L as s,b as c,o as t,w as o,g as e,M as u,i as d,f as m,v as f,x as v,B as i}from"./modules/vue-ByMvSji0.js";import{I as h}from"./slidev/default-CIGY5BGI.js";import{u as k,f as g}from"./slidev/context-C1JNcnbe.js";import"./index-Didbcx_z.js";import"./modules/shiki-DnaFv8v-.js";const P={__name:"4_tech-stack.md__slidev_25",setup(p){const{$clicksContext:r,$frontmatter:a}=k();return r.setup(),(w,n)=>{const l=s("click");return t(),c(h,f(v(i(g)(i(a),24))),{default:o(()=>[n[1]||(n[1]=e("h1",null,"React Internals: Virtual DOM",-1)),n[2]||(n[2]=e("p",null,"Wie React Änderungen effizient rendert",-1)),u((t(),m("div",null,n[0]||(n[0]=[e("ul",null,[e("li",null,[e("strong",null,"Reconcilation-Prozess bei Änderungen"),e("ul",null,[e("li",null,"altes Virtual DOM wird mit neuem verglichen"),e("li",null,"nur die tatsächlich geänderten Teile werden aktualisiert"),e("li",null,"diese werden dann auf das echte DOM angewendet")])])],-1)]))),[[l]]),d(` <div v-click>

- **Render‑Phase**  
  - Bei \`setState\` / \`dispatch\` erzeugt React *einen neuen* Virtual‑DOM‑Tree  
  - Vergleich (‑Diffing‑) mit dem vorherigen Baum → *Patch*‑Objekt entsteht

</div>


<div v-click>

- **Commit‑Phase**  
  - Patch wird *batchweise* auf das echte DOM angewendet  
  - DOM‑Mutationen, Ref‑Callbacks, Layout‑Effects

</div>

<div v-click>

- **Reconciliation**  
  - Patch wird *batchweise* auf das echte DOM angewendet  
  - DOM‑Mutationen, Ref‑Callbacks, Layout‑Effects

</div>

<div v-click>

- **Fiber‑Architektur (ab React 16)**  
  - Zerlegt Render‑Arbeit in kleine *Einheiten* → kooperatives Scheduling  
  - Ermöglicht Interrupts (z. B. User‑Interaktion) & Concurrent Rendering

</div> `)]),_:1},16)}}};export{P as default};
