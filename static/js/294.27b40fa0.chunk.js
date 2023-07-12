"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[294],{32294:function(o,e,t){t.r(e),t.d(e,{default:function(){return io}});var r=t(29439),n=t(64554),a=t(1413),l=t(20890),i=t(36151),d=t(99259),s=t(13400),x=t(72791),c=t(79348),p=t(80184);function u(o){var e=o.btnList,t=void 0!==e&&e,r=o.openModal,n=o.mode;return!0===t?(0,p.jsxs)(i.Z,{onClick:r,sx:(0,a.Z)((0,a.Z)({},f.btnAdd),{},{backgroundColor:"light"===n?"#3E85F3":"#E3F3FF",color:"light"===n?"#FFF":"#111"}),children:[" ",(0,p.jsx)(d.Z,{sx:f.iconAdd,stroke:"light"===n?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#add")})}),(0,p.jsx)("p",{children:"Add task"})," "]}):(0,p.jsx)(s.Z,{onClick:r,"aria-label":"delete",sx:{color:"light"===n?"#21222C":"#FFFFFF"},children:(0,p.jsx)(d.Z,{sx:f.iconAdd,stroke:"light"===n?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#plus-circle")})})})}var f={iconAdd:{width:{xs:"22px",md:"24px"},height:{xs:"22px",md:"24px"}},btnAdd:{width:"100%",height:"48px",borderRadius:"8px",border:"dashed #3E85F3 2px",textTransform:"none",color:"#FFF",textAlign:"center",fontFamily:"Inter",fontSize:"14px",fontStyle:"normal",fontWeight:"600",lineHeight:"18px",display:"flex",gap:"8px"}},g=t(90493),h=t(15021),F=t(93044),m=t(59434),C=t(58427),b=t(54164),k=t(73590),Z=t(59692),y=document.querySelector("#modal-root"),j=function(o){var e=o.children,t=o.closeModal,r=o.mode;(0,x.useEffect)((function(){var o=function(o){"Escape"===o.code&&t()};return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[t]);return(0,b.createPortal)((0,p.jsx)(k.Z,{open:!0,onClose:function(o){o.target===o.currentTarget&&t()},disablePortal:!0,children:(0,p.jsxs)(n.Z,{sx:{position:"absolute",boxShadow:"0px 4px 16px rgba(17, 17, 17, 0.1)",borderRadius:"8px",maxWidth:"95%",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[(0,p.jsx)(s.Z,{onClick:t,sx:{position:"absolute",top:"14px",right:"14px",transition:"all 250ms",cursor:"pointner",width:{xs:"20px",md:"24px"},height:{xs:"20px",md:"24px"},padding:0,color:"dark"!==r?Z.a.iconColor:Z.D.mainTextColor},children:(0,p.jsx)(d.Z,{stroke:"currentColor",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#close")})})}),e]})}),y)},w=t(15861),v=t(4942),B=t(45987),D=t(64687),S=t.n(D),T=t(55705),I=t(76098),M=t(10765),E=t(85523),z=t(50097),U=t(11686),A=t(97892),W=t.n(A),L=["_id","status"],H=function(o){var e=o.closeModal,t=o.date,s=o.currentTask,u=o.category,f=o.editingTask,g=o.mode,h={title:"",start:"09:00",end:"09:30",priority:"low",category:u,date:W()(new Date(t)).format("YYYY-MM-DD")},F=(0,x.useState)(h),b=(0,r.Z)(F,2),k=b[0],y=b[1],j=(0,x.useState)("create"),D=(0,r.Z)(j,2),A=D[0],H=D[1],R=(0,m.I0)();(0,x.useEffect)((function(){if(null!==s){var o=s._id,e=s.status,t=(0,B.Z)(s,L);o&&(y(t),H(e))}}),[s]);var P=function(o){var e=o.target,t=e.name,r=e.value;y((function(o){return(0,a.Z)((0,a.Z)({},o),{},(0,v.Z)({},t,r))}))},Y=function(){var o=(0,w.Z)(S().mark((function o(t){var r;return S().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.preventDefault(),""!==k.title){o.next=4;break}return U.Notify.failure("Fill tasks title"),o.abrupt("return");case 4:if(!(k.start>k.end)){o.next=9;break}return U.Notify.failure("Start time must be later than end time"),o.abrupt("return");case 9:"edit"===A?(r=s._id,R((0,C.xJ)((0,a.Z)({_id:r},k)))):R((0,C.gI)(k));case 10:e();case 11:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}();return(0,p.jsx)(T.J9,{initialValues:h,children:(0,p.jsx)(T.l0,{onSubmit:Y,children:(0,p.jsxs)(n.Z,{sx:{padding:{xs:"48px 18px 40px",md:"40px 28px",lg:"40px 28px"}},children:[(0,p.jsxs)("label",{children:[(0,p.jsx)(l.Z,{sx:{color:"dark"!==g?Z.a.labelColor:Z.D.secondaryTextColor,fontSize:"12px",fontWeight:"500",lineHeight:"1.16",textAlign:"start",marginBottom:"8px"},children:"Title"}),(0,p.jsx)(T.gN,{placeholder:"Enter text",name:"title",type:"text",onChange:P,value:k.title,as:I.ZP,sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"dark"!==g?Z.a.popUpInputTextColor:Z.D.popUpInputTextColor,border:"1px solid ".concat("dark"!==g?Z.a.inputBorderColor:"rgba(17, 17, 17, 0.15)"," "),borderRadius:"8px",padding:"8px 18px 7px 18px",marginBottom:{xs:"16px",md:"18px",lg:"18px"},backgroundColor:"dark"!==g?Z.a.popUpInputBgrColor:Z.D.inputFieldColor}})]}),(0,p.jsxs)(n.Z,{sx:{display:"flex",gap:"14px",marginBottom:{xs:"16px",md:"28px",lg:"28px"}},children:[(0,p.jsx)(n.Z,{sx:{flexGrow:1},children:(0,p.jsxs)("label",{children:[(0,p.jsx)(l.Z,{sx:{color:"dark"!==g?Z.a.labelColor:Z.D.secondaryTextColor,fontSize:"12px",fontWeight:"500",lineHeight:"1.16",textAlign:"start",marginBottom:"8px"},children:"Start"}),(0,p.jsx)(T.gN,{placeholder:"Enter text",name:"start",value:k.start,type:"time",onChange:P,as:I.ZP,sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"dark"!==g?Z.a.popUpInputTextColor:Z.D.popUpInputTextColor,fill:"dark"!==g?Z.a.popUpInputTextColor:Z.D.popUpInputTextColor,border:"1px solid ".concat("dark"!==g?Z.a.inputBorderColor:"rgba(17, 17, 17, 0.15)"," "),borderRadius:"8px",padding:"8px 18px 7px 18px",lineHeight:"1.28",backgroundColor:"dark"!==g?Z.a.popUpInputBgrColor:Z.D.inputFieldColor}})]})}),(0,p.jsx)(n.Z,{sx:{flexGrow:1},children:(0,p.jsxs)("label",{children:[(0,p.jsx)(l.Z,{sx:{color:"dark"!==g?Z.a.labelColor:Z.D.secondaryTextColor,fontSize:"12px",fontWeight:"500",lineHeight:"1.16",textAlign:"start",marginBottom:"8px"},children:"End"}),(0,p.jsx)(T.gN,{placeholder:"Enter text",name:"end",value:k.end,type:"time",onChange:P,as:I.ZP,sx:{width:"100%",fontSize:"14px",fontWeight:600,color:"dark"!==g?Z.a.popUpInputTextColor:Z.D.popUpInputTextColor,border:"1px solid ".concat("dark"!==g?Z.a.inputBorderColor:"rgba(17, 17, 17, 0.15)"," "),borderRadius:"8px",padding:"8px 18px 7px 18px",lineHeight:"1.28",backgroundColor:"dark"!==g?Z.a.popUpInputBgrColor:Z.D.inputFieldColor}})]})})]}),(0,p.jsxs)(M.Z,{onChange:P,value:k.priority,name:"priority",sx:{flexDirection:"row",flexWrap:"nowrap",justifyContent:"start",gap:"16px",marginBottom:"32px",height:{xs:"14px",md:"18px",lg:"18px"}},children:[(0,p.jsx)(E.Z,{label:"Low",value:"low",sx:{fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:"14px",color:"dark"!==g?Z.a.inputFieldTextColor:Z.D.popUpLabelTextColor},control:(0,p.jsx)(z.Z,{sx:{color:Z.D.taskLowColor,"& .MuiSvgIcon-root":{fontSize:14},"&.Mui-checked":{color:Z.D.taskLowColor}}})}),(0,p.jsx)(E.Z,{label:"Medium",value:"medium",sx:{fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:"14px",color:"dark"!==g?Z.a.inputFieldTextColor:Z.D.popUpLabelTextColor},control:(0,p.jsx)(z.Z,{sx:{color:Z.D.taskMedColor,"& .MuiSvgIcon-root":{fontSize:14,padding:"0px"},"&.Mui-checked":{color:Z.D.taskMedColor}}})}),(0,p.jsx)(E.Z,{label:"High",value:"high",sx:{fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:"14px",color:"dark"!==g?Z.a.inputFieldTextColor:Z.D.popUpLabelTextColor},control:(0,p.jsx)(z.Z,{sx:{color:Z.D.taskHighColor,"& .MuiSvgIcon-root":{fontSize:14},"&.Mui-checked":{color:Z.D.taskHighColor}}})})]}),(0,p.jsxs)(n.Z,{sx:{height:{xs:"42px",md:"48px",lg:"48px"},display:"flex",gap:"14px"},children:[f?(0,p.jsxs)(i.Z,{variant:"contained",type:"submit",sx:{height:"100%",flexGrow:"1",backgroundColor:Z.D.accentBackgroundColor,boxShadow:"none",gap:"8px",borderRadius:"8px",textTransform:"none",fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:"14px"},children:[(0,p.jsx)(d.Z,{stroke:"currentColor",sx:{width:{xs:"18px",md:"20px",lg:"20px"},height:{xs:"18px",md:"20px",lg:"20px"},fill:"#3E85F3;"},children:(0,p.jsx)("use",{href:"".concat(c.Z,"#pencil")})}),"Edit"]}):(0,p.jsxs)(i.Z,{variant:"contained",type:"submit",sx:{height:"100%",flexGrow:"1",backgroundColor:Z.D.accentBackgroundColor,boxShadow:"none",gap:"8px",borderRadius:"8px",textTransform:"none",fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:"14px"},children:[(0,p.jsx)(d.Z,{stroke:"currentColor",sx:{width:{xs:"18px",md:"20px",lg:"20px"},height:{xs:"18px",md:"20px",lg:"20px"},fill:"#3E85F3;"},children:(0,p.jsx)("use",{href:"".concat(c.Z,"#add")})}),"Add"]}),(0,p.jsx)(i.Z,{variant:"contained",onClick:e,sx:{height:"100%",width:"144px",borderRadius:"8px",backgroundColor:Z.D.taskCancelColor,color:Z.D.mainTextColor,boxShadow:"none",textTransform:"none",fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:"14px"},children:"Cancel"})]})]})})})},R=t(57689),P=function(o){var e=o.closeModal,t=o.currentTask,l=o.date,i=o.category,d=o.editingTask,s=o.mode,c=(0,x.useState)(null),u=(0,r.Z)(c,2),f=u[0],g=u[1],h=(0,R.UO)().currentDay;return(0,x.useEffect)((function(){t._id?g((0,a.Z)((0,a.Z)({},t),{},{status:"edit"})):i?g({title:"",date:h,start:"00:00",end:"00:00",priority:"low",category:i,statusOperation:"create"}):e()}),[e,t,h,i]),(0,p.jsx)(j,{closeModal:e,mode:s,children:(0,p.jsx)(n.Z,{sx:{borderRadius:"8px",border:"dark"===s&&"1px solid rgba(220, 227, 229, 0.8)",boxShadow:"dark"!==s?"0px 4px 57px 0px rgba(17, 17, 17, 0.05)":"0px 4px 16px rgba(17, 17, 17, 0.1)",backgroundColor:"dark"!==s?Z.a.popUpBackGroundColor:Z.D.mainBackgroundColor,width:{xs:"100%",md:"396px",lg:"396px"},height:{xs:"100%",md:"360px",lg:"360px"},padding:0},children:(0,p.jsx)(H,{date:l,category:i||"to-do",currentTask:f,closeModal:e,editingTask:d,mode:s})})})};function Y(o){var e=o.todo,t=o.mode,r=(0,m.I0)();return(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},G.miniModal),{},{backgroundColor:"light"===t?"#171820":"#FFFFFF",boxShadow:"0px 4px 16px 0px rgba(17, 17, 17, 0.10)",border:"light"===t?"1px solid rgba(255, 255, 255, 0.15)":"none"}),id:"modal",children:[(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},G.btnMiniModal),{},{display:"to-do"===e.category?"none":"flex",color:"light"===t?"white":"black"}),onClick:function(){return r((0,C.xJ)((0,a.Z)((0,a.Z)({},e),{},{category:"to-do"})))},children:["To do",(0,p.jsx)(d.Z,{sx:G.iconButton,stroke:"light"===t?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})]}),(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},G.btnMiniModal),{},{display:"in-progress"===e.category?"none":"flex",color:"light"===t?"white":"black"}),onClick:function(){return r((0,C.xJ)((0,a.Z)((0,a.Z)({},e),{},{category:"in-progress"})))},children:["In progress",(0,p.jsx)(d.Z,{sx:G.iconButton,stroke:"light"===t?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})]}),(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},G.btnMiniModal),{},{display:"done"===e.category?"none":"flex",color:"light"===t?"white":"black"}),onClick:function(){return r((0,C.xJ)((0,a.Z)((0,a.Z)({},e),{},{category:"done"})))},children:["Done",(0,p.jsx)(d.Z,{sx:G.iconButton,stroke:"light"===t?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})]})]})}function _(o){var e=o.todo,t=o.mode,n=(0,m.I0)(),l=(0,x.useState)(!1),i=(0,r.Z)(l,2),u=i[0],f=i[1],F=(0,x.useState)(!1),b=(0,r.Z)(F,2),k=b[0],Z=b[1],y=(0,x.useState)(!1),j=(0,r.Z)(y,2),w=j[0],v=j[1];return(0,p.jsxs)(g.Z,{sx:G.taskMenu,children:[(0,p.jsxs)(h.ZP,{sx:{padding:"0",position:{xs:"static",md:"relative"}},children:[(0,p.jsx)(s.Z,{"aria-label":"drag",sx:G.btnMenu,onClick:function(){return f((function(o){return!o}))},children:(0,p.jsx)(d.Z,{sx:(0,a.Z)((0,a.Z)({},G.iconButton),{},{stroke:!0===u?"#3E85F3":"light"===t?"#FFFFFF":"#111111"}),children:(0,p.jsx)("use",{href:"".concat(c.Z,"#arrow-circle")})})}),u&&(0,p.jsx)(Y,{todo:e,mode:t})]}),(0,p.jsxs)(h.ZP,{sx:{padding:"0"},children:[(0,p.jsx)(s.Z,{"aria-label":"edit",sx:G.btnMenu,onClick:function(){Z(!0),v(!0)},children:(0,p.jsx)(d.Z,{sx:G.iconButton,stroke:"light"===t?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#pencil")})})}),k&&(0,p.jsx)(P,{currentTask:e,closeModal:function(){Z(!1)},editingTask:w,mode:t})]}),(0,p.jsx)(h.ZP,{sx:{padding:"0"},children:(0,p.jsx)(s.Z,{"aria-label":"delete",sx:G.btnMenu,onClick:function(){return n((0,C._5)(e._id))},children:(0,p.jsx)(d.Z,{sx:G.iconButton,stroke:"light"===t?"#FFFFFF":"#111111",children:(0,p.jsx)("use",{href:"".concat(c.Z,"#trash")})})})})]})}var G={taskMenu:{maxWidth:360,display:"flex",padding:"0",gap:"10px"},btnMenu:{padding:"0","&:hover, &:focus":{"& svg":{stroke:"#3E85F3"}}},iconButton:{width:{xs:"14px",md:"16px"},height:{xs:"14px",md:"16px"},color:"transparent"},miniModal:{display:"flex",flexDirection:"column",gap:"14px",position:"absolute",left:{xs:"-38px",md:"-64px"},bottom:"-10px",padding:{xs:"14px",md:"20px 24px"},boxSizing:"border-box",width:{xs:"115px",md:"148px"},height:{xs:"70px",md:"90px"},bgcolor:"#FFFFFF",borderRadius:"8px",transform:"translateY(100%)",zIndex:"1000"},btnMiniModal:{height:{xs:"14px",md:"18px"},color:"#343434",fontSize:"14px",fontFamily:"Inter",fontStyle:"normal",fontWeight:"500",lineHeight:"18px",display:"flex",alignItems:"center",justifyContent:"space-between","&:hover, &:focus":{color:" #3E85F3","& svg":{stroke:"#3E85F3"},cursor:"pointer"}}},N=t(84217);function J(o){var e=o.todo,t=o.mode,r=(0,m.v9)(N.dy);return(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},$.taskBox),{},{bgcolor:"light"===t?"#171820":"#F7F6F9"}),children:[(0,p.jsx)(l.Z,{sx:(0,a.Z)((0,a.Z)({},$.text),{},{color:"light"===t?"#FFF":"#111111"}),children:e.title}),(0,p.jsxs)(n.Z,{sx:$.flexBox,children:[(0,p.jsxs)(n.Z,{sx:$.avatarBox,children:[(0,p.jsx)(F.Z,{src:r.avatarURL||"",sx:$.avatar}),(0,p.jsx)(n.Z,{sx:(0,a.Z)((0,a.Z)({},$.priorityLabel),{},{backgroundColor:"low"===e.priority?"#72C2F8":"medium"===e.priority?"#F3B249":"#EA3D65"}),children:e.priority})]}),(0,p.jsx)(_,{todo:e,mode:t})]})]})}var $={flexBox:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},text:{textOverflow:"ellipsis",width:"100%",whiteSpace:"nowrap",marginBottom:"28px",overflow:"hidden",color:"#FFF",whitespace:"nowrap",fontFamily:"Inter",fontSize:"14px",fontStyle:"normal",fontWeight:"500",lineHeight:"18px"},taskBox:{padding:"15px",boxSizing:"border-box",bgcolor:"#F7F6F9",minWidth:"100%",maxWidth:"100%",borderRadius:"8px",position:"relative"},avatarBox:{display:"flex",gap:"10px",justifyContent:"flex-start",alignItems:"flex-end"},avatar:{border:"1.8px solid #3E85F3",width:{xs:"32px",md:"44px"},height:{xs:"32px",md:"44px"}},priorityLabel:{paddingInline:"15px",height:"20px",borderRadius:"4px",lineHeight:"1.2",fontSize:"10px",color:"#F7F6F9",display:"flex",alignItems:"center"}};function O(o){var e=o.todos,t=o.mode,r={marginBottom:""};return 0===e.length?r.marginBottom="0px":r.marginBottom="32px",(0,p.jsx)(g.Z,{sx:(0,a.Z)((0,a.Z)({},q.list),r),children:e.map((function(o){return(0,p.jsx)(h.ZP,{sx:q.item,children:(0,p.jsx)(J,{todo:o,mode:t})},o._id)}))})}var q={list:{boxSizing:"border-box",display:"flex",width:"100%",maxHeight:"400px",flexDirection:"column",alignItems:"flex-start",gap:"18px",padding:"0",paddingInline:"21px",overflowY:"auto"},item:{padding:"0","&:last-child":{marginBottom:{xs:"28px",md:0}},"&:last-child #modal":{top:0,transform:"translateY(-110%)"}}};function V(o){var e=o.title,t=o.todos,i=o.date,d=o.category,s=o.mode,c=(0,x.useState)(!1),f=(0,r.Z)(c,2),g=f[0],h=f[1],F=function(){h(!0)},m={marginBottom:"28px"};return 0===t.length?m.marginBottom={xs:"64px",md:"28px"}:m.marginBottom="28px",(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},X.listTodos),{},{bgcolor:"light"===s?"#21222C":"#FFFFFF"}),children:[(0,p.jsxs)(n.Z,{sx:(0,a.Z)((0,a.Z)({},X.addPanel),m),children:[(0,p.jsx)(l.Z,{sx:(0,a.Z)((0,a.Z)({},X.titleText),{},{color:"light"===s?"#FFF":"#111"}),children:e}),(0,p.jsx)(u,{openModal:F,mode:s})]}),(0,p.jsx)(O,{todos:t,mode:s}),(0,p.jsx)(n.Z,{sx:X.btnAdd,children:(0,p.jsx)(u,{btnList:!0,openModal:F,mode:s})}),g&&(0,p.jsx)(P,{currentTask:t,date:i,category:d,closeModal:function(){h(!1)},mode:s})]})}var X={btnAdd:{width:{xs:"calc(100% - 36px)",md:"100%"},position:{xs:"absolute",md:"static"},bottom:"10px",left:"18px",boxSizing:"border-box",paddingInline:{md:"21px"}},addPanel:{paddingInline:"21px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"28px"},listTodos:{boxSizing:"border-box",mt:"15px",maxWidth:{xs:"calc(100%)",md:"calc((100% - 16px) / 2)",lg:"calc((100% - 54px) / 3)"},minWidth:{xs:"calc(100%)",md:"calc((100% - 16px) / 2)",lg:"calc((100% - 54px) / 3)"},display:"flex",flexDirection:"column",justifyContent:"flex-start",height:"100%",backgroundColor:"#FFFFFF",borderRadius:"8px",scrollSnapAlign:"center",alignItems:"space-between",position:"relative",padding:"18px 0 22px 0"},titleText:{color:" #111",textAlign:"center",fontFamily:"Inter",fontSize:"20px",fontStyle:"normal",fontWeight:"700",lineHeight:" 24px"}},K=t(92553);function Q(o){var e=o.value,t=o.weekend,r=o.mode,a=(0,m.v9)(K.Uq).tasks,l=new Date(t[e].date).getDate(),i=new Date(t[e].date);if(a){var d=a.filter((function(o){var e=o.date;return new Date(e).getDate()===l}));return(0,p.jsxs)(n.Z,{sx:oo.taskPanel,children:[(0,p.jsx)(V,{title:"To do",category:"to-do",date:i,mode:r,todos:d.filter((function(o){return"to-do"===o.category}))}),(0,p.jsx)(V,{title:"In progress",category:"in-progress",date:i,mode:r,todos:d.filter((function(o){return"in-progress"===o.category}))}),(0,p.jsx)(V,{title:"Done",category:"done",date:i,mode:r,todos:d.filter((function(o){return"done"===o.category}))})]})}}var oo={taskPanel:{scrollbarColor:"black",display:"flex  ",overflowX:{xs:"scroll",mb:"scroll",lg:"auto"},scrollSnapType:"x mandatory",width:{xs:"calc(100vw - 40px)",md:"calc(100vw - 64px)",lg:"calc(100%)"},gap:{xs:"20px",md:"16px",lg:"27px"},boxSizing:"border-box",paddingBottom:"46px",maxHeight:{md:"100%",lg:"100%"}}},eo=t(25228),to=t(43896),ro=t(54334),no=t.n(ro);function ao(o){var e=o.value,t=o.handleChange,r=o.weekend,l=o.mode;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(eo.Z,{value:e,onChange:t,"aria-label":"basic tabs example",sx:(0,a.Z)((0,a.Z)({},lo.weekIconList),{},{bgcolor:"light"===l?"#21222C":"#FFFFFF"}),children:r.map((function(o){var e=o.day,t=o.weekDay,r=o.weekDayMob;return(0,p.jsx)(to.Z,{sx:(0,a.Z)({},lo.iconDayTask),icon:(0,p.jsxs)(n.Z,{sx:(0,a.Z)({},lo.dayTitle),children:[(0,p.jsx)(n.Z,{sx:(0,a.Z)((0,a.Z)({},lo.desk),{},{color:"light"===l?"#FAFAFA30":"#343434"}),children:t}),(0,p.jsx)(n.Z,{sx:(0,a.Z)((0,a.Z)({},lo.mobile),{},{color:"light"===l?"#FAFAFA30":"#343434"}),children:r}),(0,p.jsx)(n.Z,{className:"numberDay",color:"light"===l?"#FFFFFF":"#343434",children:e})]})},t)}))})})}W().extend(no());var lo={iconDayTask:{paddingInline:"0","&.Mui-selected":{color:"#343434",border:"none"},"& .numberDay":{width:"20px",height:"20px",marginTop:"6px"},"&.Mui-selected .numberDay":{backgroundColor:"#3E85F3",borderRadius:"6px",color:"#FFFFFF"},"&":{width:"calc(100% / 7)"},"& span":{display:"none",color:"#3E85F3"}},dayTitle:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:"Inter"},desk:{display:{xs:"none",md:"block"}},mobile:{display:{md:"none"}},weekIconList:{".MuiTabs-indicator":{display:"none"},".MuiButtonBase-root":{minWidth:{xs:"calc(100%/7)",md:"calc((100% - 64px) / 7)"},boxSizing:"border-box"},bgcolor:"#FFFFFF",borderRadius:"8px",boxSizing:"border-box",width:"100%"}};function io(o){var e=o.mode,t=(0,R.UO)(),a=(0,x.useState)((function(){return t.day})),l=(0,r.Z)(a,2),i=l[0],d=l[1],s=x.useState(null),c=(0,r.Z)(s,2),u=c[0],f=c[1],g=(0,m.I0)(),h=(0,R.s0)(),F=(0,x.useState)(null),b=(0,r.Z)(F,2),k=b[0],Z=b[1];(0,x.useEffect)((function(){i!==t.day&&d(t.day)}),[i,t.day]);var y=(0,x.useMemo)((function(){var o=[],e=0,t=7;0===W()(i).weekday()&&(e=-7,t=0);for(var r=0;e<t;e++){var n=W()(i).weekday(e+1);o[r]={day:n.$D,weekDay:String(n.$d).slice(0,3),weekDayMob:String(n.$d).slice(0,1),date:n.$d,dayFormat:W()(n.$d).format("YYYY-MM-DD")},r++}return o}),[i]);function j(o){return o<10?"0".concat(o):o}(0,x.useEffect)((function(){if(y){var o=y.findIndex((function(o){return o.dayFormat===i}));f(o)}}),[i,y]),(0,x.useEffect)((function(){null===u&&f(0===W()(i).day()?6:W()(i).day()-1)}),[i,u]),(0,x.useEffect)((function(){var o=W()(y[0].dayFormat).week();y[0]&&o!==k&&(g((0,C.yf)({years:new Date(y[0].date).getFullYear(),month:j(new Date(y[0].date).getMonth()+1),day:j(new Date(y[0].date).getDate())})),Z(o))}),[g,k,y]);if(i&&null!==u&&y)return(0,p.jsxs)(n.Z,{sx:so.boxDay,children:[(0,p.jsx)(n.Z,{sx:{boxSizing:"border-box"},children:(0,p.jsx)(n.Z,{sx:{borderColor:"divider"},children:(0,p.jsx)(ao,{value:u,weekend:y,mode:e,handleChange:function(o,e){f(e),h("/main/calendar/day/".concat(y[e].dayFormat))}})})}),(0,p.jsx)(Q,{weekend:y,mode:e,value:u})]})}var so={boxDay:{width:{xs:"100%",md:"calc(100vw - 64px)",lg:"calc(100%)"},height:{xs:"calc(100vh - 64px - 38px)",md:"calc(100vh - 64px - 40px)",lg:"calc(100%)"},margin:"0",mt:"-10px"}}},59692:function(o,e,t){t.d(e,{D:function(){return r},a:function(){return n}});var r={mainTextColor:"#111111",secondaryTextColor:"#616161",accentTextColor:"#3e85f3",activeSelectionColor:"#e3f3ff",btnTextColor:"#ffffff",inactiveBtnTextColor:"#84828a",calendarDateColor:"#343434",calendarCellColor:"#FFFFFF",accentColor:"#3e85f3",hoverColor:"#7aaff3",columnBackGroundColor:"#FFFFFF",modalShadow:"#1111111A",popUpBackGroundColor:"#FFFFFF",popUpInputTextColor:"#616161",popUpLabelTextColor:"#343434CC",popUpInputBgrColor:"#F6F6F6",mainBackgroundColor:"#ffffff",authBackgroundColor:"#dcebf7",outletBackgroundColor:"#f7f6f9",sidebarBackgroundColor:"#ffffff",accentBackgroundColor:"#3e85f3",modalBorder:"#DCE3E5CC",taskHighColor:"#ea3d65",taskMedColor:"#f3b249",taskLowColor:"#72c2f8",taskCardColor:"#dce3e5cc",inputFieldColor:"#f6f6f6",taskCancelColor:"#efefef",inputFieldTextColor:"#616161",iconColor:"#3E85F3",priorityHighColor:"#ffd2dd",priorityMedColor:"#fcf0d4",priorityLowColor:"#ceeefd",scrollbarColor:"#e7e5e5",scrollbarBackgroundColor:"#f2f2f2",frameBorderColor:"#e1e7e9",navTitleColor:"#7E7D82",strPgBackgroundColor:"#FFFFFF"},n={mainTextColor:"#ffffff",secondaryTextColor:" #FFFFFF",accentTextColor:"#ffffff",btnTextColor:"#ffffff",inactiveBtnTextColor:"#EFEFEF",activeSelectionColor:"#3e85f3",calendarDateColor:"#ffffff",calendarCellColor:"#21222C",accentColor:"#3e85f3",labelColor:"#FAFAFA4D",iconColor:"#FFFFFF",hoverColor:"#7aaff3",columnBackGroundColor:"#21222C",modalShadow:"#1111111A",popUpBackGroundColor:"#171820",popUpInputTextColor:"#FFFFFF",popUpLabelTextColor:"#FFFFFF",popUpInputBgrColor:"#171820",popUpCancelBtnColor:"#EFEFEF",popUpAddBtnColor:"#3E85F3",mainBackgroundColor:"#21222c",authBackgroundColor:"#dcebf7",outletBackgroundColor:"#171820",sidebarBackgroundColor:"#13151a",accentBackgroundColor:"#3e85f3",modalBorder:"#FFFFFF26",taskHighColor:"#ea3d65",taskMedColor:"#f3b249",taskLowColor:"#72c2f8",taskCardColor:"#171820",inputFieldColor:"#171820",taskCancelColor:"#efefef",inputFieldTextColor:"#FFFFFF",inputBorderColor:"#FFFFFF26",placeholderColor:"#DCE3E5",priorityHighColor:"#ffd2dd",priorityMedColor:"#fcf0d4",priorityLowColor:"#ceeefd",scrollbarColor:"#2d3037",scrollbarBackgroundColor:"#21222c",frameBorderColor:"#42434c"}}}]);
//# sourceMappingURL=294.27b40fa0.chunk.js.map