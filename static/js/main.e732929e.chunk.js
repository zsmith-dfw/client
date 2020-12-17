(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(51),c=a.n(s),i=(a(59),a(4)),o=a(3),l=a(8),u=a.n(l),m=a(16),d=a(1),p=a(2),h=a(6),f=a(5),E="https://zsmithdfw-coursesapi.herokuapp.com/api",v=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"api",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=E+e,c={method:t,headers:{"Content-Type":"application/json; charset=utf-8"}};if(null!==a&&(c.body=JSON.stringify(a)),r){var i=btoa("".concat(n.emailAddress,":").concat(n.password));c.headers.Authorization="Basic ".concat(i)}return fetch(s,c)}},{key:"getUser",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","GET",null,!0,{emailAddress:t,password:a});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.json().then((function(e){return e})));case 7:if(401!==r.status){e.next=11;break}return e.abrupt("return",null);case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/users","POST",t);case 2:if(201!==(a=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==a.status){e.next=11;break}return e.abrupt("return",a.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createCourse",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses","POST",t,!0,{emailAddress:a,password:r});case 2:if(201!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"UpdateCourse",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t.id),"PUT",t,!0,{emailAddress:a,password:r});case 2:if(204!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"DeleteCourse",value:function(){var e=Object(m.a)(u.a.mark((function e(t,a,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api("/courses/".concat(t.id),"DELETE",t,!0,{emailAddress:a,password:r});case 2:if(204!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",[]);case 7:if(400!==n.status){e.next=11;break}return e.abrupt("return",n.json().then((function(e){return e.errors})));case 11:throw new Error;case 12:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()}]),e}(),b=a(23),g=a.n(b),N=n.a.createContext(),y=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={authenticatedUser:g.a.getJSON("authenticatedUser")||null},e.signIn=function(){var t=Object(m.a)(u.a.mark((function t(a,r){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.data.getUser(a,r);case 2:return null!==(n=t.sent)&&(n.password=r,e.setState((function(){return{authenticatedUser:n}})),g.a.set("authenticatedUser",JSON.stringify(n),{expires:1})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.signOut=function(){e.setState((function(){return{authenticatedUser:null}})),g.a.remove("authenticatedUser")},e.data=new v,e}return Object(p.a)(a,[{key:"render",value:function(){var e={authenticatedUser:this.state.authenticatedUser,data:this.data,actions:{signIn:this.signIn,signOut:this.signOut}};return n.a.createElement(N.Provider,{value:e},this.props.children)}}]),a}(r.Component),w=N.Consumer;function O(e){return function(t){return n.a.createElement(N.Consumer,null,(function(a){return n.a.createElement(e,Object.assign({},t,{context:a}))}))}}var C=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.context.authenticatedUser;return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",{className:"header--logo"},"Courses"),n.a.createElement("nav",null,e?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"Welcome, ",e.firstName," ",e.lastName),n.a.createElement(i.b,{className:"signout",to:"/signout"},"Sign Out")):n.a.createElement(n.a.Fragment,null,n.a.createElement(i.b,{className:"signup",to:"/signup"},"Sign Up"),n.a.createElement(i.b,{className:"signin",to:"/signin"},"Sign In")))))}}]),a}(n.a.PureComponent),j=function(e){return n.a.createElement("div",{className:"grid-33"},n.a.createElement(i.b,{className:"course--module course--link",to:"/courses/".concat(e.id)},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("h3",{className:"course--title"},e.title)))},x=a(20),k=a.n(x),U=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).returnCourses=function(){k.a.get("".concat(E,"/courses")).then((function(t){e.setState({courses:t.data})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e.state={courses:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.returnCourses()}},{key:"render",value:function(){var e,t=this.state.courses;return t&&t.length>0&&(e=t.map((function(e){return n.a.createElement(j,{title:e.title,key:e.id,id:e.id})}))),n.a.createElement("div",{className:"bounds"},e,n.a.createElement("div",{className:"grid-33"},n.a.createElement(i.b,{className:"course--module course--add--module",to:"/create"},n.a.createElement("h3",{className:"course--add--title"},n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},n.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))}}]),a}(r.Component),T=a(15),A=function(e){var t=e.cancel,a=e.errors,r=e.submit,s=e.submitButtonText,c=e.elements;return n.a.createElement("div",null,n.a.createElement(S,{errors:a}),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r()}},c(),n.a.createElement("div",{className:"pad-bottom"},n.a.createElement("button",{className:"button",type:"submit"},s),n.a.createElement("button",{className:"button button-secondary",onClick:function(e){e.preventDefault(),t()}},"Cancel"))))};function S(e){var t=e.errors,a=null;return t.length&&(a=n.a.createElement("div",null,n.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),n.a.createElement("div",{className:"validation-errors"},n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement("li",{key:t},e)})))))),a}var I=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",errors:[]},e.change=function(t){var a=t.target.name,r=t.target.value;e.setState((function(){return Object(T.a)({},a,r)}))},e.submit=function(){var t=e.props.context,a=e.state,r=a.firstName,n=a.lastName,s=a.emailAddress,c=a.password,i=a.confirmPassword,o={firstName:r,lastName:n,emailAddress:s,password:c,confirmPassword:i};t.data.createUser(o).then((function(a){a.length?e.setState({errors:a}):t.actions.signIn(s,c).then((function(){e.props.history.push("/")}))})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,r=t.lastName,s=t.emailAddress,c=t.password,o=t.confirmPassword,l=t.errors;return n.a.createElement("div",{className:"bounds"},n.a.createElement("div",{className:"grid-33 centered signin"},n.a.createElement("h1",null,"Sign Up"),n.a.createElement(A,{cancel:this.cancel,errors:l,submit:this.submit,submitButtonText:"Sign Up",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{id:"firstName",name:"firstName",type:"text",value:a,onChange:e.change,placeholder:"First Name"}),n.a.createElement("input",{id:"lastName",name:"lastName",type:"text",value:r,onChange:e.change,placeholder:"Last Name"}),n.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",value:s,onChange:e.change,placeholder:"Email Address"}),n.a.createElement("input",{id:"password",name:"password",type:"password",value:c,onChange:e.change,placeholder:"Password"}),n.a.createElement("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:o,onChange:e.change,placeholder:"Confirm Password"}))}}),n.a.createElement("p",null,"Already have a user account? ",n.a.createElement(i.b,{to:"/signin"},"Click here")," to sign in!")))}}]),a}(r.Component),P=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={emailAddress:"",password:"",errors:[]},e.change=function(t){var a=t.target.name,r=t.target.value;e.setState((function(){return Object(T.a)({},a,r)}))},e.submit=function(){var t=e.props.context,a=e.state,r=a.emailAddress,n=a.password,s=(e.props.location.state||{from:{pathname:"/"}}).from;t.actions.signIn(r,n).then((function(t){null===t?e.setState((function(){return{errors:["Unsuccessful sign-in attempt"]}})):e.props.history.push(s)})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.emailAddress,r=t.password,s=t.errors;return n.a.createElement("div",{className:"bounds"},n.a.createElement("div",{className:"grid-33 centered signin"},n.a.createElement("h1",null,"Sign In"),n.a.createElement(A,{cancel:this.cancel,errors:s,submit:this.submit,submitButtonText:"Sign In",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",value:a,onChange:e.change,placeholder:"Email Address"}),n.a.createElement("input",{id:"password",name:"password",type:"password",value:r,onChange:e.change,placeholder:"Password"}))}}),n.a.createElement("p",null,"Don't have a user account? ",n.a.createElement(i.b,{to:"/signup"},"Click here")," to sign up!")))}}]),a}(r.Component),D=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.context.authenticatedUser;return n.a.createElement("div",{className:"actions--bar"},n.a.createElement("div",{className:"bounds"},n.a.createElement("div",{className:"grid-100"},e&&e.userId===this.props.userId?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,n.a.createElement(i.b,{className:"button",to:"/courses/".concat(this.props.id,"/update")},"Update Course"),n.a.createElement(i.b,{className:"button",to:"/courses/".concat(this.props.id,"/delete")},"Delete Course")),n.a.createElement(i.b,{className:"button button-secondary",to:"/"},"Return to List")):n.a.createElement(n.a.Fragment,null,n.a.createElement(i.b,{className:"button button-secondary",to:"/"},"Return to List")))))}}]),a}(n.a.PureComponent),B=a(34),F=a.n(B),L=O(D),M=function(e){return n.a.createElement("div",null,n.a.createElement(L,{userId:e.userId,id:e.id}),n.a.createElement("div",{className:"bounds course--detail"},n.a.createElement("div",{className:"grid-66"},n.a.createElement("div",{className:"course--header"},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("h3",{className:"course--title"},e.title),n.a.createElement("p",null,e.firstName," ",e.lastName)),n.a.createElement("div",{className:"course--description"},n.a.createElement(F.a,{source:e.desc}))),n.a.createElement("div",{className:"grid-25 grid-right"},n.a.createElement("div",{className:"course--stats"},n.a.createElement("ul",{className:"course--stats--list"},n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Estimated Time"),n.a.createElement("h3",null,e.time)),n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Materials Needed"),n.a.createElement("ul",null,n.a.createElement(F.a,{source:e.materials}))))))))},J=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).returnCourseInfo=function(){var t=e.props.match.params;k.a.get("".concat(E,"/courses/").concat(t.id)).then((function(t){e.setState({course:t.data})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e.state={courseInfo:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.returnCourseInfo()}},{key:"render",value:function(){var e=this.state.course;return e?n.a.createElement("div",null,n.a.createElement(M,{title:e.title,key:e.id,id:e.id,firstName:e.User.firstName,lastName:e.User.lastName,desc:e.description,time:e.estimatedTime,materials:e.materialsNeeded,userId:e.userId})):n.a.createElement("div",null,void 0)}}]),a}(r.Component),z=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:[]},e.change=function(t){var a=t.target.name,r=t.target.value;e.setState((function(){return Object(T.a)({},a,r)}))},e.submit=function(){var t=e.props.context,a=e.state,r=a.title,n=a.description,s=a.estimatedTime,c=a.materialsNeeded,i=t.authenticatedUser.emailAddress,o=t.authenticatedUser.password,l={title:r,description:n,estimatedTime:s,materialsNeeded:c,userId:t.authenticatedUser.userId};t.data.createCourse(l,i,o).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/")})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/")},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.title,r=t.description,s=t.estimatedTime,c=t.materialsNeeded,i=t.errors;return n.a.createElement("div",{className:"bounds course--detail"},n.a.createElement("h1",null,"Create Course"),n.a.createElement(A,{cancel:this.cancel,errors:i,submit:this.submit,submitButtonText:"Create Course",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"grid-66"},n.a.createElement("div",{className:"course--header"},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("div",null,n.a.createElement("input",{id:"title",name:"title",type:"text",value:a,onChange:e.change,placeholder:"Course title..."}))),n.a.createElement("div",{className:"course--description"},n.a.createElement("textarea",{id:"description",name:"description",type:"text",value:r,onChange:e.change,placeholder:"Course description..."}))),n.a.createElement("div",{className:"grid-25 grid-right"},n.a.createElement("div",{className:"course--stats"},n.a.createElement("ul",{className:"course--stats--list"},n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Estimated Time"),n.a.createElement("div",null,n.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",value:s,onChange:e.change,className:"course--time--input",placeholder:"Hours"}))),n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Materials Needed"),n.a.createElement("div",null,n.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",type:"text",value:c,onChange:e.change,placeholder:"List materials..."})))))))}}))}}]),a}(r.Component),G=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",id:e.props.match.params.id,errors:[]},e.returnCourseInfo=function(){var t=e.props.match.params;k.a.get("".concat(E,"/courses/").concat(t.id)).then((function(t){e.setState({title:t.data.title,description:t.data.description,estimatedTime:t.data.estimatedTime,materialsNeeded:t.data.materialsNeeded}),console.log(e.setState)})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e.change=function(t){var a=t.target.name,r=t.target.value;e.setState((function(){return Object(T.a)({},a,r)}))},e.submit=function(){var t=e.props.context,a=e.state,r=a.title,n=a.description,s=a.estimatedTime,c=a.materialsNeeded,i=a.id,o=t.authenticatedUser.emailAddress,l=t.authenticatedUser.password,u={title:r,description:n,estimatedTime:s,materialsNeeded:c,id:i,userId:t.authenticatedUser.userId};t.data.UpdateCourse(u,o,l).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/")})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/courses/".concat(e.props.match.params.id))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.returnCourseInfo()}},{key:"render",value:function(){var e=this,t=this.state.errors,a=this.state,r=a.title,s=a.description,c=a.estimatedTime,i=a.materialsNeeded;return console.log(this.state),n.a.createElement("div",{className:"bounds course--detail"},n.a.createElement("h1",null,"Update Course"),n.a.createElement(A,{cancel:this.cancel,errors:t,submit:this.submit,submitButtonText:"Update Course",elements:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"grid-66"},n.a.createElement("div",{className:"course--header"},n.a.createElement("h4",{className:"course--label"},"Course"),n.a.createElement("div",null,n.a.createElement("input",{id:"title",name:"title",type:"text",value:r,onChange:e.change,placeholder:"Course title..."}))),n.a.createElement("div",{className:"course--description"},n.a.createElement("textarea",{id:"description",name:"description",type:"text",value:s,onChange:e.change,placeholder:"Course description..."}))),n.a.createElement("div",{className:"grid-25 grid-right"},n.a.createElement("div",{className:"course--stats"},n.a.createElement("ul",{className:"course--stats--list"},n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Estimated Time"),n.a.createElement("div",null,n.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",value:c,onChange:e.change,className:"course--time--input",placeholder:"Hours"}))),n.a.createElement("li",{className:"course--stats--list--item"},n.a.createElement("h4",null,"Materials Needed"),n.a.createElement("div",null,n.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",type:"text",value:i,onChange:e.change,placeholder:"List materials..."})))))))}}))}}]),a}(r.Component),H=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",estimatedTime:"",materialsNeeded:"",id:e.props.match.params.id,errors:[]},e.submit=function(){var t=e.props.context,a=e.state,r=a.title,n=a.description,s=a.estimatedTime,c=a.materialsNeeded,i=a.id,o=t.authenticatedUser.emailAddress,l=t.authenticatedUser.password,u={title:r,description:n,estimatedTime:s,materialsNeeded:c,id:i,userId:t.authenticatedUser.userId};t.data.DeleteCourse(u,o,l,i).then((function(t){t.length?e.setState({errors:t}):e.props.history.push("/")})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(){e.props.history.push("/courses/".concat(e.props.match.params.id))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",null,"Are you sure you want to delete this course?"),n.a.createElement(A,{cancel:this.cancel,errors:e,submit:this.submit,submitButtonText:"Delete Course",elements:function(){return n.a.createElement("p",null,"This action cannot be reversed!")}}))}}]),a}(r.Component),R=function(){return n.a.createElement("div",{className:"bounds"},n.a.createElement("h1",null,"Error"),n.a.createElement("p",null,"Sorry! We just encountered an unexpected error."))},W=a(53),V=function(e){var t=e.component,a=Object(W.a)(e,["component"]);return n.a.createElement(w,null,(function(e){return n.a.createElement(o.b,Object.assign({},a,{render:function(a){return e.authenticatedUser?n.a.createElement(t,a):n.a.createElement(o.a,{to:{pathname:"/signin",state:{from:a.location}}})}}))}))},q=O(I),K=O(P),Q=O((function(e){var t=e.context;return Object(r.useEffect)((function(){return t.actions.signOut()})),n.a.createElement(o.a,{to:"/"})})),X=O(z),Y=O(G),Z=O(H),$=O(C),_=function(){return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement($,null),n.a.createElement(o.d,null,n.a.createElement(o.b,{exact:!0,path:"/",render:function(){return n.a.createElement(U,null)}}),n.a.createElement(o.b,{path:"/signin",component:K}),n.a.createElement(o.b,{path:"/signup",component:q}),n.a.createElement(o.b,{path:"/signout",component:Q}),n.a.createElement(V,{path:"/create",component:X}),n.a.createElement(V,{path:"/courses/:id/update",component:Y}),n.a.createElement(V,{path:"/courses/:id/delete",component:Z}),n.a.createElement(o.b,{path:"/courses/:id",component:J}),n.a.createElement(o.b,{path:"/error",component:R}))))};c.a.render(n.a.createElement(y,null,n.a.createElement(_,null)),document.getElementById("root"))},54:function(e,t,a){e.exports=a(161)},59:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.e732929e.chunk.js.map