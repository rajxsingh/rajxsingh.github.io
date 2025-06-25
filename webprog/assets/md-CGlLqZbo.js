import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D5h2NeQL.js";import{b as r,o as d,w as n,e as D,m as c,g as s,C as i,v as g,x as o,B as l}from"./modules/vue-ByMvSji0.js";import{I as E}from"./header-content-scrollable-E3ULpEs0.js";import{u as A,f as y}from"./slidev/context-C1JNcnbe.js";import"./modules/unplugin-icons-BO-uIyJI.js";import"./index-Didbcx_z.js";import"./modules/shiki-DnaFv8v-.js";const R={__name:"5_3_devops.md__slidev_37",setup(C){const{$clicksContext:e,$frontmatter:t}=A();return e.setup(),(m,a)=>{const k=p;return d(),r(E,g(o(l(y)(l(t),36))),{header:n(h=>a[0]||(a[0]=[s("h1",null,"DevOps – Frontend",-1),s("p",null,"Technische Umsetzung",-1)])),content:n(h=>[D(k,c({},{ranges:[]}),{default:n(()=>a[1]||(a[1]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-dockerfile"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# BUILD APP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"FROM"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," node:lts-alpine "),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"as"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," builder")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"WORKDIR"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," /app")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," package*.json ./")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," npm install")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," . .")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," npm run build")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# SERVE APP")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"FROM"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," nginx:stable-alpine")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"WORKDIR"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," /usr/share/nginx/html")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," rm -rf ./*")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," --from=builder /app/dist .")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"RUN"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," rm -rf /etc/nginx/conf.d/*")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"COPY"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ./nginx/client.conf /etc/nginx/conf.d/client.conf")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"EXPOSE"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," 80")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"CMD"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ["),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"nginx"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"-g"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},", "),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'"daemon off;"'),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"]")])])],-1)])),_:1},16)]),_:1},16)}}};export{R as default};
