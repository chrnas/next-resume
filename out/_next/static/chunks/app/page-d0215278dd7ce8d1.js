(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9538:(e,t,a)=>{var s={"./flappy.png":2463,"./robot.png":7745,"./snake.png":4026,"./sound_localization.png":4311,"./tank.png":5847};function n(e){return a(i(e))}function i(e){if(!a.o(s,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id=9538},4358:(e,t,a)=>{Promise.resolve().then(a.bind(a,8425))},8425:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var s=a(7437);a(8514);var n=a(2265);a(7062);let i={src:"/_next/static/media/profile_picture.5311f4d1.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAACEBUf/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMEAAURUv/aAAgBAQABPwDWX4q1lI2DMUmchh54c//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAgMRcf/aAAgBAgEBPwCRosYv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAgBAwEBPwCHh//Z",blurWidth:8,blurHeight:8};a(4443);let r=e=>{let{aboutInfo:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("ul",{className:"ul-about-list",children:[(0,s.jsx)("li",{className:"li-about-list",children:(0,s.jsxs)("p",{className:"bold-first-word",children:[(0,s.jsx)("span",{children:"Occupation:"})," ",t.occupation," "]})}),(0,s.jsx)("li",{className:"li-about-list",children:(0,s.jsxs)("p",{className:"bold-first-word",children:[(0,s.jsx)("span",{children:"Age:"})," ",t.age," "]})}),(0,s.jsx)("li",{className:"li-about-list",children:(0,s.jsxs)("p",{className:"bold-first-word",children:[(0,s.jsx)("span",{children:"Location:"})," ",t.location," "]})}),(0,s.jsx)("li",{className:"li-about-profil",children:(0,s.jsx)("div",{className:"list-text",children:t.profil})})]})})},l=JSON.parse('{"G":{"occupation":"Student, Computer science and Engineering, Link\xf6ping university","age":"23","location":"Link\xf6ping/Sverige","profil":"I am currently studying my fourth year at the Computer science and engineering program at Link\xf6ping University and are currently searching for work experience and the opportunity to develop my qualifications. I am an open and social person who enjoys varied tasks and likes to learn new things"}}');var o=a(1942);let c=JSON.parse('{"n":{"Do":"christoffer.nas@outlook.com","TU":"https://github.com/chrnas","gU":"https://www.linkedin.com/in/christoffer-n%C3%A4s/"}}');var d=a(6648);let m=()=>{let e=l.G;return(0,s.jsxs)("section",{"data-testid":"about-section",className:"about-section",id:"about",children:[(0,s.jsx)("h1",{"data-testid":"about-section-header",className:"app-header",children:"Christoffer N\xe4s"}),(0,s.jsxs)("div",{className:"about-grid-container",children:[(0,s.jsx)("div",{className:"grid-item",children:(0,s.jsx)(d.default,{className:"profile-img",src:i,alt:"logo"})}),(0,s.jsx)("div",{className:"grid-item",children:(0,s.jsx)(r,{aboutInfo:e})}),(0,s.jsx)("div",{className:"grid-item",children:(0,s.jsxs)("ul",{className:"link-ul",children:[(0,s.jsx)("li",{className:"link-li",children:(0,s.jsx)("a",{"aria-label":"Visit Github.com",href:c.n.TU,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.hJX,{className:"icon",size:40,color:"#000"})})}),(0,s.jsx)("li",{className:"link-li",children:(0,s.jsx)("a",{"aria-label":"Visit linkedin.com",href:c.n.gU,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.ltd,{className:"icon",size:40,color:"#000"})})})]})})]})]})};a(7360),a(2357);let A=()=>{let[e,t]=(0,n.useState)({name:"",subject:"",message:""}),a=a=>{let{name:s,value:n}=a.target;t({...e,[s]:n})};return(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault();let a="".concat(e.message,"\n\n Kind regards,\n").concat(e.name);window.location.href="mailto:".concat(c.n.Do,"?subject=").concat(encodeURIComponent(e.subject),"&body=").concat(encodeURIComponent(a))},children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"list-text-bold",htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"list-text-bold",htmlFor:"subject",children:"Subject"}),(0,s.jsx)("input",{type:"subject",id:"subject",name:"subject",value:e.subject,onChange:a,required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"list-text-bold",htmlFor:"message",children:"Message"}),(0,s.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:a,required:!0})]}),(0,s.jsx)("button",{className:"form-button",type:"submit",children:"Mail"})]})},h=()=>(0,s.jsxs)("section",{"data-testid":"contact-section",id:"contact",children:[(0,s.jsx)("h1",{"data-testid":"contact-section-header",className:"section-header",children:"Contact"}),(0,s.jsx)("a",{"aria-label":"Visit linkedin.com",href:c.n.TU,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.hJX,{className:"icon",size:40,color:"#000"})}),(0,s.jsx)("a",{"aria-label":"Visit Github.com",href:c.n.gU,target:"_blank",rel:"noreferrer",children:(0,s.jsx)(o.ltd,{className:"icon",size:40,color:"#000"})}),(0,s.jsx)(A,{})]});a(6624),a(3195),a(8859);let p=e=>{let{name:t,link:a}=e;return(0,s.jsx)("div",{className:"chip",children:(0,s.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("span",{className:"chip-label",children:t})})})};a(5835);let u=e=>{let{education:t}=e;return(0,s.jsxs)("li",{className:"li-education-list",children:[(0,s.jsx)("h3",{children:(0,s.jsx)("a",{className:"a-label-link",href:t.program.link,target:"_blank",rel:"noreferrer",children:t.program.name})}),(0,s.jsxs)("p",{className:"list-text-education",children:[(0,s.jsx)("span",{className:"list-text-bold",children:"Location: "}),(0,s.jsx)("a",{className:"a-label-link",href:t.school.location.link,target:"_blank",rel:"noreferrer",children:t.school.location.name})]}),(0,s.jsxs)("p",{className:"list-text-education",children:[(0,s.jsx)("span",{className:"list-text-bold",children:"School: "}),(0,s.jsx)("a",{className:"a-label-link",href:t.school.location.link,target:"_blank",rel:"noreferrer",children:t.school.name})]}),(0,s.jsxs)("p",{className:"list-text-education",children:[(0,s.jsx)("span",{className:"list-text-bold",children:"Date: "}),t.startDate,"-",t.examDate]}),(0,s.jsx)("div",{children:t.description}),t.skills.map((e,t)=>(0,s.jsx)(p,{name:e.name,link:e.link},t))]})},g=e=>{let{educations:t}=e;return(0,s.jsx)("ul",{className:"ul-education-list",children:t.map((e,t)=>(0,s.jsx)(u,{education:e},t))})},b=JSON.parse('{"v":[{"program":{"name":"Master of Science in Computer Science and Engineering","link":"https://liu.se/en/education/program/6cddd"},"description":"Fourth year on Computer Science and Engineering program at Link\xf6pings university. During my education i have mainly worked with Python, C++ och Java however Assembly, VHDL, C och Matlab have also been used.","school":{"name":"Link\xf6pings universitet","link":"https://liu.se/en","location":{"name":"Link\xf6ping","link":"https://www.google.se/maps/place/Link%C3%B6pings+universitet/@58.3991809,15.5524361,13.75z/data=!4m15!1m8!3m7!1s0x46596e719a049f95:0x400fef341e48e70!2sLink%C3%B6ping!3b1!8m2!3d58.410807!4d15.6213728!16zL20vMHp3MV8!3m5!1s0x465940211c4658ef:0x745f8c56c15b1388!8m2!3d58.3978364!4d15.5760072!16zL20vMDE2MWo0?entry=ttu"}},"startDate":"2021-08-17","examDate":"ongoing","skills":[{"name":"Python","link":"https://www.python.org/"},{"name":"C++","link":"https://cplusplus.com/"},{"name":"Java","link":"https://www.oracle.com/java/"},{"name":"Assembly","link":"https://en.wikipedia.org/wiki/Assembly_language"},{"name":"VHDL","link":"https://standards.ieee.org/ieee/1076/5179/"},{"name":"C","link":"https://www.open-std.org/jtc1/sc22/wg14/"},{"name":"Matlab","link":"https://se.mathworks.com/help/matlab/"}]},{"program":{"name":"Military service conscription- Communications/Command soldier","link":"https://jobb.forsvarsmakten.se/sv/utbildning/befattningsguiden/gu-befattningar/sambandssoldat-armen/"},"description":"Military service conscription with Basic training as Communications/Command soldier in the Swedish armed forces at Skaraborgsregemente p4.","school":{"name":"Swedish armed forces","link":"https://www.forsvarsmakten.se/en/","location":{"name":"Sk\xf6vde","link":"https://www.google.se/maps/place/F%C3%B6rsvarsmakten+Skaraborgs+regemente+P+4/@58.3797985,13.8431654,16.25z/data=!4m6!3m5!1s0x465b023c4080c633:0xcc37746c5952366f!8m2!3d58.3805!4d13.8473!16s%2Fg%2F1hc3ysm2t?entry=ttu"}},"startDate":"2020-09-21","examDate":" 2021-06-23","skills":[]},{"program":{"name":"Engineering program - engineering science","link":"https://liu.se/en/education/program/6cddd"},"description":"Gymnasieexam at the Technicalprogram att \xc4lvkullegymnasiet with orientation engineering science.","school":{"name":"\xc4lvkullegymnasiet","link":"https://karlstad.se/karlstads-kommunala-gymnasieskolor/vara-utbildningar/teknikprogrammet","location":{"name":"Karlstad","link":"https://www.google.se/maps/place/%C3%84lvkullegymnasiet/@59.3942457,13.5020437,15.75z/data=!4m6!3m5!1s0x465cb3def865778d:0xba725377ecfd1e80!8m2!3d59.393506!4d13.50929!16s%2Fg%2F11dykly3l?entry=ttu"}},"startDate":"2017","examDate":"2020","skills":[{"name":"Java","link":"https://www.oracle.com/java/"}]}]}'),x=()=>(0,s.jsxs)("section",{"data-testid":"education-section",id:"eduaction",children:[(0,s.jsx)("h1",{"data-testid":"education-section-header",className:"section-header",children:"Education"}),(0,s.jsx)(g,{educations:b.v})]});a(4918);let k=JSON.parse('{"k":[{"id":1,"name":"IT-Systemsupport","description":"Summer internship 2023. Assistance with system maintenance, system development, and system support.","company":{"name":"Billerud","link":"https://www.billerud.se/"},"skills":[{"name":"Python","link":"https://www.python.org/"},{"name":"JavaScript","link":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{"name":"Matlab","link":"https://se.mathworks.com/help/matlab/"},{"name":"TypeScript","link":"https://www.typescriptlang.org/"},{"name":"HTML","link":"https://developer.mozilla.org/en-US/docs/Web/HTML"},{"name":"CSS","link":"https://developer.mozilla.org/en-US/docs/Web/CSS"},{"name":"Angular","link":"https://angular.dev/"},{"name":"C#","link":"https://learn.microsoft.com/en-us/dotnet/csharp/"},{"name":"ASP.NET Core","link":"https://dotnet.microsoft.com/en-us/apps/aspnet"},{"name":"SQL","link":"https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16"},{"name":"PostgreSQL","link":"https://www.postgresql.org/"}],"date":"Summer 2023","location":{"name":"Grums","link":"https://www.google.se/maps/place/Billerud+Gruv%C3%B6n/@59.3360231,13.1040617,14.29z/data=!4m15!1m8!3m7!1s0x464351b037812ab7:0x5d6ab90d87700e62!2s664+40+Gruv%C3%B6n!3b1!8m2!3d59.3323939!4d13.115507!16s%2Fg%2F1tgwqvwj!3m5!1s0x464351b659c83f9f:0xe41d4d51ca637904!8m2!3d59.3399406!4d13.1169363!16s%2Fg%2F11dykf08y?entry=ttu"}},{"id":2,"name":"IT-Systemsupport","description":"Summer internship 2022.  Assistance with system maintenance, system development, and system support.","company":{"name":"Billerud","link":"https://www.billerud.se/"},"skills":[{"name":"Python","link":"https://developer.mozilla.org/en-US/docs/Glossary/Python"},{"name":"Matlab","link":"https://se.mathworks.com/help/matlab/"},{"name":"SQL","link":"https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16"}],"date":"Summer 2022","location":{"name":"Grums","link":"https://www.google.se/maps/place/Billerud+Gruv%C3%B6n/@59.3360231,13.1040617,14.29z/data=!4m15!1m8!3m7!1s0x464351b037812ab7:0x5d6ab90d87700e62!2s664+40+Gruv%C3%B6n!3b1!8m2!3d59.3323939!4d13.115507!16s%2Fg%2F1tgwqvwj!3m5!1s0x464351b659c83f9f:0xe41d4d51ca637904!8m2!3d59.3399406!4d13.1169363!16s%2Fg%2F11dykf08y?entry=ttu"}},{"id":3,"name":"Shop assistant","description":"Summersubstitute during summer 2021, 2020, 2019. In my role, I gained experience in customer service and working with clients.","company":{"name":"ICA","link":"https://www.ica.se/"},"skills":[],"date":"Summer 2021, 2020, 2019","location":{"name":"S\xe4ffle","link":"https://www.google.se/maps/place/ICA+N%C3%A4ra+S%C3%A4ffle/@59.1329146,12.920718,16z/data=!4m6!3m5!1s0x4644a8997e96274b:0x292a80b2b25ad5af!8m2!3d59.1328779!4d12.9326687!16s%2Fg%2F11bx4cvxxf?entry=ttu"}}]}');a(5415);let j=e=>{let{experience:t}=e;return(0,s.jsxs)("li",{className:"li-experience-list",children:[(0,s.jsx)("h3",{children:t.name}),(0,s.jsxs)("p",{className:"list-text-experience",children:[(0,s.jsx)("span",{className:"list-text-bold",children:"Company: "}),(0,s.jsx)("a",{className:"a-label-link",href:t.company.link,target:"_blank",rel:"noreferrer",children:t.company.name})]}),(0,s.jsxs)("p",{className:"list-text-experience",children:[(0,s.jsx)("span",{className:"list-text-bold",children:"Location: "}),(0,s.jsx)("a",{className:"a-label-link",href:t.location.link,target:"_blank",rel:"noreferrer",children:t.location.name})]}),(0,s.jsxs)("p",{className:"list-text-experience",children:[(0,s.jsx)("span",{className:"list-text-bold",children:"Date: "}),t.date]}),(0,s.jsx)("div",{children:t.description}),t.skills.map((e,t)=>(0,s.jsx)(p,{name:e.name,link:e.link},t))]})};a(5858);let w=e=>{let{experiences:t}=e;return(0,s.jsx)("ul",{className:"ul-education-list",children:t.map((e,t)=>(0,s.jsx)(j,{experience:e},t))})},f=()=>(0,s.jsxs)("section",{"data-testid":"experience-section",id:"experience",className:"section",children:[(0,s.jsx)("h1",{"data-testid":"experience-section-header",className:"section-header",children:"Experience"}),(0,s.jsx)(w,{experiences:k.k})]});a(6786);let v=e=>{let{scrollToSection:t}=e;return(0,s.jsx)("nav",{"data-testid":"navbar-section",className:"navbar",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("button",{"data-testid":"navbar-about-button",onClick:()=>t("about"),children:"About"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{"data-testid":"navbar-experience-button",onClick:()=>t("experience"),children:"Experience"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{"data-testid":"navbar-education-button",onClick:()=>t("education"),children:"Education"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{"data-testid":"navbar-project-button",onClick:()=>t("project"),children:"Project"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{"data-testid":"navbar-contact-button",onClick:()=>t("contact"),children:"Contact"})})]})})};a(6451);let N=JSON.parse('{"q":[{"name":"Mapping robot microcomputer","description":"Robot that can traverse and map a maze using distance sensors, DFS algorithm and PID controlling.","image":"robot","skills":[{"name":"Python","link":"https://www.python.org/"},{"name":"C","link":"https://www.open-std.org/jtc1/sc22/wg14/"}],"githubLink":"https://github.com/chrnas/mapping-robot-microcomputer"},{"name":"Computer construction (Snake)","description":"The creation of a microcomputer using VHDL and microcode for it to play a version of the popular game Snake.","image":"snake","skills":[{"name":"VHDL","link":"https://standards.ieee.org/ieee/1076/5179/"}],"githubLink":"https://github.com/chrnas/computer-construction-snake"},{"name":"Sound localization","description":"Sound source localization system using various techniques based on signals received at multiple microphones. ","image":"sound_localization","skills":[{"name":"Python","link":"https://www.python.org/"}],"githubLink":"https://github.com/chrnas/sound-localization"},{"name":"Floppy Borb game project","description":"A group project focused on Java development where a fun and casual game were created","image":"flappy","skills":[{"name":"Java","link":"https://www.oracle.com/java/"}],"githubLink":"https://github.com/chrnas/floppy-borb"},{"name":"Tank AI game project","description":"A group project to vreate a capture the flag tank AI game using python and the Depth First Search algorithm.","image":"tank","skills":[{"name":"Python","link":"https://www.python.org/"}],"githubLink":"https://github.com/chrnas/ctf-tank-ai"}]}');a(6508),a(2318);let y=e=>{let{project:t}=e;return(0,s.jsxs)("div",{className:"grid-item",children:[(0,s.jsx)("h3",{children:t.name}),(0,s.jsx)("span",{onClick:()=>{window.open(t.githubLink,"_blank","noopener,noreferrer")},children:(0,s.jsxs)("div",{className:"project-grid-container",children:[(0,s.jsx)("div",{className:"project-grid-item",children:(0,s.jsx)(d.default,{className:"project-img",src:a(9538)("./".concat(t.image,".png")),alt:""})}),(0,s.jsxs)("div",{className:"project-grid-item",children:[(0,s.jsx)("p",{children:t.description}),t.skills.map((e,t)=>(0,s.jsx)(p,{name:e.name,link:e.link},t))]})]})})]})},C=e=>{let{projects:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"grid-container",children:t.map((e,t)=>(0,s.jsx)(y,{project:e},t))})})},E=()=>{var e=N.q;return(0,s.jsxs)("section",{"data-testid":"project-section",id:"project",className:"section",children:[(0,s.jsx)("h1",{"data-testid":"project-section-header",className:"section-header",children:"Projects"}),(0,s.jsx)(C,{projects:e})]})};function S(){let e=(0,n.useRef)(null),t=(0,n.useRef)(null),a=(0,n.useRef)(null),i=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,s.jsxs)("main",{className:"App",children:[(0,s.jsx)(v,{scrollToSection:s=>{switch(s){case"about":e.current&&e.current.scrollIntoView({behavior:"smooth"});break;case"experience":t.current&&t.current.scrollIntoView({behavior:"smooth"});break;case"education":a.current&&a.current.scrollIntoView({behavior:"smooth"});break;case"project":i.current&&i.current.scrollIntoView({behavior:"smooth"});break;case"contact":r.current&&r.current.scrollIntoView({behavior:"smooth"})}}}),(0,s.jsx)("div",{ref:e,children:(0,s.jsx)(m,{})}),(0,s.jsx)("div",{ref:t,children:(0,s.jsx)(f,{})}),(0,s.jsx)("div",{ref:a,children:(0,s.jsx)(x,{})}),(0,s.jsx)("div",{ref:i,children:(0,s.jsx)(E,{})}),(0,s.jsx)("div",{ref:r,children:(0,s.jsx)(h,{})})]})}},8514:()=>{},4443:()=>{},7062:()=>{},8859:()=>{},2357:()=>{},7360:()=>{},5835:()=>{},3195:()=>{},6624:()=>{},5415:()=>{},5858:()=>{},4918:()=>{},6786:()=>{},2318:()=>{},6508:()=>{},6451:()=>{},2463:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/flappy.a7ccdb5f.png",height:1280,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEWA9vt/9PeD8OuA+P5+7/IA/wBb+LOF5uiJ9f6I5Ps/+nt73N9o8sVK94M9/Hx08tGYWFhQAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAOElEQVR4nB3GWRLAIAgFwXmAAprl/rdNmf5q5lit3M4cq0jjpKU4eToIeO8rXRuokplDhNwMkPh9L+UBETmMY0EAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7745:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/robot.a5029644.png",height:1280,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEW7t66NiH/KwbM+KjrNxrsZGRrPysLd2M7Wz8QqKymvraVpcI5yb2kgIiCmo5oNDxF5c494ZHlbR16QkKJhU3EjHEBHNzpPWIaAfXVkZF6Wk4vu6dyHZO3fAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAQElEQVR4nAXBhQHAIBAEsANe8brtv2cTEBCjCEGRQWoGKfu6zE2hVzrTURRf98YOhT3M7NnwjuY+qgB3CKF2+gFOJQJZ4sZpYwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},4026:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/snake.95450f75.png",height:1280,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVKWGpDT158dXFHSlHAkl5NUlddXGFxXEhpZ2xOQTp0aWE6QU6RgHFhbHlaTUKbiHqddUm6noOcgWbHnnOHb1jWrIRVVFOpqKiCf4NlVUuDcmJoWU5BNCupf1A5MzM6LSithVkjHRzouo4nMuvIAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAQ0lEQVR4nAXBhQHAIAADsOLuMPf/j1yC5K1dZiqR9lWDiQnqNhqEOJj3kg4QUKpTHQJDG1+NcfNQfRRz1ALOeXvymX9wPQNer2qEXAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},4311:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/sound_localization.972e50e1.png",height:1280,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXZ2tvW1tfT09Ti4uPavL7707XiAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAK0lEQVR4nC2KQQ4AMAyCwPX/b15s6sEQlHeBkGggFqyZgQXjwk791PQjbT4O1ABVbO6PLwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},5847:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/tank.9ab3b769.png",height:1280,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVJYC9FXihLYDc5SSFXWVNDRkBkaFhDVSVrbGFPSTJSYUNGVzV7gXZoaVBzc21bUkDVm2BPAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAAOUlEQVR4nAXBhwHAMAjAMLMhq/9/W4lRRRjB1/ItrmiVvgtINy91+M65re5IJn1S2GY7VxUREWZhPzGfAW7pRuZmAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},e=>{var t=t=>e(e.s=t);e.O(0,[324,699,49,130,215,744],()=>t(4358)),_N_E=e.O()}]);