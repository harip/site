(this["webpackJsonphp-profile"]=this["webpackJsonphp-profile"]||[]).push([[4],{281:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),c=n.n(r),i=n(21),s=n.n(i),o=n(30),u=n(201),l=n(266),d=n(12),j=n(252),p=n(264),b=n(253),m=n(265),f=n(33),x=n(277),O=function(t){var e=t.post,n=Object(r.useState)(e.content),c=Object(d.a)(n,2),i=c[0],s=c[1];return Object(a.jsx)(x.a,{apiKey:"wefhnu0ma6zh07117uwxwjj5ila4m1d1y16pp4e59wbc6log",initialValue:i,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code codesample image"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | codesample | image"},onEditorChange:function(t,n){s(t),e.newContent=t}})},h=n(279),g=n(251),v=n(274),w=n.n(v),y=n(275),k=n.n(y),C=n(269),S=n(40),N=n(276),_=n.n(N),B=n(113),T=Object(u.a)((function(t){return{root:{margin:10,display:"flex",justifyContent:"center",alignContent:"center",flexWrap:"wrap",listStyle:"none",padding:t.spacing(.5)},contactHeader:{fontSize:20,borderBottom:2,background:"#ffa602"},card:{marginRight:5,marginBottom:5},cardActions:{borderTop:"solid 1px #f9f5ee"},crudButtons:{marginLeft:"auto"},wrapper:{margin:t.spacing(1),position:"relative"},commentBox:{width:"100%"}}})),P=function(t){var e,n=Object(r.useContext)(S.b),i=T(),s=Object(r.useState)(t.item.title),o=Object(d.a)(s,2),u=o[0],l=o[1],x=Object(r.useState)(!0),v=Object(d.a)(x,2),y=v[0],N=v[1],P=c.a.useState(!0),I=Object(d.a)(P,2),L=I[0],A=(I[1],c.a.useState(!1)),E=Object(d.a)(A,2),F=E[0],H=E[1],z=Object(r.useState)(""),J=Object(d.a)(z,2),M=J[0],R=J[1],W=Object(r.useState)(!1),K=Object(d.a)(W,2),V=K[0],q=K[1],D=t.savePost,G=t.saveComment,Q=function(t){return Object(a.jsx)("div",{children:y?Object(a.jsx)(f.a,{children:t.title}):Object(a.jsx)(C.a,{autoFocus:!0,margin:"dense",id:"postTitle",label:"title",type:"text",fullWidth:!0,value:u,onChange:U})})},U=function(t){l(t.target.value)},X=function(){N(!1)},Y=function(){q(!0);var e={text:M};t.item._id&&(e._id=t.item._id),G(e,(function(){q(!1)}))},Z=function(t){R(t.target.value)},$=function(){return n.isLoggedIn()?Object(a.jsx)(h.a,{color:"primary","aria-label":"outlined primary button group",className:i.crudButtons,children:y?Object(a.jsx)(g.a,{"aria-label":"edit",onClick:X,children:Object(a.jsx)(w.a,{})}):Object(a.jsx)(g.a,{"aria-label":"save",onClick:function(){return function(){var e={title:u,content:t.item.newContent,token:n.token};t.item._id&&(e._id=t.item._id),N(!0),D(t.item,e,(function(t){t&&N(!0)}))}()},color:"primary",children:Object(a.jsx)(k.a,{})})}):null};return Object(a.jsx)(c.a.Fragment,{children:(e=t.item,Object(a.jsx)("div",{className:i.wrapper,disabled:L,children:Object(a.jsx)("div",{className:i.card,children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(p.a,{className:i.contactHeader,title:Q(e),action:$()}),Object(a.jsx)(b.a,{children:Object(a.jsx)("div",{id:"container",children:Object(a.jsx)(c.a.Fragment,{children:y?Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.item.content}}):Object(a.jsx)(O,{post:t.item})})})}),Object(a.jsxs)(m.a,{disableSpacing:!0,className:i.cardActions,children:[Object(a.jsx)(g.a,{"aria-label":"add comment",onClick:function(){return H(!F)},children:Object(a.jsx)(_.a,{})}),Object(a.jsx)(C.a,{id:"standard-multiline-flexible",label:"add comment",className:i.commentBox,multiline:!0,rowsMax:4,value:M,onChange:Z}),Object(a.jsx)(B.a,{buttonProps:{text:"Save",onClick:Y,loading:V}})]})]})})}))},t.item.timeStamp)},I=n(53),L=c.a.createContext({posts:null}),A=function(t){var e=t.children,n=Object(r.useState)(null),c=Object(d.a)(n,2),i=c[0],u=c[1];return Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("/post");case 2:e=t.sent,n={posts:e.data},u(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(a.jsx)(L.Provider,{value:i,children:e})},E=L,F=function(){var t=Object(o.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.put("/post",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(o.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.patch("/post",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=F,J=n(280),M=Object(u.a)((function(t){return{post:{marginTop:30},postBody:{height:118,marginTop:-8},postTitle:{height:50,background:"#ffa602"}}})),R=function(){var t=M();return Object(a.jsx)(l.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[1,2,3].map((function(e){return Object(a.jsxs)(l.a,{item:!0,xs:12,sm:9,className:t.post,children:[Object(a.jsx)(J.a,{variant:"text",className:t.postTitle}),Object(a.jsx)(J.a,{variant:"rect",className:t.postBody})]},e)}))})},W=Object(u.a)((function(t){return{card:{marginRight:5,marginBottom:5},post:{marginTop:30}}})),K=function(t){var e=Object(r.useContext)(E),n=W();if(Object(r.useEffect)((function(){document.title="Add Posts"}),[]),!e)return Object(a.jsx)(R,{});var c=e.posts,i=function(){var t=Object(o.a)(s.a.mark((function t(e,n,a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(n);case 2:r=t.sent,c=r.success,a(c),c&&!0===c&&(e.title=n.title,e.content=n.content);case 6:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),u=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:a=t.sent,a.success,n();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.jsx)(l.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:c.map((function(t){return Object(a.jsx)(l.a,{item:!0,xs:12,sm:9,className:n.post,children:Object(a.jsx)(P,{item:t,savePost:i,saveComment:u},t._id)},t._id)}))})};e.default=function(){return Object(r.useContext)(E)?Object(a.jsx)(A,{children:Object(a.jsx)(K,{})}):Object(a.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=4.ffdf06ea.chunk.js.map