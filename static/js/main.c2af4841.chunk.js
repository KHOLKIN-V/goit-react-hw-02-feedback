(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={title:"Statistics_title__2qfH4",list:"Statistics_list__84nf9",item:"Statistics_item__14a1H",listTotal:"Statistics_listTotal__FGhwK"}},function(t,e,a){t.exports={btnContainer:"Feedbackoptions_btnContainer__3dA5b",btn:"Feedbackoptions_btn__3RWne",title:"Feedbackoptions_title__33OP5"}},,,,,,function(t,e,a){t.exports={Container:"Container_Container__29W85"}},function(t,e,a){t.exports={title:"Notification_title___AMmT"}},,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),i=a(5),c=a.n(i),o=(a(17),a(6)),r=a(7),l=a(8),d=a(12),b=a(11),j=a(9),u=a.n(j),h=a(0),m=function(t){var e=t.children;return Object(h.jsx)("div",{className:u.a.Container,children:e})},O=a(3),f=a.n(O),x=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:f.a.title,children:"Please leave feedback"}),Object(h.jsx)("div",{className:f.a.btnContainer,children:e.map((function(t){return Object(h.jsx)("button",{type:"button",name:t,className:f.a.btn,onClick:a,children:t})}))})]})},_=a(2),v=a.n(_),g=function(t){var e=t.onGood,a=t.onNeutral,n=t.onBad,s=t.onTotal,i=t.onPositivePercentage,c=void 0===i?"0":i;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:v.a.title,children:"Statistics"}),Object(h.jsxs)("ul",{className:v.a.list,children:[Object(h.jsxs)("li",{className:v.a.item,children:["Good: ",e]}),Object(h.jsxs)("li",{className:v.a.item,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:v.a.item,children:["Bad: ",n]})]}),Object(h.jsxs)("ul",{className:v.a.listTotal,children:[Object(h.jsxs)("li",{className:v.a.item,children:["Total: ",s]}),Object(h.jsxs)("li",{className:v.a.item,children:["Positive feedback: ",c,"%"]})]})]})},k=a(10),p=a.n(k),N=function(t){var e=t.message;return Object(h.jsx)("h2",{className:p.a.title,children:e})},F=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.totalPlus=function(e){var a=e.target.name;t.setState((function(t){return Object(o.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(t,e,a){return t+e+a},t.countPositiveFeedbackPercentage=function(t,e,a){if(t+e+a!==0)return Math.floor(t/(t+e+a)*100)},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{children:Object(h.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:this.totalPlus})}),0===this.countTotalFeedback(this.state.good,this.state.neutral,this.state.bad)?Object(h.jsx)(m,{children:Object(h.jsx)(N,{message:"No feedback given (\u0ca5\ufe4f\u0ca5)"})}):Object(h.jsx)(m,{children:Object(h.jsx)(g,{onGood:this.state.good,onNeutral:this.state.neutral,onBad:this.state.bad,onTotal:this.countTotalFeedback(this.state.good,this.state.neutral,this.state.bad),onPositivePercentage:this.countPositiveFeedbackPercentage(this.state.good,this.state.neutral,this.state.bad)})})]})}}]),a}(n.Component),P=F;c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.c2af4841.chunk.js.map