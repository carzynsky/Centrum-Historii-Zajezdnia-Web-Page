(this["webpackJsonpcentrum-historii-zajezdnia-web-page"]=this["webpackJsonpcentrum-historii-zajezdnia-web-page"]||[]).push([[0],{102:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),i=a.n(s),l=a(6),o=a(7),c=a(8),u=a(9),m=a(209),d=a(12),p=(a(53),a(102),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"GreetingPanel"},r.a.createElement("h1",null,"System do monitorowania parametr\xf3w mikroklimatu w Centrum Historii Zajezdnia."),r.a.createElement(d.b,{to:"/Centrum-Historii-Zajezdnia-Web-Page/login"},r.a.createElement(m.a,{className:"btn",variant:"dark"},"Zaloguj")))}}]),a}(n.Component)),h=(a(107),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"AboutPanel"},r.a.createElement("h3",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero nisl, lobortis porta placerat ac, maximus ac magna. Curabitur dapibus nunc nunc, auctor dignissim elit pharetra at. Pellentesque at ultrices diam. Sed molestie et tellus eget commodo. Suspendisse quis ornare sapien. In hac habitasse platea dictumst. Sed facilisis pretium erat sit amet sagittis. Fusce leo massa, blandit id sapien sit amet, laoreet dignissim sem. Quisque suscipit mattis ultricies. Donec id facilisis metus. Aenean gravida nisl nec est tempus, nec imperdiet dui luctus."))}}]),a}(n.Component)),b=(a(108),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ContactPanel"},r.a.createElement("h3",null,"Vivamus in elit tortor. Mauris efficitur ipsum fermentum nibh aliquet, imperdiet convallis felis gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in turpis non enim lacinia rutrum sed quis nulla. Suspendisse imperdiet ipsum sem, nec lacinia tellus placerat sodales. Ut sagittis risus id diam fringilla, id lacinia felis rhoncus."))}}]),a}(n.Component)),E=a(216),g=a(215),f=(a(72),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(E.a,{expand:"lg",variant:"dark",style:{marginTop:"50px"}},r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto",style:{marginRight:"50px"}},r.a.createElement(d.c,{exact:!0,activeStyle:{borderBottom:"1px solid rgb(152, 52, 239)"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/"},"Strona g\u0142\xf3wna"),r.a.createElement(d.c,{activeStyle:{borderBottom:"1px solid rgb(152, 52, 239)"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/about"},"O nas"),r.a.createElement(d.c,{activeStyle:{borderBottom:"1px solid rgb(152, 52, 239)"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/contact"},"Kontakt")))))}}]),a}(n.Component)),y=a(11),v=a(214),j=a(28),C=(a(110),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={UserLogin:"",UserPassword:"",Message:""},n.UserLogin=n.UserLogin.bind(Object(y.a)(n)),n.UserPassword=n.UserPassword.bind(Object(y.a)(n)),n.login=n.login.bind(Object(y.a)(n)),n}return Object(o.a)(a,[{key:"UserLogin",value:function(e){this.setState({UserLogin:e.target.value})}},{key:"UserPassword",value:function(e){this.setState({UserPassword:e.target.value})}},{key:"login",value:function(e){var t=this;e.preventDefault();try{fetch("https://localhost:44340/api/users/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({login:this.state.UserLogin,password:this.state.UserPassword})}).then((function(e){return e.json()})).then((function(e){"Error"===e.status?t.setState({Message:"Nie uda\u0142o si\u0119 zalogowa\u0107!"}):"Success"===e.status?t.setState({redirect:e.function}):t.setState({Message:"Nie uda\u0142o si\u0119 zalogowa\u0107!"})})).catch((function(e){console.log(e)}))}catch(a){console.log("error"),this.setState({Message:"Nie uda\u0142o si\u0119 zalogowa\u0107!"})}}},{key:"render",value:function(){return"admin"===this.state.redirect?r.a.createElement(j.a,{push:!0,to:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel"}):"technician"===this.state.redirect?r.a.createElement(j.a,{push:!0,to:"/Centrum-Historii-Zajezdnia-Web-Page/technicianpanel"}):"employee"===this.state.redirect?r.a.createElement(j.a,{push:!0,to:"/Centrum-Historii-Zajezdnia-Web-Page/employeepanel"}):r.a.createElement("div",{className:"LoginPanel"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{className:"formLogin"},r.a.createElement(v.a.Label,null,"Podaj login"),r.a.createElement(v.a.Control,{className:"My-Input",onChange:this.UserLogin,type:"text",placeholder:"Login"}),r.a.createElement(v.a.Text,{className:"text-muted"},this.state.Message)),r.a.createElement(v.a.Group,{className:"formPassword"},r.a.createElement(v.a.Label,null,"Podaj has\u0142o"),r.a.createElement(v.a.Control,{className:"My-Input",onChange:this.UserPassword,type:"password",placeholder:"*****"})),r.a.createElement(m.a,{className:"Login-Button",onClick:this.login,variant:"primary"},"Zaloguj")))}}]),a}(n.Component)),w=a(210),k=a(211),O=a(94),N=(a(36),a(13)),x=a.n(N),U=a(30),S=a(66),L=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentSensorName:"G\u0142\xf3wna hala",currentSensor:"1",currentTemperature:"",currentHumidity:"",numberOfAllMeasurement:"",numberOfMeasurmentToday:"",numberOfMeasurementThisMonth:"",sensors:[],chartTemperatureData:{data:{datasets:[],labels:[]}},chartHumidityData:{data:{datasets:[],labels:[]}},optionsHumidityChart:{animation:{easing:"easeOutCubic",duration:1e3},legend:{labels:{fontColor:"rgb(255,255,255,0.6)",fontSize:15}},scales:{yAxes:[{display:!0,gridLines:{color:"rgb(0,0,0,0.1)"},ticks:{fontColor:"rgb(255,255,255,0.6)",beginAtZero:!0,max:100,min:0}}],xAxes:[{gridLines:{color:"rgb(0,0,0,0.1)"},ticks:{fontColor:"rgb(255,255,255,0.78)"}}]}},optionsTemperatureChart:{animation:{easing:"easeOutCubic",duration:1e3},legend:{labels:{fontColor:"rgb(255,255,255,0.6)",fontSize:15}},scales:{yAxes:[{display:!0,gridLines:{color:"rgb(0,0,0,0.1)"},ticks:{fontColor:"rgb(255,255,255,0.6)",beginAtZero:!0,max:40,min:0}}],xAxes:[{gridLines:{color:"rgb(0,0,0,0.1)"},ticks:{fontColor:"rgb(255,255,255,0.78)"}}]}}},n.currentSensor=n.currentSensor.bind(Object(y.a)(n)),n}return Object(o.a)(a,[{key:"currentSensor",value:function(e){this.state.currentSensor=e.target.value,this.state.currentSensorName=this.state.sensors[e.target.value-1].display,this.fetchingLoopFunction()}},{key:"setCurrentHumidity",value:function(){this.setState({currentHumidity:35})}},{key:"setChartData",value:function(e,t){this.setState({chartTemperatureData:{labels:["Stycze\u0144","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipiec","Sierpien","Wrzesien","Pa\u017cdziernik","Listopad","Grudzie\u0144"],datasets:[{label:"\u015arednia temperatura w danym miesi\u0105cu dla czujnika: "+this.state.currentSensorName,data:e.map((function(e){return e.toFixed(2)})),responsive:!0,lineTension:0,borderCapStyle:"butt",backgroundColor:"transparent",borderColor:"rgba(248, 54, 0, 0.8)",borderJoinStyle:"miter",pointBorderColor:"rgba(254, 140, 0)",pointBackgroundColor:"#ffffff",pointBorderWidth:9,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(75,192,192,1)",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10}]},chartHumidityData:{labels:["Stycze\u0144","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipiec","Sierpien","Wrzesien","Pa\u017cdziernik","Listopad","Grudzie\u0144"],datasets:[{label:"\u015arednia wilgotno\u015b\u0107 powietrza w danym miesi\u0105cu dla czujnika: "+this.state.currentSensorName,data:t.map((function(e){return e.toFixed(2)})),responsive:!0,lineTension:.1,borderCapStyle:"butt",backgroundColor:"rgba(45, 118, 245)",hoverBackgroundColor:"rgb(255, 71, 117)"}]}})}},{key:"fetchingLoopFunction",value:function(){var e=Object(U.a)(x.a.mark((function e(){var t,a,n,r,s,i,l,o,c,u,m,d,p,h;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://localhost:44340/api/measurement/"+this.state.currentSensor+"/averageTemperatureByMonth");case 3:return t=e.sent,e.next=6,fetch("https://localhost:44340/api/measurement/"+this.state.currentSensor+"/averageHumidityByMonth");case 6:return a=e.sent,e.next=9,fetch("https://localhost:44340/api/measurement/"+this.state.currentSensor);case 9:return n=e.sent,e.next=12,fetch("https://localhost:44340/api/sensors");case 12:return r=e.sent,e.next=15,fetch("https://localhost:44340/api/measurement/"+this.state.currentSensor+"/numberOfAllMeasurement");case 15:return s=e.sent,e.next=18,fetch("https://localhost:44340/api/measurement/"+this.state.currentSensor+"/numberOfMeasurementThisMonth");case 18:return i=e.sent,e.next=21,fetch("https://localhost:44340/api/measurement/"+this.state.currentSensor+"/numberOfMeasurementToday");case 21:return l=e.sent,e.next=24,t.json();case 24:return o=e.sent,e.next=27,a.json();case 27:return c=e.sent,e.next=30,n.json();case 30:return u=e.sent,e.next=33,r.json();case 33:return m=e.sent,e.next=36,s.json();case 36:return d=e.sent,e.next=39,i.json();case 39:return p=e.sent,e.next=42,l.json();case 42:h=e.sent,this.setState({currentTemperature:u[u.length-1].temperature,currentHumidity:u[u.length-1].humidity,numberOfAllMeasurement:d,numberOfMeasurementThisMonth:p,numberOfMeasurmentToday:h,sensors:m.map((function(e){return{value:e.id,display:e.sensorName}}))}),this.setChartData(o,c),e.next=50;break;case 47:e.prev=47,e.t0=e.catch(0),console.log(e.t0);case 50:case"end":return e.stop()}}),e,this,[[0,47]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.fetchingLoopFunction(),setInterval((function(){e.fetchingLoopFunction()}),3e4)}},{key:"render",value:function(){return r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(k.a,{className:"firstRow"},r.a.createElement(O.a,{xs:"3"},r.a.createElement("div",{className:"currentTemperature"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{className:"labelHeader"},"Aktualna temperatura:"),r.a.createElement(v.a.Text,{className:"labelBody"},this.state.currentTemperature,"\xb0C"))))),r.a.createElement(O.a,{xs:"3"},r.a.createElement("div",{className:"currentHumidity"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{className:"labelHeader"},"Aktualna wilgotno\u015b\u0107:"),r.a.createElement(v.a.Text,{className:"labelBody"},this.state.currentHumidity,"%"))))),r.a.createElement(O.a,{xs:"2"}),r.a.createElement(O.a,{xs:"4"},r.a.createElement("div",{className:"sourceSensor"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{className:"labelHeader"},"Czujnik:"),r.a.createElement("select",{className:"selectSensor",value:this.state.currentSensor,onChange:this.currentSensor},this.state.sensors.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.display)})))))))),r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"measurementPanel"},r.a.createElement(S.b,{data:this.state.chartTemperatureData,options:this.state.optionsTemperatureChart,width:90,height:50})))),r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("div",{className:"measurementPanel"},r.a.createElement(S.a,{data:this.state.chartHumidityData,options:this.state.optionsHumidityChart,width:90,height:50})))),r.a.createElement(k.a,null,r.a.createElement(O.a,{xs:"4"},r.a.createElement("div",{className:"quantityAll"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{className:"labelHeader"},"Wszystkie pomiary:"),r.a.createElement(v.a.Text,{className:"labelBody"},this.state.numberOfAllMeasurement))))),r.a.createElement(O.a,{xs:"4"},r.a.createElement("div",{className:"quantityAll"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{className:"labelHeader"},"Pomiary w tym miesi\u0105cu:"),r.a.createElement(v.a.Text,{className:"labelBody"},this.state.numberOfMeasurementThisMonth))))),r.a.createElement(O.a,{xs:"4"},r.a.createElement("div",{className:"quantityAll"},r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,{className:"labelHeader"},"Pomiary dzisiaj:"),r.a.createElement(v.a.Text,{className:"labelBody"},this.state.numberOfMeasurmentToday)))))))}}]),a}(n.Component),z=a(212),P=a(213),H=(a(204),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCreateShow=function(){n.setState({showCreateModal:!0})},n.handleCreateClose=function(){n.setState({showCreateModal:!1})},n.handleShow=function(){n.setState({showModal:!0})},n.handleClose=function(){n.setState({showModal:!1})},n.state={showModal:!1,showCreateModal:!1,responseText:"",users:[],userFunctions:[],editUserData:{id:"",login:"",password:"",userFunctionId:"",userFunction:""},createUserData:{login:"",password:"",userFunctionId:""}},n.editUserData=n.editUserData.bind(Object(y.a)(n)),n.Login=n.Login.bind(Object(y.a)(n)),n.Password=n.Password.bind(Object(y.a)(n)),n.UserFunctionId=n.UserFunctionId.bind(Object(y.a)(n)),n.LoginNew=n.LoginNew.bind(Object(y.a)(n)),n.PasswordNew=n.PasswordNew.bind(Object(y.a)(n)),n.UserFunctionIdNew=n.UserFunctionIdNew.bind(Object(y.a)(n)),n.editUser=n.editUser.bind(Object(y.a)(n)),n.deleteUser=n.deleteUser.bind(Object(y.a)(n)),n.getUsers=n.getUsers.bind(Object(y.a)(n)),n.createUser=n.createUser.bind(Object(y.a)(n)),n.getUserFunctions=n.getUserFunctions.bind(Object(y.a)(n)),n}return Object(o.a)(a,[{key:"getUsers",value:function(){var e=Object(U.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:44340/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({users:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserFunctions",value:function(){var e=Object(U.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:44340/api/users/functions");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({userFunctions:a});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getUsers(),this.getUserFunctions()}},{key:"editUserData",value:function(e,t,a,n,r){this.state.editUserData={id:e,login:t,password:a,userFunctionId:n,userFunction:r},this.handleShow()}},{key:"LoginNew",value:function(e){this.state.createUserData.login=e.target.value}},{key:"PasswordNew",value:function(e){this.state.createUserData.password=e.target.value}},{key:"UserFunctionIdNew",value:function(e){this.state.createUserData.userFunctionId=e.target.value}},{key:"Login",value:function(e){this.state.editUserData.login=e.target.value}},{key:"Password",value:function(e){this.state.editUserData.password=e.target.value}},{key:"UserFunctionId",value:function(e){this.state.editUserData.userFunctionId=e.target.value}},{key:"createUser",value:function(){var e=Object(U.a)(x.a.mark((function e(){var t=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.state.createUserData);try{fetch("https://localhost:44340/api/users",{method:"post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:this.state.createUserData.login,password:this.state.createUserData.password,userFunctionId:this.state.createUserData.userFunctionId})}).then((function(e){t.getUsers(),t.handleCreateClose()}))}catch(a){console.log(a)}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(U.a)(x.a.mark((function e(t){var a=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://localhost:44340/api/users/"+t,{method:"delete",header:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){a.getUsers()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"editUser",value:function(){var e=Object(U.a)(x.a.mark((function e(){var t=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://localhost:44340/api/users/"+this.state.editUserData.id,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({id:this.state.editUserData.id,login:this.state.editUserData.login,password:this.state.editUserData.password,userFunctionId:this.state.editUserData.userFunctionId})}).then((function(e){t.getUsers(),t.handleClose()}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.users;return r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("h4",null,"Zarz\u0105dzanie pracownikami w bazie."))),r.a.createElement(k.a,null,r.a.createElement(m.a,{className:"btnEdit",variant:"dark",onClick:this.handleCreateShow},"Dodaj")),r.a.createElement(k.a,null,r.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{marginTop:"20px"}},r.a.createElement("thead",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Login"),r.a.createElement("th",null,"Has\u0142o"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Operacje")),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.login),r.a.createElement("td",null,t.password),r.a.createElement("td",null,t.userFunction.function),r.a.createElement("td",null,r.a.createElement(m.a,{className:"btnEdit",variant:"dark",onClick:e.editUserData.bind(e,t.id,t.login,t.password,t.userFunctionId,t.userFunction.function)},"Edytuj"),r.a.createElement(m.a,{className:"btnDelete",variant:"dark",onClick:e.deleteUser.bind(e,t.id)},"Usu\u0144")))}))))),r.a.createElement(P.a,{show:this.state.showModal,onHide:this.state.handleClose,className:"myModal"},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Title,null,"Edycja danych")),r.a.createElement(P.a.Body,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Id"),r.a.createElement(v.a.Control,{type:"text",disabled:!0,defaultValue:this.state.editUserData.id})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Login"),r.a.createElement(v.a.Control,{type:"text",defaultValue:this.state.editUserData.login,onChange:this.Login})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Has\u0142o"),r.a.createElement(v.a.Control,{type:"text",defaultValue:this.state.editUserData.password,onChange:this.Password})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Funkcja")),r.a.createElement(v.a.Group,null,r.a.createElement("select",{className:"createSelect",onChange:this.UserFunctionId},this.state.userFunctions.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.function)})))))),r.a.createElement(P.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:this.handleClose},"Zamknij"),r.a.createElement(m.a,{variant:"primary",onClick:this.editUser},"Zatwierd\u017a"))),r.a.createElement(P.a,{show:this.state.showCreateModal,onHide:this.state.handleCreateClose,className:"myModal"},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Title,null,"Dodawanie u\u017cytkownika")),r.a.createElement(P.a.Body,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Login"),r.a.createElement(v.a.Control,{type:"text",onChange:this.LoginNew})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Has\u0142o"),r.a.createElement(v.a.Control,{type:"text",onChange:this.PasswordNew})),r.a.createElement(v.a.Group,null,r.a.createElement(v.a.Label,null,"Funkcja")),r.a.createElement(v.a.Group,null,r.a.createElement("select",{className:"createSelect",onChange:this.UserFunctionIdNew},this.state.userFunctions.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.function)})))))),r.a.createElement(P.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:this.handleCreateClose},"Zamknij"),r.a.createElement(m.a,{variant:"primary",onClick:this.createUser},"Dodaj"))))}}]),a}(n.Component)),M=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,"Sprawdzenie serwera.")))}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(E.a,{expand:"lg",variant:"dark",style:{marginTop:"30px"}},r.a.createElement(g.a,{className:"mr-auto"},r.a.createElement(d.c,{exact:!0,activeStyle:{borderBottom:"2px solid rgb(152, 52, 239)"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel"},"Pomiary"),r.a.createElement(d.c,{activeStyle:{borderBottom:"2px solid rgb(152, 52, 239)"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/users-management"},"Zarz\u0105dzaj"),r.a.createElement(d.c,{activeStyle:{borderBottom:"2px solid rgb(152, 52, 239)"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/server"},"Serwer"))))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("h1",null,"Panel administratora"))),r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(D,null)))),r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel",exact:!0,component:L}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/users-management",component:H}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel/server",component:M}))))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("h1",null,"Panel pracownika"))),r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(d.b,{to:"/Centrum-Historii-Zajezdnia-Web-Page/login"},r.a.createElement(m.a,{className:"Login-Button2",variant:"primary"},"Wyloguj"))))),r.a.createElement(L,null))}}]),a}(n.Component),Z=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement("h1",null,"Panel technika"))),r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(d.b,{to:"/Centrum-Historii-Zajezdnia-Web-Page/login"},r.a.createElement(m.a,{className:"Login-Button2",variant:"primary"},"Wyloguj")))),r.a.createElement(k.a,null,r.a.createElement(O.a,null,"TODO")))}}]),a}(n.Component),W=(a(205),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(f,null),r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/",exact:!0,component:p}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/about",component:h}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/contact",component:b}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/login",component:C}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/admin-panel",component:F}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/employeepanel",component:T}),r.a.createElement(j.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/technicianpanel",component:Z})))}}]),a}(n.Component));a(206);i.a.render(r.a.createElement(W,null),document.getElementById("root"))},36:function(e,t,a){},72:function(e,t,a){},97:function(e,t,a){e.exports=a(207)}},[[97,1,2]]]);
//# sourceMappingURL=main.b4aa5986.chunk.js.map