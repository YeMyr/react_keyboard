(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),o=n(4),r=n(5),s=n(7),u=n(6),i=n(1),l=n.n(i),p=n(0),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={key:null},e.handleDocumentKeyup=function(t){var n=t.key;e.setState({key:n})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentKeyup)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentKeyup)}},{key:"render",value:function(){var e=this.state.key;return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:null===e?"Nothing was pressed yet":"The last pressed key is [".concat(e,"]")})})}}]),n}(l.a.Component);n(13);c.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba477e9f.chunk.js.map