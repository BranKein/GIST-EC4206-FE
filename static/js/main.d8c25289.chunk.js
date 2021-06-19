(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{48:function(e,t,n){},50:function(e,t,n){},70:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(20),c=n.n(r),s=(n(48),n(6)),o=n(8),i=n.n(o),u=n(17),d=n(28),l=(n(50),n(38)),h=n.n(l),b=n(18),j=n.n(b),p=n(5),x=function(){var e="https://api.ec4206-experiment.yeonhyuk.me",t=Object(a.useState)(100),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)("userUUID"),o=Object(d.a)(s,2),l=o[0],b=o[1],x=function(){var t=Object(u.a)(i.a.mark((function t(){var n,a,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,console.log("Header-based Authorization Start!");case 3:return t.next=5,h()(1e3);case 5:a=new Date,c=new Date,s=i.a.mark((function t(r){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("userToken");case 2:return s=t.sent,t.next=5,j.a.get("".concat(e,"/header-based/validate"),{headers:{Authorization:"Token ".concat(s)}}).then((function(e){e.data.uuid===l&&(c=new Date,n.push(c-a),console.log(r+": "+(c-a)))}));case 5:case"end":return t.stop()}}),t)})),o=0;case 9:if(!(o<r)){t.next=14;break}return t.delegateYield(s(o),"t0",11);case 11:o++,t.next=9;break;case 14:return t.next=16,console.log(n);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(u.a)(i.a.mark((function t(){var n,a,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,console.log("Cookie-based Authorization Start!");case 3:a=new Date,c=new Date,s=i.a.mark((function t(r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("".concat(e,"/cookie-based/validate"),{withCredentials:!0}).then((function(e){e.data.uuid===l&&(c=new Date,n.push(c-a),console.log(r+": "+(c-a)))}));case 2:case"end":return t.stop()}}),t)})),o=0;case 7:if(!(o<r)){t.next=12;break}return t.delegateYield(s(o),"t0",9);case 9:o++,t.next=7;break;case 12:return t.next=14,console.log(n);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.a.get("".concat(e,"/header-based/setting")).then((function(e){b(e.data.uuid),localStorage.setItem("userToken",e.data.token)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.a.get("".concat(e,"/cookie-based/setting"),{withCredentials:!0}).then((function(e){b(e.data.uuid)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"main-page-wrapper",children:[Object(p.jsxs)("h2",{children:["Header based Authorization",Object(p.jsx)("br",{}),"vs",Object(p.jsx)("br",{}),"Cookie based Authorization"]}),Object(p.jsx)("div",{children:Object(p.jsxs)("p",{children:["userUUID: ",l]})}),Object(p.jsxs)("div",{className:"setting-header-wrapper",children:[Object(p.jsx)("div",{className:"setting-header-title",children:"N:"}),Object(p.jsx)("input",{onChange:function(e){c(e.target.value)}})]}),Object(p.jsxs)("div",{className:"bodies-wrapper",children:[Object(p.jsxs)("div",{className:"body-wrapper",children:[Object(p.jsx)("h3",{children:"Header based Authorization"}),Object(p.jsxs)("div",{className:"setting-header-wrapper",children:[Object(p.jsx)("div",{className:"setting-header-title",children:"Setting Token"}),Object(p.jsx)("button",{onClick:function(){return f()},children:"Setting!"})]}),Object(p.jsx)("button",{className:"experiment-button",onClick:function(){return x()},children:"Experiment Start"})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"body-wrapper",children:[Object(p.jsx)("h3",{children:"Cookie based Authorization"}),Object(p.jsxs)("div",{className:"setting-header-wrapper",children:[Object(p.jsx)("div",{className:"setting-header-title",children:"Setting Token"}),Object(p.jsx)("button",{onClick:function(){return v()},children:"Setting!"})]}),Object(p.jsx)("button",{className:"experiment-button",onClick:function(){return O()},children:"Experiment Start"})]})]})]})};n(70);var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(s.a,{path:"/",component:x,exact:!0})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(25),v=n(13),g=n(41),m=n(16),w=n(19),k="loading/START_LOADING",S="loading/FINISH_LOADING",N="loading/RESET_LOADING_STATUS",y={};var A=n(43),T=i.a.mark(D);function D(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([]);case 2:case"end":return e.stop()}}),T)}var C=Object(v.combineReducers)({loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(w.a)(Object(w.a)({},e),{},Object(m.a)({},t.requestType,!0));case S:return Object(w.a)(Object(w.a)({},e),{},Object(m.a)({},t.requestType,!1));case N:return y;default:return e}}}),I=n(39),z=n.n(I),E=n(40),U=n(42),H=Object(U.a)(),R=Object(v.createStore)(C,Object(E.composeWithDevTools)(Object(v.applyMiddleware)(H,z.a)));H.run(D),console.log(R.getState()),c.a.render(Object(p.jsx)(g.a,{store:R,children:Object(p.jsx)(f.a,{children:Object(p.jsx)(O,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);