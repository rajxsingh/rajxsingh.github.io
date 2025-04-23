import{o as t,c as r,k as p,e as s,aa as e,q as o,s as u,B as n}from"./modules/vue-Bv2igknc.js";import{I as c}from"./slidev/default-D4-7DtQV.js";import{u as d,f as m}from"./slidev/context-D5fW-ySM.js";import"./index-SFYLuZw8.js";import"./modules/shiki-CyKkbv3o.js";const C={__name:"5-malware-erkennung.md__slidev_25",setup(k){const{$slidev:f,$nav:g,$clicksContext:a,$clicks:_,$page:h,$renderContext:$,$frontmatter:i}=d();return a.setup(),(x,l)=>(t(),r(c,o(u(n(m)(n(i),24))),{default:p(()=>l[0]||(l[0]=[s("h1",null,"Beispiel: Prometei",-1),s("p",null,"Malware Erkennung",-1),s("ul",null,[s("li",null,[e("Beispiel für YARA-Regel, die „uplugplay“ als Merkmal nutzt:"),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"rule Prometei")]),e(`
`),s("span",{class:"line"},[s("span",null,"{")]),e(`
`),s("span",{class:"line"},[s("span",null,"    strings:")]),e(`
`),s("span",{class:"line"},[s("span",null,'        $binary = "uplugplay"')]),e(`
`),s("span",{class:"line"},[s("span",null,'        $alt_bin = "Bon=UPlug"')]),e(`
`),s("span",{class:"line"},[s("span",null,"    condition:")]),e(`
`),s("span",{class:"line"},[s("span",null,"        $binary or $alt_bin")]),e(`
`),s("span",{class:"line"},[s("span",null,"}")])])])]),s("li",null,"Erkennung aller 5 Sample")],-1)])),_:1},16))}};export{C as default};
