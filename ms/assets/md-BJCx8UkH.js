import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-ChIwoU-Z.js";import{b as p,o as u,w as a,g as s,e as c,m,ad as n,v as d,x as f,S as t}from"./modules/vue-DNolUB8c.js";import{I as g}from"./slidev/default-BHteES4V.js";import{u as k,f as x}from"./slidev/context-BRubsswN.js";import"./modules/unplugin-icons-BPfwFMrt.js";import"./index-C2U0VWBE.js";import"./modules/shiki-OWTE7LWc.js";const I={__name:"3_progress.md__slidev_24",setup(b){const{$clicksContext:e,$frontmatter:i}=k();return e.setup(),(v,l)=>{const r=o;return u(),p(g,d(f(t(x)(t(i),23))),{default:a(()=>[l[1]||(l[1]=s("h1",null,"Implementation – Structured Prompts",-1)),l[2]||(l[2]=s("p",null,"Progress",-1)),l[3]||(l[3]=s("br",null,null,-1)),l[4]||(l[4]=s("blockquote",null,[s("p",null,"gemini-2.5-flash-lite")],-1)),l[5]||(l[5]=s("br",null,null,-1)),c(r,m({},{ranges:[]}),{default:a(()=>l[0]||(l[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-plaintext"},[s("span",{class:"line"},[s("span",null,"Convert the following IFEval instruction into a structured JSON object.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Keep the original text under 'original_prompt'. Extract all constraints clearly.")]),n(`
`),s("span",{class:"line"},[s("span",null,"Follow this exact format:")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"{{")]),n(`
`),s("span",{class:"line"},[s("span",null,'    "original_prompt": "<the original instruction>",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    "task": "<high-level task type such as summarization, reasoning, creative-writing, etc.>",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    "type": "<specific subtype if applicable>",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    "topic": "<main subject matter>",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    "constraints": ["<list each constraint explicitly>"]')]),n(`
`),s("span",{class:"line"},[s("span",null,"}}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"Return ONLY valid JSON (no explanations, markdown, or code fences).")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'Instruction: "{instruction}"')])])],-1)])),_:1},16)]),_:1},16)}}};export{I as default};
