(this["webpackJsonprec-website"]=this["webpackJsonprec-website"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(0),n=a.n(r),s=a(15),i=a.n(s),o=(a(37),a(38),a(10)),l=(a(39),function(){return Object(c.jsx)("div",{className:"container mb-5 mt-3",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",style:{height:"600px"},children:Object(c.jsx)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDetroit&src=MTRxNXVrZDNjbGkzNjdzMTdwcWE0b2p0NjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZTA5ZGpybDMzaDRrZHY4aTB2aGZydGFxa2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aXF1NzAxbWw4dGEwdmpzb3VnOXZsaWQ5YjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23D50000&color=%237CB342&title=Rec%20Center%20Reservations&showNav=1&showTabs=0&showPrint=0&mode=AGENDA",style:{border:"solid 1px #777"},width:"100%",height:"100%",frameborder:"0",scrolling:"no"})})})})}),j=a(16),d=function(e){var t=function(t){e.changeView(t)};return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)(j.a,{variant:"".concat("Month"==e.currentView?"":"outline-","primary"),className:"col",onClick:function(){return t("Month")},children:"Monthly View"})," ",Object(c.jsx)(j.a,{variant:"".concat("Week"==e.currentView?"":"outline-","primary"),className:"col",onClick:function(){return t("Week")},children:"Weekly View"})," ",Object(c.jsx)(j.a,{variant:"".concat("Agenda"==e.currentView?"":"outline-","primary"),className:"col",onClick:function(){return t("Agenda")},children:"Agenda View"})," "]})})},b=a(7),m=a(5),u=a(17),h=a(30),O=a.n(h),x=a(31),v=a.n(x),f=function(){var e=Object(r.useState)({firstName:"",lastName:"",email:"",idNumber:"",reservationReason:"",rooms:[],reservationDate:"",reservationDay:"",numberOfAttendees:"",startTime:39600,endTime:41400,start:"11:00 AM",end:"11:30 AM",organization:"",isRecurring:!1,recurringFrequency:""}),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),l=i[0],d=i[1],h=Object(r.useState)(!1),x=Object(o.a)(h,2),f=x[0],g=x[1],C=Object(r.useState)(!1),N=Object(o.a)(C,2),p=N[0],y=N[1],A=Object(r.useState)(""),w=Object(o.a)(A,2),Z=w[0],k=w[1],T=Object(r.useState)(!1),R=Object(o.a)(T,2),F=R[0],D=R[1],L=Object(r.useRef)(),E=Object(r.useRef)(),W=function(e){var t,a=e/3600,c=a-Math.floor(a);return c*=60,t=(a=Math.floor(a))>=12?"PM":"AM",["".concat(0==a||12==a?12:a%12,":").concat(0==c?"00":c," ").concat(t),"".concat(a,":").concat(0==c?"00":c)]};return F?Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("h4",{style:{textAlign:"center"},children:[" ","Thank you for your submission. You will be emailed at",Object(c.jsxs)("span",{style:{color:"cornflowerblue"},children:[" ",a.email]})," ","shortly"," "]}),Object(c.jsx)("div",{style:{height:"400px"}})]})}):Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col"}),Object(c.jsx)("div",{className:"col-9",children:Object(c.jsxs)(m.a,{noValidate:!0,validated:f,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),g(!0),D(!0),v.a.send("service_1vw76um","template_j575ef8",a,"user_wJ5IIawclAEmWJ073b9vj").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},children:[Object(c.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(m.a.Label,{className:"mt-1",children:"First Name"}),Object(c.jsx)(m.a.Control,{required:!0,type:"text",placeholder:"Enter First Name",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{firstName:e.target.value}))}}),Object(c.jsx)(m.a.Label,{className:"mt-1",children:"Last Name"}),Object(c.jsx)(m.a.Control,{required:!0,type:"text",placeholder:"Enter Last Name",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{lastName:e.target.value}))}})]}),Object(c.jsxs)(m.a.Group,{children:[Object(c.jsx)(m.a.Label,{className:"mt-1",children:"Email"}),Object(c.jsx)(m.a.Control,{required:!0,type:"text",placeholder:"Enter Email Address",onChange:function(e){var t,c;t=e.target.value,c=e,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?c.target.setCustomValidity(""):c.target.setCustomValidity("Email is invalid"),n(Object(b.a)(Object(b.a)({},a),{},{email:e.target.value}))}}),Object(c.jsx)(m.a.Control.Feedback,{type:"invalid",children:"Invalid Email"})]}),Object(c.jsxs)(m.a.Group,{children:[Object(c.jsx)(m.a.Label,{className:"mt-1",children:"ID Number"}),Object(c.jsx)(m.a.Control,{required:!0,type:"number",placeholder:"Enter ID Number",min:"0",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{idNumber:e.target.value}))}}),Object(c.jsx)(m.a.Label,{className:"mt-1",children:"What Is the Reservation For?"}),Object(c.jsx)(m.a.Control,{required:!0,type:"text",placeholder:"Ex. Birthday Party, Club Name Etc.",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{reservationReason:e.target.value}))}})]}),Object(c.jsxs)(m.a.Group,{controlId:"formBasicCheckbox",children:[Object(c.jsx)(m.a.Label,{children:"Which Area Would You Like to Reserve?"}),Object(c.jsx)("hr",{}),Object(c.jsx)(m.a.Check,{required:0===a.rooms.length,type:"checkbox",label:"Main Rec Center",onClick:function(e){e.target.checked?n(Object(b.a)(Object(b.a)({},a),{},{rooms:a.rooms.concat("Main Rec Center")})):n(Object(b.a)(Object(b.a)({},a),{},{rooms:a.rooms.filter((function(e){return"Main Rec Center"!==e}))}))}}),Object(c.jsx)(m.a.Text,{className:"text-muted mb-2",children:"Capacity 10"}),Object(c.jsx)(m.a.Check,{required:0===a.rooms.length,type:"checkbox",label:"Amphitheater",onClick:function(e){e.target.checked?n(Object(b.a)(Object(b.a)({},a),{},{rooms:a.rooms.concat("Amphitheater")})):n(Object(b.a)(Object(b.a)({},a),{},{rooms:a.rooms.filter((function(e){return"Amphitheater"!==e}))}))}}),Object(c.jsx)(m.a.Text,{className:"text-muted mb-2",children:"Capacity 15 (If socially distanced chairs are used)"}),Object(c.jsx)(m.a.Check,{required:0===a.rooms.length,type:"checkbox",label:"Study/Conference Room",onClick:function(e){e.target.checked?n(Object(b.a)(Object(b.a)({},a),{},{rooms:a.rooms.concat("Study/Conference Room")})):n(Object(b.a)(Object(b.a)({},a),{},{rooms:a.rooms.filter((function(e){return"Study/Conference Room"!==e}))}))}}),Object(c.jsx)(m.a.Text,{className:"text-muted",children:"Capacity 2"}),Object(c.jsx)("hr",{})]}),Object(c.jsxs)(m.a.Group,{controlId:"moreQuestions",children:[Object(c.jsx)(m.a.Label,{className:"mt-1",children:"What Date would you Like to Reserve?"}),Object(c.jsx)(m.a.Control,{required:!0,type:"date",onChange:function(e){if(null===e.target.valueAsDate)n(Object(b.a)(Object(b.a)({},a),{},{reservationDate:"",reservationDay:""}));else{var t=new Date(e.target.valueAsDate.getTime()+6e4*e.target.valueAsDate.getTimezoneOffset()).toString().substring(0,3);n(Object(b.a)(Object(b.a)({},a),{},{reservationDate:e.target.value,recurringFrequency:"Sat"==t?"Once a month":a.recurringFrequency,reservationDay:t}))}}}),Object(c.jsx)(m.a.Label,{className:"mt-1",children:"Is This Reservation Recurring?"}),Object(c.jsx)(m.a.Check,{required:!0,type:"radio",label:"Yes",name:"formQuestionRadios",id:"formQuestionRadios1",onChange:function(){d(!0),n(Object(b.a)(Object(b.a)({},a),{},{isRecurring:!0}))}}),Object(c.jsx)(m.a.Check,{type:"radio",label:"No",name:"formQuestionRadios",id:"formQuestionRadios2",onChange:function(){d(!1),n(Object(b.a)(Object(b.a)({},a),{},{isRecurring:!1}))}}),l?Object(c.jsxs)("div",{children:[Object(c.jsx)(m.a.Label,{className:"mt-1",children:"How Often Does it Occur?"}),Object(c.jsxs)(m.a.Control,{required:!0,as:"select",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{recurringFrequency:e.target.value}))},children:[Object(c.jsxs)("option",{disabled:!0,selected:!0,value:!0,children:[" ","-- select an option --"," "]}),"Sat"!==a.reservationDay?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("option",{children:"Every week"}),Object(c.jsx)("option",{children:"Every other week"})]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("option",{children:"Once a month"})]})]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)(m.a.Label,{className:"mt-2",children:"How Many People would be Attending the Reservation?"}),Object(c.jsx)(m.a.Control,{required:!0,type:"number",placeholder:"Enter a number",min:"0",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{numberOfAttendees:e.target.value}))}})]}),Object(c.jsxs)(m.a.Group,{children:[Object(c.jsx)(m.a.Label,{className:"mt-1",children:"What Time Would you Like to Reserve??"}),Object(c.jsx)(m.a.Control,{required:p,type:"text",style:{display:"none"}}),Object(c.jsx)(m.a.Control.Feedback,{type:"invalid",children:Z}),Object(c.jsxs)(m.a.Row,{children:[Object(c.jsxs)(u.a,{children:[Object(c.jsx)(m.a.Label,{column:"sm",children:"Start Time"}),Object(c.jsx)("div",{ref:L,children:Object(c.jsx)(O.a,{start:"11:00",value:a.startTime,onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{startTime:e,endTime:84600==e?0:e+1800,start:W(e)[0],end:W(84600==e?0:e+1800)[0]})),e>=a.endTime?(L.current.firstChild.setCustomValidity("Time is invalid"),E.current.firstChild.setCustomValidity("Time is invalid"),y(!0),k("The end time must be after the start time")):(y(!1),L.current.firstChild.setCustomValidity(""),E.current.firstChild.setCustomValidity(""))}})})]}),Object(c.jsxs)(u.a,{children:[Object(c.jsx)(m.a.Label,{column:"sm",children:"End Time"}),Object(c.jsx)("div",{ref:E,children:Object(c.jsx)(O.a,{start:84600!==a.startTime?W(a.startTime+1800)[1]:"00:00",end:84600!==a.startTime?"23:30":"00:00",value:a.endTime,onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{endTime:e,end:W(e)[0]})),e<=a.startTime?(E.current.firstChild.setCustomValidity("Time is invalid"),L.current.firstChild.setCustomValidity("Time is invalid"),y(!0),k("The end time must be after the start time")):(y(!1),E.current.firstChild.setCustomValidity(""),L.current.firstChild.setCustomValidity(""))}})})]})]})]}),Object(c.jsxs)(m.a.Group,{controlId:"formOrganization",children:[Object(c.jsx)(m.a.Label,{className:"mt-2",children:"Is There An Organization Associated with Your Reservation?"}),Object(c.jsx)(m.a.Control,{required:!0,type:"text",placeholder:"Ex. BSCF, AUSA",onChange:function(e){n(Object(b.a)(Object(b.a)({},a),{},{organization:e.target.value}))}})]}),Object(c.jsx)(j.a,{variant:"primary",type:"submit",children:"Submit"})]})}),Object(c.jsx)("div",{className:"col"})]})})},g=function(){return Object(c.jsx)("div",{className:"container mb-5 mt-3",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",style:{height:"600px"},children:Object(c.jsx)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDetroit&src=MTRxNXVrZDNjbGkzNjdzMTdwcWE0b2p0NjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZTA5ZGpybDMzaDRrZHY4aTB2aGZydGFxa2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aXF1NzAxbWw4dGEwdmpzb3VnOXZsaWQ5YjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23D50000&color=%237CB342&title=Rec%20Center%20Reservations&showNav=1&showTabs=0&showPrint=0",style:{border:"solid 1px #777"},width:"100%",height:"100%",frameborder:"0",scrolling:"no"})})})})},C=a(18),N=a(25),p=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(C.a,{bg:"dark",expand:"lg",variant:"dark",className:"mb-5",children:[Object(c.jsx)(C.a.Brand,{href:"#Calendar",className:"pl-3",children:"AU Rec Center"}),Object(c.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(C.a.Collapse,{id:"basic-navbar-nav",className:"pl-3",children:Object(c.jsxs)(N.a,{className:"ml-auto pr-3",children:[Object(c.jsx)(N.a.Link,{href:"#Calendar",children:"Calendar"}),Object(c.jsx)(N.a.Link,{href:"#Reservation",children:"Reservation"})]})})]})})},y=function(){return Object(c.jsx)("div",{className:"container mb-5 mt-3",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col",style:{height:"600px"},children:Object(c.jsx)("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDetroit&src=MTRxNXVrZDNjbGkzNjdzMTdwcWE0b2p0NjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZTA5ZGpybDMzaDRrZHY4aTB2aGZydGFxa2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aXF1NzAxbWw4dGEwdmpzb3VnOXZsaWQ5YjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23D50000&color=%237CB342&title=Rec%20Center%20Reservations&showNav=1&showTabs=0&showPrint=0&mode=WEEK",style:{border:"solid 1px #777"},width:"100%",height:"100%",frameborder:"0",scrolling:"no"})})})})};var A=function(){var e=Object(r.useState)("Month"),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsxs)("h1",{style:{textAlign:"center"},id:"Calendar",children:[" ","Calendar"," "]}),Object(c.jsx)(d,{changeView:function(e){n(e)},currentView:a}),"Month"==a&&Object(c.jsx)(g,{}),"Week"==a&&Object(c.jsx)(y,{}),"Agenda"==a&&Object(c.jsx)(l,{}),Object(c.jsxs)("h1",{style:{textAlign:"center"},id:"Reservation",children:[" ","Reservation"," "]}),Object(c.jsx)(f,{})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.3a7b3492.chunk.js.map