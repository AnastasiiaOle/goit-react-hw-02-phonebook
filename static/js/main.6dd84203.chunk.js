(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{110:function(t,e,n){t.exports={App:"App_App__16ZpL"}},124:function(t,e){},126:function(t,e){},136:function(t,e){},138:function(t,e){},14:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B"}},165:function(t,e){},167:function(t,e){},168:function(t,e){},173:function(t,e){},175:function(t,e){},194:function(t,e){},206:function(t,e){},209:function(t,e){},215:function(t,e,n){"use strict";n.r(e);var a=n(9),c=n.n(a),r=n(108),i=n.n(r),o=n(111),s=n(31),u=n(32),l=n(34),b=n(33),m=n(58),d=n.n(m),f=n(109),h=n(14),j=n.n(h),p=n(2),C=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;(0,t.props.onSubmit)({name:a,number:c}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{className:j.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{children:["Find contacts by name ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})};O.defaultProps={value:""};var v=O,x=n(35),_=n.n(x),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:_.a.ul,children:e.map((function(t){return Object(p.jsxs)("li",{className:_.a.li,children:[t.name,":",t.number,Object(p.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},A=n(110),y=n.n(A),S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;t.setState((function(t){var e=t.contacts;if(e.find((function(t){return t.name===n||t.number===a})))return alert("".concat(n," is already in contacts")),{contacts:e};var c={id:d.a.generate(),name:n,number:a};return{contacts:[].concat(Object(o.a)(t.contacts),[c])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return a?n.filter((function(t){return t.name.includes(a)})):n},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFilterContacts();return Object(p.jsxs)("div",{className:y.a.App,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{value:t,onChange:this.changeFilter}),Object(p.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(214);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},35:function(t,e,n){t.exports={ul:"ContactList_ul__2SEi_",li:"ContactList_li__1Dxk_",button:"ContactList_button__1RuFy"}}},[[215,1,2]]]);
//# sourceMappingURL=main.6dd84203.chunk.js.map