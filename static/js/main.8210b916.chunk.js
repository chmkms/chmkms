(this.webpackJsonpchmkms=this.webpackJsonpchmkms||[]).push([[0],{120:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(39),a=n.n(r),s=n(43),i=n.n(s),o=n(37),u=n(62),j=n(106),l=n(57),b=n(86),d=n(149),h=n(144),O=n(150),m=n(53),f=n(143),p=n(146),x=n(145),v=n(147),k=(n(120),n(121),n(5)),g=function(e){return"https://chmkms-demo.herokuapp.com/api/live/?accessToken=".concat(e,"&userAgent=").concat(navigator.userAgent)},w=function(e){return"https://chmkms-demo.herokuapp.com/api/live/logout?accessToken=".concat(e)},y=function(e,t){return"http://chmkms-demo.herokuapp.com/api/class/".concat(t,"/recorded-videos?accessToken=").concat(e)};function I(){return(I=Object(b.a)(i.a.mark((function e(t,n){var c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(g(t));case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,n.map((function(e){return e(r.data)})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(e){return e&&e.length?e.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t.subject,e[t.subject]?[].concat(Object(j.a)(e[t.subject]),[t]):[t]))}),[]):[]}function A(){return(A=Object(b.a)(i.a.mark((function e(t,n,c){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(y(t,n));case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,c(S(a.data)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var C=1,E=-1;var H=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({}),s=Object(o.a)(a,2),u=s[0],j=s[1],g=Object(c.useState)(!1),y=Object(o.a)(g,2),S=y[0],H=y[1],T=Object(c.useState)(null),L=Object(o.a)(T,2),P=L[0],U=L[1],F=Object(c.useState)(null),J=Object(o.a)(F,2),N=J[0],B=J[1],D=Object(c.useState)(!0),R=Object(o.a)(D,2),V=R[0],Y=R[1],q=Object(c.useState)(!1),z=Object(o.a)(q,2),G=z[0],K=z[1];Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("accessToken");r(e||window.prompt("Enter Access Token"))}),[]),Object(c.useEffect)((function(){return n&&function(e,t){return I.apply(this,arguments)}(n,[j,B])}),[n]);var M=u.description,Q=u.standard,W=u.subject,X=u.eligibility,Z=u.message,$=u.name,_=u.userAgent,ee=u.videoUrl;Object(c.useEffect)((function(){if(C===X){if(_===navigator.userAgent)return;Y(!1)}else E===X&&Y(!1)}),[_,V,X]),Object(c.useEffect)((function(){Q&&n&&V&&function(e,t,n){A.apply(this,arguments)}(n,Q,U)}),[Q,n,V]);var te=function(){return H(!1)},ne=function(){return K(!1)};function ce(e){j((function(t){return Object(l.a)(Object(l.a)({},t),e)})),te()}function re(){return(re=Object(b.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.sent&&(r(),ne(),window.location.search=""),e.abrupt("return");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(d.a.Pushable,{children:[Object(k.jsxs)(d.a,{as:h.a,animation:"overlay",icon:"labeled",inverted:!0,onHide:te,vertical:!0,visible:S,children:[N&&N.videoUrl?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(h.a.Item,{children:Object(k.jsx)(O.a,{inverted:!0,as:"b",className:"red",children:"LIVE"})}),Object(k.jsxs)(h.a.Item,{name:"video",onClick:function(){return ce(N)},children:[Object(k.jsx)(h.a.Header,{as:"a",children:N.name}),Object(k.jsx)("p",{children:N.description})]})]}):null,P&&Object.keys(P).sort().map((function(e){return Object(k.jsxs)(h.a.Item,{children:[Object(k.jsx)(h.a.Item,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(m.a,{name:"book"}),Object(k.jsx)(O.a,{inverted:!0,as:"b",className:"blue",children:e})," \xa0",Object(k.jsx)(m.a,{name:"book"})]})}),P[e].map((function(e){return Object(k.jsxs)(h.a.Item,{name:"video",onClick:function(){return ce(e)},children:[Object(k.jsx)(h.a.Header,{as:"a",children:e.name}),Object(k.jsx)("p",{children:e.description})]},e.id)}))]},e)}))]}),Object(k.jsxs)(d.a.Pusher,{dimmed:S,style:{height:"100%"},children:[Object(k.jsxs)(f.a,{fluid:!0,style:{height:"100%"},children:[Object(k.jsx)(f.a,{fluid:!0,children:Object(k.jsxs)(h.a,{inverted:!0,children:[Object(k.jsx)(h.a.Item,{name:"list",onClick:function(){return H(!0)},children:Object(k.jsx)(m.a,{name:"list"})}),Object(k.jsx)(h.a.Item,{as:"b",header:!0,children:Q}),Object(k.jsx)(h.a.Item,{as:"b",header:!0,children:W}),Object(k.jsx)(h.a.Item,{as:"b",header:!0,children:$}),Object(k.jsx)(h.a.Item,{as:"b",header:!0,children:M}),Object(k.jsx)(h.a.Item,{icon:"log out",position:"right",onClick:function(){return K(!0)},header:!0})]})}),Object(k.jsx)(f.a,{fluid:!0,style:{height:"100%"},children:V&&ee?Object(k.jsx)("iframe",{width:"100%",height:"100%",src:ee}):Z?Object(k.jsx)(f.a,{textAlign:"center",inverted:!0,children:Object(k.jsx)(p.a,{children:Z})}):null})]}),Object(k.jsxs)(x.a,{onClose:ne,open:G,children:[Object(k.jsx)(x.a.Header,{children:"Help"}),Object(k.jsx)(x.a.Content,{image:!0,children:Object(k.jsx)(x.a.Description,{children:"Logout from this device, to view classes from another device"})}),Object(k.jsx)(x.a.Actions,{children:Object(k.jsx)(v.a,{color:"red",onClick:function(){return re.apply(this,arguments)},negative:!0,children:"Yes, log me out."})})]})]})]})})};n(129);a.a.render(Object(k.jsx)(H,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.8210b916.chunk.js.map