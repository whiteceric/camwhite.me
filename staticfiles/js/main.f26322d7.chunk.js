(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],[,,,,,,,,,,function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(12),i=c(1),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CAMWHITE_ME_API_URL,a=function(e){var t=Object(i.useState)([]),c=Object(n.a)(t,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){console.log(s+e),fetch(s+e).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[e]),a}},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(2),a=c(10),r=(c(19),c(0)),l=function(){var e=Object(s.e)().slugified_title,t=Object(a.a)("api/project/".concat(e));console.log(t);var l,o={year:"numeric",month:"long",day:"numeric"},j=(l=t.slugified_name,Object(n.lazy)((function(){return c(46)("./".concat(l)).catch((function(){return c.e(0).then(c.bind(null,17))}))})));return Object(r.jsxs)("div",{className:"ProjectDetail",children:[Object(r.jsxs)("div",{className:"project-detail-header",children:[Object(r.jsx)("h1",{className:"section-title",children:t.title}),Object(r.jsxs)("div",{className:"project-detail-header-centered",children:[Object(r.jsxs)("small",{children:["Start:"," ","".concat(new Date(t.start_date+" 00:00").toLocaleDateString("en-US",o))]}),Object(r.jsx)("br",{}),Object(r.jsxs)("small",{children:["Initial Deliverable/Beta:"," ","".concat(new Date(t.end_date+" 00:00").toLocaleDateString("en-US",o))]}),""!==t.link?Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:Object(r.jsx)("p",{className:"project-detail-link-text",children:"Link"})}):Object(r.jsx)(r.Fragment,{})]}),Object(r.jsx)("p",{className:"project-detail-summary",children:t.summary})]}),Object(r.jsx)("hr",{}),Object(r.jsx)(i.a.Suspense,{fallback:"Loading...",children:Object(r.jsx)(j,{})})]})};l.defaultProps={},t.default=l},,,,,,,,function(e,t,c){},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){var n={"./ProjectDetail":[11,9],"./ProjectDetail.css":[19,7],"./ProjectDetail.js":[11,9],"./camwhiteme":[22,9,1],"./camwhiteme.js":[22,9,1],"./nullDetailView":[17,9,0],"./nullDetailView.js":[17,9,0],"./templateDetailView":[23,9,2],"./templateDetailView.js":[23,9,2],"./test-project":[24,9,3],"./test-project.js":[24,9,3],"./tryinvest":[25,9,4],"./tryinvest.js":[25,9,4]};function i(e){if(!c.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(2).map(c.e)).then((function(){return c.t(i,t[1])}))}i.keys=function(){return Object.keys(n)},i.id=46,e.exports=i},,function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(20),a=c.n(s),r=(c(30),c(31),c(7)),l=c(2),o=(c(32),c.p+"static/media/logo.c1c6a185.png"),j=c.p+"static/media/resume.dcc16421.pdf",d=c(0),h=function(){return Object(d.jsxs)("div",{className:"NavBar",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("img",{alt:"",src:o,className:"logo"})}),Object(d.jsxs)("div",{className:"navbar-links",children:[Object(d.jsx)("button",{className:"navbar-link-item",onClick:function(){window.open(j)},children:"Resume"}),Object(d.jsx)(r.b,{className:"navbar-link-item",to:"/contact",children:"Contact"})]})]})};h.defaultProps={};var b=h,m=(c(39),c.p+"static/media/profile_pic_rounded.f5214834.png"),u=c.p+"static/media/linkedin.1b084ef4.png",O=c.p+"static/media/email.cfdb77eb.png",x=c.p+"static/media/github.0a6470de.png",f=function(){return Object(d.jsx)("div",{className:"Header",children:Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("img",{alt:"",src:m,className:"profile-pic"}),Object(d.jsxs)("h1",{className:"header-text",children:["Hi, I","'","m Cameron"]}),Object(d.jsxs)("div",{className:"header-row-container",children:[Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/camwhite1301/",children:Object(d.jsx)("img",{alt:"",src:u,className:"link-pic"})}),Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/whiteceric",children:Object(d.jsx)("img",{alt:"",src:x,className:"link-pic"})}),Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:whiteceric@gmail.com",children:Object(d.jsx)("img",{alt:"",src:O,className:"link-pic"})})]})]})})};f.defaultProps={};var p=f,v=(c(40),function(){return Object(d.jsx)("div",{className:"Footer",children:Object(d.jsxs)("div",{className:"footer-link-container",children:[Object(d.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(d.jsx)("small",{className:"footer-link-text",children:"Back to Top"})}),Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("small",{className:"footer-link-text",children:"Home"})}),Object(d.jsx)(r.b,{to:"/contact",children:Object(d.jsx)("small",{className:"footer-link-text",children:"Contact"})})]})})});v.defaultProps={};var N=v,g=(c(41),function(e){var t=e.text;return Object(d.jsx)("div",{className:"AboutSection",children:Object(d.jsxs)("div",{className:"about-row-container",children:[Object(d.jsx)("h1",{className:"about-header",children:"About"}),Object(d.jsx)("p",{className:"about-body",children:t})]})})});g.defaultProps={};var k=g,w=c(12),_=(c(42),c(43),function(e){var t=e.title,c=e.text;return Object(d.jsxs)("div",{className:"SkillListItem",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("p",{className:"skill-text",children:c})]})});_.defaultProps={};var S=_,D=function(e){var t=e.title,c=e.list_side,n=e.skills,i=Object.entries(n).map((function(e){var t=Object(w.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)("div",{children:Object(d.jsx)(S,{title:c,text:n})},c)}));return Object(d.jsx)("div",{className:"SkillList",children:"left"===c?Object(d.jsxs)("div",{className:"list-row-container left",children:[Object(d.jsx)("div",{className:"list-items",children:i}),Object(d.jsx)("h1",{className:"list-header",children:t})]}):Object(d.jsxs)("div",{className:"list-row-container right",children:[Object(d.jsx)("h1",{className:"list-header",children:t}),Object(d.jsx)("div",{className:"list-items",children:i})]})})};D.defaultProps={};var P=D,L=(c(44),function(){return Object(d.jsxs)("div",{className:"Contact",children:[Object(d.jsx)("h1",{className:"section-title",children:"Contact Me"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["Email - ",Object(d.jsx)("a",{href:"mailto:whiteceric@gmail.com",children:"whiteceric@gmail.com"})]}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["Twitter -"," ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/camwhite271",children:"@camwhite271"})]}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["LinkedIn -"," ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/camwhite1301/",children:"camwhite1301"})]}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["GitHub -"," ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/whiteceric",children:"whiteceric"})]})]})});L.defaultProps={};var T=L,y=(c(45),function(e){var t=e.title,c=e.title_href,n=e.dates,i=e.summary;e.link;return Object(d.jsx)("div",{className:"project-item-container",children:Object(d.jsx)(r.b,{className:"project-item-link",to:c,children:Object(d.jsxs)("div",{className:"ProjectListItem",children:[Object(d.jsxs)("div",{className:"project-item-top-row",children:[Object(d.jsx)("h1",{className:"project-title",children:t}),Object(d.jsx)("small",{className:"dates-text",children:n})]}),Object(d.jsx)("p",{className:"summary-text",children:i})]})})})});y.defaultProps={};var C=y,E=c(11),I=c(10);var F=function(){var e=Object(I.a)("api/project-list/"),t=Object(I.a)("api/bio/");console.log(t);var c={year:"numeric",month:"long",day:"numeric"};return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(l.a,{path:"/",exact:!0,render:function(n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(k,{text:t.ABOUT}),Object(d.jsx)(P,{title:"Skills",list_side:"left",skills:null!=t.SKILLS?t.SKILLS:[]}),Object(d.jsx)(P,{title:"Tools",list_side:"right",skills:null!=t.TOOLS?t.TOOLS:[]}),Object(d.jsx)("h1",{className:"section-title",children:"Projects"}),e.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)(C,{title:e.title,title_href:"/project/".concat(e.slugified_name),dates:"".concat(new Date(e.start_date+" 00:00").toLocaleDateString("en-US",c)," to ").concat(new Date(e.end_date+" 00:00").toLocaleDateString("en-US",c)),summary:e.summary,link:e.link})},t)}))]})}}),Object(d.jsx)(l.a,{path:"/contact",exact:!0,render:function(e){return Object(d.jsx)(T,{})}}),Object(d.jsx)(l.a,{path:"/project/:slugified_title",children:Object(d.jsx)(E.default,{})}),Object(d.jsx)(N,{})]})},U=function(e){e&&e instanceof Function&&c.e(8).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};c(47);a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),U()}],[[48,6,7]]]);
//# sourceMappingURL=main.f26322d7.chunk.js.map