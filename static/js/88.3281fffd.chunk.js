"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{9088:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(9439),r=n(2791),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i=n(9434),u=n(1772),o=n(4217),c=function(){return{isLoggedIn:(0,i.v9)(o.M7),user:(0,i.v9)(o.PR),isRefreshing:(0,i.v9)(o.m1),items:(0,i.v9)(o.K2).items,filterValue:(0,i.v9)(o.zK)}},l=n(6747),d=n(2596),m="Form_form__e1yzW",h="Form_btn__0ebGo",f="Form_box__A47q8",p="Form_input__FTtTw",v=n(3329);var _=function(){var e=(0,i.I0)(),t=c().items,n=(0,r.useState)(""),o=(0,a.Z)(n,2),_=o[0],b=o[1],x=(0,r.useState)(""),g=(0,a.Z)(x,2),j=g[0],C=g[1],y=s(),k=s(),w=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":b(a);break;case"number":C(a);break;default:console.log("\u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}},N=function(){b(""),C("")};return(0,v.jsx)("form",{onSubmit:function(n){n.preventDefault();var a={name:_,number:j,id:s()};if(t.find((function(e){return e.name.includes(a.name)})))return alert("ay, \u0442\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454");e(u.addContactThunk(a)),N()},className:m,children:(0,v.jsxs)(l.Z,{className:f,children:[(0,v.jsx)(d.Z,{id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",value:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,myid:y,onChange:w,className:p}),(0,v.jsx)(d.Z,{id:"outlined-basic",label:"Number",variant:"outlined",type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,myid:k,onChange:w,className:p}),(0,v.jsx)("button",{type:"submit",className:h,children:"Add contact"})]})})},b=n(6617),x=function(){var e=c().filterValue,t=(0,i.I0)();return(0,v.jsx)(d.Z,{id:"standard-basic",label:"Find contacts by name",variant:"standard",type:"text",name:"filter",value:e,onChange:function(e){return t((0,b.h)(e.currentTarget.value))}})},g="ListUpdate_list__unpIe",j="ListUpdate_item__VXSfh",C="ListUpdate_listBtn__BPhEl",y="ListUpdate_text__FZ-zv",k=function(){var e=(0,i.I0)(),t=(0,i.v9)(o.K2),n=t.items,a=t.isLoading,s=t.error,c=(0,i.v9)(o.zK);(0,r.useEffect)((function(){e(u.fetchContactsThunk())}),[e]);var l=c.toLowerCase(),d=(0,r.useMemo)((function(){if(n)return n.filter((function(e){return e.name.toLowerCase().includes(l)}))}),[l,n]);return(0,v.jsxs)("div",{children:[a&&(0,v.jsx)("h1",{children:"Loading..."}),(0,v.jsx)("ul",{className:g,children:d.map((function(t){var n=t.name,a=t.number,r=t.id;return(0,v.jsxs)("li",{className:j,children:[(0,v.jsxs)("p",{className:y,children:[n,": ",a]}),(0,v.jsx)("button",{type:"button",onClick:function(){return e(u.deleteContactThunk(r))},className:C,children:"Delete"})]},r)}))}),s&&(0,v.jsxs)("h1",{children:["Something went wrong: ",s.message]})]})};function w(){return(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Contacts"}),(0,v.jsx)(_,{}),(0,v.jsx)(x,{}),(0,v.jsx)(k,{})]})}}}]);
//# sourceMappingURL=88.3281fffd.chunk.js.map