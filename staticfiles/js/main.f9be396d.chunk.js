(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],[,,,,,,,,,,function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var i=c(12),n=c(1),s="http://127.0.0.1:8000/",r=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){console.log(s+e),fetch(s+e).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]),r}},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(2),r=c(10),a=(c(19),c(0)),l=function(){var e=Object(s.e)().slugified_title,t=Object(r.a)("api/project/".concat(e));console.log(t);var l,j={year:"numeric",month:"long",day:"numeric"},o=(l=t.slugified_name,Object(i.lazy)((function(){return c(46)("./".concat(l)).catch((function(){return c.e(0).then(c.bind(null,17))}))})));return Object(a.jsxs)("div",{className:"ProjectDetail",children:[Object(a.jsxs)("div",{className:"project-detail-header",children:[Object(a.jsx)("h1",{className:"section-title",children:t.title}),Object(a.jsxs)("div",{className:"project-detail-header-centered",children:[Object(a.jsxs)("small",{children:["Start:"," ","".concat(new Date(t.start_date+" 00:00").toLocaleDateString("en-US",j))]}),Object(a.jsx)("br",{}),Object(a.jsxs)("small",{children:["Initial Deliverable/Beta:"," ","".concat(new Date(t.end_date+" 00:00").toLocaleDateString("en-US",j))]}),""!==t.link?Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.link,children:Object(a.jsx)("p",{className:"project-detail-link-text",children:"Link"})}):Object(a.jsx)(a.Fragment,{})]}),Object(a.jsx)("p",{className:"project-detail-summary",children:t.summary})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(n.a.Suspense,{fallback:"Loading...",children:Object(a.jsx)(o,{})})]})};l.defaultProps={},t.default=l},,,,,,,,function(e,t,c){},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){var i={"./ProjectDetail":[11,9],"./ProjectDetail.css":[19,7],"./ProjectDetail.js":[11,9],"./camwhiteme":[22,9,1],"./camwhiteme.js":[22,9,1],"./nullDetailView":[17,9,0],"./nullDetailView.js":[17,9,0],"./templateDetailView":[23,9,2],"./templateDetailView.js":[23,9,2],"./test-project":[24,9,3],"./test-project.js":[24,9,3],"./tryinvest":[25,9,4],"./tryinvest.js":[25,9,4]};function n(e){if(!c.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(2).map(c.e)).then((function(){return c.t(n,t[1])}))}n.keys=function(){return Object.keys(i)},n.id=46,e.exports=n},,function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(20),r=c.n(s),a=(c(30),c(31),c(7)),l=c(2),j=(c(32),c.p+"static/media/logo.c1c6a185.png"),o=c.p+"static/media/resume.dcc16421.pdf",d=c(0),b=function(){return Object(d.jsxs)("div",{className:"NavBar",children:[Object(d.jsx)(a.b,{to:"/",children:Object(d.jsx)("img",{alt:"",src:j,className:"logo"})}),Object(d.jsxs)("div",{className:"navbar-links",children:[Object(d.jsx)("button",{className:"navbar-link-item",onClick:function(){window.open(o)},children:"Resume"}),Object(d.jsx)(a.b,{className:"navbar-link-item",to:"/contact",children:"Contact"})]})]})};b.defaultProps={};var h=b,m=(c(39),c.p+"static/media/profile_pic_rounded.f5214834.png"),u=c.p+"static/media/linkedin.1b084ef4.png",O=c.p+"static/media/email.cfdb77eb.png",x=c.p+"static/media/github.0a6470de.png",f=function(){return Object(d.jsx)("div",{className:"Header",children:Object(d.jsxs)("div",{className:"grid-container",children:[Object(d.jsx)("img",{alt:"",src:m,className:"profile-pic"}),Object(d.jsxs)("h1",{className:"header-text",children:["Hi, I","'","m Cameron"]}),Object(d.jsxs)("div",{className:"header-row-container",children:[Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/camwhite1301/",children:Object(d.jsx)("img",{alt:"",src:u,className:"link-pic"})}),Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/whiteceric",children:Object(d.jsx)("img",{alt:"",src:x,className:"link-pic"})}),Object(d.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:whiteceric@gmail.com",children:Object(d.jsx)("img",{alt:"",src:O,className:"link-pic"})})]})]})})};f.defaultProps={};var p=f,v=(c(40),function(){return Object(d.jsx)("div",{className:"Footer",children:Object(d.jsxs)("div",{className:"footer-link-container",children:[Object(d.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(d.jsx)("small",{className:"footer-link-text",children:"Back to Top"})}),Object(d.jsx)(a.b,{to:"/",children:Object(d.jsx)("small",{className:"footer-link-text",children:"Home"})}),Object(d.jsx)(a.b,{to:"/contact",children:Object(d.jsx)("small",{className:"footer-link-text",children:"Contact"})})]})})});v.defaultProps={};var N=v,g=(c(41),function(e){var t=e.text;return Object(d.jsx)("div",{className:"AboutSection",children:Object(d.jsxs)("div",{className:"about-row-container",children:[Object(d.jsx)("h1",{className:"about-header",children:"About"}),Object(d.jsx)("p",{className:"about-body",children:t})]})})});g.defaultProps={};var k=g,w=c(12),_=(c(42),c(43),function(e){var t=e.title,c=e.text;return Object(d.jsxs)("div",{className:"SkillListItem",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)("p",{className:"skill-text",children:c})]})});_.defaultProps={};var S=_,y=function(e){var t=e.title,c=e.list_side,i=e.skills,n=Object.entries(i).map((function(e){var t=Object(w.a)(e,2),c=t[0],i=t[1];return Object(d.jsx)("div",{children:Object(d.jsx)(S,{title:c,text:i})},c)}));return Object(d.jsx)("div",{className:"SkillList",children:"left"===c?Object(d.jsxs)("div",{className:"list-row-container left",children:[Object(d.jsx)("div",{className:"list-items",children:n}),Object(d.jsx)("h1",{className:"list-header",children:t})]}):Object(d.jsxs)("div",{className:"list-row-container right",children:[Object(d.jsx)("h1",{className:"list-header",children:t}),Object(d.jsx)("div",{className:"list-items",children:n})]})})};y.defaultProps={};var P=y,D=(c(44),function(){return Object(d.jsxs)("div",{className:"Contact",children:[Object(d.jsx)("h1",{className:"section-title",children:"Contact Me"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["Email - ",Object(d.jsx)("a",{href:"mailto:whiteceric@gmail.com",children:"whiteceric@gmail.com"})]}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["Twitter -"," ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com/camwhite271",children:"@camwhite271"})]}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["LinkedIn -"," ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/camwhite1301/",children:"camwhite1301"})]}),Object(d.jsxs)("h2",{className:"contact-link-title",children:["GitHub -"," ",Object(d.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/whiteceric",children:"whiteceric"})]})]})});D.defaultProps={};var L=D,C=(c(45),function(e){var t=e.title,c=e.title_href,i=e.dates,n=e.summary;e.link;return Object(d.jsx)("div",{className:"project-item-container",children:Object(d.jsx)(a.b,{className:"project-item-link",to:c,children:Object(d.jsxs)("div",{className:"ProjectListItem",children:[Object(d.jsxs)("div",{className:"project-item-top-row",children:[Object(d.jsx)("h1",{className:"project-title",children:t}),Object(d.jsx)("small",{className:"dates-text",children:i})]}),Object(d.jsx)("p",{className:"summary-text",children:n})]})})})});C.defaultProps={};var T=C,F=c(11),I=c(10),B=new Map;B["01"]="January",B["02"]="February",B["03"]="March",B["04"]="April",B["05"]="May",B["06"]="June",B["07"]="July",B["08"]="August",B["09"]="September",B[10]="October",B[11]="November",B[12]="December";var M=function(e){var t=e.split("-");return B[t[1]]+" "+t[2]+", "+t[0]};var A=function(){var e=Object(I.a)("api/project-list/"),t=Object(I.a)("api/bio/");return console.log(t),Object(d.jsxs)(a.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(l.a,{path:"/",exact:!0,render:function(c){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(k,{text:t.ABOUT}),Object(d.jsx)(P,{title:"Skills",list_side:"left",skills:null!=t.SKILLS?t.SKILLS:[]}),Object(d.jsx)(P,{title:"Tools",list_side:"right",skills:null!=t.TOOLS?t.TOOLS:[]}),Object(d.jsx)("h1",{className:"section-title",children:"Projects"}),e.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)(T,{title:e.title,title_href:"/project/".concat(e.slugified_name),dates:M(e.start_date)+" to "+M(e.end_date),summary:e.summary,link:e.link})},t)}))]})}}),Object(d.jsx)(l.a,{path:"/contact",exact:!0,render:function(e){return Object(d.jsx)(L,{})}}),Object(d.jsx)(l.a,{path:"/project/:slugified_title",children:Object(d.jsx)(F.default,{})}),Object(d.jsx)(N,{})]})},E=function(e){e&&e instanceof Function&&c.e(8).then(c.bind(null,49)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),s(e),r(e)}))};c(47);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),E()}],[[48,6,7]]]);
//# sourceMappingURL=main.f9be396d.chunk.js.map