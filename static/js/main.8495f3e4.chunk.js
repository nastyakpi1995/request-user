(this["webpackJsonprequest-user"]=this["webpackJsonprequest-user"]||[]).push([[0],{51:function(e,n,t){e.exports=t(97)},97:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"requestGetUser",(function(){return X})),t.d(r,"successGetUser",(function(){return ee})),t.d(r,"errorGetUser",(function(){return ne})),t.d(r,"requestUserCreate",(function(){return te})),t.d(r,"successUserCreate",(function(){return re})),t.d(r,"errorUserCreate",(function(){return ae})),t.d(r,"requestUserDelete",(function(){return ce})),t.d(r,"successUserDelete",(function(){return ue})),t.d(r,"errorUserDelete",(function(){return ie})),t.d(r,"requestUserPut",(function(){return oe})),t.d(r,"successUserPut",(function(){return se})),t.d(r,"errorUserPut",(function(){return le})),t.d(r,"setCurrentUser",(function(){return de})),t.d(r,"setCurrentPage",(function(){return pe})),t.d(r,"castErrors",(function(){return fe}));var a=t(0),c=t.n(a),u=t(23),i=t.n(u),o=t(17),s=t(13),l=t(19),d=t(50),p=t(6),f=t.n(p),b=t(9),E={GET_SUCCESS:"@@user/GET_SUCCESS",GET_REQUEST:"@@user/GET_REQUEST",GET_FAIL:"@@user/GET_FAIL",POST_SUCCESS:"@@user/POST_SUCCESS",POST_REQUEST:"@@user/POST_REQUEST",POST_FAIL:"@@user/POST_FAIL",DELETE_SUCCESS:"@@user/DELETE_SUCCESS",DELETE_REQUEST:"@@user/DELETE_REQUEST",DELETE_FAIL:"@@user/DELETE_FAIL",PUT_SUCCESS:"@@user/PUT_SUCCESS",PUT_REQUEST:"@@user/PUT_REQUEST",PUT_FAIL:"@@user/PUT_FAIL",SET_CURRENT_USER:"@@user/SET_CURRENT_USER",SET_CURRENT_PAGE:"@@user/SET_CURRENT_PAGE",CAST_ALL_ERRORS:"@@user/CAST_ALL_ERRORS"},m=t(22),x=t(8),h=t(44),g=t.n(h);function v(e){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(f.a.mark((function e(n){var t,r,a,c=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]&&c[1],r=Object(x.a)({baseURL:"https://cors-anywhere.herokuapp.com/77.120.241.80:8911/",method:"get"},n),e.prev=2,e.next=5,g()(r);case 5:if(a=e.sent,!t){e.next=8;break}return e.abrupt("return",t(a.data));case 8:return e.abrupt("return",a.data);case 11:if(e.prev=11,e.t0=e.catch(2),!e.t0.response){e.next=15;break}throw e.t0.response.data||e.t0.response.statusText;case 15:return e.abrupt("return",Promise.reject(e.t0));case 16:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var S=function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v({url:"/api/users",method:"get"}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v({url:"/api/users",method:"post",data:n}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v({url:"/api/user/".concat(n),method:"delete"}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(f.a.mark((function e(n,t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v({url:"/api/user/".concat(n),method:"put",data:t}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),C=f.a.mark(T),U=f.a.mark(_);function T(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(b.b)(S);case 3:return e=n.sent,n.next=6,Object(b.d)({type:E.GET_SUCCESS,data:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(b.d)({type:E.GET_FAIL,data:n.t0.detail});case 12:case"end":return n.stop()}}),C,null,[[0,8]])}function _(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(E.GET_REQUEST,T);case 2:case"end":return e.stop()}}),U)}var L=f.a.mark(k),P=f.a.mark(R);function k(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)((function(){return j(e.data)}));case 3:return t.next=5,Object(b.b)((function(){return S()}));case 5:return n=t.sent,t.next=8,Object(b.d)({type:E.POST_SUCCESS,data:n});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(b.d)({type:E.POST_FAIL,data:t.t0.errors});case 14:case"end":return t.stop()}}),L,null,[[0,10]])}function R(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(E.POST_REQUEST,k);case 2:case"end":return e.stop()}}),P)}var D=f.a.mark(Q),A=f.a.mark(I);function Q(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)((function(){return w(e.id)}));case 3:return t.next=5,Object(b.b)((function(){return S()}));case 5:return n=t.sent,t.next=8,Object(b.d)({type:E.DELETE_SUCCESS,data:n});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(b.d)({type:E.DELETE_FAIL,data:t.t0.trace});case 14:case"end":return t.stop()}}),D,null,[[0,10]])}function I(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(E.DELETE_REQUEST,Q);case 2:case"end":return e.stop()}}),A)}var F=f.a.mark(z),G=f.a.mark(N);function z(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.b)((function(){return y(e.id,e.data)}));case 3:return t.next=5,Object(b.b)((function(){return S()}));case 5:return n=t.sent,t.next=8,Object(b.d)({type:E.PUT_SUCCESS,data:n});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(b.d)({type:E.PUT_FAIL,data:t.t0.errors});case 14:case"end":return t.stop()}}),F,null,[[0,10]])}function N(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(E.PUT_REQUEST,z);case 2:case"end":return e.stop()}}),G)}var B=f.a.mark(M);function M(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.c)(_),Object(b.c)(R),Object(b.c)(I),Object(b.c)(N)]);case 2:case"end":return e.stop()}}),B)}var q={totalLength:0,perPage:5,endPage:5,pagesQuantity:1,currentPage:1,startRange:0,userData:null,userPutSuccess:!1,userLoading:!1,currentUser:"",userErrors:{name:[],surname:[],desc:[]}},Z=Object(l.c)({getUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case E.GET_REQUEST:return Object(x.a)(Object(x.a)({},e),{},{userLoading:!0,userData:n.data});case E.SET_CURRENT_PAGE:var t=5*n.currentPage;return Object(x.a)(Object(x.a)({},e),{},{endPage:t,currentPage:n.currentPage,pagesQuantity:Math.ceil(e.userData.length/5),startRange:t-5});case E.GET_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{userLoading:!1,userData:n.data,totalLength:n.data.length,pagesQuantity:Math.ceil(n.data.length/5),userErrors:{name:[],surname:[],desc:[]}});case E.GET_FAIL:return Object(x.a)(Object(x.a)({},e),{},{userErrors:n.data,userPutSuccess:!1,userLoading:!1});case E.POST_REQUEST:return Object(x.a)(Object(x.a)({},e),{},{userLoading:!0});case E.POST_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{userPutSuccess:!0,userLoading:!1,userData:n.data,pagesQuantity:Math.ceil(n.data.length/5),userErrors:{name:[],surname:[],desc:[]}});case E.POST_FAIL:return Object(x.a)(Object(x.a)({},e),{},{userErrors:n.data,userPutSuccess:!1,userLoading:!1});case E.DELETE_REQUEST:return Object(x.a)(Object(x.a)({},e),{},{userLoading:!0});case E.DELETE_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{userLoading:!1,userData:n.data,pagesQuantity:Math.ceil(n.data.length/5),startRange:0,endPage:5,userErrors:{name:[],surname:[],desc:[]}});case E.DELETE_FAIL:return Object(x.a)(Object(x.a)({},e),{},{userPutSuccess:!1,userLoading:!1});case E.PUT_REQUEST:return Object(x.a)(Object(x.a)({},e),{},{userLoading:!0});case E.PUT_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{userPutSuccess:!0,userLoading:!1,userData:n.data,pagesQuantity:Math.ceil(n.data.length/5)});case E.PUT_FAIL:return Object(x.a)(Object(x.a)({},e),{},{userPutSuccess:!1,userLoading:!1,userErrors:n.data});case E.SET_CURRENT_USER:return Object(x.a)(Object(x.a)({},e),{},{currentUser:n.id});case E.CAST_ALL_ERRORS:return Object(x.a)(Object(x.a)({},e),{},{userPutSuccess:!1,userErrors:{name:[],surname:[],desc:[]}});default:return e}}}),Y=Object(d.a)(),J=Object(l.e)(Z,Object(l.a)(Y));Y.run(M);var $=J,H=t(11),K=t(45),V=t.n(K),W=t(26),X=function(e){return{type:E.GET_REQUEST,data:e}},ee=function(e){return{type:E.GET_SUCCESS,data:e}},ne=function(e){return{type:E.GET_FAIL,data:e}},te=function(e){return{type:E.POST_REQUEST,data:e}},re=function(e){return{type:E.POST_SUCCESS,data:e}},ae=function(e){return{type:E.POST_FAIL,data:e}},ce=function(e){return{type:E.DELETE_REQUEST,id:e}},ue=function(e){return{type:E.DELETE_SUCCESS,id:e}},ie=function(e){return{type:E.DELETE_FAIL,id:e}},oe=function(e,n){return{type:E.PUT_REQUEST,id:e,data:n}},se=function(e){return{type:E.PUT_SUCCESS,id:e}},le=function(e){return{type:E.PUT_FAIL,id:e}},de=function(e){return{type:E.SET_CURRENT_USER,id:e}},pe=function(e){return{type:E.SET_CURRENT_PAGE,currentPage:e}},fe=function(){return{type:E.CAST_ALL_ERRORS}},be=t(3),Ee=t(4);function me(){var e=Object(be.a)(["\n  font-family: Avenir Next;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n\n  img {\n    margin-right: 10px;\n  }\n"]);return me=function(){return e},e}function xe(){var e=Object(be.a)(["\n  position: relative;\n  width: 70%;\n  justify-content: space-evenly;\n  flex-direction: column;\n  padding: 12px;\n  box-sizing: border-box;\n  h1 {\n    font-family: Avenir Next;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 40px;\n    margin: 0;\n  }\n  h5 {\n   margin: 0;\n  }\n  p {\n     margin: 0;\n  }\n"]);return xe=function(){return e},e}function he(){var e=Object(be.a)(["\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 5px;\n  background: #55595d;\n  text-align: left;\n  box-shadow: 1px 2px 6px 0px #4b3961;\n  align-items: baseline;\n  justify-content: space-between;\n  margin: 15px 30px;\n  display: flex;\n  transition: all 1s ease-out;\n  position: relative;\n  cursor: pointer;\n\n  &:hover {\n    color: #b3ceef;\n    box-shadow: white 2px 1px 42px;\n  }\n"]);return he=function(){return e},e}var ge=Ee.b.div(he()),ve=Ee.b.div(xe()),Oe=Ee.b.span(me());function Se(){var e=Object(be.a)(["\n  appearance: inherit;\n  background: inherit;\n  border: none;\n  margin: 0 auto;\n  height: 100%;\n  outline: none;\n  color: white;\n  max-width: 400px;\n  width: 60px;\n  justify-content: space-around;\n  cursor: pointer;\n\n   \u200b&:hover {\n    fill: red;\n    background: darkgrey !important;\n    transition: background-color .2s, transform .2s;\n  }\n\n  img {\n    overflow: hidden;\n    box-sizing: border-box;\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: block;\n  }\n"]);return Se=function(){return e},e}function je(){var e=Object(be.a)(["\n   justify-content: inherit;\n    display: flex;\n    text-align: start;\n    align-items: flex-start;\n    height: 75px;\n"]);return je=function(){return e},e}function we(){var e=Object(be.a)(["\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    align-items: center;\n"]);return we=function(){return e},e}function ye(){var e=Object(be.a)(["\n  background: inherit;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ye=function(){return e},e}function Ce(){var e=Object(be.a)(["\n  align-items: center;\n  background: ",";\n  color: ",";\n  transition: 0.3s all;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  border-radius: 5px;\n"]);return Ce=function(){return e},e}function Ue(){var e=Object(be.a)(["\n  max-width: 500px;\n  display: flex;\n  justify-content: inherit !important;\n  margin: 0 auto;\n  font-size: 36px;\n  color: white;\n  height: 50px;\n  padding-bottom: 40px;\n\n  a {\n    text-decoration: none;\n      &:hover {\n        height: 40px;\n        background: #3272c0;\n     }\n   }\n"]);return Ue=function(){return e},e}var Te=Ee.b.div(Ue()),_e=Ee.b.button(Ce(),(function(e){return e.isActive?"#fff":"#a3badc"}),(function(e){return e.isActive?"#000":"#a4abb1"})),Le=Ee.b.div(ye()),Pe=Ee.b.div(we()),ke=Ee.b.div(je()),Re=Ee.b.button(Se());function De(){var e=Object(be.a)(["\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.1;\n    color: ",";\n    height: ",";\n    width: ",";\n    position: 'relative';\n    background: ",";\n    border: ",";\n    box-shadow: 1px 18px 12px 1px #5a565f;\n    right: 10px;\n    display: flex;\n    border-radius: 5px;\n    justify-content: center;\n    text-align: -webkit-right;\n    margin: ",";\n    transition: 0.5s all;\n    outline: none;\n    cursor: pointer;\n\n     &[disabled] {\n       background-color: #423f3f;\n       transition: 0.3s all;\n       }\n\n      &[disabled]:hover {\n        background-color: black;\n        transition: 0.3s all;\n       }\n\n      &:hover {\n        color: gray;\n        background: #3272c0;\n      }\n"]);return De=function(){return e},e}function Ae(){var e=Object(be.a)(["\n    height: 100%;\n    align-items: center;\n    display: inline-flex;\n"]);return Ae=function(){return e},e}function Qe(){var e=Object(be.a)(["\n    color: inherit;\n    text-transform: uppercase;\n    font-family: Avenir Next;\n    font-weight: 600;\n    font-size: 12px;\n    margin: ",";\n  "]);return Qe=function(){return e},e}var Ie=Ee.b.div(Ae());function Fe(){var e=Object(be.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n"]);return Fe=function(){return e},e}function Ge(){var e=Object(be.a)(["\n  position: relative;\n  width: 100%;\n  border-radius: 10%;\n  color: white;\n"]);return Ge=function(){return e},e}function ze(){var e=Object(be.a)(["\n  background: #d6cfd6;\n  max-width: 778px;\n  border-radius: 20px;\n  margin: 20px auto;\n\n\n  @media (max-width: 1200px) {\n    max-width: 590px;\n  }\n\n  @media (max-width: 992px)\n    max-width: 100%;\n  }\n"]);return ze=function(){return e},e}function Ne(){var e=Object(be.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Ne=function(){return e},e}function Be(){var e=Object(be.a)(["\n  body {\n    background: #4b4b65;\n  }\n "]);return Be=function(){return e},e}var Me=Object(Ee.a)(Be()),qe=Ee.b.div(Ne()),Ze=Ee.b.div(ze()),Ye=Ee.b.div(Ge()),Je=Ee.b.div(Fe());function $e(){var e=Object(be.a)(["\n\n"]);return $e=function(){return e},e}function He(){var e=Object(be.a)(["\n  left: 30%;\n  top: 12%;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  z-index: 500;\n  padding: 0 40px;\n  background-color: #ebe9e7;\n  width: 564px;\n  height: 616px;\n  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out;\n\n  h1 {\n    color: black;\n    display: flex;\n    justify-content: start;\n    overflow: auto;\n  }\n\n  @media (max-width: 801px) {\n    left: 0;\n    top: 0;\n    width: fit-content;\n  }\n\n  @media (max-width: 1001px) {\n    left: calc(50% - 205px);\n    top: calc(50% - 315px);\n    width: 416px;\n  }\n\n  @media (min-width: 600px) {\n    .Modal {\n      width: 500px;\n      left: calc(50% - 250px);\n    }\n  }\n"]);return He=function(){return e},e}function Ke(){var e=Object(be.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    margin-top: 30px;\n"]);return Ke=function(){return e},e}var Ve=Ee.b.div(Ke()),We=Ee.b.div(He()),Xe=Ee.b.div($e());function en(){var e=Object(be.a)(["\n    color: red;\n"]);return en=function(){return e},e}function nn(){var e=Object(be.a)(["\n   border: 1px solid #fff;\n   border-radius: #000;\n   background-color: #fff;\n   height: 44px;\n   box-shadow: none;\n   color: #000;\n   font-style: normal;\n   font-weight: normal;\n   font-size: 16px;\n   padding: 0px 0px 0px 7px;\n   outline: none;\n   width: 100%;\n   transition: border-color 0.2s, background-color 0.2s,\n   opacity 1;\n   appearance: none;\n"]);return nn=function(){return e},e}var tn=Ee.b.input(nn()),rn=Ee.b.div(en());function an(){var e=Object(be.a)(["\n   max-width: 100%;\n   font-size: 12px;\n   margin-top: 5px;\n   color: red;\n"]);return an=function(){return e},e}function cn(){var e=Object(be.a)(["\n    margin-bottom: 10px;\n"]);return cn=function(){return e},e}function un(){var e=Object(be.a)(["\n   text-transform: uppercase;\n"]);return un=function(){return e},e}var on=Ee.b.p(un()),sn=Ee.b.div(cn()),ln=Ee.b.div(an());function dn(){var e=Object(be.a)(["\n  left: 30%;\n  top: 12%;\n  display: block;\n  justify-content: end;\n  position: fixed;\n  z-index: 500;\n  padding: 0 40px;\n  background-color: #ebe9e7;\n  width: 564px;\n  height: 616px;\n  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  box-sizing: border-box;\n  transition: all 0.3s ease-out;\n\n  h1 {\n    color: black;\n  }\n\n  @media (max-width: 801px) {\n    left: 0;\n    top: 0;\n    width: fit-content;\n  }\n\n  @media (max-width: 1001px) {\n    left: calc(50% - 205px);\n    top: calc(50% - 315px);\n    width: 416px;\n  }\n\n  @media (min-width: 600px) {\n    .Modal {\n      width: 500px;\n      left: calc(50% - 250px);\n    }\n  }\n"]);return dn=function(){return e},e}function pn(){var e=Object(be.a)(["\n  display: flex;\n  margin-top: 20px;\n"]);return pn=function(){return e},e}var fn=Ee.b.div(pn()),bn=Ee.b.div(dn());function En(){var e=Object(be.a)(["\n   margin-right: 5px;\n"]);return En=function(){return e},e}function mn(){var e=Object(be.a)(["\n  color: inherit;\n  text-size: 12px;\n"]);return mn=function(){return e},e}function xn(){var e=Object(be.a)(["\n    align-items: center;\n    display: inline-flex;\n    padding: 7px 10px;\n    border-radius: $borderRadius;\n  "]);return xn=function(){return e},e}var hn=Ee.b.div(xn()),gn=Ee.b.div(mn()),vn=Ee.b.div(En()),On=function(e){var n=e.disabled,t=e.text,r=e.onClick,a=e.color,u=e.type,i=e.margin,o=e.marginText,s=e.width,l=void 0===s?"30%":s,d=e.border,p=e.height,f=e.bgColor,b=e.children,E=function(e){var n=e.color,t=e.height,r=e.width,a=e.bgColor,c=e.border,u=e.margin;return Ee.b.button(De(),n,t,r,a,c,u)}({color:a,height:p,width:l,bgColor:f,border:d,margin:i}),m=function(e){return Ee.b.p(Qe(),e)}(o);return c.a.createElement(E,{disabled:n,onClick:r,type:u},c.a.createElement(Ie,null,c.a.createElement(m,null,t||b)))};On.defaultProps={color:"third",type:"button",height:"md",width:"sm"};var Sn=On,jn=function(e){var n=e.text,t=e.children,r=e.error;return c.a.createElement("div",null,c.a.createElement(sn,null,c.a.createElement(on,null,n)),t,r&&c.a.createElement(ln,null,r))};jn.defaultProps={text:""};var wn=jn,yn=t(49),Cn=function(e){var n=e.children;return c.a.createElement(rn,null,n)};Cn.defaultProps={children:"Your text"};var Un=Cn,Tn=function(e){var n=e.text;return c.a.createElement(hn,null,c.a.createElement(vn,null,c.a.createElement(Un,{color:"secondary",size:"lg"},c.a.createElement(yn.a,null))),c.a.createElement(gn,null,n))},_n=Object(s.b)((function(e){return{userData:e.getUser.userData}}),r)((function(e){var n=e.id,t=e.name,r=e.desc,a=e.surname,u=e.setIsDelete,i=e.setCurrentUser,o=e.castErrors,s=Object(H.e)();return c.a.createElement(ge,null,c.a.createElement(ve,null,c.a.createElement("h1",null,t),c.a.createElement("h5",null,a),c.a.createElement("p",null,r)),c.a.createElement(ke,null,c.a.createElement(Sn,{type:"button",width:"50px",bgColor:"azure",margin:"0 20px 0 0",onClick:function(){return e=n,o(),i(e),void s.push("/createPeople");var e}},c.a.createElement(Oe,null,c.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M12.2174 0.519434L13.4793 1.78142C14.174 2.47622 14.174 3.60273 13.4766 4.30017L4.66324 13.1144L1.34856 13.9462C0.393914 14.1857 -0.185019 13.6029 0.0537574 12.6513L0.885497 9.33627L9.69889 0.522088C10.3951 -0.174178 11.525 -0.172996 12.2174 0.519434ZM5 10.662L3.33836 9L2.55166 9.78673L2 12L4.20318 11.459L5 10.662Z",fill:"black"})))),c.a.createElement(Sn,{type:"button",onClick:function(){u(n)},height:"40px",width:"40px",color:"#fff",bgColor:"#e84141",border:"none"},"x")))})),Ln=Object(s.b)((function(e){return{currentPage:e.getUser.currentPage,pagesQuantity:e.getUser.pagesQuantity}}),r)((function(e){var n=e.currentPage,t=e.setCurrentPage,r=e.pagesQuantity,a=n-1,u=Object(H.e)(),i=function(e){"mine"===e?(t(n-1),u.push("".concat(n-1))):(t(n+1),u.push("".concat(n+1)))};return c.a.createElement(Te,null,c.a.createElement(Sn,{type:"button",height:"100% !important",marginText:"0",bgColor:"#678bb7",onClick:function(){return i("mine")},disabled:1===n},c.a.createElement(Re,null,c.a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L10.4142 12L14.7071 7.70711Z",fill:"#BBBECD"})))),c.a.createElement(Pe,null,n>1&&c.a.createElement(o.b,{to:"1"},c.a.createElement(_e,{onClick:function(){return t(1)},type:"button"},"1")),n>=4&&c.a.createElement(Le,null,"..."),n>=3&&c.a.createElement(o.b,{to:"".concat(a)},c.a.createElement(_e,{onClick:function(){return t(a)},type:"button"},a)),c.a.createElement(o.b,{to:"".concat(n)},c.a.createElement(_e,{type:"button",onClick:function(){return t(n)},isActive:!0},n)),n<r&&c.a.createElement(o.b,{to:"".concat(n+1)},c.a.createElement(_e,{onClick:function(){return t(n+1)},type:"button"},n+1)),n<r-2&&c.a.createElement(Le,null,"\xa0...\xa0"),n<r-1&&c.a.createElement(o.b,{to:"".concat(r)},c.a.createElement(_e,{type:"button",onClick:function(){return t(r)}},r))),c.a.createElement(Sn,{height:"100% !important",type:"button",marginText:"0",disabled:n>=r,onClick:i,bgColor:"#678bb7"},c.a.createElement(Re,null,c.a.createElement("svg",{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292893 11.7071C-0.097631 11.3166 -0.097631 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711Z",fill:"#BBBECD"})))))})),Pn=Object(s.b)((function(e){return{userData:e.getUser.userData,startRange:e.getUser.startRange,endPage:e.getUser.endPage}}),r)((function(e){var n=e.isDelete,t=e.userDelete,r=e.setIsDelete,a=e.handleClickDelete;return c.a.createElement(We,{style:{transform:n?"translateY(0)":"translateY(-100vh)",opacity:n?"1":"0"}},c.a.createElement(Xe,null,c.a.createElement("h1",null,"realy want delete"," ",t[0]&&t[0].name," ?"),c.a.createElement(Ve,null,c.a.createElement(Sn,{type:"button",onClick:function(){return r(!1)},width:"50%",height:"50px",margin:"0 10px 0 0"},"Cansel"),c.a.createElement(Sn,{type:"button",onClick:a,width:"50%",height:"50px"},"delete"))))})),kn=Object(s.b)((function(e){return{userData:e.getUser.userData,startRange:e.getUser.startRange,endPage:e.getUser.endPage}}),r)((function(e){var n,t=e.userData,r=e.requestGetUser,u=e.startRange,i=e.endPage,o=e.requestUserDelete,s=e.setCurrentUser,l=e.castErrors,d=Object(a.useState)(!1),p=Object(W.a)(d,2),f=p[0],b=p[1],E=Object(H.e)();f&&(E.push("/"),n=t.filter((function(e){return e.id===f})));return Object(a.useEffect)((function(){t||r()}),[]),c.a.createElement(Ye,null,f?c.a.createElement(Pn,{isDelete:f,userDelete:n,setIsDelete:b,handleClickDelete:function(){b(!1),o(f)}}):c.a.createElement("div",null,c.a.createElement(Je,null,c.a.createElement(Sn,{type:"button",onClick:function(){l(),s(""),E.push("/createPeople")},width:"150px",bgColor:"#678bb7",color:"#ede4f5"},"Add New Person")),c.a.createElement("div",null,t&&t.slice(u,i).map((function(e){return c.a.createElement(_n,{key:e.id,id:e.id,name:e.name,surname:e.surname,desc:e.desc,setIsDelete:b})}))),c.a.createElement(Ln,null)))})),Rn=t(25),Dn=Object(s.b)((function(e){return{serverErrors:e.getUser.userErrors,currentUser:e.getUser.currentUser,userSuccess:e.getUser.userPutSuccess,userData:e.getUser.userData,userLoading:e.getUser.userLoading}}),r)((function(e){var n=e.requestUserCreate,t=e.requestUserPut,r=e.currentUser,u=e.serverErrors,i=e.userData,o=e.userSuccess,s=e.castErrors,l=r?i.filter((function(e){return e.id===r})):"",d=Object(a.useState)({name:l?l[0].name:"",surname:l?l[0].surname:"",desc:l?l[0].desc:""}),p=Object(W.a)(d,2),f=p[0],b=p[1],E=Object(H.e)(),m=function(){s(),E.push("/")};Object(a.useEffect)((function(){o&&m()}),[o]);var x=function(e){var n=e.target,t=n.name,r=n.value,a=Object(Rn.a)({},t,r.replace(/[^\w]/,""));b({name:void 0!==a.name?a.name:f.name,surname:void 0!==a.surname?a.surname:f.surname,desc:void 0!==a.desc?a.desc:f.desc})};return c.a.createElement(bn,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r?t(+r,f):n(f)}},r?c.a.createElement("h1",null,"Create",f.name):c.a.createElement("h1",null,"create new User"),c.a.createElement(wn,{text:"Name"},c.a.createElement(tn,{placeholder:f.name,value:f.name,onChange:x,name:"name",type:"text"}),u.name?u.name.map((function(e){return c.a.createElement(Tn,{key:e,text:e})})):null),c.a.createElement(wn,{text:"surname"},c.a.createElement(tn,{placeholder:f.surname,value:f.surname,onChange:x,name:"surname",type:"text"}),u.surname?u.surname.map((function(e){return c.a.createElement(Tn,{key:e,text:e})})):null),c.a.createElement(wn,{text:"desc"},c.a.createElement(tn,{placeholder:f.desc,value:f.desc,onChange:x,name:"desc",type:"text"}),u.desc?u.desc.map((function(e){return c.a.createElement(Tn,{key:e,text:e})})):null),c.a.createElement(fn,null,c.a.createElement(Sn,{type:"button",text:"Cancel",margin:"0 10px 0 0",onClick:m}),c.a.createElement(Sn,{type:"submit",text:"Save Changes",disabled:""===f.name}))))})),An=Object(s.b)((function(e){return{userLoading:e.getUser.userLoading}}),r)((function(e){var n=e.userLoading;return c.a.createElement(Ze,null,n?c.a.createElement(qe,null,c.a.createElement(V.a,{type:"Circles",color:"#00BFFF",height:500,width:100})):c.a.createElement(c.a.Fragment,null,c.a.createElement(kn,null),c.a.createElement(H.a,{path:"/createPeople"},c.a.createElement(Dn,null))))}));i.a.render(c.a.createElement(o.a,{basename:""},c.a.createElement(s.a,{store:$},c.a.createElement(Me,null),c.a.createElement(An,null))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8495f3e4.chunk.js.map