(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(t,e,n){t.exports={TitleList:"Statistics_TitleList__29dCy",List:"Statistics_List__2Jfn8"}},function(t,e,n){t.exports={buttonContainer:"FeedbackOption_buttonContainer__3KSv-",button:"FeedbackOption_button__1ILpu"}},,,,,function(t,e,n){t.exports={container:"App_container__1hKYC"}},function(t,e,n){t.exports={mainTitle:"Section_mainTitle__2PHpv"}},function(t,e,n){t.exports={message:"Notification_message__2lFw0"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(5),s=n.n(c),o=n(6),r=n(7),l=n(8),u=n(13),b=n(12),d=n(9),j=n.n(d),p=n(10),h=n.n(p),f=n(0),v=function(t){var e=t.title,n=t.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:h.a.mainTitle,children:e}),n]})},O=n(3),x=n.n(O),g=function(t){return Object(f.jsx)("ul",{className:x.a.List,children:Object.keys(t).map((function(e){return Object(f.jsx)("li",{className:x.a.TitleList,children:Object(f.jsxs)("p",{children:[e,":"," ",Object(f.jsxs)("span",{children:[t[e],"positivePercentage"===e&&"%"]})]})},e)}))})},m=n(4),_=n.n(m),k=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:_.a.buttonContainer,children:e.map((function(t){return Object(f.jsx)("button",{type:"button",className:_.a.button,onClick:n,children:t},t)}))})})},F=n(11),C=n.n(F),L=function(t){var e=t.message;return Object(f.jsx)("p",{className:C.a.message,children:e})},S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:t.props.good,neutral:t.props.neutral,bad:t.props.bad},t.visibleStatistics=!1,t.handelBtnClick=function(e){t.visibleStatistics=!0,t.setState((function(t){var n=e.target.textContent.toLowerCase();return Object(o.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(t,e,n){return t+e+n},t.countPositiveFeedbackPercentage=function(t,e,n){var a=t+e+n;return(0===a?0:t/a*100).toFixed()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(f.jsxs)("div",{className:j.a.container,children:[Object(f.jsx)(v,{title:"Please leave feedback",children:Object(f.jsx)(k,{options:["good","neutral","bad"],onLeaveFeedback:this.handelBtnClick})}),Object(f.jsx)(v,{title:"Statistics",children:!0===this.visibleStatistics?Object(f.jsx)(g,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(e,n,a),positivePercentage:this.countPositiveFeedbackPercentage(e,n,a)}):Object(f.jsx)(L,{message:"No feedback given"})})]})}}]),n}(a.Component);S.defaultProps={good:0,neutral:0,bad:0},s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.0ab2fdc4.chunk.js.map