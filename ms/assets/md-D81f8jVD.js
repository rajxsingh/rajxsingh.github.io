import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-zJYWSJgg.js";import{b as p,o as u,w as t,g as s,e as c,m,af as n,v as d,x as f,S as e}from"./modules/vue-BS18vBqD.js";import{I as h}from"./slidev/default-BshobzDo.js";import{aj as g,aq as k}from"./index-Cg8vQeTP.js";import"./modules/unplugin-icons-D9x5grdY.js";import"./modules/shiki-CNP4QhyE.js";const T={__name:"4_progress.md__slidev_27",setup(_){const{$clicksContext:l,$frontmatter:i}=g();return l.setup(),(x,a)=>{const o=r;return u(),p(h,d(f(e(k)(e(i),26))),{default:t(()=>[a[1]||(a[1]=s("h1",null,"Implementation – Structured Prompts",-1)),a[2]||(a[2]=s("p",null,"Progress",-1)),a[3]||(a[3]=s("blockquote",null,[s("p",null,"gemini-2.5-flash-lite")],-1)),c(o,m({},{ranges:[]}),{default:t(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-plaintext"},[s("span",{class:"line"},[s("span",null,'You are given an entry from the IFEVAL dataset in JSON format. Each entry contains a "prompt" key with')]),n(`
`),s("span",{class:"line"},[s("span",null,"a natural language instruction, and other metadata. ")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"Your task is to convert this into a new JSON object following this schema:")]),n(`
`),s("span",{class:"line"},[s("span",null,"SYNTH_SCHEMA:")]),n(`
`),s("span",{class:"line"},[s("span",null,"{{")]),n(`
`),s("span",{class:"line"},[s("span",null,'"task": "string",           // main action or goal of the prompt')]),n(`
`),s("span",{class:"line"},[s("span",null,'"input": ["string", ...],   // all constraints, entities, or additional instructions extracted from the prompt')]),n(`
`),s("span",{class:"line"},[s("span",null,'"output_format": "string"   // eg: text, json, list, etc.')]),n(`
`),s("span",{class:"line"},[s("span",null,"}}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"Rules:")]),n(`
`),s("span",{class:"line"},[s("span",null,'1. The "task" field should summarize the main action in the prompt (e.g., "Write a resume", "Translate text", etc.).')]),n(`
`),s("span",{class:"line"},[s("span",null,'2. The "input" array should contain any entities, constraints, or instructions from the prompt in separate strings.')]),n(`
`),s("span",{class:"line"},[s("span",null,'3. The "output_format" should always be "string".')]),n(`
`),s("span",{class:"line"},[s("span",null,'4. You can use the other metadata fields like "key", "instruction_id_list", and "kwargs" if it helps.')]),n(`
`),s("span",{class:"line"},[s("span",null,"5. Output valid JSON only, without extra commentary.")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'Instruction: "{instruction}"')])])],-1)])),_:1},16)]),_:1},16)}}};export{T as default};
