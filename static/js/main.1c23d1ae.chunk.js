(this["webpackJsonpcentrum-historii-zajezdnia-web-page"]=this["webpackJsonpcentrum-historii-zajezdnia-web-page"]||[]).push([[0],{101:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(35),s=a.n(i),o=a(7),l=a(8),c=a(9),u=a(10),m=a(200),p=a(15),d=(a(58),a(92),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"GreetingPanel"},r.a.createElement("h1",null,"System do monitorowania parametr\xf3w mikroklimatu w Centrum Historii Zajezdnia."),r.a.createElement(p.b,{to:"/Centrum-Historii-Zajezdnia-Web-Page/login"},r.a.createElement(m.a,{className:"btn",variant:"dark"},"Zaloguj")))}}]),a}(n.Component)),b=(a(97),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"AboutPanel"},r.a.createElement("h3",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero nisl, lobortis porta placerat ac, maximus ac magna. Curabitur dapibus nunc nunc, auctor dignissim elit pharetra at. Pellentesque at ultrices diam. Sed molestie et tellus eget commodo. Suspendisse quis ornare sapien. In hac habitasse platea dictumst. Sed facilisis pretium erat sit amet sagittis. Fusce leo massa, blandit id sapien sit amet, laoreet dignissim sem. Quisque suscipit mattis ultricies. Donec id facilisis metus. Aenean gravida nisl nec est tempus, nec imperdiet dui luctus."))}}]),a}(n.Component)),h=(a(98),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ContactPanel"},r.a.createElement("h3",null,"Vivamus in elit tortor. Mauris efficitur ipsum fermentum nibh aliquet, imperdiet convallis felis gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in turpis non enim lacinia rutrum sed quis nulla. Suspendisse imperdiet ipsum sem, nec lacinia tellus placerat sodales. Ut sagittis risus id diam fringilla, id lacinia felis rhoncus."))}}]),a}(n.Component)),f=a(204),g=a(205),v=(a(99),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(f.a,{expand:"lg",variant:"dark",style:{marginTop:"50px"}},r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto",style:{marginRight:"50px"}},r.a.createElement(p.c,{exact:!0,activeStyle:{borderBottom:"1px solid #ffffff"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/"},"Strona g\u0142\xf3wna"),r.a.createElement(p.c,{activeStyle:{borderBottom:"1px solid #ffffff"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/about"},"O nas"),r.a.createElement(p.c,{activeStyle:{borderBottom:"1px solid #ffffff"},className:"Nav-Link",to:"/Centrum-Historii-Zajezdnia-Web-Page/contact"},"Kontakt")))))}}]),a}(n.Component)),E=a(21),j=a(203),C=a(18),y=(a(101),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={UserLogin:"",UserPassword:"",Message:""},n.UserLogin=n.UserLogin.bind(Object(E.a)(n)),n.UserPassword=n.UserPassword.bind(Object(E.a)(n)),n.login=n.login.bind(Object(E.a)(n)),n}return Object(l.a)(a,[{key:"UserLogin",value:function(e){this.setState({UserLogin:e.target.value})}},{key:"UserPassword",value:function(e){this.setState({UserPassword:e.target.value})}},{key:"login",value:function(e){var t=this;e.preventDefault();try{fetch("https://localhost:44340/api/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({login:this.state.UserLogin,password:this.state.UserPassword})}).then((function(e){return e.json()})).then((function(e){"Error"===e.status?t.setState({Message:"Nie uda\u0142o si\u0119 zalogowa\u0107!"}):"Success"===e.status?t.setState({redirect:!0}):t.setState({Message:"Nie uda\u0142o si\u0119 zalogowa\u0107!"})})).catch((function(e){console.log(e)}))}catch(a){console.log("error"),this.setState({Message:"Nie uda\u0142o si\u0119 zalogowa\u0107!"})}}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(C.a,{push:!0,to:"/Centrum-Historii-Zajezdnia-Web-Page/measurement"}):r.a.createElement("div",{className:"LoginPanel"},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{className:"formLogin"},r.a.createElement(j.a.Label,null,"Podaj login"),r.a.createElement(j.a.Control,{className:"My-Input",onChange:this.UserLogin,type:"text",placeholder:"Login"}),r.a.createElement(j.a.Text,{className:"text-muted"},this.state.Message)),r.a.createElement(j.a.Group,{className:"formPassword"},r.a.createElement(j.a.Label,null,"Podaj has\u0142o"),r.a.createElement(j.a.Control,{className:"My-Input",onChange:this.UserPassword,type:"password",placeholder:"*****"})),r.a.createElement(m.a,{className:"Login-Button",onClick:this.login,variant:"primary"},"Zaloguj")))}}]),a}(n.Component)),k=a(27),O=a.n(k),N=a(55),w=a(201),z=a(202),x=a(84),S=a(85),P=(a(195),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={mesm:[],mesm2:[],currentTemperature:"",chartData1:[],chartData2:[],options:{animation:{easing:"easeOutCubic",duration:1e3},legend:{labels:{fontColor:"rgb(255,255,255,0.6)",fontSize:15}},scales:{yAxes:[{display:!0,gridLines:{color:"rgb(0,0,0,0.1)"},ticks:{fontColor:"rgb(255,255,255,0.6)",beginAtZero:!0,max:40,min:0}}],xAxes:[{gridLines:{color:"rgb(0,0,0,0.1)"},ticks:{fontColor:"rgb(255,255,255,0.78)"}}]}}},n}return Object(l.a)(a,[{key:"setCurrentTemperature",value:function(){this.setState({currentTemperature:21.4})}},{key:"setChartData",value:function(){this.setState({chartData2:{labels:["Stycze\u0144","Luty","Marzec","Kwiecien","Maj","Czerwiec","Lipiec","Sierpien","Wrzesien","Pa\u017cdziernik","Listopad","Grudzie\u0144"],datasets:[{label:"\u015arednia temperatura w danym miesi\u0105cu dla wszystkich czujnik\xf3w",data:[20,21,22,22.3,20,21,22,22.3,20,21,22,22.3],responsive:!0,lineTension:.1,borderCapStyle:"butt",backgroundColor:"transparent",borderColor:"rgba(218, 34, 255)",borderJoinStyle:"miter",pointBorderColor:"rgba(151, 51, 238)",pointBackgroundColor:"#ffffff",pointBorderWidth:10,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10}]}})}},{key:"componentDidMount",value:function(){var e=Object(N.a)(O.a.mark((function e(){var t=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setChartData(),this.setCurrentTemperature(),setInterval(Object(N.a)(O.a.mark((function e(){var a,n,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://localhost:44340/api/measurement");case 3:return a=e.sent,e.next=6,fetch("https://localhost:44340/api/measurement/averageByMonth");case 6:return n=e.sent,e.next=9,a.json();case 9:return r=e.sent,e.next=12,n.json();case 12:i=e.sent,t.setState({mesm:r}),t.setState({mesm2:i}),t.setChartData(),t.setCurrentTemperature(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),500);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(w.a,{className:"myContainer"},r.a.createElement(z.a,{className:"firstRow"},r.a.createElement(x.a,{xs:"4"},r.a.createElement("div",{className:"quantityAll"},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{className:"labelHeader"},"Liczba wszystkich pomiar\xf3w:"),r.a.createElement(j.a.Text,{className:"labelBody"},"114"))))),r.a.createElement(x.a,{xs:"4"},r.a.createElement("div",{className:"currentTemperature"},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{className:"labelHeader"},"Aktualna temperatura:"),r.a.createElement(j.a.Text,{className:"labelBody"},this.state.currentTemperature,"\xb0C"))))),r.a.createElement(x.a,{xs:"4"},r.a.createElement("div",{className:"sourceSensor"},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{className:"labelHeader"},"Czujnik:"),r.a.createElement(j.a.Control,{as:"select",selected:"All",className:"selectSensor"},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Main Hall"),r.a.createElement("option",null,"Small Room"))))))),r.a.createElement(z.a,null,r.a.createElement(x.a,null,r.a.createElement("div",{className:"measurementPanel"},r.a.createElement(S.a,{data:this.state.chartData2,options:this.state.options,width:100,height:50})))))}}]),a}(n.Component)),L=(a(196),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(C.d,null,r.a.createElement(C.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/",exact:!0,component:d}),r.a.createElement(C.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/about",component:b}),r.a.createElement(C.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/contact",component:h}),r.a.createElement(C.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/login",component:y}),r.a.createElement(C.b,{path:"/Centrum-Historii-Zajezdnia-Web-Page/measurement",component:P}))))}}]),a}(n.Component));a(197);s.a.render(r.a.createElement(L,null),document.getElementById("root"))},87:function(e,t,a){e.exports=a(198)},92:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.1c23d1ae.chunk.js.map