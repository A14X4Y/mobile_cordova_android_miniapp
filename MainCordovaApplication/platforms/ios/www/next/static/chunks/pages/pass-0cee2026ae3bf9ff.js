(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{5288:function(e,t,n){"use strict";n(7294);var r=n(3135),o=n.n(r),i=n(5893);t.Z=function(e){var t=e.icon,n=e.isAction2,r=e.isAction1;return(0,i.jsx)("div",{className:o().promowrapper,children:(0,i.jsxs)("div",{className:o().promo,children:[(0,i.jsx)("img",{className:o().homeIcon,alt:"",src:t}),!(void 0!==r&&r)&&(0,i.jsx)("div",{className:o().wrapper,children:(0,i.jsx)("b",{className:o().b,children:"Заказать пропуск"})}),!(void 0!==n&&n)&&(0,i.jsx)("div",{className:o().container,children:(0,i.jsx)("b",{className:o().b,children:"Открыть ворота"})})]})})}},8032:function(e,t,n){"use strict";n.d(t,{A:function(){return g}});var r=n(5311),o=n.n(r),i=n(5675),s=n.n(i),c=n(1163),a=n(5893),l=function(){var e=(0,c.useRouter)();return(0,a.jsxs)("div",{className:o().backbutton,onClick:e.back,children:[(0,a.jsx)("div",{className:o().rectangle}),(0,a.jsx)(s(),{className:o().vectorIcon,alt:"Назад",src:"./vector.svg",height:17,width:10})]})},u=n(7382),d=n.n(u),p=n(6800),_=n.n(p),f=n(4184),m=n.n(f),h=n(7701),b=function(e){var t=e.showBackButton,n=e.title,r=n.length>12?_().lg:_().xl;return(0,h.a)().signout,(0,a.jsxs)("header",{className:d().titleblock,children:[t&&(0,a.jsx)(l,{}),(0,a.jsx)("div",{className:d().text,children:(0,a.jsx)("div",{className:m()(d().titletext,r),children:n})}),(0,a.jsx)("img",{className:d().notificationicon,alt:"",src:"./notificationicon.svg"}),!1]})},v=n(3751),x=n.n(v);function g(e){var t=e.children,n=e.title,r=e.actionComponents,o=e.showBackButton,i=e.subtitle;return(0,a.jsxs)("div",{className:x().app,children:[(0,a.jsxs)("div",{className:x().page,children:[(0,a.jsx)(b,{showBackButton:void 0!==o&&o,title:void 0===n?"":n}),i&&(0,a.jsx)("div",{className:x().titleDetailsBlock,children:(0,a.jsx)("div",{className:x().subtittle,children:i})}),t]}),r&&(0,a.jsx)("div",{className:x().backgroundAction,children:(0,a.jsx)("div",{className:x().action,children:r})})]})}},9073:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var r=n(9499),o=n(4730),i=n(7212),s=n.n(i),c=n(4184),a=n.n(c),l=n(1664),u=n.n(l),d=n(5893),p=["children","bgColor","isAction","href"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=function(e){var t=e.children,n=e.bgColor,i=e.isAction,c=e.href,l=(0,o.Z)(e,p),_=f({className:a()(s().button,s()[n],(0,r.Z)({},s().action,i))},l);return c?(0,d.jsx)(u(),{href:c,children:(0,d.jsx)("button",f(f({},_),{},{children:t}))}):(0,d.jsx)("button",f(f({},_),{},{children:t}))}},9050:function(e,t,n){"use strict";n.d(t,{r:function(){return p}});var r=n(9499),o=n(7294),i=n(253),s=n.n(i),c=n(4184),a=n.n(c),l=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(e){var t,n,i=e.segments,c=e.activeSegment,u=e.onChange;i=(0,o.useMemo)(function(){return i.map(function(e){return d(d({},e),{},{ref:(0,o.createRef)()})})},[i]);var p=(0,o.useState)(null===(t=i)||void 0===t?void 0:t.map(function(e){return e.value}).indexOf(c)),_=p[0],f=p[1],m=(0,o.useId)(),h=(0,o.useRef)(),b=(0,o.useRef)();(0,o.useEffect)(function(){b.current=!0},[]),(0,o.useEffect)(function(){var e=i[_].ref.current,t=e.offsetWidth,n=e.offsetLeft,r=h.current.style;r.setProperty("--highlight-width","".concat(t,"px")),r.setProperty("--highlight-x-pos","".concat(n,"px"))},[_,u,h,i]);var v=(0,o.useCallback)(function(e,t){f(t),u(e,t)},[u]);return(0,l.jsx)("div",{className:s().controlsContainer,ref:h,children:(0,l.jsx)("div",{className:a()(s().controls,(0,r.Z)({},s().ready,b.current)),children:null===(n=i)||void 0===n?void 0:n.map(function(e,t){var n=e.value,r=e.label,o=e.ref,i="".concat(r).concat(m);return(0,l.jsxs)("div",{className:s().segment,ref:o,children:[(0,l.jsx)("input",{name:"segmented".concat(m),type:"radio",value:n,id:i,onChange:function(){return v(n,t)},checked:t===_}),(0,l.jsx)("label",{htmlFor:i,children:r})]},n)})})})}},5373:function(e,t,n){"use strict";n.d(t,{BR:function(){return u},CX:function(){return l},QV:function(){return i},Qy:function(){return d},id:function(){return p}});var r,o=n(9499),i={CARD:"card",BLUETOOTH:"bluetoothCode",PIN:"code",AUTO:"autoNumber"};i.AUTO,i.BLUETOOTH,i.PIN,i.CARD;var s=[i.CARD,i.BLUETOOTH,i.AUTO],c=[i.CARD,i.BLUETOOTH,i.AUTO],a=[i.PIN],l={PERMANENT:"permanent",TEMPORARY:"temporary",ONCE:"once"},u=[{value:l.TEMPORARY,label:"Временный"},{value:l.PERMANENT,label:"Постоянный"},{value:l.ONCE,label:"Одноразовый"}],d=(r={},(0,o.Z)(r,l.PERMANENT,s),(0,o.Z)(r,l.TEMPORARY,c),(0,o.Z)(r,l.ONCE,a),r),p=[{label:"Выпускается",value:"pending"},{label:"Готов",value:"verified"},{label:"Аннулирован",value:"revoked"}]},2280:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r,o,i=n(9499),s=n(7294),c=n(4730),a=n(5675),l=n.n(a),u=n(9019),d=n.n(u),p=n(1664),_=n.n(p),f=n(5373),m=n(634),h=n.n(m),b=n(5893),v=function(e){var t=e.icon,n=e.title,r=e.subtitle,o=e.expirationDate,i=e.id,s=e.status;return(0,b.jsxs)(_(),{className:d().item,href:"/pass/".concat(i),children:[(0,b.jsx)("div",{className:d().icon,children:(0,b.jsx)(l(),{className:d().unionIcon,alt:"",src:t,width:50,height:33})}),(0,b.jsxs)("div",{className:d().text,children:[(0,b.jsx)("div",{className:d().title,children:n}),(0,b.jsx)("div",{className:d().subtitle,children:r}),o&&(0,b.jsx)("div",{className:d().greenline,children:o}),s&&(0,b.jsx)("div",{className:h().status,children:f.id.find(function(e){return s===e.value}).label})]})]})},x=n(6049),g=n.n(x),j=n(4184),O=n.n(j),N=["id","dateFrom","status","type"],w=function(e,t){var n=t.name,r=t.autoNumber,o=t.comment;switch(e){case f.QV.AUTO:return{title:r,subTitle:o,icon:"./car.svg"};case f.QV.BLUETOOTH:return{title:n,subTitle:"Bluetooth ключ",icon:"./bluetooth1.svg"};case f.QV.PIN:return{title:n,subTitle:"Пропуск по коду",icon:"./vector2.svg"};case f.QV.CARD:return{title:n,subTitle:"Пропуск по карточке",icon:"./vector2.svg"}}},y=function(e){var t=e.passes;return(0,b.jsx)("div",{className:O()(g().passlist,{}),children:0===t.length?(0,b.jsx)("div",{children:"У вас нету ни одного пропуска"}):t.map(function(e){var t=e.id,n=e.dateFrom,r=e.status,o=w(e.type,(0,c.Z)(e,N)),i=o.title,s=o.subTitle,a=o.icon;return(0,b.jsx)(v,{expirationDate:n,status:r,title:i,subtitle:s,icon:a},t)})})},E=n(8032),P=n(9073),T=n(5288),k=n(9050),C=n(3620),A=n(1383),R=(0,n(8806).Ps)(r||(r=(0,A.Z)(["\n  query ($where: PassWhereInput!) {\n    passes(where: $where) {\n      name\n      dateFrom\n      comment\n      code\n      card\n      bluetoothCode\n      autoNumber\n      status\n      type\n    }\n  }\n"]))),B=(o={},(0,i.Z)(o,f.CX.ONCE,{where:{isOneTime:{equals:!0}}}),(0,i.Z)(o,f.CX.PERMANENT,{where:{dateFrom:{equals:null}}}),(0,i.Z)(o,f.CX.TEMPORARY,{where:{AND:[{isOneTime:{equals:!1},dateFrom:{not:null}}]}}),o),I=function(){var e=(0,s.useState)(f.CX.TEMPORARY),t=e[0],n=e[1],r=(0,C.aM)(R,{variables:B[t]}),o=r.data,i=r.loading,c=(0,s.useCallback)(function(e){n(e)},[]);return(0,b.jsxs)(E.A,{actionComponents:(0,b.jsx)(P.z,{href:"/pass/new-pass",children:"Новый пропуск"}),title:"Пропуска",showBackButton:!0,children:[(0,b.jsx)(T.Z,{icon:"./union.svg"}),(0,b.jsx)(k.r,{onChange:c,activeSegment:t,segments:f.BR}),i?(0,b.jsx)("div",{children:"Загрузка..."}):(0,b.jsx)(y,{passType:t,passes:null==o?void 0:o.passes})]})}},615:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pass",function(){return n(2280)}])},5311:function(e){e.exports={rectangle:"back-button_rectangle__xgrOT",vectorIcon:"back-button_vectorIcon__h_Y4k",backbutton:"back-button_backbutton__4k2Sz"}},7382:function(e){e.exports={titletext:"header_titletext__6RBq7",text:"header_text__jhtjf",notificationicon:"header_notificationicon__2swPS",titleblock:"header_titleblock__kme9O"}},9019:function(e){e.exports={unionIcon:"item_unionIcon__T1S0v",icon:"item_icon__eOycm",title:"item_title__xw_be",greenline:"item_greenline__6b8dI",subtitle:"item_subtitle__4SwFp",item:"item_item__x1aJ7",text:"item_text__LwsmW"}},6049:function(e){e.exports={passlist:"pass-list_passlist__BEvo1",space:"pass-list_space__CPILn"}},3135:function(e){e.exports={b:"promo-wrapper_b__Na86k",homeIcon:"promo-wrapper_homeIcon__hAcYo",container:"promo-wrapper_container__sO_mH",wrapper:"promo-wrapper_wrapper__4TMEY",promo:"promo-wrapper_promo__PSeWD",promowrapper:"promo-wrapper_promowrapper__EkIRf"}},6800:function(e){e.exports={lg:"Header_lg__M_XIJ",xl:"Header_xl__vrEB8"}},3751:function(e){e.exports={page:"Layout_page__2LEEK",app:"Layout_app__3iWdi",action:"Layout_action__kDtvQ",backgroundAction:"Layout_backgroundAction__8XTyf",subtittle:"Layout_subtittle___vpyI",titleDetailsBlock:"Layout_titleDetailsBlock__oKfEO"}},7212:function(e){e.exports={button:"Button_button__jcTWZ",orange:"Button_orange__nMRkq",green:"Button_green__nTnkR",action:"Button_action__AJs_V"}},253:function(e){e.exports={selectedItem:"Segmented_selectedItem___p5UN",controlsContainer:"Segmented_controlsContainer__W49wa",controls:"Segmented_controls__aNya5",segment:"Segmented_segment___suZ6",ready:"Segmented_ready__TRnEp"}},634:function(e){e.exports={status:"PassItem_status__6pwVp"}},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[294,664,774,888,179],function(){return e(e.s=615)}),_N_E=e.O()}]);